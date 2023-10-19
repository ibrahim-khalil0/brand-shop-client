import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../assets/hp.png'

const Register = () => {
    return (
        <div style={{backgroundImage: `url(https://t3.ftcdn.net/jpg/03/70/92/84/360_F_370928450_R6g8c0j5cey86PUXE32W7KMiqIUe1fOI.jpg)`}} className='bg-no-repeat bg-cover bg-center py-24'>
            <div className='w-2/4 mx-auto mt-16 mb-10 text-center py-10 px-16 rounded-md backdrop-blur-sm bg-white/30 backdrop-brightness-50'>
                <h1 className='text-center text-6xl mb-8'>Register</h1>
                <div>
                    <form>
                        <input type="text" name="name" placeholder='Your Name' required className='border-[1px] border-white bg-[#00000000] w-full rounded-md text-xl px-4 py-3 outline-0'/>
                        <br /><br />
                        <input type="text" name="photo" placeholder='Photo Url' required className='border-[1px] border-white bg-[#00000000] w-full rounded-md text-xl px-4 py-3 outline-0'/>
                        <br /><br />
                        <input type="email" name="email" required placeholder='Enter Your Email' className='border-[1px] border-white bg-[#00000000] w-full rounded-md text-xl px-4 py-3 outline-0'/>
                        <br /><br />
                        <input type="password" name="password" required placeholder='Enter Your Password' className='border-[1px] border-white bg-[#00000000] w-full rounded-md text-xl px-4 py-3 outline-0' />
                        <br /><br />

                        <div className='flex items-center gap-3'>
                            <input type="checkbox" id='radio' name='accept' required />
                            <label for="radio">Accept Terms And Condition</label>
                        </div>
                        <br></br>
                        <input type="submit" name="" id="" className='border border-white bg-[#00000000] w-full rounded-md text-2xl px-4 py-2 text-white cursor-pointer' />
                    </form>
                    <h1 className='text-xl py-5'>Already have an account? <Link to={'/login'}><span className='text-white'>Login</span></Link></h1>
                    <h1 className='text-xl'>Or</h1>
                    <button className='border-[1px] relative border-white rounded-md text-xl w-full py-2 my-5 '>Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;