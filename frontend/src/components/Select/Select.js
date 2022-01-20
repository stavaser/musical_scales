import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { KEY_CHANGED, SCALE_CHANGED } from '../../redux/constants';
import { StyledSelect } from './Select.styled';
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const Select = () => {
  const scale = useSelector((state) => state.scale);
  const key = useSelector((state) => state.key);
  const dispatch = useDispatch();

  const changeKey = (key) => {
    dispatch({
      type: KEY_CHANGED,
      payload: key,
    });
  };
  const changeScale = (scale) => {
    dispatch({
      type: SCALE_CHANGED,
      payload: scale,
    });
  };

  return (
    <StyledSelect>
      <div className="scale">
        <button onClick={() => changeScale('major')}>Major</button>
        <button onClick={() => changeScale('minor')}>Minor</button>
      </div>
      <div className="keys">
        {NOTES.map((note) => {
          return (
            <button key={note} onClick={() => changeKey(note)}>
              {note}
            </button>
          );
        })}
      </div>
    </StyledSelect>
  );
};

export default Select;
