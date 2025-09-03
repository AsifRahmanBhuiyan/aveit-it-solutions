import React from 'react';
import { GrLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const HeadInfo = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between py-5 border-b-1 border-gray-300'>
                <div className='flex gap-4 font-normal'>
                    <div className='flex items-center gap-1'>
                        <div className=' text-blue-600 text-2xl'>
                            <GrLocation />
                        </div>
                        <p className=' border-r-1 border-gray-400 pr-4'>California, TX 70240</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className=' text-blue-600 text-2xl'>
                            <FiMail />
                        </div>
                        <p className=' border-r-1 border-gray-400 pr-4'>info@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className=' text-blue-600 text-2xl'>
                            <FiPhone />
                        </div>
                        <p>+123 456 7890</p>
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='flex items-center gap-2'>
                        <div className=' text-blue-600 text-2xl'>
                            <FaRegClock />
                        </div>
                        <p className=' font-light'>Office Hours: 8:00 AM – 7:45 PM</p>
                    </div>
                    <div className=' text-blue-600 text-4xl'>
                        <div className='flex gap-1'>
                            <FaFacebookSquare />
                            <FaTwitterSquare />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadInfo;