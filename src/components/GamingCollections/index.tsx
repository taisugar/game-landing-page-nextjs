'use client';
import cc from 'clsx';
import { Bebas_Neue, Nunito } from 'next/font/google';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import styles from './GamingCollections.module.css';

const nunito = Nunito({
  weight: ['200', '400', '700'],
  subsets: ['latin']
});
const bebas_neue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin']
});
const GamingCollectionsComponent = () => {
  const [tab, setTab] = useState('Adventure');

  const onOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTab(event.target.value);
  };

  return (
    <div data-aos='zoom-in' className='mt-20 z-10'>
      <div className='grid grid-cols-1 desktop:grid-cols-2'>
        <div className='w-full desktop:w-[726px] px-10 desktop:px-0'>
          <h1
            className={cc(
              bebas_neue.className,
              styles['sub-title'],
              'animate__animated animate__pulse animate__infinite animate__slower'
            )}
          >
            we&apos;re the first gaming award winners the world
          </h1>
        </div>
      </div>

      <div className='w-full flex flex-wrap gap-2 my-4 tablet:gap-4 desktop:gap-6 desktop:my-5 desktop:-mb-24 desktop:mt-0'>
        <button
          type='button'
          className={cc(
            'p-4 cursor-pointer hover:text-gray-400',
            tab === 'Adventure' && styles['selected']
          )}
          onClick={() => setTab('Adventure')}
        >
          Adventure
        </button>
        <button
          type='button'
          className={cc(
            'p-4 cursor-pointer hover:text-gray-400',
            tab === 'Arcade' && styles['selected']
          )}
          onClick={() => setTab('Arcade')}
        >
          Arcade
        </button>
        <button
          type='button'
          className={cc(
            'p-4 cursor-pointer hover:text-gray-400',
            tab === 'Arena' && styles['selected']
          )}
          onClick={() => setTab('Arena')}
        >
          Arena
        </button>
        <button
          type='button'
          className={cc(
            'p-4 cursor-pointer hover:text-gray-400',
            tab === 'Avoider' && styles['selected']
          )}
          onClick={() => setTab('Avoider')}
        >
          Avoider
        </button>
        <button
          type='button'
          className={cc(
            'p-4 cursor-pointer hover:text-gray-400',
            tab === 'Balance' && styles['selected']
          )}
          onClick={() => setTab('Balance')}
        >
          Balance
        </button>
      </div>

      <div className='grid grid-cols-1 tablet:grid-cols-2'>
        <div className='flex flex-col gap-6 mb-6 tablet:mr-6 tablet:mb-0 desktop:items-end desktop:mt-28'>
          <Image
            alt=''
            src='/assets/gaming-collections/collection-1-min.webp'
            width={596}
            height={488}
          />
          <Image
            alt=''
            src='/assets/gaming-collections/collection-2-min.webp'
            width={596}
            height={556}
          />
        </div>
        <div className='flex flex-col gap-6 max-w-[596px]'>
          <Image
            alt=''
            src='/assets/gaming-collections/collection-3-min.webp'
            width={596}
            height={484}
          />
          <Image
            alt=''
            src='/assets/gaming-collections/collection-4-min.webp'
            width={596}
            height={470}
          />
          <div
            className={cc(
              nunito.className,
              'font-extralight text-lg tablet:text-xl capitalize'
            )}
          >
            <p>We&apos;ve have many more than</p>
            <div className='flex items-center justify-between'>
              <p
                className={cc(
                  bebas_neue.className,
                  'font-normal text-5xl tablet:text-7xl'
                )}
              >
                100+
              </p>
              <button className={styles['btn']} type='button'>
                <svg
                  width='130'
                  height='40'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 130 40'
                  fill='none'
                >
                  <path
                    d='M0 2.20339C0 0.98649 0.986491 0 2.20339 0H127.101C128.558 0 129.614 1.38912 129.224 2.79311L119.431 38.0474C119.166 39.001 118.298 39.661 117.308 39.661H2.20339C0.98649 39.661 0 38.6745 0 37.4576V2.20339Z'
                    fill='url(#paint0_linear_1_1025)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_1_1025'
                      x1='-2.10205e-07'
                      y1='29.4153'
                      x2='125.757'
                      y2='31.3031'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#C1260F' />
                      <stop offset='1' stopColor='#EE642A' />
                    </linearGradient>
                  </defs>
                </svg>
                <span className='absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap'>
                  View More
                </span>
              </button>
            </div>
            <p>
              Gaming&nbsp;
              <span className='text-[#d6441c] font-bold'>Collections</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingCollectionsComponent;
