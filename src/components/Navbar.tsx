import { state } from '../store';
import MonstercatLogoIcon from '../assets/monstercat-logo.webp';
import HamburgerIcon from '../assets/hamburger.svg';
import { companyLogoList } from '../config/constants';
import { LogoListItem } from './';

const Navbar = () => {
  const handleHamburgerButton = () => {
    state.isHamburgerOpen = true;
  };

  return (
    <nav className='py-2 px-4 xl:px-10 sm:py-4 w-full xl:bg-transparent xl:backdrop-blur-none bg-[rgba(0,0,0,0.7)] backdrop-blur-md flex items-center justify-between sticky top-0 z-50'>
      <a href=''>
        <img
          src={MonstercatLogoIcon}
          alt='monstercat-logo-icon'
          className='h-8 md:h-12 xl:h-14'
        />
      </a>

      <ul className='hidden sm:flex sm:gap-6 xl:absolute xl:right-10 xl:top-32 xl:flex-col'>
        {companyLogoList.map((item) => (
          <LogoListItem item={item} key={item.id} />
        ))}
      </ul>

      <button onClick={handleHamburgerButton}>
        <img src={HamburgerIcon} alt='hamburger-menu-icon' className='h-8' />
      </button>
    </nav>
  );
};

export default Navbar;
