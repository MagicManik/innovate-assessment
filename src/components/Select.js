import React from 'react'

const Select = ({children}) => {
  return (
    <div>
        <select id='child-age-input-m' className="border border-[#727483] rounded-lg bg-transparent select-sm text-sm text-[#141D38] w-full h-12">
           {children}
        </select>
    </div>
  )
}

export default Select