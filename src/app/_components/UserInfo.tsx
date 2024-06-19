'use client'
import { Avatar, Button } from '@radix-ui/themes'
import React from 'react'
import { MiconPhoneIcon, PhoneDownIcon, PhoneOutIcon } from '../_icons/PhoneIcon'
import SettingIcon from '../_icons/SettingIcon'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface Props {
    key: number
    name?: string
    code_hn?: string
    Iden?: string
    sex?: string
    type?: string
    hight?: number
    weight?: number
}

const UserInfo: React.FC<Props> = ({ key, name, code_hn, Iden, sex, type, hight, weight }) => {
    const [call, setCall] = React.useState(false)
    const path = usePathname()

    const callPhone = (): JSX.Element => {
        if (call) {
            return (
                <>
                    <div className='flex justify-center gap-4 w-full md:w-[200px] lg:w-full xl:w-[200px]'>
                        {/* ไมโครโฟน */}
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <div className=' w-[48px] h-[48px] cursor-pointer rounded-full flex items-center justify-center border-[2px] border-[#9598A5]'>
                                <MiconPhoneIcon size={25} />
                            </div>
                            <span className='text-[#475467] text-[14px]'>ไมโครโฟน</span>
                        </div>
                        {/* โทรออก */}
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <div className=' w-[48px] h-[48px] cursor-pointer rounded-full bg-[#D32F2F] flex items-center justify-center border-[2px] border-[#D32F2F]' onClick={() => setCall(false)}>
                                <PhoneDownIcon size={25} />
                            </div>
                            <span className='text-[#475467] text-[14px]'>วางสาย</span>
                        </div>
                        {/* การตั้งค่า */}
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <div className=' w-[48px] h-[48px] cursor-pointer rounded-full flex items-center justify-center border-[2px] border-[#9598A5]'>
                                <SettingIcon size={25} />
                            </div>
                            <span className='text-[#475467] text-[14px]'>การตั้งค่า</span>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='flex justify-center  gap-4 w-full md:w-[200px] lg:w-full xl:w-[200px]'>
                        {/* โทรออก */}
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <div className=' w-[48px] h-[48px] cursor-pointer rounded-full flex items-center justify-center border-[2px] border-[#00AB55]' onClick={() => setCall(true)}>
                                <PhoneOutIcon size={25} />
                            </div>
                            <span className='text-[#475467] text-[14px]'>โทรออก</span>
                        </div>
                        {/* การตั้งค่า */}
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <div className=' w-[48px] h-[48px] cursor-pointer rounded-full flex items-center justify-center border-[2px] border-[#9598A5]'>
                                <SettingIcon size={25} />
                            </div>
                            <span className='text-[#475467] text-[14px]'>การตั้งค่า</span>
                        </div>
                    </div>
                </>
            )
        }
    }
    return (
        <>
            <div key={key} className='p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg flex flex-col gap-4'>
                {/* ส่วน หัวของ ข้อมูล คนไข */}
                <div className='flex justify-between '>
                    <div className='flex flex-row gap-2 lg:gap-4'>
                        {/* Avatar Image */}
                        <Avatar src='/avatar2.png' radius="full" size={'4'} fallback="A" />
                        <div className='flex flex-col w-[calc(100% - 4rem)]'>
                            {/* ชื่อ */}
                            <h6 className='font-bold text-[#24262D] text-sm lg:text-[16px] truncate'>{name}</h6>
                            {/* รหัสประจำตัว */}
                            <span className='lg:text-[14px] text-[#4361EE] font-normal text-sm'>{code_hn}</span>
                        </div>
                    </div>
                    {/* Btn */}
                    <div className='flex flex-col md:flex-row gap-2 lg:gap-4 h-max lg:h-[2rem]'>
                        <div className={`${path === '/user_history' ? 'bg-[#5D6679]' : 'bg-[#175CD3]'} lg:px-4 py-1 h-full text-white rounded-md font-semibold p-0`}>
                            <Link href={'/user_history'} className=' rounded-lg w-full h-full px-2 flex items-center text-sm lg:text-[16px]'>
                                ประวิตการโทร
                            </Link>
                        </div>
                        <div className={` px-4 py-1 text-white rounded-md h-full ${call ? 'bg-[#00AB55]' : 'bg-[#5D6679]'} text-sm lg:text-[16px] justify-center flex items-center`}>00:00</div>
                    </div>
                </div>
                {/* ข้อมูลของคนไข */}
                <div className='flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between gap-4'>
                    <div className='flex flex-row justify-between md:gap-[6rem] lg:gap-[1rem] xl:gap-[8rem]'>
                        <div className='flex flex-col gap-2'>
                            {/* บัตรประชาชน */}
                            <div className='flex flex-col lg:flex-row lg:items-center gap-2'>
                                <h6 className='text-[#888EA8] text-[14px] w-[144px]'>บัตรประชาชน/พาสปอต์:</h6>
                                <h6 className='text-[#0E1726] text-[15px] w-max'>{Iden}</h6>
                            </div>
                            {/* ข้อมูลวันเกิด */}
                            <div className='flex flex-col lg:flex-row items-start gap-2'>
                                <h6 className='text-[#888EA8] text-[14px] w-[144px]'>วัดเกิด:</h6>
                                <h6 className='text-[#0E1726] text-[15px]'>23/02/2542<br />(24 ปี 6 เดือน 23 วัน)
                                </h6>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            {/* สิทธิประกันสุขภาพ */}
                            <div className='flex flex-col lg:flex-row lg:items-center gap-2'>
                                <h6 className='text-[#888EA8] text-[14px] w-[110px]'>สิทธิประกันสุขภาพ:</h6>
                                <h6 className='text-[#0E1726] text-[15px] truncate'>สิทธิประกันสุขภาพแห่งชาติ</h6>
                            </div>
                            {/* ข้อมูล สัดส่วน */}
                            <div className='flex flex-col gap-2'>
                                <div className='flex w-max gap-4'>
                                    <div className='flex flex-col md:flex-row gap-2'>
                                        <div className='w-[60px] lg:w-[100px] text-[#888EA8] text-[14px]'>เพศ:</div>
                                        <div className='w-max lg:w-[110px] text-[#0E1726] text-[15px]'>{sex}</div>
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-2'>
                                        <div className='w-max lg:w-[80px] text-[#888EA8] text-[14px]'>กรุ๊ปเลือด:</div>
                                        <div className='w-max text-[#0E1726] text-[15px] uppercase'>{type}</div>
                                    </div>
                                </div>
                                <div className='flex w-max gap-4'>
                                    <div className='flex flex-col md:flex-row gap-2'>
                                        <div className='w-[60px] lg:w-[100px] text-[#888EA8] text-[14px]'>น้ำหนัก:</div>
                                        <div className='w-max lg:w-[110px] text-[#0E1726] text-[15px]'>{weight} Kg.</div>
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-2'>
                                        <div className='w-max lg:w-[80px] text-[#888EA8] text-[14px]'>ความสูง:</div>
                                        <div className='w-max text-[#0E1726] text-[15px]'>{hight} Cm.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {callPhone()}
                </div>
            </div>
        </>
    )
}

export default UserInfo