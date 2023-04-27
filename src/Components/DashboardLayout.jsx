import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import DiscountIcon from '../Assets/Icons/Discount.png'
import NotificationIcon from '../Assets/Icons/Notifications.png'
import MenuIcon from '../Assets/Icons/Ham.png'

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='dashboard_wrapper h-screen w-screen flex bg-[#010101]'>
      <div className={`sidebar w-1/2 lg:w-1/5 bg-[#0C0D11] lg:static fixed top-0 bottom-0 lg:translate-x-0 ${isOpen ?'translate-x-[0%]' :'-translate-x-[100%]'}`}>
       <Sidebar/>  
      </div>
      <div className='lg:w-4/5 w-full h-screen overflow-auto ' >
       <div className="header flex justify-between w-full py-3 px-6 items-center  bg-[#0C0D11]">
        <img src={MenuIcon} alt="menu-icon"  className='w-8 h-8 lg:invisible visible justify-self-start ' onClick={()=> setIsOpen(true) }/>
        <div className='flex gap-5 items-center justify-self-end'>
        <input type="text" placeholder='Search' className='outline-none bg-[#282C35] px-3 py-2 w-72 rounded lg:block hidden'/>
        <span><img className="h-6 w-6" src={DiscountIcon} alt="Icon" /></span>
        <span><img src={NotificationIcon} alt="Icon" className='h-6 w-6' /></span>
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80" alt="hi" className='w-14 h-14 rounded-lg object-cover '/>
        </div>
       </div>
       <div className='overflow-auto' onClick={()=> setIsOpen(false)}>
        <Outlet/>
       </div>
      </div>        </div>
  )
}

export default DashboardLayout
