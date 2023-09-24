import cc from 'clsx';
import Link from 'next/link';
import styles from './Header.module.css';

const HeaderComponent = () => {
  return (
    <header
      data-aos='flip-down'
      className='mobile:hidden tablet:flex flex items-center justify-between text-base h-20 mt-8'
    >
      <nav className='flex list-none gap-5 underline-offset-8'>
        <li className={cc(styles['marketplace'], 'font-[700]')}>
          <Link href={'#'} className='p-3'>
            Marketplace
          </Link>
        </li>
        <li className='px-3'>
          <Link href={'#'} className='p-3 hover:underline'>
            Stats
          </Link>
        </li>
        <li className='px-3'>
          <Link href={'#'} className='p-3 hover:underline'>
            Collections
          </Link>
        </li>
        <li className='px-3'>
          <Link href={'#'} className='p-3 hover:underline'>
            Explore
          </Link>
        </li>
        <li className='px-3'>
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
    </header>
  );
};

export default HeaderComponent;
