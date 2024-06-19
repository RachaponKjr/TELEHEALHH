import React from 'react'



interface Props {
    size: number
    class?: string
}
export const PhoneSideIcon = () => {
    return (
        <>
            <svg width="100%" height="100%" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3_304)">
                    <path d="M12.8788 5.5C13.7741 5.67469 14.597 6.11257 15.242 6.75761C15.887 7.40265 16.3249 8.2255 16.4996 9.12084M12.8788 1.83334C14.7389 2.03999 16.4736 2.873 17.7978 4.19559C19.1221 5.51819 19.9573 7.25176 20.1663 9.11167M9.37434 12.7078C8.27289 11.6064 7.40317 10.3609 6.76517 9.03213C6.71029 8.91783 6.68286 8.86068 6.66177 8.78836C6.58686 8.53137 6.64067 8.2158 6.79651 7.99816C6.84037 7.93691 6.89276 7.88452 6.99755 7.77973C7.31802 7.45926 7.47826 7.29903 7.58302 7.1379C7.9781 6.53025 7.9781 5.74688 7.58302 5.13923C7.47826 4.9781 7.31802 4.81787 6.99755 4.49739L6.81892 4.31876C6.33176 3.83161 6.08818 3.58803 5.82659 3.45571C5.30632 3.19257 4.69191 3.19257 4.17165 3.45571C3.91005 3.58803 3.66647 3.83161 3.17931 4.31876L3.03482 4.46326C2.54933 4.94875 2.30658 5.19149 2.12119 5.52152C1.91547 5.88774 1.76756 6.45652 1.76881 6.87656C1.76993 7.25509 1.84336 7.5138 1.99022 8.0312C2.77944 10.8118 4.26854 13.4356 6.45752 15.6246C8.64651 17.8136 11.2703 19.3027 14.0509 20.0919C14.5684 20.2388 14.8271 20.3122 15.2056 20.3133C15.6256 20.3146 16.1944 20.1667 16.5606 19.961C16.8907 19.7756 17.1334 19.5328 17.6189 19.0473L17.7634 18.9028C18.2505 18.4157 18.4941 18.1721 18.6264 17.9105C18.8896 17.3902 18.8896 16.7758 18.6264 16.2556C18.4941 15.994 18.2505 15.7504 17.7634 15.2632L17.5848 15.0846C17.2643 14.7641 17.1041 14.6039 16.9429 14.4991C16.3353 14.1041 15.5519 14.1041 14.9443 14.4991C14.7831 14.6039 14.6229 14.7641 14.3024 15.0846C14.1976 15.1894 14.1452 15.2418 14.084 15.2856C13.8664 15.4415 13.5508 15.4953 13.2938 15.4204C13.2215 15.3993 13.1643 15.3719 13.05 15.317C11.7212 14.679 10.4758 13.8093 9.37434 12.7078Z" stroke="#888EA8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_3_304">
                        <rect width="22" height="22" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        </>
    )
}

