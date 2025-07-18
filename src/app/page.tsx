import { getDailyForecast } from '@/entities/weather/lib/get-daily-forecast';
import { getHourlyForecast } from '@/entities/weather/lib/get-hourly-forecast';
import { DailyForecast } from '@/entities/weather/ui/DailyForecast';
import { ForecastList } from '@/entities/weather/ui/ForecastList';
import { WeatherContainer } from '@/entities/weather/ui/WeatherContainer';
import { getWeather } from '@/shared/api/weather';
import { CityWeather } from '@/widgets/CityWeather';
import { Forecasts } from '@/widgets/Forecasts';

export default async function Page() {
  const weather = await getWeather('Moscow');

  return (
    <div className="flex justify-between rounded-3xl bg-blue-50 p-[32px]">
      <WeatherContainer>
        <CityWeather weather={weather} />
        <Forecasts weather={weather} />
      </WeatherContainer>
    </div>
  );
}
