'use client';

import { SearchInput } from '@/features/city-search/ui/SearchInput';

export const Header = () => {
  return (
    <div className="mb-5 flex w-full justify-between">
      <h1 className="text-2xl font-bold text-violet-950">
        Погода в Москве на 7 дней
      </h1>
      <SearchInput />
    </div>
  );
};
