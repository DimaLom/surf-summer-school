import { weatherDescription } from '@/entities/weather/constants/weather-description';
import { getDisplayedTemp } from '@/entities/weather/lib/get-displayed-temp';
import { ForecastItem } from '@/entities/weather/types/ForecastItem';
import Image from 'next/image';

type ForecastCardProps = {
  item: ForecastItem;
};

export const ForecastCard = (props: ForecastCardProps) => {
  const { item } = props;

  const image = weatherDescription[item.weatherCode];

  return (
    <div className="flex flex-col items-center gap-[12px] rounded-3xl bg-white p-[12px] outline-2 outline-blue-100">
      <p className="text-xs text-gray-500">{item.time}</p>
      <Image
        width={40}
        src={image.icon}
        alt={image.description}
        title={image.description}
      />
      <p className="text-semibold text-base text-violet-950">
        {getDisplayedTemp(item.temperature)}
      </p>
    </div>
  );
};
