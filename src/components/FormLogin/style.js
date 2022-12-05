import styled from "styled-components";

export const StyledFormLogin = styled.form`
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

  .default {
    background-color: var(--grey-2);
    color: var(--grey-0);
    width: 100%;
    padding: 9px 0;
    border-radius: 4px;
    text-decoration: none;
    display: block;
    text-align: center;
  }

  .default:hover {
    background-color: var(--grey-1);
    transition: 0.4s;
  }
`;
