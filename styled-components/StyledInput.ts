import styled from "styled-components";

const StyledInput = styled.input`
  height: 41px;
  background: #011221;
  border: 1px solid #1e2d3d;
  border-radius: 8px;
  width: 100%;
  outline: none;
  font-weight: 450;
  font-size: 16px;
  color: white;
  padding-left: 20px;
  margin-top: 7px;
  &:focus {
    outline: 1px solid #607b96;
  }
`;

const BigStyledInput = styled.textarea`
   height: 41px;
  background: #011221;
  border: 1px solid #1e2d3d;
  border-radius: 8px;
  width: 100%;
  height: 160px;
  outline: none;
  font-weight: 450;
  font-size: 16px;
  color: white;
  padding: 20px;
  margin-top: 7px;
  resize: none;
  &:focus {
    outline: 1px solid #607b96;
  }
`;

export  {StyledInput, BigStyledInput};
