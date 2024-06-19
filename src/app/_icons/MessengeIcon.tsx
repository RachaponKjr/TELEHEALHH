import React from 'react'

const MessengeIcon = ({size}: {size: number}): JSX.Element => {
    return (
        <>
            <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33317 3.33333H16.6665C17.5832 3.33333 18.3332 4.08333 18.3332 4.99999V15C18.3332 15.9167 17.5832 16.6667 16.6665 16.6667H3.33317C2.4165 16.6667 1.6665 15.9167 1.6665 15V4.99999C1.6665 4.08333 2.4165 3.33333 3.33317 3.33333Z" stroke="#0E1726" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.3332 5L9.99984 10.8333L1.6665 5" stroke="#0E1726" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </>
    )
}

export default MessengeIcon