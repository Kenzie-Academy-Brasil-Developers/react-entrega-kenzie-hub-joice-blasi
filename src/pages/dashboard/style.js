import styled from "styled-components";

export const StyledDiv = styled.div`
  height: 100vh;
  background-color: var(--grey-4);

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

  main {
    padding: 20px 0;
  }

  .title {
    margin-bottom: 20px;
  }

  @media (min-width: 500px) {
    header {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
