import Image from 'next/image'
import React from 'react'
import { MoonIcon } from '../_icons/DarkModeIcon'
import MessengeIcon from '../_icons/MessengeIcon'
import BellIcon from '../_icons/BellIcon'
import BurgerIcon from '../_icons/BurgerIcon'

const Navbar = () => {
  return (
    <>
      <div className='bg-white flex items-center max-w-full justify-between rounded-lg px-[24px] py-[9px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
        <div className='flex items-center gap-4'>
          <div className=' flex lg:hidden'>
            <BurgerIcon size={25} />
          </div>
          <div className='flex flex-col justify-center'>
            <h5 className='text-[12px] md:text-[16px] font-semibold'>ยินดีต้อนรับ เภสัชกร วิชาชีพ ก้าวหน้า</h5>
            <span className='text-[10px] md:text-[14px] text-[#989FAD]'>โรงพยาบาลโรงพยาบาลศรีนครินทร์</span>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='hidden md:flex cursor-pointer w-10 h-10 justify-center items-center bg-[#E0E6ED] rounded-full'>
            <MoonIcon size={20} />
          </div>
          <div className='hidden md:flex cursor-pointer  justify-center items-center w-10 h-10 bg-[#E0E6ED] rounded-full'>
            <Image src={'/th.png'} alt='' width={25} height={25} />
          </div>
          <div className='hidden md:flex cursor-pointer w-10 h-10  justify-center items-center bg-[#E0E6ED] rounded-full'>
            <MessengeIcon size={20} />
          </div>
          <div className='hidden md:flex cursor-pointer w-10 h-10 relative  justify-center items-center bg-[#E0E6ED] rounded-full'>
            <BellIcon size={20} />
            {/* ปุ่ม เขียวเเสดง เเจ้งเตือน */}
            <div className='absolute -top-1 -right-1 w-4 h-4 bg-[#00AB55]/20 rounded-full flex justify-center items-center'>
              <div className='w-[6px] h-[6px] bg-[#00AB55] rounded-full'>
              </div>
            </div>
          </div>
          <div className=' cursor-pointer w-10 h-10 bg-[#E0E6ED] rounded-full overflow-hidden'>
            <Image src={'/avatar.png'} alt='' width={100} height={100} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar