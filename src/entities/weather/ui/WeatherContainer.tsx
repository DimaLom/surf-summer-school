import { WeatherDateInfo } from '@/entities/weather/ui/WeatherDateInfo';
import { WeatherCard } from './WeatherCard';
import { getUserTimeZone } from '@/shared/lib/get-user-timezone';
import { getMinTemperature } from '@/entities/weather/lib/get-min-temp';

const timezone = getUserTimeZone();

export const WeatherContainer = async () => {
  const cityResponse = await fetch(
    'https://geocoding-api.open-meteo.com/v1/search?name=Moscow&format=json',
    { cache: 'no-store' }
  );
  const city = (await cityResponse.json())?.results[0];

  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&wind_speed_unit=ms&current=temperature_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,pressure_msl,relative_humidity_2m,weather_code&timezone=${timezone}&hourly=temperature_2m`,
    { cache: 'no-store' }
  );

  const weatherData = await weatherResponse.json();

  const currentWeather = weatherData.current;
  const hourlyWeather = weatherData.hourly;

  const minTemp = getMinTemperature(hourlyWeather.temperature_2m);

  return (
    <div className="rounded-3xl bg-blue-50 p-[32px]">
      <WeatherDateInfo date={currentWeather.time} />
      <WeatherCard currentWeather={currentWeather} minTemperature={minTemp} />
    </div>
  );
};
