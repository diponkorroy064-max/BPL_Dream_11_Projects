import React from 'react';
import footerImg from '../../assets/logo-footer.png';

const Footer = () => {
    return (
        <div className='bg-[#1E1E1E] max-w-300 m-auto text-white'>
            <div className='flex justify-center pt-12'>
                <img src={footerImg} alt="" />
            </div>

            <div className='grid grid-cols-3 px-20 py-12'>
                <div>
                    <h1 className='text-2xl font-bold'>About Us</h1>
                    <p>We are a passionate team</p> <p>dedicated to providing the best</p>
                    <p>services to our customers.</p>
                </div>

                <div>
                    <h1 className='text-2xl font-bold'>Quick Links</h1>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-2xl font-bold'>Subscribe</h1>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                    <div className='flex justify-start items-center'>
                        <input className='bg-white  p-2 rounded-l-md' type="text" placeholder='Enter Your Email'/>
                        <button className='btn btn-primary'>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center bg-[#1E1E1E] border-t-2 border-gray-100 shadow'>
                <p className='text-white py-4'>@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;


