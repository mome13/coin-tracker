import Image from 'next/image';
import SearchForm from './ui/search-form';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='w-full max-w-sm rounded-2xl overflow-hidden shadow-md bg-white p-6'>
        <SearchForm />
      </div>
    </main>
  );
}
