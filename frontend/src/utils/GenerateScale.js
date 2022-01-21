const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const MAJOR_SCALE = [0, 2, 4, 5, 7, 9, 11];
const MINOR_NATURAL_SCALE = [0, 2, 3, 5, 7, 8, 10];

const rotate = (offset = 0) => {
  return [...NOTES.slice(offset, NOTES.length), ...NOTES.slice(0, offset)];
};

const GenerateScale = (key, scale) => {
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

export default GenerateScale;
