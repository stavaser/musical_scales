import styled from 'styled-components';

export const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .scale,
  .keys {
    margin-bottom: 20px;
  }
  .scale button {
    /* width: 100%; */
  }
  button {
    outline: none;
    transition: all 100ms ease-out;
    margin: 0px;
    padding: 0px;
    border: none;
    color: rgba(26, 83, 92, 0.5);
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    padding: 20px;
    background: #f7fff7;
    box-shadow: inset #e6f1e6 0 -10px 0 0;
    margin-left: 2px;
    margin-top: 2px;
  }

  button:active {
    transform: translateY(5px);
    background-color: #ebf2eb;
    box-shadow: inset #dce0dc 0 -5px 0 0;
  }
`;
