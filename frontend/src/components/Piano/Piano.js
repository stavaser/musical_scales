import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INPUT_CHANGED, WRONG_CHANGED } from '../../redux/constants';
import { StyledPiano, Key } from './Piano.styled';
const notes = [
  // {
  //   id: 0,
  //   name: 'C',
  //   octave: 0,
  //   color: 'white',
  // },
  {
    id: 1,
    name: 'C#',
    octave: 0,
    color: 'black',
  },
  {
    id: 2,
    name: 'D',
    octave: 0,
    color: 'white',
  },
  {
    id: 3,
    name: 'D#',
    octave: 0,
    color: 'black',
  },
  {
    id: 4,
    name: 'E',
    octave: 0,
    color: 'white',
  },
  {
    id: 5,
    name: 'F',
    octave: 0,
    color: 'white',
  },
  {
    id: 6,
    name: 'F#',
    octave: 0,
    color: 'black',
  },
  {
    id: 7,
    name: 'G',
    octave: 0,
    color: 'white',
  },
  {
    id: 8,
    name: 'G#',
    octave: 0,
    color: 'black',
  },
  {
    id: 9,
    name: 'A',
    octave: 0,
    color: 'white',
  },
  {
    id: 10,
    name: 'A#',
    octave: 0,
    color: 'black',
  },
  {
    id: 11,
    name: 'B',
    octave: 0,
    color: 'white',
  },
  // {
  //   id: 12,
  //   name: 'C',
  //   octave: 1,
  //   color: 'white',
  // },
];
const Piano = ({ input, index, scale_notes }) => {
  const state = useSelector((state) => state);
  const [hint, setHint] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [wrongNote, setWrongNote] = useState('');
  const [nextOctave, setNextOctave] = useState(false);
  const [octave, setOctave] = useState(0);
  const dispatch = useDispatch();
  const showHint = () => {
    setHint(true);
    setTimeout(() => {
      setHint(false);
    }, 300);
    setTimeout(() => {
      setHint(true);
    }, 600);
    setTimeout(() => {
      setHint(false);
    }, 900);
    setTimeout(() => {
      setHint(true);
    }, 1200);
    setTimeout(() => {
      setHint(false);
    }, 1500);
  };

  const checkNote = (input) => {
    dispatch({ type: INPUT_CHANGED });
    if (input != '' && input != scale_notes[state.correctId]) {
      setWrongNote(input);
      dispatch({ type: WRONG_CHANGED });
    }
  };

  useEffect(() => {
    if (wrongNote != '') {
      setWrongNote('');
    }

    checkNote(input.note);
  }, [input]);

  console.log('state.new_octave', state.new_octave);
  return (
    <StyledPiano>
      <div className="container">
        <a onClick={() => showHint()}>Show hint</a>
        <div>
          <Key
            key={0}
            isWrong={'C' == wrongNote && !state.new_octave}
            isCorrect={hint && scale_notes.includes('C')}
            className={`white ${input.note == 'C' ? 'active' : ''}`}
          >
            <span>C</span>
          </Key>

          {notes.map((note) => {
            return (
              <Key
                key={note.id}
                isWrong={note.name == wrongNote}
                isCorrect={hint && scale_notes.includes(note.name)}
                className={`${note.color} ${input.note == note.name ? 'active' : ''}`}
              >
                <span>{note.name}</span>
              </Key>
            );
          })}
          <Key
            key={12}
            isWrong={'C' == wrongNote && state.new_octave}
            isCorrect={hint && scale_notes.includes('C')}
            className={`white ${input.note == 'C' && state.new_octave ? 'active' : ''}`}
          >
            <span>C</span>
          </Key>
        </div>
      </div>
    </StyledPiano>
  );
};

export default Piano;
