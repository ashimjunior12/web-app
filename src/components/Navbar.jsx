import { useState } from 'react';
import logo from '../assets/images/Layer_1.png';
import { menuItems, searchBar, socialMediaLinks } from '../data/data';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-[#0b0117] py-4 px-4 md:px-8 lg:px-12'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* Logo section */}
          <div className='flex items-center'>
            <div className='logo flex items-center gap-2 pr-2'>
              <img src={logo} alt='Logo' className='h-10 md:h-14' />
              <div className='logo-text font-bold text-xl md:text-xl'>
                <span className='text-[#d399f7]'>
                  bycraft<span className='text-[#964ed1]'>ers</span>
                </span>
              </div>
            </div>
            {/* Desktop Menu */}
            <ul className='hidden md:flex items-center gap-4 lg:gap-8 pl-3 md:pl-5'>
              {menuItems.map((menu) => (
                <li key={menu.id} className='list-none uppercase'>
                  <a
                    href={menu.link}
                    className='text-white hover:text-gray-300 text-sm lg:text-base'
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger menu button for mobile */}
          <button
            className='md:hidden text-white focus:outline-none cursor-pointer '
            onClick={toggleMenu}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>

          {/* Search and social icons for desktop */}
          <div className='hidden md:flex ml-2 items-center gap-4'>
            <ul className='flex gap-4'>
              {socialMediaLinks.map((item) => (
                <li key={item.id} className='list-none flex items-center'>
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#7b2cbf] text-lg flex items-center gap-1'
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
            <div className='relative'>
              <input
                type='text'
                placeholder={searchBar.placeholder}
                className='pl-10 pr-3 py-1 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 w-32 lg:w-auto'
              />
              <div className='absolute left-2 top-1/2 transform -translate-y-1/2 text-white'>
                {searchBar.icon}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className='md:hidden mt-4 py-2 border-t border-gray-700 '>
            <ul className='flex flex-col space-y-3 pb-3 '>
              {menuItems.map((menu) => (
                <li key={menu.id} className='list-none uppercase'>
                  <a
                    href={menu.link}
                    className='text-white hover:text-gray-300 block'
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className='flex items-center justify-between mt-4 border-t border-gray-700 pt-3'>
              <ul className='flex gap-4'>
                {socialMediaLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-[#7b2cbf] text-lg flex items-center gap-1'
                    >
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
              <div className='relative'>
                <input
                  type='text'
                  placeholder={searchBar.placeholder}
                  className='pl-10 pr-3 py-1 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 w-40'
                />
                <div className='absolute left-2 top-1/2 transform -translate-y-1/2 text-white'>
                  {searchBar.icon}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
