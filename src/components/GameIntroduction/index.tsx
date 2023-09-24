import cc from 'clsx';
import { Nunito } from 'next/font/google';
import Image from 'next/image';
import styles from './GameIntroduction.module.css';

const nunito = Nunito({
  weight: ['200', '400', '700'],
  subsets: ['latin']
});
const GameIntroductionComponent = () => {
  return (
    <div className='grid grid-cols-2 gap-4 z-10'>
      <div data-aos='fade-right' className='w-full'>
        <Image
          alt=''
          src='/assets/screen/screen-2.png'
          width={704}
          height={694}
        />
      </div>
      <div data-aos='fade-left' className='mt-10'>
        <section className={cc('w-[547px]', nunito.className)}>
          <details className={styles['according']}>
            <summary className={styles['according-summary']}>
              <svg
                className={styles['toggled']}
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='19'
                viewBox='0 0 22 19'
                fill='none'
              >
                <path
                  d='M13.0735 1.34356C13.1798 1.44715 13.6345 1.83828 14.0085 2.20263C16.3607 4.33869 20.2107 9.91102 21.3858 12.8276C21.5747 13.2705 21.9743 14.3903 22 14.9886C22 15.5619 21.868 16.1085 21.6003 16.63C21.2263 17.2801 20.6378 17.8016 19.943 18.0874C19.4608 18.2713 18.018 18.5571 17.9923 18.5571C16.4138 18.8428 13.849 19 11.0147 19C8.31417 19 5.85383 18.8428 4.2515 18.6089C4.22583 18.5821 2.43283 18.2963 1.81867 17.9838C0.696665 17.4105 2.36861e-07 16.2906 3.41629e-07 15.0922L3.50685e-07 14.9886C0.0275006 14.2081 0.724167 12.5668 0.749835 12.5668C1.92683 9.80743 5.588 4.36369 8.02083 2.17584C8.02083 2.17584 8.646 1.55967 9.0365 1.29177C9.5975 0.873841 10.2923 0.666665 10.9872 0.666665C11.7627 0.666665 12.485 0.900632 13.0735 1.34356Z'
                  fill='#EE642A'
                />
              </svg>
              STAFF PICKS WITH ERIN THIS WEEK&apos;S TOP PICKS
            </summary>
            <p className='line-clamp-5 text-lg font-extralight'>
              For the Consuming Campaign discharge, I remained up the entire
              evening playing and wound up leaving school &apos;cos I was
              nodding off all over. Most certainly utilized being debilitated a
              ton in school to mess around. Presently I simply use excursion
              when games I&apos;m energized for emerge.
            </p>
          </details>
          <details className={styles['according']}>
            <summary className={styles['according-summary']}>
              <svg
                className={styles['toggled']}
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='19'
                viewBox='0 0 22 19'
                fill='none'
              >
                <path
                  d='M13.0735 1.34356C13.1798 1.44715 13.6345 1.83828 14.0085 2.20263C16.3607 4.33869 20.2107 9.91102 21.3858 12.8276C21.5747 13.2705 21.9743 14.3903 22 14.9886C22 15.5619 21.868 16.1085 21.6003 16.63C21.2263 17.2801 20.6378 17.8016 19.943 18.0874C19.4608 18.2713 18.018 18.5571 17.9923 18.5571C16.4138 18.8428 13.849 19 11.0147 19C8.31417 19 5.85383 18.8428 4.2515 18.6089C4.22583 18.5821 2.43283 18.2963 1.81867 17.9838C0.696665 17.4105 2.36861e-07 16.2906 3.41629e-07 15.0922L3.50685e-07 14.9886C0.0275006 14.2081 0.724167 12.5668 0.749835 12.5668C1.92683 9.80743 5.588 4.36369 8.02083 2.17584C8.02083 2.17584 8.646 1.55967 9.0365 1.29177C9.5975 0.873841 10.2923 0.666665 10.9872 0.666665C11.7627 0.666665 12.485 0.900632 13.0735 1.34356Z'
                  fill='#EE642A'
                />
              </svg>
              Compelling Games Is 20 Years of age!
            </summary>
            <p className='line-clamp-5 text-lg font-extralight'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum
              nobis dolorum officiis error placeat? Laudantium dolores quisquam
              architecto praesentium, quidem dignissimos laboriosam aliquid ex
              vitae temporibus totam illum ipsam.
            </p>
          </details>
          <details className={styles['according']}>
            <summary className={styles['according-summary']}>
              <svg
                className={styles['toggled']}
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='19'
                viewBox='0 0 22 19'
                fill='none'
              >
                <path
                  d='M13.0735 1.34356C13.1798 1.44715 13.6345 1.83828 14.0085 2.20263C16.3607 4.33869 20.2107 9.91102 21.3858 12.8276C21.5747 13.2705 21.9743 14.3903 22 14.9886C22 15.5619 21.868 16.1085 21.6003 16.63C21.2263 17.2801 20.6378 17.8016 19.943 18.0874C19.4608 18.2713 18.018 18.5571 17.9923 18.5571C16.4138 18.8428 13.849 19 11.0147 19C8.31417 19 5.85383 18.8428 4.2515 18.6089C4.22583 18.5821 2.43283 18.2963 1.81867 17.9838C0.696665 17.4105 2.36861e-07 16.2906 3.41629e-07 15.0922L3.50685e-07 14.9886C0.0275006 14.2081 0.724167 12.5668 0.749835 12.5668C1.92683 9.80743 5.588 4.36369 8.02083 2.17584C8.02083 2.17584 8.646 1.55967 9.0365 1.29177C9.5975 0.873841 10.2923 0.666665 10.9872 0.666665C11.7627 0.666665 12.485 0.900632 13.0735 1.34356Z'
                  fill='#EE642A'
                />
              </svg>
              Irresistible Games Merchandise Is Here
            </summary>
            <p className='line-clamp-5 text-lg font-extralight'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum
              nobis dolorum officiis error placeat? Laudantium dolores quisquam
              architecto praesentium, quidem dignissimos laboriosam aliquid ex
              vitae temporibus totam illum ipsam.
            </p>
          </details>

          <div className='flex items-center justify-center'>
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
                Play Now
              </span>
            </button>
            <button className={styles['btn']} type='button'>
              <svg
                width='155'
                height='41'
                viewBox='0 0 155 41'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M154.5 38.7777C154.5 39.7127 153.711 40.4999 152.7 40.4999H22.302C21.0895 40.4999 20.2572 39.395 20.566 38.3211L30.7901 2.76551C31.0023 2.02753 31.7055 1.49988 32.5261 1.49988H152.7C153.711 1.49988 154.5 2.2871 154.5 3.2221V38.7777Z'
                  stroke='url(#paint0_linear_1_1033)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_1_1033'
                    x1='20.0002'
                    y1='30.6665'
                    x2='150.593'
                    y2='32.6851'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#C1260F' />
                    <stop offset='1' stopColor='#EE642A' />
                  </linearGradient>
                </defs>
              </svg>

              <span className='absolute z-0 top-1/2 left-[5.625rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap'>
                Watch Trailor
              </span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GameIntroductionComponent;
