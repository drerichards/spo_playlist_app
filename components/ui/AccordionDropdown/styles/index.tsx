import { ReactNode } from "react";
import styled from "styled-components";

interface AccordionButtonProps {
  backgroundColor: string;
  backgroundColorHover: string;
}

interface AccordionContentProps {
  isOpen: boolean;
}

interface AccordionInnerContentProps {
  noPaddingTop?: boolean;
}

export const AccordionButton = styled.button<AccordionButtonProps>`
  width: 100%;
  text-align: left;
  background-color: ${(props) => props.backgroundColorHover};
  color: white;
  font-weight: bold;
  padding: 0 1rem;
  height: 48px;
  border: none;
  cursor: pointer;
  foc

  &:hover {
    background-color: ${(props) => props.backgroundColorHover};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(164, 202, 254, 0.45);
  }
`;

export const AccordionContent = styled.div<AccordionContentProps>`
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  height: auto;
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  overflow: hidden;
  background: #313131;
`;

export const AccordionInnerContent = styled.div<AccordionInnerContentProps>`
  padding: ${(props) => (props.noPaddingTop ? '0 1rem 1rem 1rem' : '1rem')};
  max-height: 500px;
  overflow: auto;
`;