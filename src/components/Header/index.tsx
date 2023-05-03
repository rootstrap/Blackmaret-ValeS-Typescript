import { useState } from 'react';
import Logo from 'components/shared/Icons/Logo';
import Button, { ButtonVariants } from 'components/shared/ButtonsLarge';

interface DropdownItem {
  id: number;
  value: string;
}

const sampleItems: DropdownItem[] = [
  { id: 1, value: 'Item 1' },
  { id: 2, value: 'Item 2' },
  { id: 3, value: 'Item 3' },
];

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className='grid h-24 w-screen grid-cols-12 items-center gap-4 bg-black px-4'>
      <div className='col-start-2'>
        <Logo className='h-7 w-44 text-white' />
      </div>
      <div className='col-start-4'>
        <input
          type='text'
          placeholder='Search for products'
          className='ml-24 mr-6 h-10 w-[28.5rem] rounded-md bg-white px-3 py-2'
        />
      </div>
      <div className='col-start-9'>
        <Button
          variant={ButtonVariants.Primary}
          notBold
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          My Account
        </Button>
      </div>
      {dropdownOpen && (
        <ul className='absolute mt-2 w-48 rounded-md bg-white py-2 shadow-lg'>
          {sampleItems.map((item) => (
            <li key={item.id} className='cursor-pointer px-4 py-2 hover:bg-gray-200'>
              {item.value}
            </li>
          ))}
        </ul>
      )}
      <div className='col-start-11'>
        <Button variant={ButtonVariants.Primary} notBold>
          Shopping Cart
        </Button>
      </div>
    </header>
  );
};

export default Header;
