'use client'
import { useContext } from 'react';
import { NavbarContext } from '../ClientLayout';
import React from 'react';

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg"
];

function ProjectCard({ img, number, title, desc }) {
  return (
    <div className="rounded-xl shadow-md bg-white p-4 flex flex-col gap-3">
      <img src={img} alt={title} className="rounded-lg w-full h-40 object-cover" />
      <div>
        <span className="text-gray-500 font-semibold text-sm">{number}</span>
        <h4 className="font-bold text-black text-xl mt-1">{title}</h4>
        <p className="text-gray-500 text-sm mt-1">{desc}</p>
      </div>
      <div className="flex items-center justify-between mt-2">
        <button className="border-2 border-orange-400 text-orange-400 font-bold rounded-lg px-4 py-1 hover:bg-orange-400 hover:text-white transition-all">View Project</button>
        <div className="flex -space-x-4">
          {avatars.map((src, i) => (
            <img key={i} src={src} className="w-8 h-8 rounded-full border-2 border-white" alt={`User ${i+1}`} style={{zIndex: 10-i}} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
    const { setIsNavOpen } = useContext(NavbarContext);

    return (
        <div className="w-full py-3 flex flex-col gap-6">
            {/* Header Section */}
            <nav className="px-8 sticky top-0 z-10 bg-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h4 className="text-gray-500">
                            Pages <span className="text-black"> / Profile</span>
                        </h4>
                        <h3 className="font-bold text-black">Profile</h3>
                    </div>

                    <div className="flex items-center gap-4">
                        <form className="flex items-center gap-4 w-full lg:w-auto text-gray-500">
                            <input
                                type="text"
                                placeholder="Search here"
                                className="border border-gray-400 rounded-lg px-4 py-2 w-full lg:w-64 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
                            />
                            <button className="border-2 border-orange-500 text-orange-500 font-bold rounded-lg px-4 py-2 hover:bg-orange-50 transition-all duration-300 whitespace-nowrap">
                                Online Builder
                            </button>
                        </form>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsNavOpen(true)}
                            className="lg:hidden p-2 hover:bg-gray-200 rounded-xl transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            {/* Main Section */}
            <div className='border border-gray-300 rounded-lg p-4 gap-5 flex flex-col'>
                <div className='border bg-orange-400 border-gray-300 rounded-lg flex flex-row justify-between px-4'>
                    <div className='py-5'>
                        <img src='./profileB.png' className=' w-20 h-20 rounded-lg border border-white'></img>
                        <h3 className='text-white font-bold text-2xl w-10 py-2'>IHSAAN ULLAH</h3>
                        <p className='text-white font-semibold'>CEO/Co-Founder</p>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-end'>
                        <button className='border border-white rounded-lg p-2 font-bold'>Edit Profile</button>
                        <button className='border border-white rounded-lg p-2 font-bold'>Change Password</button>
                    </div>
                </div>

                <div className='border border-gray-300 rounded-lg p-4 bg-white'>
                    <div className='pb-5'>
                        <h3 className='text-black text-xl font-semibold'>Platform Settings</h3>
                    </div>
                    <div>
                        <h3 className='text-black text-lg font-semibold pb-2'>Account</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-5">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                                </label>
                                <span className="text-gray-600">Email me when someone follows me</span>
                            </div>
                            <div className="flex gap-5">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                                </label>
                                <span className="text-gray-600">Email me when someone mentions me</span>
                            </div>
                            <div className="flex gap-5">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                                </label>
                                <span className="text-gray-600">Email me when someone comments</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-black text-lg font-semibold pb-5 pt-10 '>Applications</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-5">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                                </label>
                                <span className="text-gray-600 ">New launches and projects</span>
                            </div>

                            <div className="flex gap-5">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                                </label>
                                <span className="text-gray-600">Monthly project updates</span>
                            </div>
                            <div className="flex gap-5">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                                </label>
                                <span className="text-gray-600">Subscription updates</span>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='border border-gray-300 rounded-lg p-4 bg-white flex flex-col gap-5'>
                    <div>
                        <h3 className='text-black text-lg font-semibold py-5 '>Profile Information</h3>
                        <p className='text-gray-500'>Hi, I'm Alec Thompson, Decisions: If you can't
                            decide, the answer is no. If two equally difficult
                            paths, choose the one more painful in the short
                            term (pain avoidance is creating an illusion of
                            equality).</p>
                    </div>
                    <div>
                        <h3 className='text-black text-lg font-semibold'>Full Name: <span className='font-normal text-gray-500'> Ihsaan Ullah </span></h3>
                        <h3 className='text-black text-lg font-semibold'>Email:<span className='font-normal text-gray-500'> MyGmail@gmail.com </span></h3>
                        <h3 className='text-black text-lg font-semibold'>Phone:<span className='font-normal text-gray-500'> +923123456789 </span></h3>
                        <h3 className='text-black text-lg font-semibold'>Address:<span className='font-normal text-gray-500'> 123 Main St, Anytown, USA </span></h3>
                    </div>
                </div>

                {/* Projects Section */}
                <div className="border border-gray-300 rounded-lg p-6 bg-white flex flex-col gap-4">
                  <h3 className="text-black text-lg font-semibold mb-2">Projects</h3>
                  <p className="text-gray-500 mb-4">Architects design houses</p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <ProjectCard
                      img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                      number="Project #1"
                      title="Modern"
                      desc="As Uber works through a huge amount of internal management turmoil."
                    />
                    <ProjectCard
                      img="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80"
                      number="Project #2"
                      title="Scandinavian"
                      desc="Music is something that every person has his or her own specific opinion."
                    />
                    <ProjectCard
                      img="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                      number="Project #3"
                      title="Minimalist"
                      desc="Minimalism is not a lack of something. It's simply the perfect amount of something."
                    />
                    <ProjectCard
                      img="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80"
                      number="Project #4"
                      title="Industrial"
                      desc="Industrial design is a process of design applied to products that are to be manufactured."
                    />
                  </div>
                </div>

                <div className='Conversation'>

                </div>
            </div>


        </div>


    );
}