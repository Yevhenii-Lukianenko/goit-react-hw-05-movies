import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  padding-left: 12px;
  height: 35px;
  width: 270px;
  border-radius: 6px;
  border: none;
  outline: none;
`;

export const SubmitBtn = styled.button`
  margin-left: 20px;
  height: 35px;
  width: 75px;
  color: #bcbcbc;
  background-color: #4c4c4c;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    color: #292929;
    background-color: tomato;
  }
`;
