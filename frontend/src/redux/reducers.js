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
  correctId: -1,
  currentId: -1,
  input: '',
  octave: -1,
  new_octave: false,
};

const mainReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SCALE_CHANGED:
      return {
        ...state,
        currentId: 0,
        correctId: 0,
        notes: GenerateScale(state.key, payload),
        scale: payload,
      };
    case KEY_CHANGED:
      return {
        ...state,
        currentId: 0,
        correctId: 0,
        notes: GenerateScale(payload, state.scale),
        key: payload,
      };
    case INPUT_CHANGED:
      var index = (state.correctId + 1) % 8;
      var current = (state.correctId + 1) % 9;
      return { ...state, currentId: current, correctId: index };
    case WRONG_CHANGED:
      var index = state.correctId;
      if (index < 0) {
        index = 0;
      }
      index -= 1;
      return { ...state, currentId: state.currentId - 1, correctId: index };
    case OCTAVE_CHANGED:
      if (state.octave != -1 && payload != state.octave) {
        console.log(OCTAVE_CHANGED);
        return { ...state, octave: payload, new_octave: true };
      }
      return { ...state, octave: payload, new_octave: false };
    default:
      return state;
  }
};

export default mainReducer;
