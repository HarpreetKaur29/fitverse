import React from 'react'

const StatCard = ({title, number, icon}) => {
  return (
    <div className='stat_card p-6 rounded-md bg-[#100F15] text-white flex gap-3 items-center flex-1'>
      <span className='p-5 bg-[#282C35] rounded-md'> <img src={icon} alt="icon" className='w-6 h-6' /> </span>
      <div className="details">
        <div className="card_heading text-sm mb-2">{title}</div>
        <h1 className='text-4xl font-bold'>{number}</h1>
      </div>
    </div>
  )
}

export default StatCard
