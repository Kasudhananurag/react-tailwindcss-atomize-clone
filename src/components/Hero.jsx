import React from 'react';
import { FaLinkedin,FaPlayCircle,FaGithub, FaReact, FaEnvelope, FaIcons, 
    FaHeart, FaRegEye, FaPen, FaPaperclip, FaPlus, FaCloudDownloadAlt, 
    FaGlobe } from "react-icons/fa";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";
import { BsArrowRight, BsChatLeft, BsSymmetryVertical, BsBoxArrowDownLeft, BsFillGrid1X2Fill, BsTriangleHalf, BsFillAspectRatioFill, BsGrid } from "react-icons/bs";
import card2 from "./assets/card2.png";
import { BiAtom } from "react-icons/bi";
import { IoIosSwitch } from "react-icons/io";
import { AiOutlineControl } from "react-icons/ai";
import { SiRubygems } from "react-icons/si";

const s = "</>";

const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <div className="md:w-[700px] sm:w-full mx-auto text-center pt-10">
                <h1 className='text-5xl'>Design System for React JS</h1>
                <p className='w-[80%] mx-auto py-8'>Atomize React is a UI framework that helps developers collaborate with designers and build consistent user interfaces effortlessly.</p>
                <button className='p-3 bg-blue-500 rounded-md text-white mr-2'>Get Started Now</button>
                <button className='ml-2 p-3 rounded-md shadow justify-center border items-center'> Watch Video</button>
            </div> <br /><br />
            <div className='w-full mt-11'>
                <div className="grid w-[80%] mx-auto my-10 grid-cols-1 mx-aut md:grid-cols-3 gap-4">
                    {/* card 1 */}
                    <div className='w-[80%] mx-auto'>
                        <p className=' w-[60%] md:w-[80%] mx-auto flex justify-center items-center'>
                            <span className='p-4 bg-slate-100 rounded-full mx-1 shadow-lg'><FaHeart size={15} /></span>
                            <span className='p-4 bg-slate-100 rounded-full mx-1 shadow-lg'><FaRegEye size={15} /></span>
                            <span className='p-4 bg-slate-100 rounded-full mx-2 shadow-lg'><FaPen size={15} /></span>
                            <span className='p-4 bg-slate-100 rounded-full mx-1 shadow-lg'><FaPaperclip size={15} /></span>
                            <span className='p-4 bg-slate-100 rounded-full mx-1 shadow-lg'><FaPlayCircle size={15} /></span>
                            <span className='p-4 bg-slate-100 rounded-full mx-1 shadow-lg'><FaCloudDownloadAlt size={15} /></span>
                        </p>

                        <div className="w-full text-center shadow-lg mt-8 border rounded-lg p-2">
                            <p className=''>  <span className='mx-11'><FcBusinesswoman size={60} className="mx-[40%]" /></span></p>
                            <p className='text-xl'>Hermoine Granger</p>
                            <small className='text-slate-400'>Post, Designation</small>
                            <div className='flex w-full mx-auto justify-center mt-10'>
                                <div className='flex my-7 items-center mx-3 bg-blue-500 rounded-full py-1 text-white px-3'><button>Follow&nbsp;</button><FaPlus size={10} /></div>
                                <div className='flex my-7 border bg-slate-200 px-3 rounded-full items-center'><button>Message &nbsp;</button><BsChatLeft /></div>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className=' text-center w-[80%] mx-auto justify-center'>
                        <div className="w-[full] mx-auto rounded-b-xl">
                            <img src={card2} className="rounded-t-[30px]" alt="" />
                            <div className='flex items-center shadow-lg rounded-b-lg mt-3'><FcBusinesswoman size={30} /><span className=' ml-5 my-3'>Hermoine Granger</span></div>
                            <div className='flex border my-5 px-3 py-3 rounded-lg shadow-lg items-center'>
                                <div><FcBusinessman size={45} /></div>
                                <div>
                                    <p className='mb-[-5px]'>John doe</p>
                                    <sup className='text-slate-400 text-[8px]'>UI/UX Designer</sup>
                                </div>
                                <div className=' ml-[50%]'>
                                    <FaPen />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className='border text-center p-4 w-[80%] mx-auto rounded-lg shadow-lg '>
                        <p className='mt-8 font-bold text-lg'>Login into your account</p>
                        <p className='text-xs text-slate-400'>Don't have an account yet? <a className='text-blue-600' href="">Create New</a> </p>
                        <div className='mt-[30%] '>
                            <div className='flex text-sm items-center justify-center border rounded-full my-5 p-2'><input className='w-full outline-none' type="text" name="" id="" placeholder='johndoe@gmail.com' /><FaEnvelope /></div>
                            <div className='flex text-sm items-center justify-center border rounded-full my-5 p-2'><input className='w-full outline-none' type="password" name="" id="" placeholder='Password' /><FaRegEye /></div>
                            <div className='text-sm mt-11 bg-blue-100 font-bold p-2 rounded-full'><button type='submit' className='text-violet-600'>Login</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            {/* key features */}
            <div className='w-full mb-8'>
                <div className='w-[80%] mx-auto mt-11 p-5 '>
                    <div className='bg-black w-[100px] rounded-full mt-11 text-white text-xs p-2 px-2'> key features</div>
                    <div className='mt-11'>
                        <p className='text-3xl my-8'>Why use Atomize React?</p>
                        <span className='text-sm mt-8'>Atomize React helps you in building fully responsive websites <br /> and products that match your style.</span>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
                            {/* cards */}
                            <div className="border rounded shadow-lg px-8 py-4 ">
                                <div className='mt-8'><BsFillGrid1X2Fill size={30} /></div>
                                <p className=' mt-8 text-lg'>Flexible grid</p>
                                <p className='mt-4 text-sm font-mono'>Change grid variables or give decimal column size.</p>
                                <button className='mt-8 text-sm text-violet-600 mb-4'>See How</button>
                            </div>
                            {/* cards */}
                            <div className="border rounded shadow-lg px-8 py-4 ">
                                <div className='mt-8'><BsTriangleHalf size={30} /></div>
                                <p className=' mt-8 text-lg '>Style guide</p>
                                <p className='mt-4 text-sm font-mono'>Update theme throughout the application easily.</p>
                                <button className='mt-8 text-sm text-violet-600 mb-4'>See How</button>
                            </div>
                            {/* cards */}
                            <div className="border rounded shadow-lg px-8 py-4 ">
                                <div className='mt-8'><BsFillAspectRatioFill size={30} /></div>
                                <p className=' mt-8 text-lg'>Spacing</p>
                                <p className='mt-4 text-sm font-mono'>A better and controlled way of update spacing.</p>
                                <button className='mt-8 text-sm text-violet-600 mb-4'>See How</button>
                            </div>
                            {/* cards */}
                            <div className="border rounded shadow-lg px-8 py-4 ">
                                <div className='mt-8'><BsGrid size={30} /></div>
                                <p className=' mt-8 text-lg'>Responsive</p>
                                <p className='mt-4 text-sm font-mono'>Better control to make the app responsive.</p>
                                <button className='mt-8 text-sm text-violet-600 mb-4'>See How</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="w-full my-11 px-3    pt-10 mb-8 pb-8">
                <div className='w-[40%] mx-auto'>
                    <p className='text-5xl'>Beautiful & consistant UI powered with <span className='text-blue-400'>React</span>. </p>
                </div>
                <div className="w-full mx-auto md:w-[40%] grid grid-cols-2 mt-11 md:grid-cols-3">
                    <div className='mx-2'>
                        <BiAtom size={30} />
                        <p className='my-4'>Atomic</p>
                        <p className='text-xs text-slate-400'>Based on Atomic Design Methodology.</p>
                    </div>
                    <div className='mx-2'>
                        <BsSymmetryVertical size={30} />
                        <p className='my-4'>Theme Setup</p>
                        <p className='text-xs text-slate-400'>Auto updating colors and Styleguide.</p>
                    </div>
                    <div className='mx-2'>
                        <IoIosSwitch size={30} />
                        <p className='my-4'>Components</p>
                        <p className='text-xs text-slate-400'>Ever-increasing list of components.</p>
                    </div>
                    <div className='mx-2'>
                        <BsBoxArrowDownLeft size={30} />
                        <p className='my-4'>Responsive</p>
                        <p className='text-xs text-slate-400'>Build fully responsive structures easily.</p>
                    </div>
                    <div className='mx-2'>
                        <AiOutlineControl size={30} />
                        <p className='my-4'>Customisation</p>
                        <p className='text-xs text-slate-400'>Multiple customisations to suit your style.</p>
                    </div>
                    <div className='mx-2'>
                        <FaIcons size={30} />
                        <p className='my-4'>Icon System</p>
                        <p className='text-xs text-slate-400'>An inbuilt Icon system for faster development.</p>
                    </div>
                </div>
            </div>
            <div className='w-full my-10'>&nbsp;</div>
            <hr />
            <div className="w-full py-11">
                <div className='w-full md:w-[50%] text-center font-serif font-[90] p-4 mx-auto'>
                    <p className='text-3xl'>A combination of tools to design and develop modern applications at ease.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-[45%] my-11 mx-auto px-3">
                    <div className='p-4 shadow-lg border rounded-lg'>
                        <div className='w-full mt-4 text-orange-400'><SiRubygems size={50} /></div>
                        <p className='mt-6 text-2xl'>Design.</p>
                        <p className='text-sm text-slate-400 my-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <a href="" className='text-sm text-sky-400 flex items-center '>Design Resource &nbsp; <BsArrowRight /></a>
                    </div>
                    <div className='p-4 shadow-lg border rounded-lg'>
                        <div className='w-full mt-4 text-sky-500 font-bold'><FaReact size={50} /></div>
                        <p className='mt-6 text-2xl'>Development.</p>
                        <p className='text-sm text-slate-500 my-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <a href="" className='text-sm text-sky-400 flex items-center '>Documentation &nbsp; <BsArrowRight /></a>
                    </div>
                </div>
            </div>

            <hr />

            <div className="w-full mt-11 mb-11">
                <div className=' mw-[90%] mt-10 md:w-[70%] mx-auto grid grid-cols-2 md:grid-cols-4'>
                    <div className="text-center mt-11 mb-11 ">
                        <p className='text-4xl'>15+</p>
                        <p className='text-slate-500 mt-5'>Ready to use React Components</p>
                    </div>
                    <div className="text-center">
                        <div className="text-center mt-11 mb-11 ">
                            <p className='text-4xl'>60+</p>
                            <p className='text-slate-500 mt-5'>Predefined colors for theme setup</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-center mt-11 mb-11 ">
                            <p className='text-4xl'>{s}</p>
                            <p className='text-slate-500 mt-5'>Ready to use React Components</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-center mt-11 mb-11 ">
                            <p className='text-4xl'>FREE</p>
                            <p className='text-slate-500 mt-5'>Open source with regular updates</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            {/* footer */}
            <div className="w-full pt-10">
                <div className="hidden md:w-[70%] mx-auto md:grid md:grid-cols-5 md:gap-4 ">
                    <div className='text-left text-sm'>
                        <p className='font-bold'>Docs</p>
                        <ul className='list-none text-xs'>
                            <li className='my-6'>Installation</li>
                            <li className='my-6'>Theme Setup</li>
                            <li className='my-6'>Grid</li>
                            <li className='my-6'>Atoms</li>
                            <li className='my-6'>Molecules</li>
                            <li className='my-6'>Functions</li>
                        </ul>
                    </div>
                    <div className='text-left text-sm'>
                        <p className='font-bold'>Atomize</p>
                        <ul className='list-none text-xs'>
                            <li className='my-6'>Features</li>
                            <li className='my-6'>Design</li>
                            <li className='my-6'>Development</li>
                        </ul>
                    </div>
                    <div className='text-left text-sm'>
                        <p className='font-bold'>Resources</p>
                        <ul className='list-none text-xs'>
                            <li className='my-6'>Sketch Files</li>
                            <li className='my-6'>Github</li>
                        </ul>
                    </div>
                    <div className='text-left text-sm'>
                        <p className='font-bold'>About</p>
                        <ul className='list-none text-xs'>
                            <li className='my-6'>Showcase</li>
                            <li className='my-6'>Contribute</li>
                        </ul>
                    </div>
                    <div className='text-left text-sm'>
                        <p className='font-bold'>Extras</p>
                        <ul className='list-none text-xs'>
                            <li className='my-6'>Blog</li>
                            <li className='my-6'>Need Help?</li>
                            <li className='my-6'>Give Feedback</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-11 mb-5 text-center w-full'>
                    <p className='text-sm mt-11'> Designed and Developed by Anurag Kasudhan</p>
                    <div className='my-6 w-[10%] mx-auto flex'>
                        <div className=''><a href="https://github.com/Kasudhananuag"><FaGithub size={22}/></a></div>
                        <div className='mx-2'><a href="https://www.linkedin.com/in/kasudhananurag/"><FaLinkedin size={22}/></a></div>
                        <div className='mx-2'><a href="https://portfolioanuragkasudhan.web.app/"><FaGlobe size={22}/></a></div>
                    </div>
                    <div className="mt-6">&nbsp;</div>
                </div>
            </div>

        </div>
    )
}

export default Hero