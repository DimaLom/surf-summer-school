import { getDisplayedTemp } from '@/entities/weather/lib/get-displayed-temp';

type TemperatureProps = {
  currentTemperature: number;
  minTemperature: number | null;
};

export const Temperature = (props: TemperatureProps) => {
  const { currentTemperature, minTemperature } = props;

  return (
    <p>
      <span className="text-8xl text-violet-950">
        {getDisplayedTemp(currentTemperature)}
      </span>
      {minTemperature && (
        <span className="text-5xl text-gray-500">
          / {getDisplayedTemp(minTemperature)}
        </span>
      )}
    </p>
  );
};
