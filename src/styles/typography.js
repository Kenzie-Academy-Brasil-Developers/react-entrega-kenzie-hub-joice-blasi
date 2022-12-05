import styled, { css } from "styled-components";
import { BaseText } from "./components/BaseText";

export const StyledText = styled(BaseText)`
  color: ${({ color }) => color};

  ${({ font }) => {
    switch (font) {
      case "title1":
        return css`
          font-weight: 700;
          font-size: 1.125rem;
        `;
      case "title2":
        return css`
          font-weight: 600;
          font-size: 1rem;
        `;
      case "title3":
        return css`
          font-weight: 700;
          font-size: 0.875rem;
        `;
      case "headline":
        return css`
          font-weight: 400;
          font-size: 0.75rem;
        `;
      case "headline-bold":
        return css`
          font-weight: 600;
          font-size: 0.75rem;
        `;
      case "headline-italic":
        return css`
          font-style: italic;
          font-size: 0.75rem;
        `;
      default:
        console.log("");
    }
  }}
`;
