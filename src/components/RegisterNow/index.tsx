import cc from 'clsx';
import { Bebas_Neue } from 'next/font/google';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import CoronaBlackPlayIcon from '../../../public/assets/icons/corona-black-play.svg';
import CoronaWhitePlayIcon from '../../../public/assets/icons/corona-white-play.svg';
import CoronaIcon from '../../../public/assets/icons/corona.svg';
import styles from './RegisterNow.module.css';

const bebas_neue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin']
});
const RegisterNowComponent = () => {
  return (
    <section
      data-aos='zoom-in'
      className='relative flex flex-col items-center justify-center w-full h-full mb-8 desktop:mb-20'
    >
      <div className='relative w-full h-full tablet:w-[640px] desktop:w-[760px] desktop:h-[445px] z-20 mt-8'>
        <Image
          className='absolute w-12 h-12 -top-10 -right-5 tablet:w-20 tablet:h-20 tablet:-top-12 tablet:-right-10 desktop:-top-16 desktop:-right-20 desktop:w-24 desktop:h-24 animate__animated animate__heartBeat animate__infinite'
          alt=''
          src={CoronaIcon}
        />
        <Image
          className='max-w-[110%] -ml-[5%] -mb-[3%] tablet:max-w-full tablet:ml-0'
          alt=''
          src='/assets/screen/screen-1-min.webp'
          width={760}
          height={445}
        />
        <div className='flex items-center justify-center tablet:mt-2'>
          <button className={styles['btn']} type='button'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 317 64'
              fill='none'
            >
              <path
                d='M0.176025 0.706055L40.0672 63.7061H277.089L316.98 0.706055H0.176025Z'
                fill='url(#paint0_linear_1_729)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_1_729'
                  x1='0.176025'
                  y1='47.4311'
                  x2='306.548'
                  y2='54.4869'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#C1260F' />
                  <stop offset='1' stopColor='#EE642A' />
                </linearGradient>
              </defs>
            </svg>
            <span className={cc(bebas_neue.className, styles['btn-text'])}>
              Register Now
            </span>
          </button>
        </div>
      </div>

      <div className='absolute w-[200%]'>
        <div className='absolute -rotate-[30deg] desktop:-rotate-[10deg]'>
          <Marquee className='bg-white h-8 tablet:h-16 desktop:h-20' autoFill>
            <Image
              className='rotate-[10deg] px-3 w-20 tablet:w-24 desktop:w-36'
              alt=''
              aria-hidden='true'
              src={CoronaBlackPlayIcon}
              width={140}
              height={37}
            />
          </Marquee>
        </div>
        <div className='absolute rotate-[45deg] desktop:rotate-[3deg]'>
          <Marquee
            className='bg-white bg-opacity-5 h-8 tablet:h-16 desktop:h-20'
            autoFill
            direction='right'
          >
            <Image
              className='-rotate-[2deg] px-3 w-20 tablet:w-24 desktop:w-36'
              alt=''
              aria-hidden='true'
              src={CoronaWhitePlayIcon}
              width={140}
              height={37}
            />
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default RegisterNowComponent;
