import { fetchWithErrorHandling } from '@/shared/api/api';
import { getCityCoordinates } from '@/shared/api/geocoding';

export const getWeather = async (cityName: string) => {
  const city = await getCityCoordinates(cityName);

  const params = new URLSearchParams();

  params.append('latitude', String(city.latitude));
  params.append('longitude', String(city.longitude));
  params.append('wind_speed_unit', 'ms');
  params.append(
    'current',
    'temperature_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,pressure_msl,relative_humidity_2m,weather_code'
  );
  params.append('timezone', city.timezone);
  params.append('hourly', 'temperature_2m,weather_code');
  params.append('daily', 'temperature_2m_mean,weather_code');

  const weatherResponse = await fetchWithErrorHandling(
    `https://api.open-meteo.com/v1/forecast?${params.toString()}`,
    { cache: 'no-store' }
  );

  return weatherResponse;
};
