import Image from 'next/image';
import { fetchCoin } from '@/app/lib/data';
import { Fragment } from 'react';

export default async function page({ params }: { params: { coin: string } }) {
  const coinName = params.coin;
  const coin = await fetchCoin(coinName);

  return (
    <div className='w-full max-w-md rounded-2xl overflow-hidden shadow-md bg-white p-12'>
      <div className='flex flex-col justify-center items-center'>
        {coin?.error ? (
          <div className='w-full flex items-center justify-start gap-x-4'>
            <Image
              alt={`No Coin founded`}
              loading='lazy'
              width={32}
              height={32}
              src='/danger.svg'
              className=''
            />
            <p className='text-xs font-normal'>{`There is no result for “${coinName}”!`}</p>
          </div>
        ) : (
          <Fragment>
            <Image
              alt={`${coin?.name} icon`}
              loading='lazy'
              width={48}
              height={48}
              src={coin?.image?.large}
              className=''
            />

            <div className='relative overflow-x-auto w-full'>
              <table className='w-full text-xs text-left '>
                <tbody>
                  <tr className='border-b border-gray'>
                    <th scope='row' className=' py-4 font-normal text-gray-600'>
                      Name
                    </th>
                    <td className=' text-end font-semibold py-4'>
                      {coin?.name}
                    </td>
                  </tr>
                  <tr className=' border-b border-gray'>
                    <th scope='row' className='py-4 font-normal text-gray-600'>
                      Symbol
                    </th>
                    <td className=' text-end font-semibold py-4'>
                      {coin?.symbol}
                    </td>
                  </tr>
                  <tr className=''>
                    <th scope='row' className=' py-4 font-normal text-gray-600'>
                      ID
                    </th>
                    <td className=' text-end font-semibold py-4'>{coin?.id}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}
