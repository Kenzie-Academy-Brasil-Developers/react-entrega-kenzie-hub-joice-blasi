import styled from "styled-components";

export const StyledLoading = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

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
