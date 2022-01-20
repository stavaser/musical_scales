const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const MAJOR_SCALE = [0, 2, 4, 5, 7, 9, 11];
// const MAJOR_SCALE = [1, 1, 0.5, 1, 1, 1, 0.5];

const rotate = (offset = 0) => {
  return [...NOTES.slice(offset, NOTES.length), ...NOTES.slice(0, offset)];
};

const GenerateScale = (key, scale) => {
  var result = [];
  var index = NOTES.indexOf(key);
  if (scale == 'major') {
    var chromatic = rotate(index);
    for (let i = 0; i < MAJOR_SCALE.length; i++) {
      result.push(chromatic[MAJOR_SCALE[i]]);
    }
    result.push(key);
    console.log(result);
  }
  return result;
};

export default GenerateScale;
