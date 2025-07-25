import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatDate = (date: string) =>
  format(new Date(date), 'EEE, d MMM', { locale: ru });
