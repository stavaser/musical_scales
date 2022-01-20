import React, { useState, useEffect } from 'react';
import { WebMidi } from 'webmidi';
import Soundfont from 'soundfont-player';
import './App.css';
import Piano from './components/Piano/Piano';
import AC from './contexts/AudioContext';
import autoCorrelate from './utils/AutoCorrelate';
import { noteFromPitch, centsOffFromPitch, getDetunePercent } from './utils/Helpers';
import GenerateScale from './utils/GenerateScale';
import Select from './components/Select/Select';
const noteStrings = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const audioCtx = AC.getAudioContext();
const analyserNode = AC.getAnalyser();
const buflen = 2048;
var buf = new Float32Array(buflen);

const App = () => {
  const [source, setSource] = useState(null);
  const [started, setStart] = useState(false);
  const [pitchNote, setPitchNote] = useState('C');
  const [pitchScale, setPitchScale] = useState('4');
  const [pitch, setPitch] = useState('0 Hz');
  const [detune, setDetune] = useState('0');
  const [notification, setNotification] = useState(false);

  const [input, setInput] = useState([]);
  const [output, setOutput] = useState('');
  const [note, setNote] = useState('');
  const [key, setKey] = useState('');
  const [scale, setScale] = useState('');
  const c_major = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  const updatePitch = (time) => {
    analyserNode.getFloatTimeDomainData(buf);
    var ac = autoCorrelate(buf, audioCtx.sampleRate);
    if (ac > -1) {
      let note = noteFromPitch(ac);
      let sym = noteStrings[note % 12];
      let scl = Math.floor(note / 12) - 1;
      let dtune = centsOffFromPitch(ac, note);
      setPitch(parseFloat(ac).toFixed(2) + ' Hz');
      setPitchNote(sym);
      setPitchScale(scl);
      setDetune(dtune);
      setNotification(false);
      console.log(note, sym, scl, dtune, ac);
    }
  };

  useEffect(() => {
    if (source != null) {
      source.connect(analyserNode);
    }
    WebMidi.enable()
      .then(() => onEnabled())
      .catch((err) => alert(err));
  }, [source]);

  const onEnabled = () => {
    WebMidi.inputs.forEach((input) => {
      input.addListener('noteon', (e) => {
        console.log(e);
        setNote(e.note.name + (e.note.accidental || ''));
        // let output = WebMidi.outputs[0];
        // output.playNote(e.note);
        playNote(e.note.identifier);
      });
    });
  };

  const start = async () => {
    const input = await getMicInput();

    if (audioCtx.state === 'suspended') {
      await audioCtx.resume();
    }
    setStart(true);
    setNotification(true);
    setTimeout(() => setNotification(false), 5000);
    setSource(audioCtx.createMediaStreamSource(input));
  };

  const stop = () => {
    source.disconnect(analyserNode);
    setStart(false);
  };

  const getMicInput = () => {
    return navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        autoGainControl: false,
        noiseSuppression: false,
        latency: 0,
      },
    });
  };
  setInterval(updatePitch, 1);
  console.log(pitchNote);
  var myAudioContext;

  const playNote = (note) => {
    if (!myAudioContext) {
      myAudioContext = new AudioContext();
    } else {
      // console.log(note);
      Soundfont.instrument(myAudioContext, 'acoustic_grand_piano').then(function (piano) {
        piano.play(note);
      });
    }
  };
  // console.log(GenerateScale('D#', 'major'));
  return (
    <div>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <h1>{pitchNote}</h1>
      <Select />
      <Piano input={note} />
    </div>
  );
};

export default App;
