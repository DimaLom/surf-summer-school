import { convertHpaToMmHg } from '@/entities/weather/lib/convert-hpa-to-mmhg';
import { getWindDirectionLabel } from '@/entities/weather/lib/get-wind-direction';
import { AdditionalWeatherInfo } from '@/entities/weather/types/AdditionalWeatherInfo';
import { InfoIcon } from '@/entities/weather/ui/WeatherAdditionalInfo/InfoIcon';
import { PERCENT_SIGN } from '@/shared/constants/percent-sign';

type WeatherAdditionalInfoProps = {
  humidity: number;
  pressure: number;
  wind: number;
  windDirection: number;
};

export const WeatherAdditionalInfo = (props: WeatherAdditionalInfoProps) => {
  const { humidity, pressure, wind } = props;

  const info: { type: AdditionalWeatherInfo; value: string }[] = [
    { type: 'wind', value: `${wind}, ${getWindDirectionLabel(wind)}` },
    { type: 'pressure', value: `${convertHpaToMmHg(pressure)}` },
    { type: 'humidity', value: `${humidity}${PERCENT_SIGN}` },
  ];
  return (
    <div className="mt-[20px] flex items-center justify-between">
      {info.map((item) => (
        <div
          key={item.type}
          className="flex items-center justify-between gap-3"
        >
          <InfoIcon type={item.type} />
          <span className="text-xl text-violet-950">{item.value}</span>
        </div>
      ))}
    </div>
  );
};
