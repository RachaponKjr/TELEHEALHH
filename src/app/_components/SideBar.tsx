'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { LeftArrowIcon } from '../_icons/ArrowIcon'
import Link from 'next/link'
import SideIcon from '../_icons/SideIcon'
import { title } from 'process'
import Paper from '../_icons/Paper'
import SettingIcon from '../_icons/SettingIcon'
import CalendarIcon from '../_icons/CalendarIcon'
import HelpIcon from '../_icons/HelpIcon'
import { LogoutIcon } from '../_icons/AuthIcon'
import { PhoneSideIcon } from '../_icons/PhoneIcon'
import { usePathname } from 'next/navigation'

const SideBar = () => {
    const link = usePathname()
    const [open, setOpen] = useState(true)

    const menuList = [
        {
            title: 'แดชบอร์ด',
            icon: <SideIcon />,
            link: "#"
        },
        {
            title: 'เวชระเบียนอิเล็กทรอนิกส์',
            icon: <Paper />,
            link: "#"
        },
        {
            title: 'บันทึกข้อมูลสุขภาพ',
            icon: <SettingIcon size={28} />,
            link: "#"
        },
        {
            title: 'ติดตามสุขภาพ',
            icon: <SettingIcon size={28} />,
            link: "#"
        },
        {
            title: 'ปฏิทินของฉัน',
            icon: <CalendarIcon size={28} />,
            link: "#"
        },
        {
            title: 'เทเลเฮลท์ คอลลิ่ง',
            icon: <PhoneSideIcon />,
            link: "/"
        },
        {
            title: 'คู่มือการใช้งาน',
            icon: <HelpIcon />,
            link: "#"
        },
    ]
    return (
        <div className={`shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hidden lg:flex flex-col justify-between bg-white ${open ? 'min-w-[260px]' : 'w-max'} h-[100vh] px-6 py-[18px] sticky top-0`}>
            {/* Logo */}
            <div className='flex flex-col gap-5'>
                <div className='flex flex-row items-center justify-between h-[3rem]'>
                    <div className={`${open ? 'block' : 'hidden'}`}>
                    <Image src="/logo.png" width={120} height={120} alt={''} />
                    </div>
                    <div className={`${open ? 'w-4': 'w-full'} h-4  cursor-pointer ${open ? 'rotate-0' : 'rotate-180'}`} onClick={() => setOpen(!open)}>
                        <LeftArrowIcon />
                    </div>
                </div>
                {/* Menu list */}
                <div>
                    <ul className='flex flex-col gap-2'>
                        {menuList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link href={item.link}>
                                        <div className={` hover:bg-[#ECECEE] w-full px-2 py-2 rounded-lg h-max grid ${open ? 'grid-cols-4' : 'grid-cols-1'} items-center  ${link === item.link ? 'bg-[#ECECEE]' : ''}`}>
                                            <div className='w-7 h-7'>
                                                {item.icon}
                                            </div>
                                            <h6 className={`${open ? 'block' : 'hidden'} text-[14px] text-[#0E1726] col-span-3 font-semibold`}>{item.title}</h6>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div>
                <Link href={"###"}>
                    <div className='w-full px-2 py-2 rounded-lg h-max flex flex-row items-center gap-[12px] hover:bg-[#ECECEE]'>
                        <div className='w-7 h-7'>
                            <LogoutIcon/>
                        </div>
                        <h6 className={`${open ? 'block' : 'hidden'} text-[14px] text-[#0E1726] font-semibold `}>ออกจากระบบ</h6>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SideBar