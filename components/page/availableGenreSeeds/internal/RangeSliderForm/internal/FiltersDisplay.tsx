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
    <div className="flex flex-wrap justify-end text-xs mb-2 italic font-semibold">
      <span className="flex ml-6">
        <p className="mr-1">Popularity:</p>
        {formatValueOutput(popularityRange)}
      </span>
      <span className="flex ml-6">
        <p className="mr-1">Energy:</p>
        {formatValueOutput(energyValue)}
      </span>
      <span className="flex ml-6">
        <p className="mr-1">Vibe:</p>
        {formatValueOutput(vibeValue)}
      </span>
      <span className="flex ml-6">
        <p className="mr-1">Danceability:</p>
        {formatValueOutput(danceabilityValue)}
      </span>
      <span className="flex ml-6">
        <p className="mr-1">Acousticness:</p>
        {formatValueOutput(acousticnessValue)}
      </span>
      <span className="flex ml-6">
        <p className="mr-1">Instrumentalness:</p>
        {formatValueOutput(instrumentalnessValue)}
      </span>
    </div>
  );
};

export default FiltersDisplay;
