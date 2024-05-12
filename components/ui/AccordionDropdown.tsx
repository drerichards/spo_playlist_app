import React, { ReactNode, useState } from "react";

interface AccordionDropdownProps {
  title: string | ReactNode;
  backgroundColor: string;
  bannerContent: ReactNode;
  children: ReactNode;
}

const AccordionDropdown = ({
  title,
  backgroundColor,
  bannerContent,
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
        style={{ height: "48px" }}
        className={`w-full text-left ${backgroundColor} hover:bg-purple-700  text-white font-bold h-12  px-4 focus:outline-none focus:shadow-outline`}
      >
        <span className="flex justify-between items-center">
          {title}
          {bannerContent}
        </span>
      </button>
      <div
        className={`duration-500 ease-in-out ${
          isOpen ? "max-h-108 h-108 bg-theme-black-light" : "h-0 max-h-0"
        } overflow-hidden`}
      >
        <div className="overflow-auto max-h-108 p-4">{children}</div>
      </div>
    </>
  );
};

export default AccordionDropdown;
