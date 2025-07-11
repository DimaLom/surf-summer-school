import { parseDate } from '@/shared/lib/parse-date';

type WeatherDateInfoProps = {
  date: string;
};

export const WeatherDateInfo = (props: WeatherDateInfoProps) => {
  const { date } = props;

  return <p className="text-xl text-violet-950">{parseDate(date)}</p>;
};
