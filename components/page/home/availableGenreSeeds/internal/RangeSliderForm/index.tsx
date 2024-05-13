import React, { useState, SetStateAction, Dispatch, FC } from "react";
import RangeSlider from "@/components/ui/RangeSlider";
import AccordionDropdown from "@/components/ui/AccordionDropdown";
import FiltersDisplay from "./internal/FiltersDisplay";

interface RangeSliderFormProps {
  popularityRange: number | [number, number];
  setPopularityRange: Dispatch<SetStateAction<number | [number, number]>>;
  energyValue: number | [number, number];
  setEnergyValue: Dispatch<SetStateAction<number | [number, number]>>;
  vibeValue: number | [number, number];
  setVibeValue: Dispatch<SetStateAction<number | [number, number]>>;
  danceabilityValue: number | [number, number];
  setDanceabilityValue: Dispatch<SetStateAction<number | [number, number]>>;
  acousticnessValue: number | [number, number];
  setAcousticnessValue: Dispatch<SetStateAction<number | [number, number]>>;
  instrumentalnessValue: number | [number, number];
  setInstrumentalnessValue: Dispatch<SetStateAction<number | [number, number]>>;
}

const RangeSliderForm: FC<RangeSliderFormProps> = ({
  popularityRange,
  setPopularityRange,
  energyValue,
  setEnergyValue,
  vibeValue,
  setVibeValue,
  danceabilityValue,
  setDanceabilityValue,
  acousticnessValue,
  setAcousticnessValue,
  instrumentalnessValue,
  setInstrumentalnessValue,
}) => {
  const [isPopEnabled, setIsPopEnabled] = useState(true);
  const [isEngEnabled, setIsEngEnabled] = useState(true);
  const [isVibEnabled, setIsVibEnabled] = useState(true);
  const [isDncEnabled, setIsDncEnabled] = useState(true);
  const [isInsEnabled, setIsInsEnabled] = useState(true);
  const [isAcoEnabled, setIsAcoEnabled] = useState(true);

  const updateSliderValue = (
    setState: Dispatch<SetStateAction<number | [number, number]>>
  ) => {
    return function (newValue: number | [number, number]) {
      setState(newValue);
    };
  };

  const bannerSelectedFilters = (
    <FiltersDisplay
      popularityRange={popularityRange}
      energyValue={energyValue}
      vibeValue={vibeValue}
      danceabilityValue={danceabilityValue}
      acousticnessValue={acousticnessValue}
      instrumentalnessValue={instrumentalnessValue}
    />
  );

  return (
    <>
      <AccordionDropdown
        title="Filters"
        backgroundColor="#4D7EA8"
        backgroundColorHover="#4D7EA8"
        bannerContent={bannerSelectedFilters}
      >
        <>
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
        </>
      </AccordionDropdown>
    </>
  );
};

export default RangeSliderForm;
