'use client';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { setCurrentCity } from '@/features/city-search/model/citySlice';
import search from '@/shared/assets/search.svg';
import Image from 'next/image';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

export const SearchInput = () => {
  const dispatch = useAppDispatch();

  const currentCity = useAppSelector((state) => state.city.currentCity);

  const [city, setCity] = useState(currentCity);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(setCurrentCity(city));
    }
  };

  return (
    <div className="relative flex items-center">
      <Image
        src={search}
        alt="search"
        width={24}
        height={24}
        className="absolute left-4"
      />
      <input
        type="text"
        placeholder="Москва"
        className="max-w-md rounded-full border border-gray-300 p-2 pl-12 text-xl text-violet-950 placeholder-gray-400 focus:ring-2 focus:ring-blue-100 focus:outline-none"
        value={city}
        onChange={onChange}
        onKeyUp={onEnter}
      />
    </div>
  );
};
