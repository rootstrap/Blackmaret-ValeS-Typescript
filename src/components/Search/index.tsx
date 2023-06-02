import { useState, useEffect, InputHTMLAttributes } from 'react';
import classnames from 'classnames';
import SearchIcon from 'assets/Search.svg';

export enum SearchVariants {
  Desktop = 'desktop',
  Mobile = 'mobile',
}

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: SearchVariants;
  placeholder: string;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Search = ({ variant, placeholder, searchTerm, setSearchTerm, ...rest }: SearchProps) => {
  const [searchValue, setSearchValue] = useState(searchTerm);

  const variants = classnames('flex h-10 items-center justify-between rounded-md bg-white py-2', {
    'mr-6 w-[28.5rem] px-3 ': variant === SearchVariants.Mobile,
    'block w-full px-4 lg:hidden': variant === SearchVariants.Desktop,
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (
    event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    if ('key' in event) {
      if (event.key === 'Enter') {
        setSearchTerm(searchValue);
      }
    } else {
      setSearchTerm(searchValue);
    }
  };

  useEffect(() => {
    if (searchValue !== searchTerm) {
      setSearchTerm(searchValue);
    }
  }, [searchValue, setSearchTerm, searchTerm]);

  return (
    <div className={variants}>
      <input
        type='text'
        placeholder={placeholder}
        value={searchValue}
        onChange={handleSearchChange}
        onKeyDown={handleSearchSubmit}
        {...rest}
      />
      <button onClick={handleSearchSubmit}>
        <img src={SearchIcon} alt='Search' />
      </button>
    </div>
  );
};

export default Search;
