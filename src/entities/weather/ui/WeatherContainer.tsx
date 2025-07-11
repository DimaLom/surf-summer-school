import { getDailyForecast } from '@/entities/weather/lib/get-daily-forecast';
import { getHourlyForecast } from '@/entities/weather/lib/get-hourly-forecast';
import { getMinTemperature } from '@/entities/weather/lib/get-min-temp';
import { DailyForecast } from '@/entities/weather/ui/DailyForecast';
import { ForecastList } from '@/entities/weather/ui/ForecastList';
import { WeatherCard } from '@/entities/weather/ui/WeatherCard';
import { WeatherDateInfo } from '@/entities/weather/ui/WeatherDateInfo';
import { getWeather } from '@/shared/api/weather';

export const WeatherContainer = async () => {
  const weatherData = await getWeather('Moscow');

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
