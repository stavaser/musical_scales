import React, { useState, useEffect } from 'react';
import { WebMidi } from 'webmidi';
import Soundfont from 'soundfont-player';
import './App.css';
import Piano from './components/Piano/Piano';

const App = () => {
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState('');
  const [note, setNote] = useState('');
  const c_major = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  useEffect(() => {
    WebMidi.enable()
      .then(() => onEnabled())
      .catch((err) => alert(err));
  }, []);

  const onEnabled = () => {
    WebMidi.inputs.forEach((input) => {
      input.addListener('noteon', (e) => {
        console.log(e);
        setNote(e.note.name + (e.note.accidental || ''));
        // let output = WebMidi.outputs[0];
        // output.playNote(e.note);
        playNote(e.note.identifier);

        // setInput(...input, e.note.name + (e.note.accidental || ''));
      });
    });
  };

  var audioContext;

  const playNote = (note) => {
    if (!audioContext) {
      audioContext = new AudioContext();
    } else {
      console.log(note);
      Soundfont.instrument(audioContext, 'acoustic_grand_piano').then(function (piano) {
        piano.play(note);
      });
    }
  };

  console.log(input);

  return (
    <div>
      <Piano input={note} />
    </div>
  );
};

export default App;
