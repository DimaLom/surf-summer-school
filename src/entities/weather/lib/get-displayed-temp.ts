import { addPlusSign } from '@/entities/weather/lib/add-plus-sign';
import { DEGREE_SIGN } from '@/shared/constants/degree-sign';

export const getDisplayedTemp = (temp: number): string => {
  return `${addPlusSign(Math.ceil(temp))}${DEGREE_SIGN}`;
};
