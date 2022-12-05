import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;

  ${({ styleButton }) => {
    if (styleButton === "primary") {
      return css`
        background-color: var(--color-primary);
        color: #ffffff;
        width: 100%;
        padding: 9px 0;
        border-radius: 4px;

        :hover {
          background-color: var(--color-primary-focus);
          transition: 0.4s;
        }

        :disabled {
          background-color: var(--color-primary-negative);
          transition: 0.4s;
        }
      `;
    } else if (styleButton === "default") {
      return css`
        background-color: var(--grey-2);
        color: #ffffff;
        width: 100%;
        padding: 9px 0;
        border-radius: 4px;

        :hover {
          background-color: var(--grey-1);
          transition: 0.4s;
        }
      `;
    }
  }}
`;
