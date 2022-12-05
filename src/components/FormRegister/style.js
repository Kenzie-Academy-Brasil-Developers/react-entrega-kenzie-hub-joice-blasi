import styled from "styled-components";

export const StyledFormRegister = styled.form`
  background-color: var(--grey-3);
  border-radius: 4px;
  padding: 34px 18px;

  .title {
    text-align: center;
    margin-bottom: 18px;
  }

  .paragraphy {
    text-align: center;
    margin: 20px auto;
  }

  label {
    display: block;
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-0);
    margin-bottom: 8px;
  }

  select {
    height: 38px;
    width: 100%;
    background-color: var(--grey-2);
    border: 0.98px solid var(--grey-2);
    border-radius: 4px;
    padding-left: 13px;
    color: var(--grey-0);
    margin-bottom: 18px;
    outline: none;
  }

  select:focus {
    border: 0.98px solid var(--grey-0);
  }

  .error {
    color: var(--negative);
    font-family: "Inter", sans-serif;
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 12px;
  }

  .text-button {
    font-weight: 500;
    font-size: 12px;
  }
`;
