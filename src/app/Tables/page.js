'use client'
import { useContext } from 'react';
import { NavbarContext } from '../ClientLayout';

export default function Tables() {
  const { setIsNavOpen } = useContext(NavbarContext);

  // Project Table Data
  const projectData = [
    {
      name: 'Spotify',
      logo: 'https://cdn-icons-png.flaticon.com/512/174/174872.png',
      budget: '$2,500',
      status: 'working',
      completion: 60,
    },
    {
      name: 'Invision',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
      budget: '$5,000',
      status: 'done',
      completion: 100,
    },
    {
      name: 'Jira',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968871.png',
      budget: '$3,400',
      status: 'canceled',
      completion: 30,
    },
    {
      name: 'Slack',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968817.png',
      budget: '$1,000',
      status: 'canceled',
      completion: 0,
    },
    {
      name: 'Webdev',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      budget: '$14,000',
      status: 'working',
      completion: 80,
    },
    {
      name: 'Adobe XD',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968702.png',
      budget: '$2,300',
      status: 'done',
      completion: 100,
    },
  ];

  function getBarColor(status, percent) {
    if (status === 'done') return 'bg-green-400';
    if (status === 'working') return 'bg-blue-400';
    if (status === 'canceled') return percent === 0 ? 'bg-gray-300' : 'bg-red-400';
    return 'bg-gray-300';
  }

  return (
    <div className="w-full py-3 flex flex-col gap-6">
      {/* Header Section */}
      <nav className="px-8 sticky top-0 z-10 bg-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h4 className="text-gray-500">
              Pages <span className="text-black"> / Tables</span>
            </h4>
            <h3 className="font-bold text-black">Tables</h3>
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

      {/* Main Content */}
      <div className='text-black py-5'>
        <div className="px-3 space-y-6">
          <div className="bg-white rounded-sm p-3 shadow-md w-full h-120 overflow-y-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pl-5">Authors Table</h2>
            <div className="overflow-x-auto ">
              <div className="min-w-[800px] lg:w-full">
                {/* Table Header */}
                <div className="grid grid-cols-5 gap-5 mb-2 pb-4 px-15 border-b border-gray-200">
                  <div className="font-bold text-gray-500 text-xs tracking-wide uppercase">AUTHOR</div>
                  <div className="font-bold text-gray-500 text-xs tracking-wide uppercase">FUNCTION</div>
                  <div className="font-bold text-gray-500 text-xs tracking-wide uppercase">STATUS</div>
                  <div className="font-bold text-gray-500 text-xs tracking-wide uppercase">EMPLOYED</div>
                  <div className="font-bold text-gray-500 text-xs tracking-wide uppercase">SETTING</div>
                </div>

                {/* Table Rows */}
                <div className="space-y-2">
                  {/* Row 1 */}
                  <div className="grid grid-cols-5 gap-4 items-center py-2 bg-white rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
                    {/* Author */}
                    <div className="flex items-center gap-4 min-w-[200px]">
                      <img src="https://i.pravatar.cc/150?img=1" alt="profile" className="w-10 h-10 rounded-full object-cover" />
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 leading-tight">John Michael</span>
                        <span className="text-xs text-gray-500 leading-tight">john@creative-tim.com</span>
                      </div>
                    </div>
                    {/* Function */}
                    <div className="flex flex-col ml-10">
                      <span className="font-semibold text-gray-700 text-sm leading-tight">Manager</span>
                      <span className="text-xs text-gray-400 leading-tight">Organization</span>
                    </div>
                    {/* Status */}
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-bold rounded-lg bg-green-400 text-white uppercase">Online</span>
                    </div>
                    {/* Employed */}
                    <div>
                      <span className="text-sm text-gray-700">23/04/25</span>
                    </div>
                    {/* Edit */}
                    <div>
                      <span className="text-xs text-gray-400 font-semibold cursor-pointer hover:text-orange-500 transition-colors">Edit</span>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="grid grid-cols-5 gap-4 items-center py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4 min-w-[200px]">
                      <img src="https://i.pravatar.cc/150?img=2" alt="profile" className="w-10 h-10 rounded-full object-cover" />
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 leading-tight">Alexa Liras</span>
                        <span className="text-xs text-gray-500 leading-tight">alexa@creative-tim.com</span>
                      </div>
                    </div>
                    <div className="flex flex-col ml-10">
                      <span className="font-semibold text-gray-700 text-sm leading-tight">Programator</span>
                      <span className="text-xs text-gray-400 leading-tight">Developer</span>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-bold rounded-lg bg-gray-400 text-white uppercase">Offline</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-700">22/04/25</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 font-semibold cursor-pointer hover:text-orange-500 transition-colors">Edit</span>
                    </div>
                  </div>
                  {/* Row 3 */}
                    <div className="grid grid-cols-5 gap-4 items-center  py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4 min-w-[200px]">
                      <img src="https://i.pravatar.cc/150?img=3" alt="profile" className="w-10 h-10 rounded-full object-cover" />
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 leading-tight">Laurent Perrier</span>
                        <span className="text-xs text-gray-500 leading-tight">laurent@creative-tim.com</span>
                      </div>
                    </div>
                    <div className="flex flex-col ml-10">
                      <span className="font-semibold text-gray-700 text-sm leading-tight">Executive</span>
                      <span className="text-xs text-gray-400 leading-tight">Projects</span>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-bold rounded-lg bg-green-400 text-white uppercase">Online</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-700">21/04/25</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 font-semibold cursor-pointer hover:text-orange-500 transition-colors">Edit</span>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="grid grid-cols-5 gap-4 items-center  py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4 min-w-[200px]">
                      <img src="https://i.pravatar.cc/150?img=4" alt="profile" className="w-10 h-10 rounded-full object-cover" />
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 leading-tight">Michael Levi</span>
                        <span className="text-xs text-gray-500 leading-tight">michael@creative-tim.com</span>
                      </div>
                    </div>
                    <div className="flex flex-col ml-10">
                      <span className="font-semibold text-gray-700 text-sm leading-tight">Programator</span>
                      <span className="text-xs text-gray-400 leading-tight">Developer</span>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-bold rounded-lg bg-gray-400 text-white uppercase">Offline</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-700">20/04/25</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 font-semibold cursor-pointer hover:text-orange-500 transition-colors">Edit</span>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="grid grid-cols-5 gap-4 items-center  py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4 min-w-[200px]">
                      <img src="https://i.pravatar.cc/150?img=5" alt="profile" className="w-10 h-10 rounded-full object-cover" />
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 leading-tight">Richard Gran</span>
                        <span className="text-xs text-gray-500 leading-tight">richard@creative-tim.com</span>
                      </div>
                    </div>
                    <div className="flex flex-col ml-10">
                      <span className="font-semibold text-gray-700 text-sm leading-tight">Manager</span>
                      <span className="text-xs text-gray-400 leading-tight">Executive</span>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-bold rounded-lg bg-gray-400 text-white uppercase">Offline</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-700">19/04/25</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 font-semibold cursor-pointer hover:text-orange-500 transition-colors">Edit</span>
                    </div>
                  </div>
                  {/* Row 6 */}
                  <div className="grid grid-cols-5 gap-4 items-center py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4 min-w-[200px]">
                      <img src="https://i.pravatar.cc/150?img=6" alt="profile" className="w-10 h-10 rounded-full object-cover" />
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 leading-tight">Miriam Eric</span>
                        <span className="text-xs text-gray-500 leading-tight">miriam@creative-tim.com</span>
                      </div>
                    </div>
                    <div className="flex flex-col ml-10">
                      <span className="font-semibold text-gray-700 text-sm leading-tight">Programator</span>
                      <span className="text-xs text-gray-400 leading-tight">Developer</span>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-bold rounded-lg bg-gray-400 text-white uppercase">Offline</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-700">18/04/25</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 font-semibold cursor-pointer hover:text-orange-500 transition-colors">Edit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Table Section */}
      <div className='text-black '>
        <div className="px-3 space-y-6">
          <div className="bg-white rounded-xl p-3 shadow-md w-full h-122 overflow-y-hidden">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pt-5 pl-5">Projects Table</h2>
            <div className="overflow-x-auto">
              <div className="min-w-[700px] lg:w-full">
                {/* Table Header */}
                <div className="grid grid-cols-4 gap-5 mb-2 pb-4 px-8 border-b border-gray-200">
                  <div className="font-bold text-gray-500 text-xs tracking-wide uppercase">PROJECT</div>
                  <div className="font-bold text-gray-500 text-xs tracking-wide uppercase">BUDGET</div>
                  <div className="font-bold text-gray-500 text-xs tracking-wide uppercase">STATUS</div>
                  <div className="font-bold text-gray-500 text-xs tracking-wide uppercase">COMPLETION</div>
                </div>
                {/* Table Rows */}
                <div className="space-y-2">
                  {projectData.map((proj, idx) => (
                    <div key={proj.name} className="grid grid-cols-4 gap-5 items-center py-2 bg-white rounded-xl shadow-sm hover:bg-gray-50 transition-colors px-8">
                      {/* Project */}
                      <div className="flex items-center gap-4 min-w-[120px]">
                        <img src={proj.logo} alt={proj.name} className="w-10 h-10 rounded-full object-cover" />
                        <span className="font-bold text-gray-900 text-base">{proj.name}</span>
                      </div>
                      {/* Budget */}
                      <div className="text-sm text-gray-700 font-semibold">{proj.budget}</div>
                      {/* Status */}
                      <div className="capitalize text-xs font-semibold text-gray-500">{proj.status}</div>
                      {/* Completion */}
                      <div className="flex items-center gap-2 min-w-[100px]">
                        <span className="text-xs font-bold text-gray-700 w-8">{proj.completion}%</span>
                        <div className="flex-1 h-2 rounded bg-gray-200 overflow-hidden min-w-[60px]">
                          <div
                            className={`h-2 rounded ${getBarColor(proj.status, proj.completion)}`}
                            style={{ width: `${proj.completion}%`, transition: 'width 0.3s' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
