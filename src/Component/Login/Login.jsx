import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle ,FaGithub} from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { signIn,signInGoogle, signInGitHub } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const frome = location.state?.from?.pathname || "/"
  const [error, setError] = useState(null);
   const handleLogin = event => {
        event.preventDefault();
        
        const from = event.target;
        const email = from.email.value;
         const password = from.pass.value

        console.log(email,password);
        
        signIn(email,password)
        .then(result=>{
          const loggedUser=result.user;
          console.log(loggedUser);
          navigate(frome ,{replace : true});
        })
        .catch(error =>{
            console.log(error);
          setError("Email or password not matched");

        })
      }

      const handleGoogleLogin =()=>{
        signInGoogle()
        .then(result=>{
            const user= result.user;
            console.log(user);
            navigate(frome ,{replace : true});
        })
        .catch(error=>{
            console.log(error.message);
            setError('An error occured.Try Again')
        })
      }
      const handleGitLogin =()=>{
        signInGitHub()
        .then(result=>{
            const user= result.user;
            console.log(user);
            navigate(frome ,{replace : true});
        })
        .catch(error=>{
            console.log(error.message);
            setError('An error occured.Try Again')
        })
      }
   
    return (
        <div>
           <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-gray-400 rounded-md shadow-md ring-2 ring-blue-800/50 lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-center text-gray-700">Plz Login</h1>
            <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Email Address" name='email'className="w-full input input-bordered" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" name='pass'
                        className="w-full input input-bordered" />
                </div>
               
                <div >
                    <button className="btn btn-block">Login</button>
                    <p className='text-red-500 text-center'>{error}</p>
                    <p className="text-gray-100 text-xl">Don't have a account? <Link to='/register' className='text-blue-700  hover:underline hover:text-red-600'>Register</Link> </p>

                       <div className='flex flex-col align-item justify-center text-center'>
                      <p className='mb-3'>  or login With</p>
                      
                      <div className='flex align-item justify-center '>
                      <button className='btn mx-2' onClick={handleGoogleLogin}><FaGoogle className='text-3xl '/></button>
                      <button  onClick={handleGitLogin} className='btn '><FaGithub className='text-3xl'/></button>
                      </div>

                       </div>
                </div>
            </form>
        </div>
    </div>
        </div>
    );
};

export default Login;