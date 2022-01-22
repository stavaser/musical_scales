import { GenerateScale } from './actions';
import {
  INPUT_CHANGED,
  KEY_CHANGED,
  NOTES_CHANGED,
  OCTAVE_CHANGED,
  SCALE_CHANGED,
  WRONG_CHANGED,
} from './constants';

const initialState = {
  scale: 'major',
  key: 'C',
  notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
  currentNote: '',
  correctId: -1,
  currentId: -1,
  input: '',
  octave: -1,
  new_octave: false,
  backwards: false,
};

const mainReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SCALE_CHANGED:
      return {
        ...state,
        currentId: 0,
        correctId: 0,
        backwards: false,
        notes: GenerateScale(state.key, payload),
        scale: payload,
      };
    case KEY_CHANGED:
      return {
        ...state,
        currentId: 0,
        correctId: 0,
        backwards: false,
        notes: GenerateScale(payload, state.scale),
        key: payload,
      };
    case INPUT_CHANGED:
      if (state.backwards && state.correctId == 0) {
        return { ...state, backwards: false, correctId: 1, currentId: 1 };
      }
      if (state.backwards) {
        var current = (state.correctId + 1) % 9;
        if (state.correctId == 0) current = 0;
        var index = (state.correctId - 1) % 8;
      } else {
        var index = (state.correctId + 1) % 8;
        var current = (state.correctId + 1) % 9;
      }
      return { ...state, currentId: current, correctId: index, currentNote: payload };
    case WRONG_CHANGED:
      var index = state.correctId;
      var current = state.currentId;
      if (state.backwards) {
        index += 1;
        current += 1;
      } else {
        index -= 1;
        current -= 1;
      }
      return { ...state, currentId: current, correctId: index };
    case OCTAVE_CHANGED:
      if (state.correctId == 7) {
        return { ...state, backwards: true, new_octave: true };
      }

      if (state.octave != -1 && payload != state.octave) {
        console.log(OCTAVE_CHANGED);
        return {
          ...state,
          octave: payload,
          new_octave: true,
        };
      }
      return { ...state, octave: payload, new_octave: false };
    default:
      return state;
  }
};

export default mainReducer;
