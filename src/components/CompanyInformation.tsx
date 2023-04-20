import { Divider, Icon } from './';
import {
  companyInformationColumnOne,
  companyInformationColumnTwo,
  formText,
} from '../config/constants';
import ArrowRight from '../assets/arrow-right-long.svg';

const CompanyInformation = () => {
  return (
    <section className='mt-28'>
      <Divider />

      <div className='text-lightgray font-monum grid grid-cols-1 md:grid-cols-3 my-16'>
        <ul className='flex flex-col md:gap-1 md:tracking-wider'>
          {companyInformationColumnOne.map((item) => (
            <li key={item.id}>
              <a href=''>{item.content.toUpperCase()}</a>
            </li>
          ))}
        </ul>
        <ul className='flex flex-col md:gap-1'>
          {companyInformationColumnTwo.map((item) => (
            <li key={item.id}>
              <a href=''>{item.content.toUpperCase()}</a>
            </li>
          ))}
        </ul>
        <form className='mt-12 md:mt-0 md:tracking-wider'>
          <div className='text-subtlegray'>MONSTERCAT NEWS</div>
          <div className='font-montserrat italic text-sm tracking-wider mt-4'>
            {formText}
          </div>
          <div className='border-b border-subtlegray mt-6 py-2 flex justify-between items-center'>
            <input
              placeholder='Enter email'
              className='bg-transparent outline-none font-medium font-montserrat text-subtlegray text-lg placeholder:text-subtlegray'
            />
            <button>
              <Icon src={ArrowRight} alt='arrow-right-long' />
            </button>
          </div>
        </form>
      </div>

      <Divider />
    </section>
  );
};

export default CompanyInformation;
