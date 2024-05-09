import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface RangeSliderProps {
  value: number | [number, number];
  onChange: (value: number | [number, number]) => void;
  min: number;
  max: number;
  step: number;
  label: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ value, onChange, min, max, step, label }) => {
  const generateMarks = () => {
    // If the value is a range, use a numerical system
    if (Array.isArray(value)) {
      const marks: { [key: number]: string } = {};
      for (let i = min; i <= max; i += step) {
        marks[i] = `${i}`;
      }
      return marks;
    }
    // For single value sliders, use custom labels at predefined steps
    else {
      return {
        1: 'Min',
        3.25: 'Low',
        5.5: 'Mid',
        7.75: 'High',
        10: 'Max'
      };
    }
  };

  const generateSliderNumbers = (): { [key: number]: string } => {
    const marks: { [key: number]: string } = {};
    for (let i = min; i <= max; i += step) {
      marks[i] = `${i}`;
    }
    return marks;
  };

  const generateSliderMarkers = (): { [key: number]: string } => {
    const markers: { [key: number]: string } = {
      1: 'Min',
      3.25: 'Low',
      5.5: 'Mid',
      7.75: 'High',
      10: 'Max'
    };
    return markers;
  };

  return (
    <div className="flex flex-col p-6">
      <span className="mb-2 text-sm">{label}:</span>
      <div className="px-6">
      <Slider
        min={min}
        max={max}
        step={step}
        marks={generateMarks()}
        range={Array.isArray(value)}
        value={value}
        onChange={(newValue: any) => onChange(newValue)}
      />
      </div>
    </div>
  );
};

export default RangeSlider;

