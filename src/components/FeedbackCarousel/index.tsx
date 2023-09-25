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
    <div
      data-aos='fade-down'
      className='w-full text-white pt-5 pb-12 tablet:py-14 relative'
    >
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
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]}
      >
        <div>
          <div
            className={cc(
              styles['cart-background'],
              'w-52 tablet:w-80 desktop:w-[580px] desktop:h-[320px]'
            )}
          >
            <div
              className={cc(
                nunito.className,
                'relative w-full h-full font-extralight text-center text-[10px] px-3 tablet:px-5 tablet:text-sm desktop:px-10'
              )}
            >
              <svg
                className='slick-quote absolute top-0 right-5 z-100 w-4 h-3 tablet:-top-1 tablet:right-8 tablet:w-6 tablet:h-5 desktop:-top-4 desktop:right-10 desktop:w-10 desktop:h-10'
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
              <section className='flex items-center justify-center gap-1 mt-4 mb-1 tablet:mt-5 tablet:mb-2 desktop:gap-3'>
                <svg
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                className='mt-2 w-8 h-8 tablet:w-10 tablet:h-10 desktop:w-12 desktop:h-12 desktop:mt-4'
                alt='Avatar Esther Howard'
                src='/assets/avatars/avatar-1.png'
                width={52}
                height={52}
              />
              <p className='font-bold mb-10 tablet:mb-12'>Esther Howard</p>
            </div>
          </div>
        </div>
        <div>
          <div
            className={cc(
              styles['cart-background'],
              'w-52 tablet:w-80 desktop:w-[580px] desktop:h-[320px]'
            )}
          >
            <div
              className={cc(
                nunito.className,
                'relative w-full h-full font-extralight text-center text-[10px] px-3 tablet:px-5 tablet:text-sm desktop:px-10'
              )}
            >
              <svg
                className='slick-quote absolute top-0 right-5 z-100 w-4 h-3 tablet:-top-1 tablet:right-8 tablet:w-6 tablet:h-5 desktop:-top-4 desktop:right-10 desktop:w-10 desktop:h-10'
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
              <section className='flex items-center justify-center gap-1 mt-4 mb-1 tablet:mt-5 tablet:mb-2 desktop:gap-3'>
                <svg
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                className='mt-2 w-8 h-8 tablet:w-10 tablet:h-10 desktop:w-12 desktop:h-12 desktop:mt-4'
                alt='Avatar Cody Fisher'
                src='/assets/avatars/avatar-2.png'
                width={52}
                height={52}
              />
              <p className='font-bold mb-10 tablet:mb-12'>Cody Fisher</p>
            </div>
          </div>
        </div>
        <div>
          <div
            className={cc(
              styles['cart-background'],
              'w-52 tablet:w-80 desktop:w-[580px] desktop:h-[320px]'
            )}
          >
            <div
              className={cc(
                nunito.className,
                'relative w-full h-full font-extralight text-center text-[10px] px-3 tablet:px-5 tablet:text-sm desktop:px-10'
              )}
            >
              <svg
                className='slick-quote absolute top-0 right-5 z-100 w-4 h-3 tablet:-top-1 tablet:right-8 tablet:w-6 tablet:h-5 desktop:-top-4 desktop:right-10 desktop:w-10 desktop:h-10'
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
              <section className='flex items-center justify-center gap-1 mt-4 mb-1 tablet:mt-5 tablet:mb-2 desktop:gap-3'>
                <svg
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                className='mt-2 w-8 h-8 tablet:w-10 tablet:h-10 desktop:w-12 desktop:h-12 desktop:mt-4'
                alt='Avatar Guy Hawkins'
                src='/assets/avatars/avatar-3.png'
                width={52}
                height={52}
              />
              <p className='font-bold mb-10 tablet:mb-12'>Guy Hawkins</p>
            </div>
          </div>
        </div>
        <div>
          <div
            className={cc(
              styles['cart-background'],
              'w-52 tablet:w-80 desktop:w-[580px] desktop:h-[320px]'
            )}
          >
            <div
              className={cc(
                nunito.className,
                'relative w-full h-full font-extralight text-center text-[10px] px-3 tablet:px-5 tablet:text-sm desktop:px-10'
              )}
            >
              <svg
                className='slick-quote absolute top-0 right-5 z-100 w-4 h-3 tablet:-top-1 tablet:right-8 tablet:w-6 tablet:h-5 desktop:-top-4 desktop:right-10 desktop:w-10 desktop:h-10'
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
              <section className='flex items-center justify-center gap-1 mt-4 mb-1 tablet:mt-5 tablet:mb-2 desktop:gap-3'>
                <svg
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                  className='w-3 h-3 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7'
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
                className='mt-2 w-8 h-8 tablet:w-10 tablet:h-10 desktop:w-12 desktop:h-12 desktop:mt-4'
                alt='Avatar Robert Cruse'
                src='/assets/avatars/avatar-3.png'
                width={52}
                height={52}
              />
              <p className='font-bold mb-10 tablet:mb-12'>Robert Cruse</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default FeedbackCarouselComponent;
