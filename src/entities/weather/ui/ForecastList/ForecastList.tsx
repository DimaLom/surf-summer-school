import { ForecastItem } from '@/entities/weather/types/ForecastItem';
import { ForecastCard } from '@/entities/weather/ui/ForecastList/ForecastCard';

type ForecastListProps = {
  list: ForecastItem[];
};

export const ForecastList = (props: ForecastListProps) => {
  const { list } = props;

  return (
    <div className="flex items-center justify-between gap-3">
      {list.map((item) => (
        <ForecastCard item={item} key={item.time} />
      ))}
    </div>
  );
};
