import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='xl:mx-[5%] lg:mx-5 mx-[5%] flex flex-wrap justify-between items-center py-6'>
      

      {/* logo is here  */}
      <div className='sm:w-[300px]'>
        <img src={logo} alt="" />
      </div>

        {/* nav menu here  */}
      <div className='w-full lg:flex-1 text-center space-x-5 sm:space-x-10 text-xl order-3 pt-3 mt-3 lg:pt-0 sm:border-t lg:border-0 border-gray-400'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/addProduct'}>Add Product</NavLink>
        <NavLink to={'/cart'}>My Cart</NavLink>
        <Link to={'/login'}><button>Login</button></Link>
      </div>

      <div className='sm:w-[300px] w-full text-right lg:order-3'>
        <form>
            <input type="text" placeholder='Search Products' className='border text-2xl pl-4 border-gray-500 bg-[#00000000] outline-0 w-full h-14 rounded-md' />
        </form>
      </div>
    </div>
  );
};

export default Header;
