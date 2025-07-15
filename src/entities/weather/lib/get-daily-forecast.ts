import { ForecastItem } from '@/entities/weather/types/ForecastItem';
import { DailyWeather } from '@/entities/weather/types/WeatherApiResponse';

export const getDailyForecast = (data: DailyWeather): ForecastItem[] => {
  const weekdays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

  return data.time.map((dateStr, index) => {
    const date = new Date(dateStr);
    const day = weekdays[date.getDay()]; // getDay(): 0 = Sunday, 1 = Monday, ...
    return {
      time: day,
      weatherCode: data.weather_code[index],
      temperature: data.temperature_2m_mean[index],
    };
  });
};
