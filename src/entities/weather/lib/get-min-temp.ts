export const getMinTemperature = (temps: number[]): number | null => {
  if (temps?.length === 0) return null;

  const minTemp = Math.min(...temps);
  return Math.ceil(minTemp);
};
