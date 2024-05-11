import React, { FC, ReactNode } from "react";

interface ToggleButtonProps {
  isEnabled: boolean;
  handleToggleChange: () => void;
  toggleId: string;
  children: ReactNode;
}
const disabledIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path
      fillRule="evenodd"
      d="M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Zm1.627.566 7.707 7.707a5.501 5.501 0 0 0-7.707-7.707Zm6.646 8.768L3.616 4.677a5.501 5.501 0 0 0 7.707 7.707Z"
      clipRule="evenodd"
    />
  </svg>
);

const ToggleButton: FC<ToggleButtonProps> = ({
  isEnabled,
  handleToggleChange,
  toggleId,
  children,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          id={toggleId}
          name={toggleId}
          className="sr-only"
          checked={isEnabled}
          onChange={handleToggleChange}
          style={{ right: "0" }}
        />
        <label htmlFor={toggleId} className="toggle-label block">
          <span
            className={`block cursor-pointer shadow transform transition-transform ${
              isEnabled ? "translate-x-1/4" : ""
            }`}
          >
            {isEnabled ? (
              <div className="flex text-xs">
                <span className="mr-1">On</span> {disabledIcon}
              </div>
            ) : (
              <div className="flex text-xs opacity-50">{disabledIcon} <span className="ml-1">Off</span></div>
            )}
          </span>
        </label>
      </div>
      {children}
    </div>
  );
};

export default ToggleButton;
{
  /* <span
            className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow transform transition-transform ${
              isEnabled ? "translate-x-full bg-green-500" : "bg-green-400"
            }`}
          ></span> */
}
