'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchForm() {
  const router = useRouter();
  const pathname = usePathname();
  const [coinName, setCoinName] = useState(pathname.slice(1));

  return (
    <form
      className='flex flex-col gap-6'
      onSubmit={(e) => {
        e.preventDefault();
        if (coinName) router.push(`/${coinName}`);
        else router.push('/');
      }}
    >
      <input
        className='input-reset peer w-full block border border-1 border-gray focus-visible:border-transparent focus-visible:outline-purple rounded-md focus-visible:outline focus-visible:outline-1 text-xs py-3 px-4 '
        type='search'
        placeholder='Currency Name'
        name='name'
        defaultValue={coinName}
        onChange={(e) => setCoinName(e.target.value)}
      />

      <button
        className=' bg-purple rounded-md text-white text-xs py-3'
        type='submit'
      >
        Search
      </button>
    </form>
  );
}
