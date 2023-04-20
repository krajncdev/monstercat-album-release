import { LogoI } from '../config/types';
import { Icon } from './';

interface LogoListItemPropsI {
  item: LogoI;
  customStyles?: string;
}

const LogoListItem = ({ item, customStyles }: LogoListItemPropsI) => {
  const { id, src, alt } = item;
  return (
    <li className={`${customStyles} flex items-center`}>
      <button>
        <Icon src={src} alt={alt} key={id} />
      </button>
    </li>
  );
};

export default LogoListItem;
