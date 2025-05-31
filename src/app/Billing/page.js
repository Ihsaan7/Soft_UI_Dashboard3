'use client'
import { useContext } from 'react';
import { NavbarContext } from '../ClientLayout';

export default function Billing() {
  const { setIsNavOpen } = useContext(NavbarContext);

  return (
    <div className="w-full py-3 flex flex-col gap-6">
      {/* Header Section */}
      <nav className="px-8 sticky top-0 z-10 bg-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h4 className="text-gray-500">
              Pages <span className="text-black"> / Billing</span>
            </h4>
            <h3 className="font-bold text-black">Billing</h3>
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
      <div className="px-2 lg:px-8 py-4 space-y-6 w-full">
        {/* Top Row: Card, Salary/Paypal, Invoices */}
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-2">
          {/* Card */}
          <div className="flex-1 lg:max-w-md">
            <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-xl p-6 text-white shadow-lg flex flex-col gap-4 min-h-[200px] lg:min-h-[230px] justify-between relative overflow-hidden">
              {/* Card Design Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>
              
              <div className="flex justify-between items-start">
                <div className="text-2xl lg:text-xl font-bold tracking-widest">4562 1122 4594 7852</div>
                <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Mastercard" className="w-12 h-12" />
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <div>
                  <div className="text-xs text-gray-300">Card Holder</div>
                  <div className="font-bold text-white">Jack Peterson</div>
                </div>
                <div>
                  <div className="text-xs text-gray-300">Expires</div>
                  <div className="font-bold text-white">11 / 22</div>
                </div>
              </div>
            </div>
          </div>
          {/* Salary & Paypal */}
          <div className="flex-1 flex flex-row lg:flex lg:flex-0 gap-2 ">
            <div className="bg-white rounded-xl p-6 flex flex-col lg:h-fit items-center shadow flex-1 lg:flex-0 w-[100px]  ">
              <div className="w-16 h-16 bg-orange-400 rounded-lg mb-4"></div>
              <div className="font-bold text-black text-lg">Salary</div>
              <div className="text-sm text-gray-600 mb-2">Belong Interactive</div>
              <div className="font-bold text-xl text-green-600">$2000+</div>
            </div>
            <div className="bg-white rounded-xl p-6 flex flex-col lg:h-fit items-center shadow flex-1 min-w-[100px] lg:flex-0">
              <div className="w-16 h-16 bg-orange-400 rounded-lg mb-4"></div>
              <div className="font-bold text-black text-lg">Paypal</div>
              <div className="text-sm text-gray-600 mb-2">Freelance Payment</div>
              <div className="font-bold text-xl text-black">$455</div>
            </div>
          </div>
          {/* Invoices */}
          <div className="flex-1 lg:max-w-xs">
            <div className="bg-white rounded-xl px-6 py-2 shadow flex lg:h- flex-col gap-4">
              <div className="flex justify-between items-center mb-2">
                <div className="font-bold text-black text-lg">Invoices</div>
                <button className="border-2 border-orange-500 text-orange-500 font-bold rounded-lg px-4 py-1 text-sm">View All</button>
              </div>
              <div className="flex flex-col gap-2 ">
                {/* Repeat for each invoice */}
                {[
                  { date: "March, 01, 2020", id: "#MS-415646", amount: "$180" },
                  { date: "February, 10, 2021", id: "#RV-126749", amount: "$250" },
                  { date: "April, 05, 2020", id: "#FB-212562", amount: "$560" },
                  { date: "June, 25, 2019", id: "#QW-103578", amount: "$120" },
                  { date: "March, 01, 2019", id: "#AR-803481", amount: "$300" },
                ].map((inv, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <div>
                      <div className="text-black">{inv.date}</div>
                      <div className="text-xs text-gray-600">{inv.id}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-black">{inv.amount}</span>
                      <span className="text-orange-500 font-bold cursor-pointer">PDF</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Payment Method, Billing Info, Transactions */}
        <div className="w-full flex flex-col lg:flex-col gap-6 mt-6">
          <div className='lg:flex lg:flex-row lg:gap-6'>
          {/* Payment Method */}
          <div className="flex-1 lg:w-fit lg:h-fit ">
            <div className="bg-white rounded-xl p-6 py-10 shadow flex flex-col gap-14">
              <div className="flex justify-between items-center mb-2 gap-10">
                <div className="font-bold text-black text-lg">Payment Method</div>
                <button className="bg-black text-white rounded-lg px-4 py-2 text-sm font-semibold">Add New Card</button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center border rounded-lg p-4 hover:border-orange-500 transition-colors">
                  <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Mastercard" className="w-8 h-8 mr-2" />
                  <span className="flex-1 text-gray-600 font-bold">**** **** **** 7852</span>
                  <span className="text-xs font-bold text-black">Mastercard</span>
                </div>
                <div className="flex items-center border rounded-lg p-4 hover:border-orange-500 transition-colors">
                  <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Mastercard" className="w-8 h-8 mr-2" />
                  <span className="flex-1 text-gray-600 font-bold">**** **** **** 5248</span>
                  <span className="text-xs font-bold text-black">Mastercard</span>
                </div>
              </div>
            </div>
          </div>
           {/* Transactions */}
           <div className="flex-1 lg:max-w-lg mt-5 lg:mt-0">
            <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="font-bold text-black text-lg">Your Transaction's</div>
                <div className="text-xs text-gray-600">23 - 30 March 2020</div>
              </div>
              <div>
                <div className="text-xs text-gray-600 mb-1">NEWEST</div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-red-500 rounded-full"></span>
                    <span className="font-bold text-black">Netflix</span>
                  </div>
                  <span className="text-red-500 font-bold">- $2,500</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-green-500 rounded-full"></span>
                    <span className="font-bold text-black">Apple</span>
                  </div>
                  <span className="text-green-500 font-bold">+ $2,000</span>
                </div>
                <div className="text-xs text-gray-600 mb-1 mt-5">YESTERDAY</div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-green-500 rounded-full"></span>
                    <span className="font-bold text-black">Stripe</span>
                  </div>
                  <span className="text-green-500 font-bold">+ $750</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-green-500 rounded-full"></span>
                    <span className="font-bold text-black">HubSpot</span>
                  </div>
                  <span className="text-green-500 font-bold">+ $1,000</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-green-500 rounded-full"></span>
                    <span className="font-bold text-black">Creative Tim</span>
                  </div>
                  <span className="text-green-500 font-bold">+ $2,500</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-gray-400 rounded-full"></span>
                    <span className="font-bold text-black">Webflow</span>
                  </div>
                  <span className="text-gray-600 font-bold">Pending</span>
                </div>
              </div>
              
            </div>
          </div>
          </div>
          {/* Billing Information */}
          <div className="flex-1">
            <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-4">
              <div className="font-bold text-black text-lg mb-2">Billing Information</div>
              {/* Repeat for each billing info */}
              {[
                {
                  name: "Oliver Liam",
                  company: "Viking Burrito",
                  email: "oliver@burrito.com",
                  vat: "FRB1235476",
                },
                {
                  name: "Lucas Harper",
                  company: "Stone Tech Zone",
                  email: "lucas@stone-tech.com",
                  vat: "FRB1235476",
                },
                {
                  name: "Ethan James",
                  company: "Fiber Notion",
                  email: "ethan@fiber.com",
                  vat: "FRB1235476",
                },
              ].map((info, i) => (
                <div key={i} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 flex flex-col gap-2 shadow-sm border border-gray-100 hover:border-orange-200 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="font-bold text-black text-lg">{info.name}</div>
                    <div className="flex gap-2">
                      <button className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors">Edit</button>
                      <button className="text-pink-500 font-semibold text-sm hover:text-pink-600 transition-colors">Delete</button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="bg-gradient-to-br from-orange-50 to-white p-3 rounded-lg shadow-sm border border-orange-100">
                      <div className="text-orange-600 text-sm font-medium">Company Name</div>
                      <div className="font-semibold text-gray-800">{info.company}</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-white p-3 rounded-lg shadow-sm border border-orange-100">
                      <div className="text-orange-600 text-sm font-medium">Email Address</div>
                      <div className="font-semibold text-gray-800">{info.email}</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-white p-3 rounded-lg shadow-sm border border-orange-100">
                      <div className="text-orange-600 text-sm font-medium">VAT Number</div>
                      <div className="font-semibold text-gray-800">{info.vat}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
