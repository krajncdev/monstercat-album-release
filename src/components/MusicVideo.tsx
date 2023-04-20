import { Heading } from './';
import { albumContent } from '../config/constants';

const MusicVideo = () => {
  return (
    <section className='mt-10 2xl:mt-20'>
      <Heading title='MUSIC VIDEO' />

      <iframe
        src={albumContent.youtubeURL}
        allow='fullscreen'
        className=' aspect-video w-full mt-4 md:mt-10 outline-none'
      ></iframe>
    </section>
  );
};

export default MusicVideo;
