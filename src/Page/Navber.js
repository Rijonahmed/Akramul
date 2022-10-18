import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
  const manuItem = <>
    <li><Link to='/home'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/projects'>Projects</Link></li>
    <li><Link to='/contactME'>Contact Me</Link></li>
    <li><Link to='/resume'>Resume</Link></li>


  </>



  return (

    <div className='sticky top-0 z-10'>
      <div className="navbar bg-slate-100 text-base-700 font-bold ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-600 text-slate-100 rounded-box w-52">

              {manuItem}

            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to='/' ><span className='text-purple-600'>Akramul Hasan</span></Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {manuItem}

          </ul>
        </div>


      </div>

    </div >

  );
};

export default Navber;