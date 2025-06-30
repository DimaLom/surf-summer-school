import { WeatherContainer } from '@/entities/weather/ui/WeatherContainer';

export default async function Page() {
  return (
    <div className="flex">
      <WeatherContainer />
    </div>
  );
}
