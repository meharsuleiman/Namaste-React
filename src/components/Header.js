import React, { useContext } from 'react';

import logo from '../../public/logo.png';
import { NavLink } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import userContext from '../context/userContext';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const { user } = useContext(userContext);

  const isOnline = useOnline();

  const cartItem = useSelector((store) => store.cart.items);

  return (
    <header className='mb-1 flex items-center justify-between px-2 text-base shadow-lg'>
      <div>
        <NavLink to='/'>
          <img data-testid="logo" width='70px' alt='Logo' src={logo} />
        </NavLink>
      </div>

      <div>
        <h4 data-testid='online-status'>Status: {isOnline ? '🟢' : '🔴'}</h4>
      </div>

      <div>
        <ul className='flex items-center space-x-3'>
          <li>
            <NavLink to='/' className='transition-colors hover:text-gray-500'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className='transition-colors hover:text-gray-500'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className='transition-colors hover:text-gray-500'
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/instamart'
              className='transition-colors hover:text-gray-500'
            >
              Instamart
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/cart'
              className='transition-colors hover:text-gray-500'
              data-testid="cart"
            >
              Cart - {cartItem.length}
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border p-3 font-bold transition-all hover:bg-gray-200'>
        <p>{user.name}</p>
      </div>
    </header>
  );
};

export default Header;


