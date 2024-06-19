import React from 'react'
import SideBar from './SideBar'
import RightSite from './RightSite'

const LayoutComponent = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <>
            <div className='flex bg-[#FAFAFA]'>
                <SideBar />
                <RightSite>
                    {children}
                </RightSite>
            </div>
        </>
    )
}

export default LayoutComponent