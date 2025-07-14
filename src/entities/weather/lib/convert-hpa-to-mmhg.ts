export const convertHpaToMmHg = (hpa: number): number => {
  return Math.ceil(hpa * 0.750062);
};
