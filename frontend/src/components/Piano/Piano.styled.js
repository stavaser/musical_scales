import styled from 'styled-components';

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
    background: ${({ isCorrect }) => (isCorrect ? '#a1eda1' : '#f7fff7')};
    width: 80px;
    height: 280px;
    box-shadow: inset ${({ isCorrect }) => (isCorrect ? '#75bf75' : '#e6f1e6')} 0 -16px 0 0;
    padding-top: 160px;
    margin: 1px;
  }
  &.white.active {
    box-shadow: inset ${({ isCorrect }) => (isCorrect ? '#75bf75' : '#e6f1e6')} 0 -8px 0 0;
    transform: translateY(5px);
    height: -8px;
  }
  &.black {
    background: ${({ isCorrect }) => (isCorrect ? '#78c478' : '#4e2878')};
    width: 64px;
    height: 180px;
    z-index: 99;
    position: absolute;
    transform: translate(-32px, -8px);
    box-shadow: inset ${({ isCorrect }) => (isCorrect ? '#579457' : '#2b0e4a')} 0 -16px 0 0;
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
    box-shadow: inset ${({ isCorrect }) => (isCorrect ? '#579457' : '#2b0e4a')} 0 -8px 0 0;
  }
`;
