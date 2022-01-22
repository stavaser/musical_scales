import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GenerateScale } from '../../redux/actions';
import { KEY_CHANGED, SCALE_CHANGED } from '../../redux/constants';
import { StyledSelect } from './Select.styled';
const KEYS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const SCALES = ['Major', 'Minor (Natural)', 'Minor (Harmonic)', 'Minor (Melodic)'];

const Select = () => {
  const [activeScale, setActiveScale] = useState(false);
  const [ActiveKey, setActiveKey] = useState(false);

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
        {SCALES.map((scale) => {
          return (
            <button
              onClick={() => {
                changeScale(scale);
                setActiveScale(scale);
              }}
              className={activeScale == scale ? 'active' : ''}
            >
              {scale}
            </button>
          );
        })}
      </div>
      <div className="keys">
        {KEYS.map((key) => {
          return (
            <button
              key={key}
              onClick={() => {
                changeKey(key);
                setActiveKey(key);
              }}
              className={ActiveKey == key ? 'active' : ''}
            >
              {key}
            </button>
          );
        })}
      </div>
    </StyledSelect>
  );
};

export default Select;
