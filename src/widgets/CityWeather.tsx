import { getHourlyForecast } from '@/entities/weather/lib/get-hourly-forecast';
import { WeatherApiResponse } from '@/entities/weather/types/WeatherApiResponse';
import { WeatherCard } from '@/entities/weather/ui/WeatherCard';
import { WeatherDateInfo } from '@/entities/weather/ui/WeatherDateInfo';

type CityWeatherProps = {
  weather: WeatherApiResponse;
};

export const CityWeather = (props: CityWeatherProps) => {
  const { weather } = props;

  const currentWeather = weather.current;
  const hourlyWeather = weather.hourly;

  const hourlyForecast = getHourlyForecast(hourlyWeather);

  const minTemperature = hourlyForecast.at(-1)?.temperature ?? null;

  return (
    <>
      <WeatherDateInfo date={currentWeather.time} />
      <WeatherCard
        currentWeather={currentWeather}
        minTemperature={minTemperature}
      />
    </>
  );
};
