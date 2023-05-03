import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';


const Header = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogout = ()=>{
    logOut()
        .then()
        .catch(error=>
          console.log(error)
        )
  }
    return (
        <div >
          

<div >
        <nav className="navbar  bg-neutral">
  <div className="navbar-start  ">
  <div className="dropdown lg:hidden">
      <label tabIndex={0} className="btn btn-ghost lg:none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
  <NavLink exact to='/' activeClassName='active-link'>
    Home
  </NavLink>
</li>
<li>
  <NavLink to="/login" activeClassName='active-link'>
    Login
  </NavLink>
</li>
<li tabIndex={0}>
  <NavLink to='/blogs' activeClassName='active-link'>
    Blogs
  </NavLink>
</li>
      </ul>
    </div>

    <Link href='/' className="normal-case font-bold text-xl text-accent italic ms-2">  Flavour OF Thai - Chef</Link>

    
  </div>
 

  
    <div className="navbar-end font-bold">
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-3">
        <li>
  <NavLink exact to='/' activeClassName='active-link'>
    Home
  </NavLink>
</li>
<li>
  <NavLink to="/login" activeClassName='active-link'>
    Login
  </NavLink>
</li>
<li tabIndex={0}>
  <NavLink to='/blogs' activeClassName='active-link'>
    Blogs
  </NavLink>
</li>
          
        </ul>
      </div>
    </div>
  
  <div className="navbar-end mr-5">
  <div className='flex flex-row '>
          
          <p className='tooltip tooltip-bottom tooltip-success' data-tip={user && user.displayName }>
          { user && <img className='w-10 rounded-full mx-3' src={user.photoURL } /> }
          </p>
          

          {  user ? <button  onClick={handleLogout} className='mx-3 btn btn-primary '>LogOut</button> : 
          <Link to='/login'><button className='btn btn-primary'>LogIn</button>
          </Link>}
        </div>
  </div>
</nav><hr className='border-slate-400 my-2' />
      </div>
        </div>


// chef details



    );
};

export default Header;