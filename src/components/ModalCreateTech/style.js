import styled from "styled-components";

export const StyledModal = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 270px;
    height: fit-content;
    border-radius: 4px;
    background-color: var(--grey-3);
  }

  header {
    background-color: var(--grey-2);
    height: 40px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }

  header > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--grey-2);
    padding: 0 10px;
  }

  .close-button {
    width: fit-content;
    padding: 8px;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
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

  .error {
    color: var(--negative);
    font-family: "Inter", sans-serif;
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 12px;
  }

  @media (min-width: 390px) {
    div {
      width: 370px;
    }
  }
`;
