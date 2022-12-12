import styled from "styled-components";

export const StyledLoading = styled.div`
  min-height: fit-content;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-4);

  img {
    width: 50px;
    height: 50px;
    animation: rotating 2s infinite;
  }

  @keyframes rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
