'use client';
import cc from 'clsx';
import { Nunito } from 'next/font/google';
import Image from 'next/image';
import Slider from 'react-slick';
import styles from './FeedbackCarousel.module.css';
import './Sliders.css';

const nunito = Nunito({
  weight: ['200', '400', '700'],
  subsets: ['latin']
});
const FeedbackCarouselComponent = () => {
  return (
    <div data-aos='fade-down' className='w-full text-white py-20 relative'>
      <Slider
        className='center'
        centerMode
        focusOnSelect
        infinite
        centerPadding={'100px'}
        slidesToShow={3}
        speed={500}
        dots
        arrows={false}
        responsive={[
          {
            breakpoint: 712,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1
            }
          }
        ]}
      >
        <div>
          <div className={styles['cart-background']}>
            <div
              className={cc(
                nunito.className,
                'relative w-full h-full font-extralight text-xs px-5 tablet:text-sm text-center desktop:px-10'
              )}
            >
              <svg
                className='slick-quote absolute -top-7 right-10 z-100'
                xmlns='http://www.w3.org/2000/svg'
                width='72'
                height='62'
                viewBox='0 0 72 62'
                fill='none'
              >
                <path
                  d='M72 35.9381L55.1077 0H40.9846L52.6154 32.9204H42.6462V62H72V35.9381ZM31.0154 35.9381L14.1231 0H0L11.6308 32.9204H1.66154V62H31.0154V35.9381Z'
                  fill='url(#paint0_linear_1_1064)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_1_1064'
                    x1='-1.16421e-07'
                    y1='45.9833'
                    x2='69.6639'
                    y2='46.3538'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#C1260F' />
                    <stop offset='1' stopColor='#EE642A' />
                  </linearGradient>
                </defs>
              </svg>
              <section className='flex items-center justify-center gap-3 -mt-2 mb-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </section>
              <p>
                Quick and adaptable, SoundPart reliably meets these key
                necessities. The capacity to talk straightforwardly with a
                senior guarantor makes this conceivable. Quick and adaptable,
                SoundPart reliably meets these key necessities. The capacity to
                talk straightforwardly with a senior guarantor makes this
                conceivable.
              </p>
              <p className='mt-1'>
                Quick and adaptable, SoundPart reliably meets these key
                necessities. The capacity to talk straightforwardly with a
                senior guarantor makes this conceivable.
              </p>
              <Image
                className='mt-2'
                alt='Avatar Esther Howard'
                src='/assets/avatars/avatar-1.png'
                width={52}
                height={52}
              />
              <p className='font-bold mb-5'>Esther Howard</p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles['cart-background']}>
            <div
              className={cc(
                nunito.className,
                'relative w-full h-full font-extralight text-sm text-center px-10'
              )}
            >
              <svg
                className='slick-quote absolute -top-7 right-10 z-100'
                xmlns='http://www.w3.org/2000/svg'
                width='72'
                height='62'
                viewBox='0 0 72 62'
                fill='none'
              >
                <path
                  d='M72 35.9381L55.1077 0H40.9846L52.6154 32.9204H42.6462V62H72V35.9381ZM31.0154 35.9381L14.1231 0H0L11.6308 32.9204H1.66154V62H31.0154V35.9381Z'
                  fill='url(#paint0_linear_1_1064)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_1_1064'
                    x1='-1.16421e-07'
                    y1='45.9833'
                    x2='69.6639'
                    y2='46.3538'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#C1260F' />
                    <stop offset='1' stopColor='#EE642A' />
                  </linearGradient>
                </defs>
              </svg>
              <section className='flex items-center justify-center gap-3 -mt-2 mb-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </section>
              <p>
                Quick and adaptable, SoundPart reliably meets these key
                necessities. The capacity to talk straightforwardly with a
                senior guarantor makes this conceivable. Quick and adaptable,
                SoundPart reliably meets these key necessities. The capacity to
                talk straightforwardly with a senior guarantor makes this
                conceivable.
              </p>
              <p className='mt-1'>
                Quick and adaptable, SoundPart reliably meets these key
                necessities. The capacity to talk straightforwardly with a
                senior guarantor makes this conceivable.
              </p>
              <Image
                className='mt-2'
                alt='Avatar Cody Fisher'
                src='/assets/avatars/avatar-2.png'
                width={52}
                height={52}
              />
              <p className='font-bold mb-5'>Cody Fisher</p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles['cart-background']}>
            <div
              className={cc(
                nunito.className,
                'relative w-full h-full font-extralight text-sm text-center px-10'
              )}
            >
              <svg
                className='slick-quote absolute -top-7 right-10 z-100'
                xmlns='http://www.w3.org/2000/svg'
                width='72'
                height='62'
                viewBox='0 0 72 62'
                fill='none'
              >
                <path
                  d='M72 35.9381L55.1077 0H40.9846L52.6154 32.9204H42.6462V62H72V35.9381ZM31.0154 35.9381L14.1231 0H0L11.6308 32.9204H1.66154V62H31.0154V35.9381Z'
                  fill='url(#paint0_linear_1_1064)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_1_1064'
                    x1='-1.16421e-07'
                    y1='45.9833'
                    x2='69.6639'
                    y2='46.3538'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#C1260F' />
                    <stop offset='1' stopColor='#EE642A' />
                  </linearGradient>
                </defs>
              </svg>
              <section className='flex items-center justify-center gap-3 -mt-2 mb-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </section>
              <p>
                Quick and adaptable, SoundPart reliably meets these key
                necessities. The capacity to talk straightforwardly with a
                senior guarantor makes this conceivable. Quick and adaptable,
                SoundPart reliably meets these key necessities. The capacity to
                talk straightforwardly with a senior guarantor makes this
                conceivable.
              </p>
              <p className='mt-1'>
                Quick and adaptable, SoundPart reliably meets these key
                necessities. The capacity to talk straightforwardly with a
                senior guarantor makes this conceivable.
              </p>
              <Image
                className='mt-2'
                alt='Avatar Guy Hawkins'
                src='/assets/avatars/avatar-3.png'
                width={52}
                height={52}
              />
              <p className='font-bold mb-5'>Guy Hawkins</p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles['cart-background']}>
            <div
              className={cc(
                nunito.className,
                'relative w-full h-full font-extralight text-sm text-center px-10'
              )}
            >
              <svg
                className='slick-quote absolute -top-7 right-10 z-100'
                xmlns='http://www.w3.org/2000/svg'
                width='72'
                height='62'
                viewBox='0 0 72 62'
                fill='none'
              >
                <path
                  d='M72 35.9381L55.1077 0H40.9846L52.6154 32.9204H42.6462V62H72V35.9381ZM31.0154 35.9381L14.1231 0H0L11.6308 32.9204H1.66154V62H31.0154V35.9381Z'
                  fill='url(#paint0_linear_1_1064)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_1_1064'
                    x1='-1.16421e-07'
                    y1='45.9833'
                    x2='69.6639'
                    y2='46.3538'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#C1260F' />
                    <stop offset='1' stopColor='#EE642A' />
                  </linearGradient>
                </defs>
              </svg>
              <section className='flex items-center justify-center gap-3 -mt-2 mb-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 33 33'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_1067)'>
                    <path
                      d='M16.3214 23.4892L24.727 28.5625L22.4964 19.0008L29.9226 12.5675L20.1434 11.7378L16.3214 2.72021L12.4995 11.7378L2.72021 12.5675L10.1465 19.0008L7.91587 28.5625L16.3214 23.4892Z'
                      fill='#F8A401'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_1067'>
                      <rect width='32.6429' height='32.6429' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </section>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                earum assumenda illum expedita dolore, magnam ratione incidunt
                fuga magni distinctio animi illo? Expedita assumenda incidunt
                odio nihil quasi vero quis.
              </p>
              <p className='mt-1'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate autem dolores quod, corporis reiciendis aliquam
                ratione explicabo, hic quibusdam veritatis pariatur inventore
                dolorem quos dolore minima? Eius nisi eveniet amet.
              </p>
              <Image
                className='mt-2'
                alt='Avatar Robert Cruse'
                src='/assets/avatars/avatar-1.png'
                width={52}
                height={52}
              />
              <p className='font-bold mb-5'>Robert Cruse</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default FeedbackCarouselComponent;
