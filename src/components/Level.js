import React from 'react'

const Level = ({ level, htmlfor }) => {
    return (
        <label className='text-[14px] text-[#191C19] pl-[10px]' htmlFor={htmlfor}>{level}</label>
    )
}

export default Level