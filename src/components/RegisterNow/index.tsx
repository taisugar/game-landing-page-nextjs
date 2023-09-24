import cc from "clsx";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import CoronaBlackPlayIcon from "../../../public/assets/icons/corona-black-play.svg";
import CoronaWhitePlayIcon from "../../../public/assets/icons/corona-white-play.svg";
import CoronaIcon from "../../../public/assets/icons/corona.svg";
import styles from "./RegisterNow.module.css";

const bebas_neue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});
const RegisterNowComponent = () => {
  return (
    <section
      data-aos='zoom-in'
      className='relative flex flex-col items-center justify-center w-full h-full'
    >
      <div className='relative w-[847px] h-[525px] z-20 mt-8'>
        <Image
          className='absolute -top-14 -right-5 animate__animated animate__heartBeat animate__infinite'
          alt=''
          src={CoronaIcon}
        />
        <Image
          alt=''
          src='/assets/screen/screen-1.png'
          width={847}
          height={525}
        />
        <div className='absolute bottom-6 left-1/2 -translate-x-1/2'>
          <button className={styles["btn"]} type='button'>
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
            <span className={cc(bebas_neue.className, styles["btn-text"])}>
              Register Now
            </span>
          </button>
        </div>
      </div>

      <div className='absolute w-[150%]'>
        <div className='absolute -rotate-[10deg]'>
          <Marquee className='bg-white h-20' autoFill>
            <Image
              className='rotate-[10deg] px-3'
              alt=''
              aria-hidden='true'
              src={CoronaBlackPlayIcon}
              width={140}
              height={37}
            />
          </Marquee>
        </div>
        <div className='absolute rotate-[3deg]'>
          <Marquee
            className='bg-white bg-opacity-5 h-20'
            autoFill
            direction='right'
          >
            <Image
              className='-rotate-[2deg] px-3'
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
