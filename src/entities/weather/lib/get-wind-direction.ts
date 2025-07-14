export const getWindDirectionLabel = (degrees: number): string => {
  const directions = [
    'С', // 0° (337.5°–22.5°)
    'СВ', // 45° (22.5°–67.5°)
    'В', // 90° (67.5°–112.5°)
    'ЮВ', // 135° (112.5°–157.5°)
    'Ю', // 180° (157.5°–202.5°)
    'ЮЗ', // 225° (202.5°–247.5°)
    'З', // 270° (247.5°–292.5°)
    'СЗ', // 315° (292.5°–337.5°)
  ];

  const normalizedDegrees = ((degrees % 360) + 360) % 360;
  const index = Math.floor((normalizedDegrees + 22.5) / 45) % 8;

  return directions[index];
};
