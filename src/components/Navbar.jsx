import React, { useState } from 'react';
import { FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleQuick = () => {
        setNav(!nav)
    }

    return (
        <div className='w-full flex py-3 items-center '>
            <div className='w-[1200px] md:flex hidden  mx-auto p-3 '>
                <h1 className='font-bold text-lg'>brandlogo</h1>
                <div className='w-full'>
                    <ul className='flex justify-end items-center'>
                        <li className='mx-4 '>Features</li>
                        <li className='mx-4 '>Github</li>
                        <li className='mx-4 '>For Designers</li>
                        <li> <button className='p-2 rounded bg-gray-200'>Documentation</button> </li>
                    </ul>
                </div>
            </div>
            <div onClick={handleQuick} className='flex w-full  md:hidden z-10'>
                <h1 className='font-bold text-lg ml-3'>brandlogo</h1>
                <div className='w-full mx-[60%] justify-end text-'>{!nav ? <FaBars /> : <FaTimes />}</div>
            </div>
            <ul className={ !nav ? 'hidden': 'absolute font-bold top-0 left-0 w-full h-screen bg-zinc-300 flex flex-col justify-center items-center' }>
                <li className='mx-4 '>Features</li>
                <li className='mx-4 mt-3'>Github</li>
                <li className='mx-4 mt-3'>For Designers</li>
                <li className='mx-4 mt-5'> <button className='p-2 rounded bg-gray-200'>Documentation</button> </li>
            </ul>
        </div>
    )
}

export default Navbar