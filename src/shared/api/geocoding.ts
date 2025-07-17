import { fetchWithErrorHandling } from './api';

export const getCityCoordinates = async (cityName: string) => {
  const params = new URLSearchParams();

  params.append('name', cityName);
  params.append('format', 'json');

  const cityResponse = await fetchWithErrorHandling(
    `https://geocoding-api.open-meteo.com/v1/search?${params.toString()}`,
    { cache: 'no-store' }
  );

  const city = cityResponse.results[0];

  return city;
};
