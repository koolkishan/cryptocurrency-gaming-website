import React from "react";
import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";
export default function Button(props) {
  let { icon, text } = props;
  if (icon === undefined) icon = <BsArrowRightShort />;
  return (
    <Btn>
      {icon}
      {text}
    </Btn>
  );
}

const Btn = styled.button`
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
  cursor: pointer;
  svg {
    font-size: 1.1rem;
  }
`;
