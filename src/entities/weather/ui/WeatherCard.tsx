import { weatherDescription } from '@/entities/weather/constants/weather-description';
import { getMinTemperature } from '@/entities/weather/lib/get-min-temp';
import { Temperature } from '@/entities/weather/ui/Temperature';
import { TempUnitSwitcher } from '@/entities/weather/ui/TempUnitSwitcher';
import { WeatherAdditionalInfo } from '@/entities/weather/ui/WeatherAdditionalInfo';
import { WeatherDateInfo } from '@/entities/weather/ui/WeatherDateInfo';
import { getUserTimeZone } from '@/shared/lib/get-user-timezone';
import Image from 'next/image';

const timezone = getUserTimeZone();

export const WeatherCard = async () => {
  const cityResponse = await fetch(
    'https://geocoding-api.open-meteo.com/v1/search?name=Moscow&format=json',
    { cache: 'no-store' }
  );
  const city = (await cityResponse.json()).results[0];

  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&wind_speed_unit=ms&current=temperature_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,pressure_msl,relative_humidity_2m,weather_code&timezone=${timezone}&hourly=temperature_2m`,
    { cache: 'no-store' }
  );

  const weatherData = await weatherResponse.json();

  console.log(weatherData);

  const currentTemperature = Math.ceil(weatherData.current.temperature_2m);
  const minTemperature = getMinTemperature(weatherData.hourly.temperature_2m);

  const currentWeatherDescription =
    weatherDescription[weatherData.current.weather_code];

  return (
    <>
      <WeatherDateInfo date={weatherData.current.time} />
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
            humidity={weatherData.current.relative_humidity_2m}
            pressure={weatherData.current.pressure_msl}
            wind={weatherData.current.wind_speed_10m}
            windDirection={weatherData.current.wind_direction_10m}
          />
        </div>
        <TempUnitSwitcher />
      </div>
    </>
  );
};
