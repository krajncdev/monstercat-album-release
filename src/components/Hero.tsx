import { AlbumI } from '../config/types';
import PlayIcon from '../assets/play.svg';
import ShareIcon from '../assets/share.svg';
import PlayBlackIcon from '../assets/play-black.svg';
import ShareBlackIcon from '../assets/share-black.svg';
import { streamingLogoList } from '../config/constants';
import { LogoListItem, Heading } from './';
import { addNotification } from '../config/functions';
import rickRollAudio from '../assets/rickroll.mp3';
import { useRef } from 'react';

interface HeroPropsI {
  album: AlbumI;
}

const Hero = ({ album }: HeroPropsI) => {
  const { releaseDate, img, artist, name } = album;
  const rickAndRollURL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleShareButtonClick = () => {
    navigator.clipboard.writeText(rickAndRollURL);
    addNotification(`${rickAndRollURL.slice(0, -20)}... has been copied`);
  };

  const handlePlayButtonClick = () => {
    console.log(audioRef);
    if (audioRef?.current?.paused) {
      audioRef.current.play();
    } else {
      audioRef?.current?.pause();
    }
  };

  return (
    <section className='pt-28'>
      <div className='grid lg:grid-cols-2 lg:items-center lg:gap-10 2xl:gap-16 '>
        <div className='flex  flex-col-reverse md:flex-row w-full'>
          <div className='italic flex gap-1 mt-12 md:mt-0 md:writing-mode-tb-rl md:rotate-180 md:mr-1 font-montserrat'>
            <div className='text-green'>Instinct</div>
            <div className='text-lightgray'>— Released {releaseDate}</div>
          </div>
          <img src={img} alt='level-days-album-cover' className='w-full' />
        </div>

        <div className='text-lightgray space-y-2 font-monum mt-6'>
          <h2 className='text-xl md:text-transparent text-stroke md:text-3xl 2xl:text-6xl'>
            {name.toUpperCase()}
          </h2>
          <h3 className='md:text-2xl 2xl:text-4xl'>{artist.toUpperCase()}</h3>

          <div className='flex flex-wrap gap-1 md:gap-2 pt-4 lg:pt-8 2xl:pt-12'>
            <button
              className='flex items-center gap-1 bg-green hover:bg-lightgray hover:text-black px-5 py-4 text-sm group'
              onClick={handlePlayButtonClick}
            >
              <img
                src={PlayIcon}
                alt='play-icon'
                className='h-5 group-hover:hidden'
              />
              <img
                src={PlayBlackIcon}
                alt='play-icon'
                className='h-5 hidden group-hover:block'
              />
              <div>LISTEN NOW</div>
              <audio ref={audioRef} src={rickRollAudio} />
            </button>
            <button
              className='flex items-center gap-2 border border-lightgray px-5 py-4 text-sm hover:bg-lightgray hover:text-black group'
              onClick={handleShareButtonClick}
            >
              <img
                src={ShareIcon}
                alt='share-icon'
                className='h-5 group-hover:hidden'
              />
              <img
                src={ShareBlackIcon}
                alt='share-icon'
                className='h-5 hidden group-hover:block'
              />
              <div>SHARE</div>
            </button>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <Heading title='STREAM IT YOUR WAY' />

        <ul className='flex mt-4 md:mt-8'>
          {streamingLogoList.map((item) => (
            <LogoListItem
              key={item.id}
              item={item}
              customStyles='p-2.5 md:p-6 border border-lightgray'
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
