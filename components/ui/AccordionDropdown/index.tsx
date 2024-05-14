import React, { ReactNode, useState } from "react";
import {
  AccordionButton,
  AccordionContent,
  AccordionInnerContent,
} from "./styles";

interface AccordionDropdownProps {
  title: Genre | ReactNode;
  backgroundColor: string;
  backgroundColorHover: string;
  bannerContent?: ReactNode;
  noPaddingTop?: boolean;
  children: ReactNode;
}

const AccordionDropdown = ({
  title,
  backgroundColor,
  backgroundColorHover,
  bannerContent,
  noPaddingTop,
  children,
}: AccordionDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AccordionButton
        onClick={toggleAccordion}
        backgroundColor={backgroundColor}
        backgroundColorHover={backgroundColorHover}
      >
        <span className="flex justify-between items-center">
          {title}
          {bannerContent}
        </span>
      </AccordionButton>
      <AccordionContent isOpen={isOpen}>
        <AccordionInnerContent noPaddingTop={noPaddingTop}>
          {children}
        </AccordionInnerContent>
      </AccordionContent>
    </>
  );
};

export default AccordionDropdown;
