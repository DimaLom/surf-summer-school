import { getDailyForecast } from '@/entities/weather/lib/get-daily-forecast';
import { getHourlyForecast } from '@/entities/weather/lib/get-hourly-forecast';
import { getMinTemperature } from '@/entities/weather/lib/get-min-temp';
import { DailyForecast } from '@/entities/weather/ui/DailyForecast';
import { ForecastList } from '@/entities/weather/ui/ForecastList';
import { WeatherCard } from '@/entities/weather/ui/WeatherCard';
import { WeatherDateInfo } from '@/entities/weather/ui/WeatherDateInfo';
import { getUserTimeZone } from '@/shared/lib/get-user-timezone';

const timezone = getUserTimeZone();

export const WeatherContainer = async () => {
  const cityResponse = await fetch(
    'https://geocoding-api.open-meteo.com/v1/search?name=Moscow&format=json',
    { cache: 'no-store' }
  );
  const city = (await cityResponse.json()).results[0];

  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&wind_speed_unit=ms&current=temperature_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,pressure_msl,relative_humidity_2m,weather_code&timezone=${timezone}&hourly=temperature_2m,weather_code&daily=temperature_2m_mean,weather_code`,
    { cache: 'no-store' }
  );

  const weatherData = await weatherResponse.json();
  console.log(weatherData);
  const currentWeather = weatherData.current;
  const hourlyWeather = weatherData.hourly;
  const dailyWeather = weatherData.daily;

  const minTemperature = getMinTemperature(hourlyWeather.temperature_2m);

  const hourlyForecast = getHourlyForecast(hourlyWeather);
  const dailyForecast = getDailyForecast(dailyWeather);

  return (
    <div className="flex flex-col gap-[16px] rounded-3xl bg-blue-50 p-[32px]">
      <WeatherDateInfo date={currentWeather.time} />
      <WeatherCard
        currentWeather={currentWeather}
        minTemperature={minTemperature}
      />
      <ForecastList list={hourlyForecast} />
      <DailyForecast list={dailyForecast} />
    </div>
  );
};
