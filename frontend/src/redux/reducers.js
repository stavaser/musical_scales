import { GenerateScale } from './actions';
import {
  INPUT_CHANGED,
  KEY_CHANGED,
  NOTES_CHANGED,
  SCALE_CHANGED,
  WRONG_CHANGED,
} from './constants';

const initialState = {
  scale: 'major',
  key: 'C',
  notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
  correctId: -1,
  input: '',
};

const mainReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SCALE_CHANGED:
      return { ...state, correctId: 0, notes: GenerateScale(state.key, payload), scale: payload };
    case KEY_CHANGED:
      return { ...state, correctId: 0, notes: GenerateScale(payload, state.scale), key: payload };
    case INPUT_CHANGED:
      var index = state.correctId + 1;
      if (state.correctId >= 7) {
        index = 0;
      }
      return { ...state, correctId: index };
    case WRONG_CHANGED:
      var index = state.correctId;
      if (index < 0) {
        index = 0;
      }
      index -= 1;
      return { ...state, correctId: index };
    default:
      return state;
  }
};

export default mainReducer;
