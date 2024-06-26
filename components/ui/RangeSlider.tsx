import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ToggleButton from "./ToggleButton";

interface RangeSliderProps {
  value: number | [number, number];
  onChange: (value: number | [number, number]) => void;
  min: number;
  max: number;
  step: number;
  label: string;
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  toggleId: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  value,
  onChange,
  min,
  max,
  step,
  label,
  isEnabled,
  setIsEnabled,
  toggleId,
}) => {
  const generateSliderMarkers = () => {
    if (Array.isArray(value)) {
      const marks: { [key: number]: string } = {};
      for (let i = min; i <= max; i += step) {
        marks[i] = `${i}`;
      }
      return marks;
    } else {
      return {
        1: "Min",
        3.25: "Low",
        5.5: "Mid",
        7.75: "High",
        10: "Max",
      };
    }
  };

  const handleToggleChange = () => {
    // When disabling, reset the slider value
    if (isEnabled && Array.isArray(value)) {
      onChange([min, min]);
    } else if (isEnabled) {
      onChange(min);
    }

    if (!isEnabled && Array.isArray(value)) {
      onChange([min, max]);
    } else if (!isEnabled) {
      onChange(5);
    }
    setIsEnabled(!isEnabled);
  };

  return (
    <div className="flex flex-col p-6">
      <span className="mb-2 text-sm">{label}:</span>
      <ToggleButton
        isEnabled={isEnabled}
        handleToggleChange={handleToggleChange}
        toggleId={toggleId}
      >
        <div className="flex-1 px-2">
          <Slider
            min={min}
            max={max}
            step={step}
            marks={generateSliderMarkers()}
            range={Array.isArray(value)}
            value={value}
            onChange={(newValue: any) => onChange(newValue)}
            disabled={!isEnabled}
          />
        </div>
      </ToggleButton>
    </div>
  );
};

export default RangeSlider;
