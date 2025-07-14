import { DEGREE_SIGN } from '@/shared/constants/degree-sign';
import { addPlusSign } from '@/entities/weather/lib/add-plus-sign';

type TemperatureProps = {
  currentTemperature: number;
  minTemperature: number | null;
};

export const Temperature = (props: TemperatureProps) => {
  const { currentTemperature, minTemperature } = props;

  return (
    <p>
      <span className="text-8xl text-violet-950">
        {addPlusSign(currentTemperature)}
        {DEGREE_SIGN}
      </span>
      {minTemperature && (
        <span className="text-5xl text-gray-500">
          / {addPlusSign(minTemperature)}
          {DEGREE_SIGN}
        </span>
      )}
    </p>
  );
};
