import React from "react";
import {Wishlist} from '../Common/Wishlist'
import {AccountIcon} from '../Common/AccountIcon'
import {CartIcon} from '../Common/CartIcon'

const Navigation = () => {
  return (
    <nav className="bg-white flex justify-between items-center px-8 py-4 sticky top-0 z-50">
      <div>
        {/* logo */}
        <a href="/" className="text-lg text-3xl font-semibold">ShopEase</a>
      </div>
      <ul className="flex gap-8 text-gray-600 hover:text-black">
        <li><a href="/">Shop</a></li>
        <li><a href="/">Men</a></li>
        <li><a href="/">Women</a></li>
        <li><a href="/">Kids</a></li>
      </ul>
      <div className='flex justify-center'>
        {/* Search bar */}
        <div className='border rounded flex overflow-hidden'>
          <div className="flex items-center justify-center px-4 border-1">
            <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
            <input type="text" className="px-4 py-2 outline-none" placeholder="Search"/>
          </div> 
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <ul className="flex gap-6">
          <li><button><Wishlist /></button></li>
          <li><button><AccountIcon /></button></li>
          <li><button><CartIcon /></button></li>
        </ul>
      </div>

      
        
        
    </nav>
  );
};

export default Navigation;
