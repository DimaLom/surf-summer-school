import { FC } from 'react';

export const Loader: FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-violet-950 border-t-transparent"></div>
    </div>
  );
};
