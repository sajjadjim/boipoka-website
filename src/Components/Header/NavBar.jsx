import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  const links = <>
  <Link to='/'><li className='m-2'>Home</li></Link>
  <Link to='/about'><li className='m-2'>About</li></Link>
  <Link to='/readList'>Read List</Link>
  </>
    return (
      <div>
      <div className="navbar bg-base-100 shadow-sm">
<div className="navbar-start">
<div className="dropdown">
<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
</div>
<ul
  tabIndex={0}
  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
  <li><a>Book</a></li>
  <li>
    <a>Details</a>
    <ul className="p-2">
      <li><Link className=' text-green-600' to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>
  </li>
</ul>
</div>
<Link to='/'>Book Vibe📚</Link>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1">
<li><Link className='border-1 border-green-600 text-green-600' to='/'>Home</Link></li>
<li>
  <details>
    <summary>Listed Book</summary>
    <ul className="p-2 m-2">
      
      {
        links
      }
    </ul>
  </details>
</li>
<li><Link to='/about'>About</Link></li>
</ul>
</div>
<div className="navbar-end gap-1">
<a className="btn bg-amber-500">Sing In</a>
<a className="btn bg-green-600">Sing Up</a>
</div>
</div>
  </div>
    );
};

export default NavBar;