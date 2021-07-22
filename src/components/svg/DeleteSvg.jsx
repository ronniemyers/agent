import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)`
  color: var(--font-color);
  :hover {
    color: var(--field-color);
  }
`;

export const DeleteSvg = ({ deleteSvg }) => (
  <Svg viewBox="0 0 384 384" className={deleteSvg}>
    <path
      d="M64 341.33c0 23.574 19.093 42.667 42.667 42.667h170.67c23.573 0 42.666-19.093 42.666-42.667v-256h-256v256zM266.67 21.333L245.33 0H138.67l-21.34 21.333H42.667V64H341.33V21.333z"
      fill="currentColor"
    />
  </Svg>
);
