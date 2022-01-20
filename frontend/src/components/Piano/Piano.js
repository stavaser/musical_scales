import React from 'react';
import { StyledPiano } from './Piano.styled';
const notes = [
  {
    name: 'C',
    color: 'white',
  },
  {
    name: 'C#',
    color: 'black',
  },
  {
    name: 'D',
    color: 'white',
  },
  {
    name: 'D#',
    color: 'black',
  },
  {
    name: 'E',
    color: 'white',
  },
  {
    name: 'F',
    color: 'white',
  },
  {
    name: 'F#',
    color: 'black',
  },
  {
    name: 'G',
    color: 'white',
  },
  {
    name: 'G#',
    color: 'black',
  },
  {
    name: 'A',
    color: 'white',
  },
  {
    name: 'A#',
    color: 'black',
  },
  {
    name: 'B',
    color: 'white',
  },
];
const Piano = ({ input }) => {
  // console.log(input);
  return (
    <StyledPiano>
      <div className="container">
        <div className="keyandnote">
          <div className="keyboard">
            {notes.map((note) => {
              return (
                <button
                  key={note.name}
                  className={note.color}
                  id={input == note.name ? 'active' : ''}
                >
                  {note.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </StyledPiano>
  );
};

export default Piano;
