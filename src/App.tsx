import {
  BackgroundImage,
  HamburgerMenu,
  Heading,
  Hero,
  Navbar,
  Track,
  MusicVideo,
  CompanyInformation,
  Footer,
  Notifications,
} from './components';
import { albumContent } from './config/constants';

function App() {
  return (
    <div className='App'>
      <Notifications />
      <BackgroundImage />
      <Navbar />
      <HamburgerMenu />

      <div className='px-4 bg-black relative flex justify-center'>
        <div className='relative z-20 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] 2xl:max-w-[1280px] 3xl:max-w-[1536px]'>
          <Hero album={albumContent} />

          <section className='mt-10 2xl:mt-20'>
            <Heading title='TRACK LIST' />
            <ul className='mt-6 md:mt-10 flex flex-col gap-6'>
              {albumContent.songs.map((song) => (
                <Track track={song} key={song.id} />
              ))}
            </ul>
          </section>
          <MusicVideo />
          <CompanyInformation />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
