import React from 'react';

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img className='w-20' src="https://i.postimg.cc/3JYs9CGQ/Logo.png" alt="" />
                    <p>BF Toys Cars LTD <br />Providing reliable tech since 2000</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">

                    </div>
                </div>
            </footer>

            <footer className="footer flex md:gap-96  pl-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Contact</span>
                    <p>Phone: +8801956-633205</p>
                    <p>Phone: +8801835992202</p>
                    <p>Email: mdibrahim36194@gmail.com</p>
                </div>
                <div>
                    <span className="footer-title">Social Media</span>
                    <a className="link link-hover">facebook</a>
                    <a className="link link-hover">LinkedIn</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                </div>
            </footer>

            <div>
                <p className='text-center mt-5 pb-10 text-gray-700 '>Copyright © 2023 - this Site Is Copyrighted by BF Ibrahim</p>
            </div>
        </div>
    );
};

export default Footer;