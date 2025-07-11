import { ForecastItem } from '@/entities/weather/types/ForecastItem';
import { ForecastList } from '@/entities/weather/ui/ForecastList';

type DailyForecastProps = {
  list: ForecastItem[];
};

export const DailyForecast = (props: DailyForecastProps) => {
  const { list } = props;

  return (
    <>
      <p className="text-2xl font-semibold text-violet-950">Погода на 7 дней</p>
      <ForecastList list={list} />
    </>
  );
};
