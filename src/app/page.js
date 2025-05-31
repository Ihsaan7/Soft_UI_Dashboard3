'use client'
import { useState } from 'react';
import Navbar from './components/Navbar';

const StatsCard = ({ bgColor = 'bg-gray-800', borderColor = 'border-gray-800', value, label, percentage }) => (
  <div className={`${bgColor} rounded-xl w-full h-fit transition-all duration-300 hover:translate-y-[-5px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]`}>
    <div className="flex justify-between items-center p-6">
      <div className="flex flex-col gap-4">
        <div className="w-12 h-12 rounded-full bg-white backdrop-blur-sm flex items-center justify-center shadow-lg">
          <img src="./profileB.png" alt="Profile" className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-2xl text-white">{value}</h3>
          <p className="text-white/80">{label}</p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-white font-bold text-lg">{percentage}</p>
      </div>
    </div>
  </div>
);

const ReviewItem = ({ label, percentage }) => (
  <div className="mb-6 hover:translate-x-1 transition-transform duration-300">
    <div className="flex justify-between mb-2">
      <h3 className="text-gray-700 font-medium">{label}</h3>
      <h4 className="font-bold text-gray-800">{percentage}%</h4>
    </div>
    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
      <div 
        className="h-full bg-yellow-600 rounded-full transition-all duration-500 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const ProjectItem = ({ icon, title, members }) => (
  <div className="border-t border-gray-100 px-4 py-3 hover:bg-gray-50 transition-all duration-300 group">
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-gray-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] group-hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.1)] transition-shadow duration-300">
          <img src={icon} alt={title} className="w-5 h-5 object-contain" />
        </div>
        <h4 className="text-gray-700 text-sm font-semibold group-hover:text-gray-900 transition-colors">{title}</h4>
      </div>
      <div className="flex -space-x-3">
        {members.map((member, index) => (
          <div key={index} className="relative group/member">
            <img 
              src={member.avatar} 
              alt={member.name} 
              className="w-8 h-8 rounded-full border-2 border-white hover:z-10 transition-all duration-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.1)]"
            />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/member:opacity-100 transition-opacity whitespace-nowrap shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
              {member.name}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const OrderItem = ({ icon, title, timestamp }) => (
  <div className="flex gap-6 mb-4 relative group">
    <div className="relative z-10">
      <div className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] group-hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.1)] transition-shadow duration-300">
        <img src={icon} alt={icon.split('/').pop().split('.')[0]} className="w-4 h-4" />
      </div>
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gray-200 to-transparent" />
    </div>
    <div className="flex flex-col pb-4 group-hover:translate-x-2 transition-transform duration-300">
      <h4 className="font-semibold text-gray-800 text-sm mb-0.5 group-hover:text-gray-900">{title}</h4>
      <p className="text-gray-500 text-xs group-hover:text-gray-600">{timestamp}</p>
    </div>
  </div>
);

const FeatureCard = ({ title, subtitle, description, image, linkText }) => (
  <div className="bg-white rounded-xl p-4 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] h-full">
    <div className="flex flex-col h-full">
      <div className="mb-2">
        <h4 className="text-gray-500 text-sm font-medium">{subtitle}</h4>
        <h3 className="font-bold text-lg text-gray-800 mt-0.5">{title}</h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{description}</p>
      </div>
      
      <div className="flex-1 flex flex-col justify-end min-h-0">
        <a href="#" className="text-gray-600 text-sm font-semibold hover:text-gray-800 transition-colors inline-block mb-2">
          {linkText}
          <span className="ml-2">→</span>
        </a>
        
        <div className="w-full bg-orange-500 rounded-xl p-3 flex items-center justify-center overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>
    </div>
  </div>
);

