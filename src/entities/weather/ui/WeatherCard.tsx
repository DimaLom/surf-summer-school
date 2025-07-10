WeatherCard;
('use client');

import { weatherDescriptions } from '@/shared/constants/WeatherDescriptions';
import { WeatherData } from '@/shared/types/WeatherData';
import { Button } from '@/shared/ui/Button';
import { Loader } from '@/shared/ui/Loader';
import Image from 'next/image';
import { useState } from 'react';

interface WeatherCardProps {
  weather: WeatherData;
  cityName: string;
}
export const WeatherCard: React.FC<WeatherCardProps> = ({
  cityName,
  weather,
}) => {
  const [currentWeather, setCurrentWeather] = useState(weather);
  const [loading, setLoading] = useState(false);

  const description = weatherDescriptions[currentWeather.weathercode];

  const onRefresh = async () => {
    try {
      setLoading(true);
      const cityResponse = await fetch(
        'https://geocoding-api.open-meteo.com/v1/search?name=Moscow&format=json',
        { cache: 'no-store' }
      );
      const city = (await cityResponse.json()).results[0];

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&temperature_unit=celsius&current=temperature_2m,weathercode`,
        { cache: 'no-store' }
      );

      const weatherData = await weatherResponse.json();

      setCurrentWeather({
        temperature: weatherData.current.temperature_2m,
        weathercode: weatherData.current.weathercode,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-sm rounded-lg bg-white p-4 shadow-md">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="text-xl font-bold">{cityName}</h2>
          <div className="flex justify-between">
            <div>
              <p>Температура: {currentWeather.temperature}°C</p>
              <p>Погода: {description}</p>
              {currentWeather.icon && (
                <Image
                  src={currentWeather.icon}
                  alt={description}
                  className="h-16 w-16"
                />
              )}
            </div>
            <Button onClick={onRefresh}>Обновить</Button>
          </div>
        </>
      )}
    </div>
  );
};
