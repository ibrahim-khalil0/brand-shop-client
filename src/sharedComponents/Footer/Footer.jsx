import paymentMethod from '../../assets/payment.png';

const Footer = () => {
    return (
        <div className='flex justify-between items-center px-[5%] flex-wrap py-6'>
            <div>
                <h3>© 2023 - WoodStock Electronics Shop. <a>Created by Md Ibrahim Khalil</a></h3>
            </div>
            <div>
                <img src={paymentMethod} alt="" />
            </div>
        </div>
    );
};

export default Footer;