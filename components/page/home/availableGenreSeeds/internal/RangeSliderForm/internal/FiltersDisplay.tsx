import React, { FC } from "react";

interface FiltersDisplayProps {
  popularityRange: number | [number, number];
  energyValue: number | [number, number];
  vibeValue: number | [number, number];
  danceabilityValue: number | [number, number];
  acousticnessValue: number | [number, number];
  instrumentalnessValue: number | [number, number];
}

const FiltersDisplay: FC<FiltersDisplayProps> = ({
  popularityRange,
  energyValue,
  vibeValue,
  danceabilityValue,
  acousticnessValue,
  instrumentalnessValue,
}) => {
  const formatValueOutput = (value: number | [number, number]) => {
    if (Array.isArray(value)) {
      return `${value[0]} - ${value[1]}`;
    }

    switch (value) {
      case 1:
        return "Min";
      case 3.25:
        return "Low";
      case 5.5:
        return "Mid";
      case 7.75:
        return "High";
      case 10:
        return "Max";
      case 0:
        return "--";
      default:
        return "Mid";
    }
  };
  
  return (
    <div className="flex flex-wrap justify-end text-sm italic py-px">
      <span className="flex ml-6">
        <p className="mr-1 font-thin">Popularity:</p>
        <p className="font-normal">{formatValueOutput(popularityRange)}</p>
      </span>
      <span className="flex ml-6">
        <p className="mr-1 font-thin">Energy:</p>
        <p className="font-normal">{formatValueOutput(energyValue)}</p>
      </span>
      <span className="flex ml-6">
        <p className="mr-1 font-thin">Vibe:</p>
        <p className="font-normal">{formatValueOutput(vibeValue)}</p>
      </span>
      <span className="flex ml-6">
        <p className="mr-1 font-thin">Danceability:</p>
        <p className="font-normal">{formatValueOutput(danceabilityValue)}</p>
      </span>
      <span className="flex ml-6">
        <p className="mr-1 font-thin">Acousticness:</p>
        <p className="font-normal">{formatValueOutput(acousticnessValue)}</p>
      </span>
      <span className="flex ml-6">
        <p className="mr-1 font-thin">Instrumentalness:</p>
        <p className="font-normal">{formatValueOutput(instrumentalnessValue)}</p>
      </span>
    </div>
  );
};

export default FiltersDisplay;
