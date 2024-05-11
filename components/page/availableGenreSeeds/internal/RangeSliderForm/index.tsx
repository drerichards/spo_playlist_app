import React, { useState, SetStateAction, Dispatch } from "react";
import RangeSlider from "@/components/ui/RangeSlider";
import AccordionDropdown from "@/components/ui/AccordionDropdown";
import FiltersDisplay from "./internal/FiltersDisplay";

const RangeSliderForm = () => {
  const [isPopEnabled, setIsPopEnabled] = useState(true);
  const [isEngEnabled, setIsEngEnabled] = useState(true);
  const [isVibEnabled, setIsVibEnabled] = useState(true);
  const [isDncEnabled, setIsDncEnabled] = useState(true);
  const [isInsEnabled, setIsInsEnabled] = useState(true);
  const [isAcoEnabled, setIsAcoEnabled] = useState(true);

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
      <AccordionDropdown title="Filters" backgroundColor="bg-theme-blue">
        <div className="overflow-auto max-h-80 h-full pb-6">
          <RangeSlider
            value={popularityRange}
            onChange={updateSliderValue(setPopularityRange)}
            min={0}
            max={100}
            step={25}
            label="Popularity"
            isEnabled={isPopEnabled}
            setIsEnabled={setIsPopEnabled}
            toggleId="popularity-toggle"
          />
          <RangeSlider
            value={energyValue}
            onChange={updateSliderValue(setEnergyValue)}
            min={1}
            max={10}
            step={2.25}
            label="Energy"
            isEnabled={isEngEnabled}
            setIsEnabled={setIsEngEnabled}
            toggleId="energy-toggle"
          />
          <RangeSlider
            value={vibeValue}
            onChange={updateSliderValue(setVibeValue)}
            min={1}
            max={10}
            step={2.25}
            label="Vibe"
            isEnabled={isVibEnabled}
            setIsEnabled={setIsVibEnabled}
            toggleId="vibe-toggle"
          />
          <RangeSlider
            value={danceabilityValue}
            onChange={updateSliderValue(setDanceabilityValue)}
            min={1}
            max={10}
            step={2.25}
            label="Danceability"
            isEnabled={isDncEnabled}
            setIsEnabled={setIsDncEnabled}
            toggleId="danceability-toggle"
          />
          <RangeSlider
            value={acousticnessValue}
            onChange={updateSliderValue(setAcousticnessValue)}
            min={1}
            max={10}
            step={2.25}
            label="Acousticness"
            isEnabled={isAcoEnabled}
            setIsEnabled={setIsAcoEnabled}
            toggleId="acousticness-toggle"
          />
          <RangeSlider
            value={instrumentalnessValue}
            onChange={updateSliderValue(setInstrumentalnessValue)}
            min={1}
            max={10}
            step={2.25}
            label="Instrumentalness"
            isEnabled={isInsEnabled}
            setIsEnabled={setIsInsEnabled}
            toggleId="instrumentalness-toggle"
          />
        </div>
      </AccordionDropdown>

      <FiltersDisplay
        popularityRange={popularityRange}
        energyValue={energyValue}
        vibeValue={vibeValue}
        danceabilityValue={danceabilityValue}
        acousticnessValue={acousticnessValue}
        instrumentalnessValue={instrumentalnessValue}
      />
    </>
  );
};

export default RangeSliderForm;
