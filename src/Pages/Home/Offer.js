import React from 'react';
import { Link } from 'react-router-dom';
import saveIcon from '../../assets/icons/save-icon.svg';

const Offer = () => {
  return (
        <section className='lg:flex block justify-between items-center lg:px-[65px] px-6 py-[14px] bg-[#EFF3F7] rounded-[20px] my-12'>
            <div>
                <img className='w-12' src={saveIcon} alt="" />
            </div>
            <p className='text-[#0010B5] lg:py-0 py-4'>Save an average of 15% on thousands of hotels when you’re signed in</p>
            <div>
                <button className="btn bg-[#0010B5] outline-none border-none hover:bg-[#F8AF41] hover:text-black normal-case font-normal text-white h-[30px] w-[80px]">
                    <Link to="/login">Sign in</Link>
                </button>
            </div>
        </section>
  )
}

export default Offer;