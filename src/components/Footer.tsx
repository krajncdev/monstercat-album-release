import { footerAck, rightsReserved, footerLogoList } from '../config/constants';
import { Icon } from './';

const Footer = () => {
  return (
    <section className='font-montserrat text-lightgray mt-8'>
      <div className='grid md:grid-cols-2'>
        <div className='italic tracking-wider'>{rightsReserved}</div>

        <ul className=' flex flex-wrap gap-x-5 gap-y-2 mt-4 md:mt-0 mb-16 items-center justify-end'>
          {footerLogoList.map((logo) => (
            <li key={logo.id}>
              <button>
                <Icon src={logo.src} alt={logo.alt} key={logo.id} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className='pb-10'>
        {footerAck.map((item, i) => (
          <div key={i} className='text-sm opacity-90 text-justify mt-4'>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
