import { ForecastItem } from '@/entities/weather/types/ForecastItem';
import { DailyWeather } from '@/entities/weather/types/WeatherApiResponse';
import { addDays } from 'date-fns';

export const getDailyForecast = (data: DailyWeather): ForecastItem[] => {
  const weekdays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

  return data.time.map((dateStr, index) => {
    const today = new Date(dateStr);
    const tomorrow = addDays(today, 1);

    const day = weekdays[tomorrow.getDay()];
    return {
      time: day,
      weatherCode: data.weather_code[index],
      temperature: data.temperature_2m_mean[index],
    };
  });
};
