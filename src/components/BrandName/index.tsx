import Image from 'next/image';
import ChessBrand from '../../../public/assets/brandname/chess.svg';
import GamesradarBrand from '../../../public/assets/brandname/gamesradar+.svg';
import RobloxBrand from '../../../public/assets/brandname/roblox.svg';
import TwitchBrand from '../../../public/assets/brandname/twitch.svg';

const BrandNameComponent = () => {
  return (
    <div data-aos='fade-up' className='flex items-center justify-evenly gap-5'>
      <Image className='mx-11 mb-8' alt='Twitch Brand' src={TwitchBrand} />

      <Image className='mx-11 mt-1' alt='Roblox Brand' src={RobloxBrand} />

      <Image className='mx-11 ' alt='Chess Brand' src={ChessBrand} />

      <Image className='mx-11 ' alt='Gamesradar Brand' src={GamesradarBrand} />
    </div>
  );
};

export default BrandNameComponent;
