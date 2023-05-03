import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const {creatUser}= useContext(AuthContext);

      const [error,setError]= useState();

       const [accept, setAccept] = useState(false);
     
       const navigate = useNavigate();
       const frome = location.state?.from?.pathname || "/"
         const handleReg = event=>{
          event.preventDefault();
          const from = event.target;
          const name = from.name.value;
          const photo = from.photo.value;
          const email = from.email.value;
          const password = from.pass.value;
          console.log(name,email,photo,password);
          setError('');
          if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }
          creatUser(email,password)
          .then(result=>{
            const createdUser = result.user;
            console.log(createdUser);
            navigate(frome ,{replace : true});
          })
          .catch(error=>{
            setError(error.message)
            console.log(error);
          })
         }

         
    return (
        <div>
             <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-gray-400 rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-center text-gray-700">Please Register</h1>
            <form className="space-y-4" onSubmit={handleReg}>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name='name' className="w-full input input-bordered" required />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="photoUrl" name='photo' className="w-full input input-bordered" required/>
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email Address" name='email' className="w-full input input-bordered" required/>
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" name='pass' 
                        className="w-full input input-bordered" required/>
                </div>
               
                <div >
                    <button className="btn btn-block">Register</button>
                    <p className="text-xl text-gray-100 ">Already have a account? <Link to='/login' className='text-blue-600 hover:underline hover:text-red-600'>Login</Link> </p>
                     <p className='text-red-500'>{error}</p>
                  
                </div>
            </form>
        </div>
    </div>
        </div>
    );
};

export default Register;