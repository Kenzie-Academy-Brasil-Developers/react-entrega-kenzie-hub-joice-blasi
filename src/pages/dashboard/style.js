import styled from "styled-components";

export const StyledDiv = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: var(--grey-4);
  width: 100%;

  nav {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .border {
    height: 1px;
    width: 100%;
    background-color: var(--grey-3);
  }

  header {
    height: fit-content;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .size-button {
    width: fit-content;
    height: 32px;
    padding: 0 18px;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .little-button {
    width: fit-content;
    height: 32px;
    padding: 0 11px;
  }

  main {
    padding: 20px 0;
  }

  .title {
    margin-bottom: 20px;
  }

  ul {
    background-color: var(--grey-3);
    padding: 22px 8px;
    border-radius: 4px;
  }

  li {
    background-color: var(--grey-4);
    margin-bottom: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
  }

  li > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
  }

  li:hover {
    background-color: var(--grey-2);
    cursor: pointer;
    transition: 0.4s;
  }

  .trash {
    display: none;
  }

  @media (min-width: 500px) {
    header {
      flex-direction: row;
      justify-content: space-between;
    }

    .trash {
      display: block;
    }
  }
`;
