import React from 'react';
import footerImg from '../../assets/logo-footer.png';

const Footer = () => {
    return (
        <div className='bg-[#cacfd2]'>
            <div>
                <img src={footerImg} alt="" />
            </div>

            <div>
                <div>
                    <h1>About Us</h1>
                    <p>We are a passionate team</p> <p>dedicated to providing the best</p>
                    <p>services to our customers.</p>
                </div>

                <div>
                    <h1>Quick Links</h1>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h1>Subscribe</h1>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                    <div>
                        <input type="text"/>
                        <button></button>
                    </div>
                </div>
            </div>

            <div>
                <p>@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;


