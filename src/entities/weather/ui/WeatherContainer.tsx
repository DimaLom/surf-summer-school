import { WeatherCard } from '@/entities/weather/ui/WeatherCard';
import { WeatherDateInfo } from './WeatherDateInfo';

export const WeatherContainer = () => {
  return (
    <div className="rounded-3xl bg-blue-50 p-[32px]">
      <WeatherDateInfo />
      <WeatherCard />
    </div>
  );
};
