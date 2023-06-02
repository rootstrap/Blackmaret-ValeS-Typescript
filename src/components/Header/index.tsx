import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { revokeCredentials } from 'store/auth.reducer';
import { useLogOutMutation } from 'services/blackMarketApi';
import Button, { ButtonSize, ButtonVariants } from 'components/shared/Buttons';
import Logo from 'components/shared/Icons/Logo';
import Cart from 'components/shared/Icons/Cart';
import Arrow from 'components/shared/Icons/Arrow';
import HamburgerMenu from 'components/shared/Icons/HambMenu';
import Search, { SearchVariants } from 'components/Search';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [logOutRequest] = useLogOutMutation();
  const [searchTerm, setSearchTerm] = useState('');

  async function handleLogout() {
    const body = {
      refresh: localStorage.getItem('refresh_token'),
    };
    try {
      await logOutRequest(body);
    } catch (error) {
      return;
    }
    dispatch(revokeCredentials());
  }

  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <header className='h-28 w-screen bg-black lg:h-24'>
      <div className='mx-auto flex h-14 items-center justify-between px-4 lg:h-24'>
        <div>
          <Logo className='h-7 w-44 text-white' />
        </div>
        <div className='hidden lg:block'>
          <Search
            variant={SearchVariants.Mobile}
            placeholder={'Search for products'}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
        <div className='hidden lg:flex'>
          <div className='relative mr-8'>
            <Button
              variant={ButtonVariants.Primary}
              notBold
              size={ButtonSize.Medium}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className='hidden lg:inline'>My Account</span>
              <Arrow className={'ml-2 inline text-white'} />
            </Button>
            {dropdownOpen && (
              <ul className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-2 shadow-lg'>
                <li className='cursor-pointer px-4 py-2 hover:bg-gray-200' onClick={handleLogout}>
                  Log out
                </li>
              </ul>
            )}
          </div>
          <div>
            <Button variant={ButtonVariants.Primary} notBold size={ButtonSize.Medium}>
              <span className='hidden lg:inline'>Shopping Cart</span>
              <Cart className='mx-2 inline text-white' />
            </Button>
          </div>
        </div>
        <div className='flex items-center justify-end space-x-2 pr-4 lg:hidden'>
          <div>
            <Button variant={ButtonVariants.Primary} notBold size={ButtonSize.Small}>
              <Cart className='inline text-white' />
            </Button>
          </div>
          <div>
            <Button
              variant={ButtonVariants.Primary}
              notBold
              size={ButtonSize.Small}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <HamburgerMenu className='inline text-white' />
            </Button>
          </div>
        </div>
      </div>
      <div className='block bg-light-grey px-4 py-2 lg:hidden'>
        <Search
          variant={SearchVariants.Desktop}
          placeholder={'Search for products'}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      {dropdownOpen && (
        <ul className='absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-2 shadow-lg lg:hidden'>
          <li className='cursor-pointer px-4 py-2 hover:bg-gray-200' onClick={handleLogout}>
            Log out
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
