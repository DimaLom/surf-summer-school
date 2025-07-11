export const getWindDirectionLabel = (degrees: number): string => {
  const directions = [
    'С', // 0°
    'СВ', // 45°
    'В', // 90°
    'ЮВ', // 135°
    'Ю', // 180°
    'ЮЗ', // 225°
    'З', // 270°
    'СЗ', // 315°
  ];

  const index = Math.round(degrees / 45) % 8;
  return directions[index];
};
