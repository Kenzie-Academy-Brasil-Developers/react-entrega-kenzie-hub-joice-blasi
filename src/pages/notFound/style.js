import styled from "styled-components";

export const StyledNotFound = styled.div`
  height: 100vh;
  background-color: var(--grey-4);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .title {
    margin-bottom: 25px;
  }

  .paragraphy {
    margin-bottom: 40px;
  }

  .button-back {
    background-color: var(--color-primary);
    color: #ffffff;
    padding: 9px 50px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    color: var(--grey-0);
  }

  .button-back:hover {
    background-color: var(--color-primary-focus);
    transition: 0.4s;
  }
`;
