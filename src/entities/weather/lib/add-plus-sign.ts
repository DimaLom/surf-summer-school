import { PLUS_SIGN } from '@/shared/constants/plus-sign';

export const addPlusSign = (value: number): string => {
  return value > 0 ? `${PLUS_SIGN}${value}` : String(value);
};
