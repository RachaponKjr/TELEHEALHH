'use client'
import React from 'react'
import Navbar from './Navbar'
import { Input, Select, Space } from 'antd'
import { Button } from '@radix-ui/themes';
import SearchIcon from '../_icons/SearchIcon';
import UserInfo from './UserInfo';

const options = [
    {
        value: 'ID Card',
        label: 'ID Card',
    },
    {
        value: 'HN',
        label: 'HN',
    },
    {
        value: 'Mobile Phone',
        label: 'Mobile Phone',
    },
];
const RightSite = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className=' flex-grow px-6 py-5 w-full'>
            <Navbar />
            <h6 className='text-[#4361EE] font-bold text-[18px] my-4'>เทเลเฮลท์ คอลลิ่ง</h6>
            <div className='flex flex-col gap-4 p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg'>
                <div className=' grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 w-full gap-2 lg:gap-4'>
                    <div className='col-span-2 flex flex-col gap-2'>
                        <h6 className='text-[#0E1726] font-semibold'>ค้นหา</h6>
                        <div className='flex w-full'>
                            <Space.Compact style={{ width: '100%' }}>
                                <Select size='large' placeholder="Search by" options={options} className='w-[250px]' />
                                <Input size='large' />
                            </Space.Compact>
                        </div>
                    </div>
                        <div className='flex flex-col gap-2'>
                            <h6 className='text-[#0E1726] font-semibold'>ชื่อ</h6>
                            <div className='flex'>
                                <Input size='large' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h6 className='text-[#0E1726] font-semibold'>นามสกุล</h6>
                            <div className='flex'>
                                <Input size='large' />
                            </div>
                        </div>
                </div>
                <div className='flex gap-2 justify-center'>
                    <Button size="3" variant="solid" radius="large" style={{ cursor: 'pointer', width: '126px', boxShadow: '0px 10px 20px -10px #4361EE' }} >
                        <SearchIcon size={20} />Search
                    </Button>
                    <Button size="3" variant="outline" radius="large" style={{ cursor: 'pointer', width: '126px' }}>
                        Reset
                    </Button>
                </div>
            </div>

            {children}
            
            {/* copyright */}
            <div className='flex justify-center'>
                <h6 className=' mt-4 text-[10px] lg:text-[16px]'>Copyright  2024 TELEHEALTH THAILAND. All rights Reserved</h6>
            </div>
        </div>
    )
}

export default RightSite