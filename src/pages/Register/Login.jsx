import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {

    const {signInUser, signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState(null)

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        signInUser(email, password)
        .then( result => {
            navigate(location?.state ? location.state : '/')

        })
        .catch( error => {
            console.error(error)
            setError('Invalid Email Or Password')
        })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then( () => {
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div style={{backgroundImage: `url(https://t3.ftcdn.net/jpg/03/70/92/84/360_F_370928450_R6g8c0j5cey86PUXE32W7KMiqIUe1fOI.jpg)`}} className='bg-no-repeat bg-cover bg-center py-24'>
            <div className='w-2/4 mx-auto mt-16 mb-10 text-center py-10 px-16 rounded-md backdrop-blur-sm bg-white/30 backdrop-brightness-50'>
                <h1 className='text-center text-6xl mb-8'>Login</h1>
                <div>
                    <form onSubmit={handleLogin}>
                        <input type="email" name="email" required placeholder='Enter Your Email' className='border-[1px] border-white bg-[#00000000] w-full rounded-md text-xl px-4 py-3 outline-0'/>
                        <br /><br />
                        <input type="password" name="password" required placeholder='Enter Your Password' className='border-[1px] border-white bg-[#00000000] w-full rounded-md text-xl px-4 py-3 outline-0' />
                        <br /><br />
                        
                        <input type="submit" value="Login" className='border border-white bg-[#00000000] w-full rounded-md text-2xl px-4 py-2 text-white cursor-pointer' />
                    </form>
                    {
                        error && <h1 className='text-red-800 text-2xl'>{error}</h1>
                    }
                    <h1 className='text-xl py-5'>Don't have an account? <Link to={'/register'}><span className='text-white'>Register</span></Link></h1>
                    <h1 className='text-xl'>Or</h1>
                    <button onClick={handleGoogleLogin} className='border-[1px] relative border-white rounded-md text-xl w-full py-2 my-5 '>Login With Google</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;