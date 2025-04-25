import React from 'react'
import WishlistIcon from '../common/WishlistIcon'
import AccountIcon from '../common/AccountIcon'
import CartIcon from '../common/CartIcon'

const Navigation = () => {
  return (
    <nav className="flex items-center py-6 px-16 justify-between gap-16">
      <div className="flex items-center gap-6">
        {/* Logo */}
        <a href="/" className="text-black text-3xl font-bold gap-8">
          ShopEase
        </a>
      </div>
      <div className="flex flex-wrap items-center gap-10 flex-1">
        {/* Nav Items */}
        <ul className="flex gap-10 text-gray-600 hover:text-black">
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/mens">Men</a>
          </li>
          <li>
            <a href="/womens">Women</a>
          </li>
          <li>
            <a href="/kids">Kids</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        {/* Searchbar */}
        <div className="border rounded-lg flex overflow-hidden bg-gray-100">
          <div className="flex items-center justify-center px-4 border-1 ">
            <svg
              className="h-4 w-4 text-grey-dark"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
            <input
              type="text"
              className="px-4 py-2 outline-none bg-gray-100"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div >{/* Action items - icons */}
        <ul className='flex flex-wrap items-center gap-4'>
            <li><button><WishlistIcon /></button></li>
            <li><button><AccountIcon /></button></li>
            <li><a href="/cart-items"><CartIcon /></a></li>
        </ul>


      </div>
    </nav>
  );
}

export default Navigation