const CallToAction = () => (
  <div className="bg-white rounded-xl p-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] h-full">
    <div className="bg-gray-900 rounded-xl p-6 text-white h-full flex flex-col justify-between transform transition-all duration-300 hover:scale-[1.02] shadow-[0_0_15px_rgba(0,0,0,0.2)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative z-10">
        <h3 className="font-bold text-2xl">Work with the rockets</h3>
        <p className="text-gray-300 text-sm mt-3 line-clamp-3">
          We are always open to discuss your project and improve your online presence. It's a pleasure to help you.
        </p>
      </div>
      
      <div className="relative z-10 mt-4">
        <a 
          href="#" 
          className="inline-flex items-center text-white font-semibold hover:text-orange-400 transition-all duration-300 group text-sm"
        >
          Read More
          <svg 
            className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

const StatCard = ({ icon, label, value, progress }) => (
  <div className="flex flex-col items-center group hover:transform hover:scale-105 transition-all duration-300">
    <div className="w-12 h-12 rounded-xl bg-gray-100 p-2.5 mb-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] group-hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.1)] transition-shadow duration-300">
      <img src={icon} alt={label} className="w-full h-full object-contain" />
    </div>
    <div className="flex flex-col items-center mb-3">
      <h3 className="text-gray-600 font-medium text-sm mb-1">{label}</h3>
      <h3 className="text-gray-900 font-bold text-xl">{value}</h3>
    </div>
    <div className="w-[40px] h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
      <div 
        className="h-full bg-blue-500 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

const BarChart = () => {
  const bars = [
    { height: '85%', color: 'bg-blue-500'},
    { height: '45%', color: 'bg-blue-500' },
    { height: '65%', color: 'bg-blue-500' },
    { height: '90%', color: 'bg-blue-500' },
    { height: '55%', color: 'bg-blue-500' },
    { height: '75%', color: 'bg-blue-500' },
    { height: '40%', color: 'bg-blue-500' },
    { height: '60%', color: 'bg-blue-500' }
  ];

  return (
    <div className="flex items-end h-48 gap-4">
      {bars.map((bar, index) => (
        <div 
          key={index}
          className="flex-1 h-full flex items-end"
        >
          <div 
            className={`w-full ${bar.color} transition-all duration-500 hover:opacity-80 rounded-t-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]`}
            style={{ height: bar.height }}
          />
        </div>
      ))}
    </div>
  );
};

const ActiveUsersCard = () => {
  const stats = [
    { icon: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png', label: 'Users', value: '36K', progress: 85 },
    { icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828395.png', label: 'Clicks', value: '2.4K', progress: 65 },
    { icon: 'https://cdn-icons-png.flaticon.com/512/2838/2838895.png', label: 'Sales', value: '1.2K', progress: 45 },
    { icon: 'https://cdn-icons-png.flaticon.com/512/2838/2838895.png', label: 'Items', value: '260', progress: 70 }
  ];

  return (
    <div className="px-4 lg:px-1 rounded-xl">
      <div className="p-6 rounded-xl bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
        <div className="bg-gray-900 px-6 py-8 rounded-xl text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="flex gap-8">
            <div className="flex flex-col justify-between text-sm font-medium py-2">
              <p className="text-gray-400">400</p>
              <p className="text-gray-400">200</p>
              <p className="text-gray-400">0</p>
            </div>
            <div className="flex-1 border-l border-gray-700/50 pl-8">
              <BarChart />
            </div>
          </div>
        </div>

        <div className="py-8 px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-gray-900 font-bold text-2xl mb-1">Active Users</h4>
              <p className="text-gray-600">
                (<span className="text-green-500 font-bold">+23%</span>) than last week
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WaveGraph = () => {
  const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const values = ['500', '400', '300', '200', '100', '0'];

  // SVG path data for the two waves - starting from bottom (0) and moving up gradually
  const primaryWave = "M0,350 C50,300 100,250 150,300 S250,350 300,250 S400,200 450,250 S550,200 600,150";
  const secondaryWave = "M0,300 C50,350 100,300 150,250 S250,300 300,200 S400,250 450,200 S550,150 600,200";
  const secondaryWaveWithFill = `${secondaryWave} L600,400 L0,400 Z`;

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-1 min-h-0">
        {/* Y-axis values */}
        <div className="flex flex-col justify-between text-gray-500 text-sm pr-4">
          {values.map((value, index) => (
            <span key={index} className="relative -top-2">{value}</span>
          ))}
        </div>

        {/* Graph area with L-shaped border */}
        <div className="flex-1 relative">
          {/* Border container */}
          <div className="absolute inset-0 border-l-2 border-b-2 border-gray-300 z-10" />

          {/* Horizontal grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {values.map((_, index) => (
              <div 
                key={index} 
                className={`w-full h-0 ${index < values.length - 1 ? 'border-b border-gray-200' : ''}`} 
              />
            ))}
          </div>

          {/* SVG waves */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="none">
            {/* Secondary wave (blue) with gradient fill */}
            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(67, 24, 255, 0.1)" />
                <stop offset="100%" stopColor="rgba(67, 24, 255, 0.02)" />
              </linearGradient>
            </defs>
            
            <path
              d={secondaryWave}
              fill="none"
              stroke="#4318FF"
              strokeWidth="3"
              className="opacity-50"
            />
            <path
              d={secondaryWaveWithFill}
              fill="url(#blueGradient)"
              strokeWidth="0"
            />

            {/* Primary wave (pink) */}
            <path
              d={primaryWave}
              fill="none"
              stroke="#FF0080"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>

      {/* X-axis months */}
      <div className="mt-4">
        <div className="flex justify-between text-gray-500 text-sm pl-12">
          {months.map((month, index) => (
            <span key={index}>{month}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SalesOverview = () => {
  return (
    <div className="h-full">
      <div className="bg-white rounded-xl p-6 shadow-xl h-full flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800">Sales Overview</h3>
          <p className="text-gray-600">
            (<span className="text-green-500 font-bold">+4%</span>) more in 2021
          </p>
        </div>
        
        <div className="flex-1 min-h-0">
          <WaveGraph />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const links = [
    { label: 'Creative Tim', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Licenses', href: '#' }
  ];

  return (
    <footer className="w-full mt-4 bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="container mx-auto px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">
            © 2025, made with by{' '}
            <span className="font-bold text-gray-800">Creative Tim</span>
            {' '}for a better web.
          </p>
          
          <nav className="flex gap-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 font-semibold hover:text-gray-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const stats = [
    { value: '1600', label: 'Users Active', percentage: '+55%', bgColor: 'bg-orange-400', borderColor: 'border-yellow-600' },
    { value: '357', label: 'Click Events', percentage: '+124%' },
    { value: '2300', label: 'Purchases', percentage: '+15%' },
    { value: '940', label: 'Likes', percentage: '+90%' }
  ];

  const reviews = [
    { label: 'Positive Reviews', percentage: 80 },
    { label: 'Neutral Reviews', percentage: 17 },
    { label: 'Negative Reviews', percentage: 3 },
  ];

  const projects = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png', // Adobe XD logo
      title: 'Soft UI XD Version',
      members: [
        { avatar: 'https://randomuser.me/api/portraits/men/1.jpg', name: 'John Doe' },
        { avatar: 'https://randomuser.me/api/portraits/women/2.jpg', name: 'Jane Smith' },
        { avatar: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'Mike Johnson' },
        { avatar: 'https://randomuser.me/api/portraits/women/4.jpg', name: 'Sarah Wilson' }
      ]
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2387/2387633.png', // Progress icon
      title: 'Add Progress Track',
      members: [
        { avatar: 'https://randomuser.me/api/portraits/men/5.jpg', name: 'Alex Brown' },
        { avatar: 'https://randomuser.me/api/portraits/women/6.jpg', name: 'Emma Davis' }
      ]
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/753/753345.png', // Bug icon
      title: 'Fix Platform Errors',
      members: [
        { avatar: 'https://randomuser.me/api/portraits/men/7.jpg', name: 'Tom Wilson' },
        { avatar: 'https://randomuser.me/api/portraits/women/8.jpg', name: 'Lisa Anderson' }
      ]
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/888/888839.png', // Mobile icon
      title: 'Launch our Mobile App',
      members: [
        { avatar: 'https://randomuser.me/api/portraits/men/9.jpg', name: 'Chris Martin' },
        { avatar: 'https://randomuser.me/api/portraits/women/10.jpg', name: 'Rachel Green' },
        { avatar: 'https://randomuser.me/api/portraits/men/11.jpg', name: 'David Lee' },
        { avatar: 'https://randomuser.me/api/portraits/women/12.jpg', name: 'Sophie Turner' }
      ]
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/1785/1785219.png', // Pricing icon
      title: 'Add the New Pricing Page',
      members: [
        { avatar: 'https://randomuser.me/api/portraits/men/13.jpg', name: 'James Wilson' }
      ]
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/3081/3081559.png', // Shop icon
      title: 'Redesign New Online Shop',
      members: [
        { avatar: 'https://randomuser.me/api/portraits/women/14.jpg', name: 'Anna White' },
        { avatar: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Peter Parker' },
        { avatar: 'https://randomuser.me/api/portraits/women/16.jpg', name: 'Mary Jane' }
      ]
    }
  ];

  const orders = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/3119/3119338.png', // Bell icon
      title: '$2400, Design changes',
      timestamp: '22 DEC 7:20 PM'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png', // HTML icon
      title: 'New order #18324192',
      timestamp: '21 DEC 11 PM'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2838/2838895.png', // Server icon
      title: 'Server payments for April',
      timestamp: '21 DEC 9:34 PM'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/179/179457.png', // Credit card icon
      title: 'New card added for order #4395133',
      timestamp: '20 DEC 2:20 AM'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/483/483408.png', // Key icon
      title: 'Unlock packages for development',
      timestamp: '18 DEC 4:54 AM'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2838/2838895.png', // Money icon
      title: 'New order #9583120',
      timestamp: '17 DEC 11 PM'
    }
  ];

  const features = [
    {
      subtitle: 'Built by developers',
      title: 'Soft UI Dashboard',
      description: 'From colors, cards, typography to complex elements, you will find the full documentation.',
      linkText: 'Read More',
      image: './rocket.png'
    }
  ];

  const activeUserStats = [
    { icon: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png', label: 'Users', value: '36K', progress: 85 },
    { icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828395.png', label: 'Clicks', value: '2.4K', progress: 65 },
    { icon: 'https://cdn-icons-png.flaticon.com/512/2838/2838895.png', label: 'Sales', value: '1.2K', progress: 45 },
    { icon: 'https://cdn-icons-png.flaticon.com/512/2838/2838895.png', label: 'Items', value: '260', progress: 70 }
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />

      {/* Main Content - Scrollable */}
      <div className="flex-1 min-h-screen overflow-y-auto">
        <div className="w-full py-3 flex flex-col gap-6">
          {/* Header Section */}
          <nav className="px-8 sticky top-0 z-10 bg-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h4 className="text-gray-500">
                  Pages <span className="text-black"> / Dashboard</span>
                </h4>
                <h3 className="font-bold text-black">Dashboard</h3>
              </div>

              <div className="flex items-center gap-4">
                <form className="flex items-center gap-4 w-full lg:w-auto">
                  <input
                    type="text"
                    placeholder="Search here"
                    className="text-black border border-gray-300 rounded-lg px-4 py-2 w-full lg:w-64 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
                  />
                  <button className="border-2 border-orange-500 text-orange-500 font-bold rounded-lg px-4 py-2 hover:text-black hover:border-black hover:cursor-pointer transition-all duration-300 whitespace-nowrap">
                    Online Builder
                  </button>
                </form>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsNavOpen(true)}
                  className="lg:hidden p-2 hover:bg-gray-200 rounded-xl transition-colors"
                  aria-label="Toggle navigation menu"
                >
                  <svg 
                    className="w-6 h-6 text-black" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>

          {/* Main Content Sections */}
          <div className="px-8 space-y-6">
            {/* Stats and Reviews Section */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Stats Cards - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <StatsCard key={index} {...stat} />
                ))}
              </div>

              {/* Reviews Section */}
              <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-md h-fit">
                <h3 className="font-bold text-xl mb-6 text-black">Reviews</h3>
                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <ReviewItem key={index} {...review} />
                  ))}
                </div>
                <div className="flex justify-between items-center mt-6 pt-6 gap-5 border-t border-gray-200">
                  <p className="text-gray-600 max-w-lg lg:">
                    More than <span className="font-bold">1,500,000</span> developers used Creative Tim's products and over <span className="font-bold">700,000</span> projects were created.
                  </p>
                  <button className="bg-gray-800 text-white font-bold px-4 py-3 rounded-xl hover:cursor-pointer transition-colors">
                    View Review
                  </button>
                </div>
              </div>
            </div>

            {/* Projects and Orders Section */}
            <div className="flex flex-col lg:flex-row gap-6 h-[60vh]">
              {/* Projects Section */}
              <div className="lg:w-[70%] bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-2 h-full flex flex-col">
                  <div className="mb-3 px-4 py-2">
                    <h3 className="font-bold text-lg text-black">Projects</h3>
                    <p className="text-gray-500 text-sm">
                      <span className="font-bold text-gray-600">30 done</span> this month
                    </p>
                  </div>
                  
                  <div className="mb-2 flex justify-between px-4">
                    <h3 className="text-[11px] text-gray-500 font-bold uppercase">Companies</h3>
                    <h3 className="text-[11px] text-gray-500 font-bold uppercase">Members</h3>
                  </div>

                  <div className="flex-1 overflow-y-auto overflow-x-hidden">
                    <div className="border-b pt-5 border-gray-200 pr-3">
                      {projects.map((project, index) => (
                        <ProjectItem key={index} {...project} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Overview */}
              <div className="lg:w-[30%] bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-4 h-full flex flex-col">
                  <div className="mb-3">
                    <h3 className="font-bold text-lg text-black">Order Overview</h3>
                    <p className="text-gray-500 text-sm">
                      <span className="font-bold text-gray-600">24%</span> this month
                    </p>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto overflow-x-hidden">
                    {orders.map((order, index) => (
                      <OrderItem key={index} {...order} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Features and CTA Section */}
            <div className="flex flex-col lg:flex-row gap-2 h-[65vh] lg:h-[35vh] overflow-hidden">
              {/* Built by Developers Section */}
              <div className="lg:w-[60%] h-80 lg:h-[35vh] overflow-hidden">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>

              {/* Work with the Rockets Section */}
              <div className="lg:w-[40%] overflow-hidden">
                <CallToAction />
              </div>
            </div>

            {/* Active Users and Sales Overview Section */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Active Users Section */}
              <div className="h-full">
                <ActiveUsersCard />
              </div>

              {/* Sales Overview Section */}
              <div className="h-full">
                <SalesOverview />
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
