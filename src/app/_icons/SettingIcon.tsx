import React from 'react'

interface Props {
    size: number
    class?: string
}
const SettingIcon: React.FC<Props> = ({size,class:className}) => {
    return (
        <>
            <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9999 13.75C12.5187 13.75 13.7499 12.5188 13.7499 11C13.7499 9.48122 12.5187 8.25 10.9999 8.25C9.48114 8.25 8.24992 9.48122 8.24992 11C8.24992 12.5188 9.48114 13.75 10.9999 13.75Z" stroke="#888EA8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.1666 13.5C17.0557 13.7513 17.0226 14.0302 17.0716 14.3005C17.1206 14.5708 17.2495 14.8203 17.4416 15.0167L17.4916 15.0667C17.6465 15.2215 17.7695 15.4053 17.8534 15.6076C17.9372 15.8099 17.9804 16.0268 17.9804 16.2458C17.9804 16.4649 17.9372 16.6817 17.8534 16.8841C17.7695 17.0864 17.6465 17.2702 17.4916 17.425C17.3368 17.58 17.153 17.7029 16.9507 17.7868C16.7483 17.8706 16.5314 17.9138 16.3124 17.9138C16.0934 17.9138 15.8765 17.8706 15.6742 17.7868C15.4719 17.7029 15.288 17.58 15.1333 17.425L15.0833 17.375C14.8869 17.1829 14.6374 17.054 14.3671 17.005C14.0967 16.956 13.8179 16.9891 13.5666 17.1C13.3201 17.2056 13.1099 17.381 12.9618 17.6046C12.8138 17.8282 12.7343 18.0902 12.7333 18.3583V18.5C12.7333 18.942 12.5577 19.366 12.2451 19.6785C11.9325 19.9911 11.5086 20.1667 11.0666 20.1667C10.6246 20.1667 10.2006 19.9911 9.88807 19.6785C9.57551 19.366 9.39992 18.942 9.39992 18.5V18.425C9.39347 18.1492 9.30418 17.8817 9.14368 17.6573C8.98317 17.4328 8.75886 17.2619 8.49992 17.1667C8.24857 17.0557 7.96976 17.0226 7.69943 17.0717C7.4291 17.1207 7.17965 17.2496 6.98325 17.4417L6.93325 17.4917C6.77846 17.6466 6.59465 17.7696 6.39232 17.8534C6.18999 17.9373 5.97311 17.9805 5.75409 17.9805C5.53506 17.9805 5.31818 17.9373 5.11585 17.8534C4.91352 17.7696 4.72971 17.6466 4.57492 17.4917C4.41996 17.3369 4.29703 17.1531 4.21315 16.9507C4.12928 16.7484 4.08611 16.5315 4.08611 16.3125C4.08611 16.0935 4.12928 15.8766 4.21315 15.6743C4.29703 15.4719 4.41996 15.2881 4.57492 15.1333L4.62492 15.0833C4.81703 14.8869 4.94591 14.6375 4.99492 14.3672C5.04394 14.0968 5.01085 13.818 4.89992 13.5667C4.79428 13.3202 4.61888 13.11 4.39531 12.9619C4.17173 12.8139 3.90974 12.7344 3.64159 12.7333H3.49992C3.05789 12.7333 2.63397 12.5577 2.32141 12.2452C2.00885 11.9326 1.83325 11.5087 1.83325 11.0667C1.83325 10.6246 2.00885 10.2007 2.32141 9.88816C2.63397 9.5756 3.05789 9.4 3.49992 9.4H3.57492C3.85075 9.39355 4.11826 9.30427 4.34267 9.14376C4.56708 8.98325 4.73801 8.75895 4.83325 8.5C4.94418 8.24866 4.97727 7.96984 4.92826 7.69951C4.87924 7.42918 4.75037 7.17973 4.55825 6.98334L4.50825 6.93334C4.35329 6.77855 4.23036 6.59473 4.14649 6.3924C4.06261 6.19007 4.01944 5.97319 4.01944 5.75417C4.01944 5.53514 4.06261 5.31827 4.14649 5.11594C4.23036 4.91361 4.35329 4.72979 4.50825 4.575C4.66304 4.42004 4.84685 4.29711 5.04918 4.21324C5.25151 4.12936 5.46839 4.08619 5.68742 4.08619C5.90644 4.08619 6.12332 4.12936 6.32565 4.21324C6.52798 4.29711 6.7118 4.42004 6.86659 4.575L6.91659 4.625C7.11298 4.81712 7.36243 4.94599 7.63276 4.99501C7.90309 5.04402 8.18191 5.01093 8.43325 4.9H8.49992C8.74639 4.79437 8.9566 4.61897 9.10466 4.39539C9.25273 4.17182 9.33218 3.90982 9.33325 3.64167V3.5C9.33325 3.05798 9.50885 2.63405 9.82141 2.32149C10.134 2.00893 10.5579 1.83334 10.9999 1.83334C11.4419 1.83334 11.8659 2.00893 12.1784 2.32149C12.491 2.63405 12.6666 3.05798 12.6666 3.5V3.575C12.6677 3.84316 12.7471 4.10515 12.8952 4.32872C13.0432 4.5523 13.2534 4.7277 13.4999 4.83334C13.7513 4.94427 14.0301 4.97736 14.3004 4.92834C14.5707 4.87932 14.8202 4.75045 15.0166 4.55834L15.0666 4.50834C15.2214 4.35338 15.4052 4.23044 15.6075 4.14657C15.8098 4.0627 16.0267 4.01952 16.2458 4.01952C16.4648 4.01952 16.6817 4.0627 16.884 4.14657C17.0863 4.23044 17.2701 4.35338 17.4249 4.50834C17.5799 4.66312 17.7028 4.84694 17.7867 5.04927C17.8706 5.2516 17.9137 5.46848 17.9137 5.6875C17.9137 5.90653 17.8706 6.12341 17.7867 6.32574C17.7028 6.52807 17.5799 6.71188 17.4249 6.86667L17.3749 6.91667C17.1828 7.11307 17.0539 7.36252 17.0049 7.63284C16.9559 7.90317 16.989 8.18199 17.0999 8.43334V8.5C17.2056 8.74648 17.381 8.95668 17.6045 9.10475C17.8281 9.25281 18.0901 9.33227 18.3583 9.33334H18.4999C18.9419 9.33334 19.3659 9.50893 19.6784 9.82149C19.991 10.1341 20.1666 10.558 20.1666 11C20.1666 11.442 19.991 11.866 19.6784 12.1785C19.3659 12.4911 18.9419 12.6667 18.4999 12.6667H18.4249C18.1568 12.6677 17.8948 12.7472 17.6712 12.8953C17.4476 13.0433 17.2722 13.2535 17.1666 13.5Z" stroke="#888EA8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </>
    )
}

export default SettingIcon