import { ReactNode } from 'react';

type WeatherContainerProps = {
  children: ReactNode;
};

export const WeatherContainer = async (props: WeatherContainerProps) => {
  const { children } = props;

  return (
    <div className="flex flex-col gap-[16px] rounded-3xl bg-blue-50 p-[32px]">
      {children}
    </div>
  );
};
