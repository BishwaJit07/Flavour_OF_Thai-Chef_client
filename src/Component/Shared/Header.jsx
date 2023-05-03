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
            <div className="navbar bg-base-100">
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
</div>
        </div>


// chef details



    );
};

export default Header;