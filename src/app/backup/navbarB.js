// 'use client'

// const NavItem = ({ icon, label, isActive }) => (
//   <div className={`flex items-center gap-3 w-full p-2.5 rounded-xl transition-all duration-300 cursor-pointer
//     ${isActive 
//       ? 'bg-gradient-to-r from-orange-500 to-orange-400 shadow-[0_4px_12px_0_rgba(251,146,60,0.5)]' 
//       : 'hover:bg-gray-100'
//     }`}>
//     <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] 
//       ${isActive ? 'bg-white' : 'bg-gray-100'}`}>
//       <img src={icon} alt={label} className="w-5 h-5" />
//     </div>
//     <h3 className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-gray-700'}`}>
//       {label}
//     </h3>
//   </div>
// );

// const Navbar = () => {
//   const mainMenuItems = [
//     { icon: './profileB.png', label: 'Dashboard', isActive: true },
//     { icon: './profileB.png', label: 'Tables' },
//     { icon: './profileB.png', label: 'Billing' },
//     { icon: './profileB.png', label: 'Virtual Reality' },
//     { icon: './profileB.png', label: 'RTL' }
//   ];

//   const accountItems = [
//     { icon: './profileB.png', label: 'Profile' },
//     { icon: './profileB.png', label: 'Sign In' },
//     { icon: './profileB.png', label: 'Sign Up' }
//   ];

//   return (
//     <nav className="flex items-start justify-start p-4 w-full h-screen bg-gray-50/30">
//       <div className="w-[280px] p-4 flex flex-col rounded-2xl bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3 px-2 pb-6 border-b border-gray-100">
//           <div className="w-10 h-10 rounded-xl bg-orange-500 shadow-lg flex items-center justify-center">
//             <img src="./profileB.png" alt="logo" className="w-6 h-6" />
//           </div>
//           <h3 className="text-lg text-gray-800 font-bold">Soft UI Dashboard</h3>
//         </div>

//         {/* Main Menu */}
//         <div className="flex flex-col gap-2 mt-6">
//           {mainMenuItems.map((item, index) => (
//             <NavItem key={index} {...item} />
//           ))}
//         </div>

//         {/* Account Section */}
//         <div className="mt-8">
//           <h3 className="text-xs text-gray-400 font-semibold px-4 mb-4">
//             ACCOUNT PAGES
//           </h3>
//           <div className="flex flex-col gap-2">
//             {accountItems.map((item, index) => (
//               <NavItem key={index} {...item} />
//             ))}
//           </div>
//         </div>

//         {/* Help Section */}
//         <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-[0_8px_16px_-6px_rgba(0,0,0,0.2)]">
//           <div className="w-10 h-10 rounded-xl bg-orange-500/20 backdrop-blur-xl flex items-center justify-center mb-4">
//             <img src="./profileB.png" alt="help" className="w-6 h-6" />
//           </div>
//           <h3 className="text-lg font-bold mb-1">Need Help?</h3>
//           <p className="text-sm text-gray-300 mb-4">Please check our docs</p>
//           <button className="w-full py-2.5 px-4 bg-white text-gray-800 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300">
//             Documentation
//           </button>
//         </div>

//         {/* Upgrade Button */}
//         <div className="mt-6">
//           <button className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-xl font-semibold shadow-[0_4px_12px_0_rgba(251,146,60,0.5)] hover:shadow-[0_6px_16px_0_rgba(251,146,60,0.6)] transition-all duration-300">
//             Upgrade to Pro
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
