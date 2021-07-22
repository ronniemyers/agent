import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)`
  color: var(--font-color);
  :hover {
    color: var(--field-color);
  }
`;

export const EditSvg = ({ editSvg }) => (
  <Svg viewBox="0 0 30 30" fill="none" className={editSvg}>
    <path
      d="M0 23.75V30h6.25l18.445-18.444-6.25-6.251L0 23.749zM29.512 4.38L25.62.488a1.67 1.67 0 00-2.358 0l-3.05 3.05 6.25 6.25 3.05-3.05a1.67 1.67 0 000-2.358z"
      fill="currentColor"
    />
  </Svg>
);
