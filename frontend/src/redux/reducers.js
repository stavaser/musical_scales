import { KEY_CHANGED, SCALE_CHANGED } from './constants';

const initialState = { scale: 'major', key: 'C' };

const mainReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SCALE_CHANGED:
      return { ...state, scale: payload };
    case KEY_CHANGED:
      return { ...state, key: payload };
    default:
      return state;
  }
};

export default mainReducer;
