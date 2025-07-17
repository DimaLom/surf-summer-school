import { weatherDescription } from '@/entities/weather/constants/weather-description';
import { CurrentWeather } from '@/entities/weather/types/WeatherApiResponse';
import { TempUnitSwitcher } from '@/entities/weather/ui/TempUnitSwitcher';
import { Temperature } from '@/entities/weather/ui/Temperature';
import { WeatherAdditionalInfo } from '@/entities/weather/ui/WeatherAdditionalInfo';

import Image from 'next/image';

type WeatherCardProps = {
  currentWeather: CurrentWeather;
  minTemperature: number | null;
};

export const WeatherCard = async (props: WeatherCardProps) => {
  const { currentWeather, minTemperature } = props;

  const currentTemperature = Math.ceil(currentWeather.temperature_2m);

  const currentWeatherDescription =
    weatherDescription[currentWeather.weather_code];

  return (
    <>
      <div className="flex w-[680px] justify-between rounded-3xl bg-white p-[24px]">
        <div>
          <div className="flex items-center gap-[18px]">
            <Image
              width={112}
              src={currentWeatherDescription.icon}
              alt={currentWeatherDescription.description}
              title={currentWeatherDescription.description}
            />
            <Temperature
              currentTemperature={currentTemperature}
              minTemperature={minTemperature}
            />
          </div>
          <WeatherAdditionalInfo
            humidity={currentWeather.relative_humidity_2m}
            pressure={currentWeather.pressure_msl}
            wind={currentWeather.wind_speed_10m}
            windDirection={currentWeather.wind_direction_10m}
          />
        </div>
        <TempUnitSwitcher />
      </div>
    </>
  );
};
