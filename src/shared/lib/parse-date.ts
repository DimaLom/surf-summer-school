import { parseISO, format, isToday } from 'date-fns';
import { ru } from 'date-fns/locale';

export const parseDate = (dateStr: string): string => {
  const date = parseISO(dateStr);
  const isCurrentDay = isToday(date);

  if (isCurrentDay) {
    return `сегодня ${format(date, 'EEEE, d MMMM yyyy, HH:mm', { locale: ru })}`;
  }

  return format(date, 'EEEE, d MMMM yyyy, HH:mm', { locale: ru });
};
