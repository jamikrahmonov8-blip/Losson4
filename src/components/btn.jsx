import React from 'react'

function Btn({title}) {
  return (
    <button className='w-fit p-[20px] bg-[#0E9E2F] text-white h-[50px] text-[14px] flex justify-center items-center'>
    <p>{title}</p>
    </button>
  )
}

export default Btn