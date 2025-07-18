import { getDailyForecast } from '@/entities/weather/lib/get-daily-forecast';
import { getHourlyForecast } from '@/entities/weather/lib/get-hourly-forecast';
import { WeatherApiResponse } from '@/entities/weather/types/WeatherApiResponse';
import { DailyForecast } from '@/entities/weather/ui/DailyForecast';
import { ForecastList } from '@/entities/weather/ui/ForecastList';

type ForecastsProps = {
  weather: WeatherApiResponse;
};

export const Forecasts = (props: ForecastsProps) => {
  const { weather } = props;

  const hourlyWeather = weather.hourly;
  const dailyWeather = weather.daily;

  const hourlyForecast = getHourlyForecast(hourlyWeather);
  const dailyForecast = getDailyForecast(dailyWeather);

  return (
    <>
      <ForecastList list={hourlyForecast} />
      <DailyForecast list={dailyForecast} />
    </>
  );
};
