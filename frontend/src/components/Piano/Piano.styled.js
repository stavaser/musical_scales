import styled from 'styled-components';
const white = '#f7fff7';
const white_shadow = '#e6f1e6';

const black = '#4e2878';
const black_shadow = '#2b0e4a';

const correct_white = '#a1eda1';
const correct_white_shadow = '#75bf75';

const wrong_white = '#ff808e';
const wrong_white_shadow = '#c75b67';

const correct_black = '#78c478';
const correct_black_shadow = '#579457';

const wrong_black = '#782828';
const wrong_black_shadow = '#4a1010';

export const StyledPiano = styled.div`
  display: flex;
  justify-content: center;

  .container {
    align-self: center;
    background: orange;
    border-radius: 20px;
    padding: 40px;
    padding-top: 20px;
  }
  .container a {
    display: block;
    margin-bottom: 20px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
  }
  .container a:hover {
    text-decoration: underline;
  }
`;

export const Key = styled.button`
  @keyframes twinkle_white {
    from {
      background: #f7fff7;
    }
    to {
      background: #a1eda1;
    }
  }

  outline: none;
  border: none;
  margin: 0px;
  padding: 0px;
  color: rgba(26, 83, 92, 0.5);
  border-radius: 10px 10px 20px 20px;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
  transition: 100ms ease-out;

  &.white {
    background: ${({ isCorrect }) => (isCorrect ? correct_white : white)};
    background: ${({ isWrong }) => isWrong && wrong_white};
    width: 80px;
    height: 280px;
    box-shadow: inset ${({ isCorrect }) => (isCorrect ? correct_white_shadow : white_shadow)} 0 -16px
      0 0;
    box-shadow: ${({ isWrong }) =>
      isWrong &&
      `inset ${wrong_white_shadow} 0 -16px
      0 0`};

    padding-top: 160px;
    margin: 1px;
  }
  &.white.active {
    box-shadow: inset ${({ isCorrect }) => (isCorrect ? correct_white_shadow : white_shadow)} 0 -8px
      0 0;
    box-shadow: ${({ isWrong }) =>
      isWrong &&
      `inset ${wrong_white_shadow} 0 -8px
      0 0`};

    transform: translateY(5px);
    height: -8px;
  }
  &.black {
    background: ${({ isCorrect }) => (isCorrect ? correct_black : black)};
    background: ${({ isWrong }) => isWrong && wrong_black};

    width: 64px;
    height: 180px;
    z-index: 99;
    position: absolute;
    transform: translate(-32px, -8px);
    box-shadow: inset ${({ isCorrect }) => (isCorrect ? correct_black_shadow : black_shadow)} 0 -16px
      0 0;
    box-shadow: ${({ isWrong }) =>
      isWrong &&
      `inset ${wrong_black_shadow} 0 -16px
      0 0`};
  }
  &.black span {
    position: absolute;
    transform: translate(-18px, -20px);
    color: rgba(255, 255, 255, 0.5);
    bottom: 0;
  }
  &.black.active {
    transform: translate(-32px, -4px);
    height: -8px;
    box-shadow: inset ${({ isCorrect }) => (isCorrect ? correct_black_shadow : black_shadow)} 0 -8px
      0 0;
    box-shadow: ${({ isWrong }) =>
      isWrong &&
      `inset ${wrong_black_shadow} 0 -8px
      0 0`};
  }
`;
