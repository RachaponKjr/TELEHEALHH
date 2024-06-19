import UserInfo from '@/app/_components/UserInfo'
import { data } from '@/data'
import React from 'react'
import HistoryComponent from './HistoryComponent'

type Props = {}

const HistoryPage = (props: Props) => {
  const datas = data[0]
  return (
    <>
    <div className='my-4 w-full'>
        <UserInfo Iden={datas.Iden} code_hn={datas.code_hn} hight={datas.hight} name={datas.name} sex={datas.sex} type={datas.type} weight={datas.weight} key={0}/>
      <div className='my-4 py-6 px-4 w-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
        <HistoryComponent/>
      </div>
    </div>
    </>
  )
}

export default HistoryPage