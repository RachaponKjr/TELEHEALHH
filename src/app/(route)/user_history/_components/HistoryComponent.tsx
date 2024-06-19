import CalendarIcon from '@/app/_icons/CalendarIcon'
import PrintIcon from '@/app/_icons/PrintIcon'
import { Button, Table } from '@radix-ui/themes'
import { DatePicker } from 'antd'
import React from 'react'


const HistoryComponent = () => {
    return (
        <>
            <div className='flex flex-col gap-4 max-w-full w-full'>
                <div className='w-full md:w-[20rem] '>
                    <DatePicker suffixIcon={<CalendarIcon size={20} />} size='large' placeholder='เลือกวันที่' className='w-full border-[#989FAD] text-[#888EA8] placeholder:text-[#888EA8]' />
                </div>
                <div className='flex justify-between items-center'>
                    <h6 className='text-[#0E1726] text-[14px] md:text-[18px] font-bold'>ประวัติการโทร</h6>
                    {/* icon เครื่องปิ้น */}
                    <Button variant="outline" radius='large' className=' cursor-pointer py-5'>
                        <PrintIcon size={25} /> Prescription
                    </Button>
                </div>
                <h6 className='text-[#0E1726] text-[14px] md:text-[18px] font-bold'>5 ครั้ง</h6>
                <div className=' w-full overflow-hidden h-[16rem] overflow-x-auto overflow-y-auto'>
                    <table className='w-full overflow-hidden overflow-x-auto' >
                        <thead className='bg-[#F6F8FA] h-[2rem] w-max text-nowrap'>
                            <tr className='text-[#0E1726] text-[14px] md:text-[16px] text-left '>
                                <th className='w-[5rem]'>#</th>
                                <th>ชื่อ - นามสกุล</th>
                                <th>วันที่โทร</th>
                                <th>เวลาโทรออก</th>
                                <th>สิ้นสุดการโทร</th>
                                <th>เวลาทั้งหมด</th>
                            </tr>
                        </thead>
                        <tbody className='overflow-y-auto'>
                            {Array.from({ length: 8 }).map((item, index) => (
                                <>
                                    <Tabel index={index} />
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export const Tabel = ({ index }: { index: number }): JSX.Element => {
    return (
        <>
            <tr className='h-[3rem] border-b text-[12px] md:text-[16px] border-[#E0E6ED] text-[#0E1726] w-max text-nowrap' key={index}>
                <td className=''>{index + 1}</td>
                <td className=''>นายเอกราช เก่งทุกทาง</td>
                <td className=''>18/04/2567</td>
                <td className=''>16:00:00</td>
                <td className=''>17:13:50</td>
                <td className=''>01:13:06</td>
            </tr>
        </>
    )
}

export default HistoryComponent