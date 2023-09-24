import Image from 'next/image';
import styles from './CardGamePlayNow.module.css';
import cc from 'clsx';
import { Bebas_Neue } from 'next/font/google';

interface IProps {
  gameImageSrc: string;
  gameImageAlt: string;
}

const bebas_neue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin']
});
const CardGamePlayNowComponent = ({ gameImageSrc, gameImageAlt }: IProps) => {
  return (
    <div
      data-aos='zoom-in'
      className='relative w-[230px] h-[295px] desktop:w-[350px] desktop:h-[445px] rounded-xl'
    >
      <Image alt={gameImageAlt} src={gameImageSrc} fill />
      <div className='absolute -bottom-2 left-1/2 -translate-x-1/2'>
        <button className={styles['btn']} type='button'>
          <svg
            className='absolute -bottom-5 left-1/2 -translate-x-1/2 w-[266px] h-[44px] desktop:w-[285px] desktop:h-[57px]'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 285 57'
            fill='none'
          >
            <path
              d='M0.43042 0.322876L36.1901 56.7979H248.663L284.423 0.322876H0.43042Z'
              fill='url(#paint0_linear_1_871)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_1_871'
                x1='0.430419'
                y1='42.2085'
                x2='275.071'
                y2='48.5336'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#C1260F' />
                <stop offset='1' stopColor='#EE642A' />
              </linearGradient>
            </defs>
          </svg>
          <span className={cc(bebas_neue.className, styles['btn-text'])}>
            Play Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default CardGamePlayNowComponent;
