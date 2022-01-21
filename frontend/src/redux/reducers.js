import { GenerateScale } from './actions';
import { KEY_CHANGED, NOTES_CHANGED, SCALE_CHANGED } from './constants';

const initialState = { scale: 'major', key: 'C', notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'] };

const mainReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SCALE_CHANGED:
      return { ...state, notes: GenerateScale(state.key, payload), scale: payload };
    case KEY_CHANGED:
      return { ...state, notes: GenerateScale(payload, state.scale), key: payload };
    default:
      return state;
  }
};

export default mainReducer;
