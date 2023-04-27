import React from 'react'
import StatCard from '../Components/StatCard'
import PerformanceChart from '../Components/PerformanceChart'
import ImpressionsChart from '../Components/ImpressionsChart'
import MembersList from '../Components/MembersList'
import CheckIns from '../Components/CheckIns'
import MyGym from '../Components/MyGym'

//importing Icons
import PresentationIcon from '../Assets/Icons/Presentation.png'
import CardIcon from '../Assets/Icons/Card.png'
import DiscountIcon from '../Assets/Icons/Discount.png'


const DashboardHome = () => {
  return (
    <div className='wrapper p-8 overflow-auto'>
      <div className="stat_cards flex gap-8 w-full justify-between mb-8 lg:flex-row flex-col">
        <StatCard title="Total Revenue" number="0" icon={PresentationIcon} />
        <StatCard title="Active Memberships" number="0" icon={CardIcon} />
        <StatCard title="Expired Memberships" number="0" icon={CardIcon} />
        <StatCard title="Coupons Used" number="0" icon={DiscountIcon} />
      </div>
      <div className='flex gap-4 lg:flex-row flex-col'>
        <div className='lg:w-[65%] w-full flex gap-4 flex-wrap'>
            <div className="performance_chart p-4 w-full bg-[#100F15] rounded-md">
                <PerformanceChart/>
            </div>
            <div className="impressions_chart  flex-1 p-4 bg-[#100F15] rounded-md">
                <ImpressionsChart/>
            </div>
            <div className="members_list flex-1 p-4 bg-[#100F15] rounded-md">
                <MembersList/>
            </div>

        </div>
        <div className='flex-1 flex flex-col gap-4'>
          
          <div className="mygym_list  flex-1 p-4 bg-[#100F15] rounded-md">
                <MyGym/>
            </div>
          <div className="checkins_list flex-1 p-4 bg-[#100F15] rounded-md">
                <CheckIns/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
