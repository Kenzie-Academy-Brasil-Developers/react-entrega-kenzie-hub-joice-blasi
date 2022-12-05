import styled from "styled-components";

export const StyledDiv = styled.div`
  height: 100%;
  background-color: var(--grey-4);

  header {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
  }

  header > img {
    margin-bottom: 7px;
  }

  .default {
    background-color: var(--grey-2);
    color: var(--grey-0);
    padding: 9px 20px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    font-size: 12px;
  }

  .default:hover {
    background-color: var(--grey-1);
    transition: 0.4s;
  }
`;
