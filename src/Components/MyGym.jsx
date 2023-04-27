import React from 'react'
import EditIcon from '../Assets/Icons/Edit.png'

const MyGym = () => {
  return (
    <div>
      <div className="header flex justify-between">
        <h3 className='text-white'>My Gym</h3>
        <span className='text-xs text-purple-500 '> <img src={EditIcon} alt="Icon" className='h-6 w-6' /> </span>
      </div>
    </div>
  )
}

export default MyGym
