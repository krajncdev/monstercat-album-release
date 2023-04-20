import { SongI } from '../config/types';
import PlayIcon from '../assets/play.svg';
import ShareIcon from '../assets/share.svg';
import { Icon } from './';
import { Fragment } from 'react';

interface TrackI {
  track: SongI;
}

const Track = ({ track }: TrackI) => {
  return (
    <li className='text-lightgray font-montserrat flex gap-6 items-center'>
      <div className='text-xl w-5 flex-shrink-0'>{track.id}</div>
      <button className='flex-shrink-0'>
        <Icon src={PlayIcon} alt='play-icon' customStyling='h-7' />
      </button>
      <div>
        <div className='text-lg whitespace-nowrap font-medium leading-none'>
          {track.title}
        </div>
        <div className='flex gap-1'>
          {track.artists.map((artist, i) => {
            return (
              <Fragment key={i}>
                {i !== track.artists.length - 1 ? (
                  <div>{artist} & </div>
                ) : (
                  <div>{artist}</div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      <div className='flex ml-auto gap-1 text-lg flex-shrink-0'>
        <div>{track.duration}</div>
        <button>
          <Icon src={ShareIcon} alt='share-icon' />
        </button>
      </div>
    </li>
  );
};

export default Track;
