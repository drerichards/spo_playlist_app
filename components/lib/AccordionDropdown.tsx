import React, { ReactNode, useState } from "react";

interface AccordionDropdownProps {
  title: string;
  backgroundColor: string;
  children: ReactNode;
}

const AccordionDropdown = ({
  title,
  backgroundColor,
  children,
}: AccordionDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleAccordion}
        className={`w-full text-left mb-2 ${backgroundColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      >
        {title}
      </button>
      <div
        className={`transition-height duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden`}
      >
        {children}
      </div>
    </>
  );
};

export default AccordionDropdown;
