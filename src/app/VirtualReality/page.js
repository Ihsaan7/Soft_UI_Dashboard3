'use client'
import { useContext, useState } from 'react';
import { NavbarContext } from '../ClientLayout';

export default function VirtualReality() {
  const { setIsNavOpen } = useContext(NavbarContext);

  // Mock data for VR projects
  const vrProjects = [
    {
      id: 1,
      title: 'Data Visualization VR',
      status: 'Active',
      lastAccessed: '2 hours ago',
      progress: 75,
    },
    {
      id: 2,
      title: '3D Analytics Dashboard',
      status: 'In Development',
      lastAccessed: '1 day ago',
      progress: 45,
    },
    {
      id: 3,
      title: 'Immersive Reports',
      status: 'Completed',
      lastAccessed: '3 days ago',
      progress: 100,
    },
  ];

  // Mock data for VR devices
  const vrDevices = [
    { id: 1, name: 'Oculus Quest 2', status: 'Connected', battery: 85 },
    { id: 2, name: 'HTC Vive Pro', status: 'Standby', battery: 60 },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'connected':
      case 'completed':
        return 'bg-green-500';
      case 'in development':
      case 'standby':
        return 'bg-orange-400';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div className="w-full py-3 flex flex-col gap-6">
      {/* Header Section */}
      <nav className="px-8 sticky top-0 z-10 bg-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h3 className="font-bold text-2xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Virtual Reality Hub
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <form className="flex items-center gap-4 w-full lg:w-auto">
            <input
  type="text"
  placeholder="Search VR projects..."
  className="border border-gray-400 rounded-lg px-4 py-2 w-full lg:w-64 focus:outline-none focus:bg-white transition-all bg-white/40 backdrop-blur-sm placeholder:text-gray-600"
/>
              <button className="bg-orange-400 text-white font-bold rounded-lg px-6 py-2 hover:bg-orange-500 transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-orange-400/30">
                Launch VR Mode
              </button>
            </form>

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

      {/* Main Content */}
      <div className="px-8 space-y-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-orange-700 bg-clip-text text-transparent">
              Immersive Analytics
            </h1>
            <p className="text-lg mb-6 text-gray-300">Transform your data into interactive 3D experiences</p>
            <div className="flex gap-4">
              <button className="border-2 border-orange-400 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-400/10 transition-all ">
                Enter VR Space
              </button>
              <button className="border-2 border-orange-400 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-400/10 transition-all">
                Explore Features
              </button>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* VR Projects Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg backdrop-blur-sm bg-opacity-90">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Active VR Projects</h2>
              <div className="space-y-4">
                {vrProjects.map((project) => (
                  <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all bg-white/80 backdrop-blur-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-800">{project.title}</h3>
                        <p className="text-sm text-gray-500">Last accessed: {project.lastAccessed}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold text-white ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gray-800 h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VR Devices Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg backdrop-blur-sm bg-opacity-90">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Connected Devices</h2>
              <div className="space-y-4">
                {vrDevices.map((device) => (
                  <div key={device.id} className="border border-gray-200 rounded-lg p-4 bg-white/80 backdrop-blur-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-800">{device.name}</h3>
                        <p className="text-sm text-gray-500">Battery: {device.battery}%</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold text-white ${getStatusColor(device.status)}`}>
                        {device.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-lg backdrop-blur-sm bg-opacity-90">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-orange-400 text-white p-4 rounded-lg hover:bg-orange-500 transition-all font-bold shadow-lg hover:shadow-orange-400/30">
                  <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">Start VR Session</span>
                </button>
                <button className="bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-900 transition-all font-bold shadow-lg hover:shadow-gray-800/30">
                  <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-sm">View Analytics</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