export const PhoneOutIcon: React.FC<Props> = ({ size, class: className }) => {
    return (
        <>
            <svg width={size} height={size} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9994 8V1M13.9994 8V1M9.22643 11.8631C8.02485 10.6615 7.07606 9.30285 6.38006 7.85323C6.3202 7.72854 6.29026 7.66619 6.26727 7.5873C6.18554 7.30695 6.24424 6.96269 6.41425 6.72526C6.4621 6.65845 6.51925 6.60129 6.63356 6.48698C6.98317 6.13737 7.15797 5.96257 7.27226 5.78679C7.70325 5.1239 7.70325 4.26932 7.27226 3.60643C7.15797 3.43065 6.98317 3.25585 6.63356 2.90624L6.43869 2.71137C5.90725 2.17993 5.64153 1.91421 5.35615 1.76987C4.78859 1.4828 4.11832 1.4828 3.55076 1.76987C3.26538 1.91421 2.99966 2.17993 2.46822 2.71137L2.31058 2.86901C1.78096 3.39863 1.51615 3.66344 1.3139 4.02348C1.08948 4.42298 0.928119 5.04347 0.929482 5.5017C0.930711 5.91464 1.01081 6.19687 1.17102 6.76131C2.03199 9.79471 3.65647 12.6571 6.04445 15.045C8.43243 17.433 11.2948 19.0575 14.3282 19.9185C14.8926 20.0787 15.1749 20.1588 15.5878 20.16C16.046 20.1614 16.6665 20 17.066 19.7756C17.426 19.5733 17.6909 19.3085 18.2205 18.7789L18.3781 18.6213C18.9096 18.0898 19.1753 17.8241 19.3196 17.5387C19.6067 16.9712 19.6067 16.3009 19.3196 15.7333C19.1753 15.448 18.9096 15.1822 18.3781 14.6508L18.1833 14.4559C17.8336 14.1063 17.6588 13.9315 17.4831 13.8172C16.8202 13.3862 15.9656 13.3862 15.3027 13.8172C15.1269 13.9315 14.9521 14.1063 14.6025 14.4559C14.4882 14.5702 14.431 14.6274 14.3642 14.6752C14.1268 14.8453 13.7825 14.904 13.5022 14.8222C13.4233 14.7992 13.361 14.7693 13.2363 14.7094C11.7866 14.0134 10.428 13.0646 9.22643 11.8631Z" stroke="#00AB55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </>
    )

}

export const PhoneDownIcon: React.FC<Props> = ({size, class: className}) => {
    return (
        <>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.85864 6C6.67357 4.14864 9.20268 3 12.0001 3C14.7975 3 17.3266 4.14864 19.1415 6M16.4723 9C15.3736 7.7725 13.777 7 12 7C10.223 7 8.62647 7.7725 7.52783 9M12 17C13.5105 17 14.9608 17.2576 16.3094 17.7313C16.3542 17.747 16.3767 17.7549 16.412 17.7705C16.7326 17.9118 16.9788 18.2591 17.0058 18.6084C17.0088 18.647 17.0088 18.6811 17.0088 18.7494C17.0088 18.9821 17.0088 19.0985 17.0185 19.1965C17.1122 20.1457 17.8631 20.8966 18.8123 20.9903C18.9103 21 19.0267 21 19.2594 21H19.5044C19.965 21 20.1952 21 20.3868 20.9622C21.1829 20.8053 21.8053 20.1829 21.9622 19.3868C22 19.1952 22 18.965 22 18.5044V18.3062C22 17.831 22 17.5933 21.9493 17.3209C21.8358 16.7119 21.3933 15.9583 20.9166 15.5624C20.7035 15.3854 20.5589 15.3048 20.2698 15.1435C17.822 13.7781 15.0019 13 12 13C8.99812 13 6.17797 13.7781 3.73021 15.1435C3.4411 15.3048 3.29654 15.3854 3.0834 15.5624C2.60675 15.9583 2.16421 16.7119 2.05074 17.3209C2 17.5933 2 17.831 2 18.3062V18.5044C2 18.965 2 19.1952 2.03776 19.3868C2.19469 20.1829 2.81709 20.8053 3.61321 20.9622C3.80476 21 4.03504 21 4.4956 21H4.74057C4.97332 21 5.0897 21 5.18773 20.9903C6.13689 20.8966 6.8878 20.1457 6.98152 19.1965C6.9912 19.0985 6.9912 18.9821 6.9912 18.7494C6.9912 18.6811 6.9912 18.647 6.99418 18.6084C7.02122 18.2591 7.2674 17.9118 7.58798 17.7705C7.62335 17.7549 7.64577 17.747 7.69061 17.7313C9.03921 17.2576 10.4895 17 12 17Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </>
    )
}

export const MiconPhoneIcon: React.FC<Props> = ({ size, class: className }) => {
    return (
        <>
            <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8.4V4C14 2.34315 12.6569 1 11 1C9.82238 1 8.80324 1.67852 8.3122 2.66593M11 18V21M11 18C7.13401 18 4 14.866 4 11V9M11 18C14.866 18 18 14.866 18 11V9M7 21H15M1 1L21 21M11 14C9.34314 14 8 12.6569 8 11V8L13.1226 13.12C12.5796 13.6637 11.8291 14 11 14Z" stroke="#9598A5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </>
    )
}