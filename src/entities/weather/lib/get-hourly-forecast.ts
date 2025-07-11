import { ForecastItem } from '@/entities/weather/types/ForecastItem';
import { HourlyWeather } from '@/entities/weather/types/WeatherApiResponse';
import { parseISO, getHours, format, isSameDay } from 'date-fns';

export const getHourlyForecast = (data: HourlyWeather): ForecastItem[] => {
  const cards: ForecastItem[] = [];
  const currentDay = parseISO(data.time[0]);

  for (let hour = 8; hour <= 22; hour += 2) {
    const targetIndex = data.time.findIndex((t) => {
      const date = parseISO(t);
      return getHours(date) === hour && isSameDay(date, currentDay);
    });

    if (targetIndex !== -1) {
      const timeLabel = format(parseISO(data.time[targetIndex]), 'HH:mm');

      cards.push({
        time: timeLabel,
        temperature: data.temperature_2m[targetIndex],
        weatherCode: data.weather_code[targetIndex],
      });
    }
  }

  return cards;
};
