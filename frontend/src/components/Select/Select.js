import React from 'react';
import { StyledSelect } from './Select.styled';
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const Select = () => {
  return (
    <StyledSelect>
      <div className="scale">
        <button>Major</button>
        <button>Minor</button>
      </div>
      <div className="keys">
        {NOTES.map((note) => {
          return <button>{note}</button>;
        })}
      </div>
    </StyledSelect>
  );
};

export default Select;
