import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/assets/logo-xl.png'
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='container mx-auto px-6 md:px-60 md:pt-20 pt-10 pb-7'>
                <div className='flex items-center justify-center flex-col gap-5'>
                    <Image
                    src={Logo}
                    alt='footerLogo'
                    width={412}
                    height={61}
                />
                <p className='text-[#F8FAFC] text-sm'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h2 className='text-white font-medium'>Social Links</h2>
                <div className='flex items-center justify-center gap-3'>
                    <div className='bg-white p-3 rounded-full w-fit'><RiInstagramFill /></div>
                    <div className='bg-white p-3 rounded-full w-fit'><FaFacebook /></div>
                    <div className='bg-white p-3 rounded-full w-fit'><FaXTwitter /></div>
                </div>
                
                
                </div>
                <hr className='my-9 border-white/20 w-full' />
                <div className='flex md:flex-row flex-col gap-3.5 items-center justify-between py-4 md:py-7'>
                    <p className='text-[#FAFAFA]'>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex gap-5'>
                        <p className='text-[#FAFAFA]'>Privacy Policy</p>
                        <p className='text-[#FAFAFA]'>Terms of Service </p>
                        <p className='text-[#FAFAFA]'>Cookies</p>
                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default Footer;