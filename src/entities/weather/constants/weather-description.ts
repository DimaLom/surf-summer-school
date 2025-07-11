import sunny from '@/entities/weather/ui/icons/sunny.svg';
import cloudy from '@/entities/weather/ui/icons/cloudy.svg';
import partlyCloudy from '@/entities/weather/ui/icons/partly-cloudy.svg';
import rain from '@/entities/weather/ui/icons/rain.svg';
import snowy from '@/entities/weather/ui/icons/snowy.svg';
import stormy from '@/entities/weather/ui/icons/stormy.svg';

export const weatherDescription: Record<
  number,
  { description: string; icon: string }
> = {
  0: { description: 'Ясное небо', icon: sunny },
  1: { description: 'Преимущественно ясно', icon: partlyCloudy },
  2: { description: 'Переменная облачность', icon: partlyCloudy },
  3: { description: 'Пасмурно', icon: cloudy },
  45: { description: 'Туман', icon: cloudy },
  48: { description: 'Туман с изморозью', icon: cloudy },
  51: { description: 'Морось: слабая', icon: rain },
  53: { description: 'Морось: умеренная', icon: rain },
  55: { description: 'Морось: сильная', icon: rain },
  56: { description: 'Переохлаждённая морось: слабая', icon: rain },
  57: { description: 'Переохлаждённая морось: сильная', icon: rain },
  61: { description: 'Дождь: слабый', icon: rain },
  63: { description: 'Дождь: умеренный', icon: rain },
  65: { description: 'Дождь: сильный', icon: rain },
  66: { description: 'Переохлаждённый дождь: слабый', icon: rain },
  67: { description: 'Переохлаждённый дождь: сильный', icon: rain },
  71: { description: 'Снег: слабый', icon: snowy },
  73: { description: 'Снег: умеренный', icon: snowy },
  75: { description: 'Снег: сильный', icon: snowy },
  77: { description: 'Ледяные зёрна', icon: snowy },
  80: { description: 'Ливень: слабый', icon: rain },
  81: { description: 'Ливень: умеренный', icon: rain },
  82: { description: 'Ливень: сильный', icon: rain },
  85: { description: 'Снегопад: слабый', icon: snowy },
  86: { description: 'Снегопад: сильный', icon: snowy },
  95: { description: 'Гроза: слабая или умеренная', icon: stormy },
  96: { description: 'Гроза с мелким градом', icon: stormy },
  99: { description: 'Гроза с крупным градом', icon: stormy },
};
