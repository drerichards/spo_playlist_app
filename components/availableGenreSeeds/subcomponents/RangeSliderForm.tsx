import React, { useState, SetStateAction, Dispatch } from "react";
import RangeSlider from "../../lib/RangeSlider";
import AccordionDropdown from "@/components/lib/AccordionDropdown";

const RangeSliderForm = () => {
  const [popularityRange, setPopularityRange] = useState<
    number | [number, number]
  >([1, 100]);
  const [energyValue, setEnergyValue] = useState<number | [number, number]>(5);
  const [vibeValue, setVibeValue] = useState<number | [number, number]>(5);
  const [danceabilityValue, setDanceabilityValue] = useState<
    number | [number, number]
  >(5);
  const [acousticnessValue, setAcousticnessValue] = useState<
    number | [number, number]
  >(5);
  const [instrumentalnessValue, setInstrumentalnessValue] = useState<
    number | [number, number]
  >(5);

  const updateSliderValue = (
    setState: Dispatch<SetStateAction<number | [number, number]>>
  ) => {
    return function (newValue: number | [number, number]) {
      setState(newValue);
    };
  };

  return (
    <>
      <AccordionDropdown title="Filters" backgroundColor="bg-green-500">
        <div className="overflow-auto max-h-80 h-full pb-6">
          <RangeSlider
            value={popularityRange}
            onChange={updateSliderValue(setPopularityRange)}
            min={0}
            max={100}
            step={25}
            label="Popularity"
          />
          <RangeSlider
            value={energyValue}
            onChange={updateSliderValue(setEnergyValue)}
            min={1}
            max={10}
            step={2.25}
            label="Energy"
          />
          <RangeSlider
            value={vibeValue}
            onChange={updateSliderValue(setVibeValue)}
            min={1}
            max={10}
            step={2.25}
            label="Vibe"
          />
          <RangeSlider
            value={danceabilityValue}
            onChange={updateSliderValue(setDanceabilityValue)}
            min={1}
            max={10}
            step={2.25}
            label="Danceability"
          />
          <RangeSlider
            value={acousticnessValue}
            onChange={updateSliderValue(setAcousticnessValue)}
            min={1}
            max={10}
            step={2.25}
            label="Acousticness"
          />
          <RangeSlider
            value={instrumentalnessValue}
            onChange={updateSliderValue(setInstrumentalnessValue)}
            min={1}
            max={10}
            step={2.25}
            label="Instrumentalness"
          />
        </div>
      </AccordionDropdown>
    </>
  );
};

export default RangeSliderForm;
