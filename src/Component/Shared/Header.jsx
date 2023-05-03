import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
            {/* <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href='/'>Homepage</a></li>
        <li><a href='/login'>Login</a></li>
        <li><a href='/blogs'>Blogs</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a href='/' className="normal-case font-bold text-xl text-orange-600 italic">  Flavour OF Thai - Chef</a>
  </div>
  <div className="navbar-end">
  <div >
  <label tabIndex={0} >
        <div className='flex flex-row '>
          
          <p className='tooltip tooltip-bottom tooltip-success' data-tip={user && user.displayName }>
          { user && <img className='w-10 rounded-full mx-3' src={user.photoURL } /> }
          </p>
          

          {  user ? <button  onClick={handleLogout} className='mx-3 btn btn-primary '>LogOut</button> : 
          <Link to='/login'><button className='btn btn-primary'>LogIn</button>
          </Link>}
        </div>
      </label>
        </div>

  </div>
</div> */}

<div >
        <nav className="navbar  bg-neutral">
  <div className="navbar-start  ">
  <div className="dropdown lg:hidden">
      <label tabIndex={0} className="btn btn-ghost lg:none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
            <Link to='/' className={location.pathname === '/' ? 'mx-2 text-red-500' : 'mx-2'}>
              Home
            </Link>
          </li>
          
          <li tabIndex={0}>
            <Link to='/login' className={location.pathname === '/login' ? 'mx-2 text-red-500' : 'mx-2'}>
              Login
            </Link>
          </li>
          <li>
            <Link to='/blogs' className={location.pathname === '/blogs' ? 'mx-2 text-red-500' : 'mx-2'}>
              Blog
            </Link>
          </li>
      </ul>
    </div>

    <Link href='/' className="normal-case font-bold text-xl text-accent italic ms-2">  Flavour OF Thai - Chef</Link>

    
  </div>
 

  
    <div className="navbar-end font-bold">
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-3">
          <li>
            <Link to='/' className={location.pathname === '/' ? 'mx-2 text-red-500' : 'mx-2'}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className={location.pathname === '/login' ? 'mx-2 text-red-500' : 'mx-2'}>
             Login
            </Link>
          </li>
          <li tabIndex={0}>
            <Link to='/blogs' className={location.pathname === '/blogs' ? 'mx-2 text-red-500' : 'mx-2'}>
              Blogs
            </Link>
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