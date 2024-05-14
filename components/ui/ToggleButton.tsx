import { DISABLED_ICON } from "@/utils/assets";
import React, { FC, ReactNode } from "react";

interface ToggleButtonProps {
  isEnabled: boolean;
  handleToggleChange: () => void;
  toggleId: string;
  children: ReactNode;
}

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
              <div className="flex text-xs w-8">
                <span className="mr-1">On</span> {DISABLED_ICON}
              </div>
            ) : (
              <div className="flex text-xs w-8 opacity-50">{DISABLED_ICON} <span className="ml-1">Off</span></div>
            )}
          </span>
        </label>
      </div>
      {children}
    </div>
  );
};

export default ToggleButton;
