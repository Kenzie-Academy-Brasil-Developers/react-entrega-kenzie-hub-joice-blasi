import styled from "styled-components";

export const StyledInput = styled.fieldset`
  border: none;
  margin-bottom: 18px;

  label {
    display: block;
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-0);
    margin-bottom: 8px;
  }

  input {
    height: 38px;
    width: 100%;
    background-color: var(--grey-2);
    border: 0.98px solid var(--grey-2);
    border-radius: 4px;
    padding-left: 13px;
    color: var(--grey-0);
  }

  input:focus {
    border: 0.98px solid var(--grey-0);
  }

  input::placeholder {
    color: var(--grey-1);
  }
`;
