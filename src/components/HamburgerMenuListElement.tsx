import { motion } from 'framer-motion';

import { HamburgerMenuListElementI } from '../config/types';
import ArrowrightIcon from '../assets/arrow-right.svg';
import { useState } from 'react';

interface HamburgerMenuListElementProps {
  data: HamburgerMenuListElementI;
}

const HamburgerMenuListElement = ({ data }: HamburgerMenuListElementProps) => {
  const { id, name, elements } = data;
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => setIsActive(!isActive);

  return (
    <li>
      <button className='flex items-center gap-2' onClick={handleButtonClick}>
        <div className=' text-lightgray font-monum '>{name.toUpperCase()}</div>
        {elements && (
          <img
            src={ArrowrightIcon}
            alt='arrow-right-icon'
            className={`w-4 h-4 ${
              isActive && 'rotate-90'
            } tranition ease-in duration-200`}
          />
        )}
      </button>
      {elements && isActive && (
        <motion.ul
          className='flex flex-col gap-3 mt-4 ml-4'
          initial={{ scaleY: 0, translateY: '-50%' }}
          animate={{ scaleY: 1, translateY: 0 }}
          transition={{ duration: 0.3 }}
        >
          {elements.map((element) => (
            <li key={element.id} className=' text-gray font-monum text-sm'>
              {element.content.toUpperCase()}
            </li>
          ))}
        </motion.ul>
      )}
    </li>
  );
};

export default HamburgerMenuListElement;
