import React from 'react'

const BellIcon = ({ size }: { size: number }): JSX.Element => {
    return (
        <>
            <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6.66667C15 5.34059 14.4732 4.06882 13.5355 3.13114C12.5979 2.19346 11.3261 1.66667 10 1.66667C8.67392 1.66667 7.40215 2.19346 6.46447 3.13114C5.52678 4.06882 5 5.34059 5 6.66667C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66667Z" stroke="#0E1726" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.4414 17.5C11.2949 17.7526 11.0846 17.9622 10.8316 18.1079C10.5786 18.2537 10.2918 18.3304 9.99977 18.3304C9.70779 18.3304 9.42093 18.2537 9.16792 18.1079C8.9149 17.9622 8.70461 17.7526 8.55811 17.5" stroke="#0E1726" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </>
    )
}

export default BellIcon