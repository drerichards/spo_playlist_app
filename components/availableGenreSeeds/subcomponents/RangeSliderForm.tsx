import React, { useState } from "react";
import RangeSlider from "../../lib/RangeSlider";
import AccordionDropdown from "@/components/lib/AccordionDropdown";

const RangeSliderForm = () => {
  const [popularityRange, setPopularityRange] = useState<[number, number]>([
    1, 100,
  ]);
  const [energyValue, setEnergyValue] = useState<number>(5);
  const [vibeValue, setVibeValue] = useState<number>(5);
  const [danceabilityValue, setDanceabilityValue] = useState<number>(5);
  const [acousticnessValue, setAcousticnessValue] = useState<number>(5);
  const [instrumentalnessValue, setInstrumentalnessValue] = useState<number>(5);

  return (
    <>
      <AccordionDropdown title="Filters" backgroundColor="bg-green-500">
        <div className="overflow-auto max-h-80 h-full pb-6">
          <RangeSlider
            value={popularityRange}
            onChange={(newValue: number | [number, number]) =>
              setPopularityRange(newValue as [number, number])
            }
            min={0}
            max={100}
            step={25}
            label="Popularity"
          />
          <RangeSlider
            value={energyValue}
            onChange={(newValue: number | [number, number]) =>
              setEnergyValue(newValue as number)
            }
            min={1}
            max={10}
            step={2.25}
            label="Energy"
          />
          <RangeSlider
            value={vibeValue}
            onChange={(newValue: number | [number, number]) =>
              setVibeValue(newValue as number)
            }
            min={1}
            max={10}
            step={2.25}
            label="Vibe"
          />
  
          <RangeSlider
            value={danceabilityValue}
            onChange={(newValue: number | [number, number]) =>
              setDanceabilityValue(newValue as number)
            }
            min={1}
            max={10}
            step={2.25}
            label="Danceability"
          />
          <RangeSlider
            value={acousticnessValue}
            onChange={(newValue: number | [number, number]) =>
              setAcousticnessValue(newValue as number)
            }
            min={1}
            max={10}
            step={2.25}
            label="Acousticness"
          />
          <RangeSlider
            value={instrumentalnessValue}
            onChange={(newValue: number | [number, number]) =>
              setInstrumentalnessValue(newValue as number)
            }
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
