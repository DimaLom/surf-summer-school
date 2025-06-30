import { parseISO, format, isToday, addHours } from 'date-fns';
import { ru } from 'date-fns/locale';

export const parseDate = (dateStr: string): string => {
  const date = parseISO(dateStr);
  const adjustedDate = addHours(date, 1); // Сдвиг на 1 час для CEST (UTC+2)
  const isCurrentDay = isToday(adjustedDate);

  if (isCurrentDay) {
    return `сегодня ${format(adjustedDate, 'EEEE, d MMMM yyyy, HH:mm', { locale: ru })}`;
  }

  return format(adjustedDate, 'EEEE, d MMMM yyyy, HH:mm', { locale: ru });
};
