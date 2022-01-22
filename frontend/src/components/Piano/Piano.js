import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INPUT_CHANGED, WRONG_CHANGED } from '../../redux/constants';
import { StyledPiano, Key } from './Piano.styled';
const notes = [
  {
    id: 0,
    name: 'C',
    color: 'white',
  },
  {
    id: 1,
    name: 'C#',
    color: 'black',
  },
  {
    id: 2,
    name: 'D',
    color: 'white',
  },
  {
    id: 3,
    name: 'D#',
    color: 'black',
  },
  {
    id: 4,
    name: 'E',
    color: 'white',
  },
  {
    id: 5,
    name: 'F',
    color: 'white',
  },
  {
    id: 6,
    name: 'F#',
    color: 'black',
  },
  {
    id: 7,
    name: 'G',
    color: 'white',
  },
  {
    id: 8,
    name: 'G#',
    color: 'black',
  },
  {
    id: 9,
    name: 'A',
    color: 'white',
  },
  {
    id: 10,
    name: 'A#',
    color: 'black',
  },
  {
    id: 11,
    name: 'B',
    color: 'white',
  },
  {
    id: 12,
    name: 'C',
    octave: '2',
    color: 'white',
  },
];
const Piano = ({ input, scale_notes }) => {
  const state = useSelector((state) => state);
  const [hint, setHint] = useState(false);
  const [wrongNote, setWrongNote] = useState('');
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
    checkNote(input);
  }, [input]);

  console.log('wrong', wrongNote);
  console.log('correctId', state.correctId);
  return (
    <StyledPiano>
      <div className="container">
        <a onClick={() => showHint()}>Show hint</a>
        <div>
          {notes.map((note) => {
            return (
              <Key
                key={note.id}
                isWrong={note.name == wrongNote}
                isCorrect={hint && scale_notes.includes(note.name)}
                className={`${note.color} ${input == note.name ? 'active' : ''}`}
              >
                <span>{note.name}</span>
              </Key>
            );
          })}
        </div>
      </div>
    </StyledPiano>
  );
};

export default Piano;
