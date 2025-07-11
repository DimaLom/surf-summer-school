export type CurrentWeather = {
  time: string;
  interval: number;
  temperature_2m: number;
  apparent_temperature: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  pressure_msl: number;
  relative_humidity_2m: number;
  weather_code: number;
};

export type CurrentWeatherUnits = {
  time: string;
  interval: string;
  temperature_2m: string;
  apparent_temperature: string;
  wind_speed_10m: string;
  wind_direction_10m: string;
  pressure_msl: string;
  relative_humidity_2m: string;
  weather_code: string;
};

export type HourlyWeather = {
  time: string[];
  temperature_2m: number[];
  weather_code: number[];
};

export type HourlyWeatherUnits = {
  time: string;
  temperature_2m: string;
  weather_code: string;
};

export type WeatherApiResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentWeatherUnits;
  current: CurrentWeather;
  hourly: HourlyWeather;
  hourly_units: HourlyWeatherUnits;
};
