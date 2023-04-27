import React from 'react'
import DashboardIcon from '../Assets/Icons/Dashboard.png';
import SettingsIcon from '../Assets/Icons/Settings.png';
import CardIcon from '../Assets/Icons/Card.png';
import PresentationIcon from '../Assets/Icons/Presentation.png';

const MenuItem = ({image, title})=> (<li className='flex gap-5 text-xl'><img src={image} alt="icon" className='h-6 w-6'/> {title}</li>);


const Sidebar = () => {
  return (
    <div>
      <div className="sidebar_container flex justify-center">
        <ul className='pt-40 flex flex-col gap-8 text-xl text-white '>
           <MenuItem image={DashboardIcon} title="Dashboard"/>
           <MenuItem image={CardIcon} title="Memberships"/>
           <MenuItem image={SettingsIcon} title="Check-in Panel"/>
           <MenuItem image={PresentationIcon} title="Payments"/>
           <MenuItem image={PresentationIcon} title="Coupons"/>
           <MenuItem image={SettingsIcon} title="Setting"/>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
