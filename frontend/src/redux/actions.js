import {
  KEY_CHANGED,
  MAJOR_SCALE,
  MINOR_NATURAL_SCALE,
  NOTES,
  NOTES_CHANGED,
  SCALE_CHANGED,
} from './constants';

const rotate = (offset = 0) => {
  return [...NOTES.slice(offset, NOTES.length), ...NOTES.slice(0, offset)];
};

export const ChangeScale = (scale) => async (dispatch) => {
  dispatch({
    type: SCALE_CHANGED,
    payload: scale,
  });
};

export const ChangeKey = (key) => async (dispatch) => {
  dispatch({
    type: KEY_CHANGED,
    payload: key,
  });
};

export const GenerateScale = (key, scale) => {
  console.log(key, scale);
  var result = [];
  var index = NOTES.indexOf(key);
  var chromatic = rotate(index);
  if (scale == 'major') {
    for (let i = 0; i < MAJOR_SCALE.length; i++) {
      result.push(chromatic[MAJOR_SCALE[i]]);
    }
    result.push(key);
  } else if (scale == 'minor') {
    for (let i = 0; i < MAJOR_SCALE.length; i++) {
      result.push(chromatic[MINOR_NATURAL_SCALE[i]]);
    }
    result.push(key);
  }

  return result;
};
