import styled from 'styled-components';

export const StyledPiano = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;

  .keyandnote {
    align-self: center;
  }

  .keyboard {
    font-size: 12px;
    font-weight: 400;
    display: inline-table;
    padding: 24px;
    border-radius: 20px 20px 40px 40px;
    background: orange;
  }
  .keyboard button {
    outline: none;
    transition: all 100ms ease-out;
    margin: 0px;
    padding: 0px;
    border: none;
    color: rgba(26, 83, 92, 0.5);
    border-radius: 20px 20px 40px 40px;
    cursor: pointer;
    font-weight: bold;
  }
  .keyboard button.white {
    background: #f7fff7;
    width: 80px;
    height: 280px;
    box-shadow: inset #e6f1e6 0 -10px 0 0;
    padding-top: 160px;
    margin: 1px;
  }
  .keyboard button.white#active {
    box-shadow: inset #e6f1e6 0 -2px 0 0;
    transform: translate(0, 4px);
    height: -8px;
  }
  .keyboard button.black {
    background: #1a535c;
    width: 64px;
    height: 180px;
    z-index: 99;
    position: absolute;
    transform: translate(-32px, -20px);
    box-shadow: inset #073b4c 0 -10px 0 0, var(--keyboard-mode) 0 0 0 2px;
  }
  .keyboard button.black#active {
    transform: translate(-32px, -4px);
    height: -8px;
    box-shadow: inset #073b4c 0 -2px 0 0, var(--keyboard-mode) 0 0 0 2px;
  }
`;
