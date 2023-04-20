import { useSnapshot } from 'valtio';
import { motion } from 'framer-motion';

import { state } from '../store';
import { hamburgerVariants } from '../config/variants';
import MonstercatLogoBigIcon from '../assets/monstercat-logo-big.svg';
import CloseIcon from '../assets/close.svg';
import { hamburgerMenuListContent } from '../config/constants';
import { HamburgerMenuListElement, LogoListItem } from './';
import { companyLogoList } from '../config/constants';

const HamburgerMenu = () => {
  const snap = useSnapshot(state);
  const { isHamburgerOpen } = snap;

  const handleCloseButtonClick = () => {
    state.isHamburgerOpen = false;
  };

  return (
    <motion.div
      className='fixed z-50 right-0 flex flex-col top-0 bottom-0 bg-black h-screen w-full max-w-[26rem] p-8'
      animate={isHamburgerOpen ? 'open' : 'closed'}
      variants={hamburgerVariants}
    >
      <div className='flex items-center justify-between'>
        <a href=''>
          <img
            src={MonstercatLogoBigIcon}
            alt='monstercat-logo-icon'
            className='h-10'
          />
        </a>

        <button onClick={handleCloseButtonClick}>
          <img src={CloseIcon} alt='close-icon' className='h-10' />
        </button>
      </div>

      <ul className='flex flex-col gap-5 mt-10 lg:mt-16 max-h-[32rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
        {hamburgerMenuListContent.map((item) => (
          <HamburgerMenuListElement key={item.id} data={item} />
        ))}
      </ul>

      <div className='mt-auto'>
        <ul className='flex gap-3'>
          {companyLogoList.map((item) => (
            <LogoListItem key={item.id} item={item} />
          ))}
        </ul>

        <div className=' font-monum text-lightgray flex gap-4 mt-8'>
          <button className='border-lightgray border py-1 px-3.5'>
            SIGN IN
          </button>
          <button>OR SIGN UP</button>
        </div>
      </div>
    </motion.div>
  );
};

export default HamburgerMenu;
