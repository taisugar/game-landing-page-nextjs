'use client';
import cc from 'clsx';
import Link from 'next/link';
import { slide as BurgerMenu } from 'react-burger-menu';
import './Burger-menu.css';
import styles from './Header.module.css';

const HeaderComponent = () => {
  return (
    <>
      <div className='block tablet:hidden'>
        <BurgerMenu
          right
          pageWrapId='page-wrap'
          outerContainerId='root'
          className='burger__menu'
        >
          <Link href={'#'} className='p-4'>
            Marketplace
          </Link>
          <Link href={'#'} className='p-4'>
            Stats
          </Link>
          <Link href={'#'} className='p-4'>
            Collections
          </Link>
          <Link href={'#'} className='p-4'>
            Explore
          </Link>
          <Link href={'#'} className='p-4'>
            Community
          </Link>
          <div>
            <button className={cc(styles['btn'], 'm-4')} type='button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 130 40'
                fill='none'
              >
                <path
                  d='M0 2.20339C0 0.98649 0.986491 0 2.20339 0H127.101C128.558 0 129.614 1.38912 129.224 2.79311L119.431 38.0474C119.166 39.001 118.298 39.661 117.308 39.661H2.20339C0.98649 39.661 0 38.6745 0 37.4576V2.20339Z'
                  fill='url(#paint0_linear_1_708)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_1_708'
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
              <span className='absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                Register
              </span>
            </button>
          </div>
        </BurgerMenu>
      </div>

      <div className='hidden text-base tablet:flex tablet:flex-col tablet:items-end tablet:justify-center tablet:gap-5 tablet:h-20 tablet:mt-10 desktop:flex-row desktop:justify-evenly desktop:mt-0'>
        <nav className='tablet:w-full tablet:flex tablet:items-center tablet:justify-between desktop:w-auto desktop:justify-start list-none gap-5 underline-offset-8'>
          <li className={cc(styles['marketplace'], 'font-[700]')}>
            <Link href={'#'} className='p-3'>
              Marketplace
            </Link>
          </li>
          <li className=''>
            <Link href={'#'} className='p-3 hover:underline'>
              Stats
            </Link>
          </li>
          <li className=''>
            <Link href={'#'} className='p-3 hover:underline'>
              Collections
            </Link>
          </li>
          <li className=''>
            <Link href={'#'} className='p-3 hover:underline'>
              Explore
            </Link>
          </li>
          <li className=''>
            <Link href={'#'} className='p-3 hover:underline'>
              Community
            </Link>
          </li>
        </nav>
        <button className={styles['btn']} type='button'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 130 40'
            fill='none'
          >
            <path
              d='M0 2.20339C0 0.98649 0.986491 0 2.20339 0H127.101C128.558 0 129.614 1.38912 129.224 2.79311L119.431 38.0474C119.166 39.001 118.298 39.661 117.308 39.661H2.20339C0.98649 39.661 0 38.6745 0 37.4576V2.20339Z'
              fill='url(#paint0_linear_1_7081)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_1_7081'
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
          <span className='absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            Register
          </span>
        </button>
      </div>
    </>
  );
};

export default HeaderComponent;
