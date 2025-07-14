import Image from 'next/image';
import wind from '@/entities/weather/ui/icons/wind.svg';
import humidity from '@/entities/weather/ui/icons/humidity.svg';
import pressure from '@/entities/weather/ui/icons/pressure.svg';
import { AdditionalWeatherInfo } from '@/entities/weather/types/AdditionalWeatherInfo';

type InfoIconProps = {
  type: AdditionalWeatherInfo;
};

const iconMap: Record<InfoIconProps['type'], string> = {
  wind,
  humidity,
  pressure,
};

export const InfoIcon = (props: InfoIconProps) => {
  const { type } = props;

  return (
    <Image
      className="rounded-full bg-blue-50 p-2"
      src={iconMap[type]}
      alt={type}
      width={40}
      height={24}
    />
  );
};
