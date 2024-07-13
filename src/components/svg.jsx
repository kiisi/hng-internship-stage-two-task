import { cn } from "../utils/cn"

/* eslint-disable react/prop-types */
export const HeartIcon = ({ className }) => {

    return (
        <svg className={cn("hover:fill-[#ED5642]", className)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="" d="M287.984 114.16c31.376 0 88.094 15.008 180.094 105.616l45.616 44.912l44.928-45.632c63.872-64.896 131.84-105.2 177.376-105.2c61.408 0 109.809 21.008 157.009 68.096c44.464 44.368 68.992 103.36 68.992 166.112c.032 62.784-24.448 121.824-69.408 166.672c-3.664 3.712-196.992 212.304-358.96 387.104c-7.632 7.248-16.352 8.32-20.991 8.32c-4.576 0-13.2-1.024-20.8-8.096c-39.472-43.905-325.552-362-358.815-395.232C88.497 462.416 64 403.376 64 340.608c.015-62.752 24.511-121.728 69.04-166.144c43.295-43.264 93.984-60.304 154.944-60.304m-.002-64c-76.528 0-144 22.895-200.176 79.008c-117.072 116.768-117.072 306.128 0 422.96c33.424 33.44 357.855 394.337 357.855 394.337c18.48 18.496 42.753 27.68 66.96 27.68c24.225 0 48.4-9.184 66.912-27.68c0 0 354.88-383.024 358.656-386.85c117.04-116.88 117.04-306.24 0-423.007c-58.112-58-123.024-86.784-202.208-86.784c-75.648 0-160 60.32-223.008 124.32C447.981 110.159 366.237 50.16 287.981 50.16z" /></svg>
    )
}

export const ShoppingCartAltIcon = ({ className }) => {

    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M1015.66 284a31.82 31.82 0 0 0-25.998-13.502H310.526l-51.408-177.28c-20.16-69.808-68.065-77.344-87.713-77.344H34.333c-17.569 0-31.777 14.224-31.777 31.776S16.78 79.425 34.332 79.425h137.056c4.336 0 17.568 0 26.593 31.184l176.848 649.936c3.84 13.712 16.336 23.183 30.591 23.183h431.968c13.409 0 25.376-8.4 29.905-21.024l152.256-449.68c3.504-9.744 2.048-20.592-3.888-29.024zM815.026 720.194H429.539L328.387 334.066h616.096zM752.003 848.13c-44.192 0-80 35.808-80 80s35.808 80 80 80s80-35.808 80-80s-35.808-80-80-80m-288 0c-44.192 0-80 35.808-80 80s35.808 80 80 80s80-35.808 80-80s-35.808-80-80-80" /></svg>
    )
}

export const StarIcon = () => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M5.02447 1.01821C5.17415 0.557559 5.82585 0.557557 5.97553 1.01821L6.84708 3.70058C6.91402 3.9066 7.106 4.04608 7.32261 4.04608H10.143C10.6274 4.04608 10.8288 4.66588 10.4369 4.95059L8.15516 6.60838C7.97991 6.73571 7.90658 6.96139 7.97352 7.1674L8.84508 9.84977C8.99475 10.3104 8.46751 10.6935 8.07565 10.4088L5.79389 8.75099C5.61865 8.62367 5.38135 8.62367 5.20611 8.75099L2.92435 10.4088C2.53249 10.6935 2.00525 10.3104 2.15492 9.84977L3.02648 7.1674C3.09342 6.96139 3.02009 6.7357 2.84484 6.60838L0.563082 4.95059C0.171226 4.66588 0.372613 4.04608 0.856974 4.04608H3.67739C3.894 4.04608 4.08598 3.9066 4.15292 3.70059L5.02447 1.01821Z" fill="#FDCD01" />
        </svg>
    )
}

export const CartIcon = ({ className }) => {

    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
            <path d="M2.40222 8.5169C2.18202 8.5169 1.99358 8.43863 1.8369 8.2821C1.68022 8.12556 1.60175 7.93716 1.60148 7.7169C1.60121 7.49663 1.67969 7.30836 1.8369 7.1521C1.99411 6.99583 2.18255 6.91743 2.40222 6.9169C2.62189 6.91636 2.81046 6.99476 2.96794 7.1521C3.12542 7.30943 3.20376 7.4977 3.20296 7.7169C3.20216 7.9361 3.12382 8.1245 2.96794 8.2821C2.81206 8.4397 2.62349 8.51796 2.40222 8.5169ZM6.40592 8.5169C6.18572 8.5169 5.99727 8.43863 5.8406 8.2821C5.68392 8.12556 5.60545 7.93716 5.60518 7.7169C5.60491 7.49663 5.68338 7.30836 5.8406 7.1521C5.99781 6.99583 6.18625 6.91743 6.40592 6.9169C6.62559 6.91636 6.81416 6.99476 6.97164 7.1521C7.12912 7.30943 7.20746 7.4977 7.20666 7.7169C7.20586 7.9361 7.12752 8.1245 6.97164 8.2821C6.81576 8.4397 6.62719 8.51796 6.40592 8.5169ZM2.06191 2.1169L3.02279 4.1169H5.82538L6.9264 2.1169H2.06191ZM1.68155 1.31691H7.58701C7.74049 1.31691 7.85726 1.38531 7.93733 1.52211C8.01741 1.65891 8.02074 1.79717 7.94734 1.9369L6.52603 4.4969C6.45263 4.63023 6.35427 4.73357 6.23096 4.8069C6.10764 4.88023 5.97245 4.9169 5.82538 4.9169H2.84263L2.40222 5.7169H7.20666V6.5169H2.40222C2.10194 6.5169 1.87507 6.3853 1.72159 6.1221C1.56812 5.8589 1.56144 5.59717 1.70157 5.3369L2.24207 4.3569L0.80074 1.31691H0V0.516907H1.3012L1.68155 1.31691Z" fill="#012148" />
        </svg>
    )
}

export const LinkedInIcon = () => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 31" fill="none">
            <path d="M22.9688 0.5H7.03125C3.148 0.5 0 3.648 0 7.53125V23.4688C0 27.352 3.148 30.5 7.03125 30.5H22.9688C26.852 30.5 30 27.352 30 23.4688V7.53125C30 3.648 26.852 0.5 22.9688 0.5Z" fill="white" />
            <path d="M22.9688 0.5H7.03125C3.148 0.5 0 3.648 0 7.53125V23.4688C0 27.352 3.148 30.5 7.03125 30.5H22.9688C26.852 30.5 30 27.352 30 23.4688V7.53125C30 3.648 26.852 0.5 22.9688 0.5Z" fill="#0A66C2" />
            <path d="M21.6463 26.01H25.0764C25.2007 26.01 25.3199 25.9606 25.4078 25.8727C25.4957 25.7848 25.5451 25.6656 25.5451 25.5413L25.5469 18.2942C25.5469 14.5064 24.7307 11.5948 20.3041 11.5948C18.6214 11.5323 17.0346 12.3997 16.1783 13.8481C16.1741 13.8552 16.1678 13.8606 16.1602 13.8637C16.1526 13.8668 16.1442 13.8673 16.1363 13.8651C16.1284 13.863 16.1214 13.8583 16.1164 13.8519C16.1114 13.8454 16.1087 13.8374 16.1086 13.8293V12.4133C16.1086 12.289 16.0592 12.1697 15.9713 12.0818C15.8834 11.9939 15.7642 11.9445 15.6398 11.9445H12.3847C12.2604 11.9445 12.1412 11.9939 12.0533 12.0818C11.9654 12.1697 11.916 12.289 11.916 12.4133V25.5406C11.916 25.6649 11.9654 25.7842 12.0533 25.8721C12.1412 25.96 12.2604 26.0094 12.3847 26.0094H15.8146C15.9389 26.0094 16.0581 25.96 16.146 25.8721C16.2339 25.7842 16.2833 25.6649 16.2833 25.5406V19.0516C16.2833 17.2168 16.6314 15.4399 18.9061 15.4399C21.1485 15.4399 21.1775 17.5394 21.1775 19.1704V25.5412C21.1775 25.6655 21.2269 25.7848 21.3148 25.8727C21.4027 25.9606 21.522 26.01 21.6463 26.01ZM4.45312 7.48766C4.45312 8.87797 5.5977 10.022 6.98813 10.022C8.3782 10.0218 9.52207 8.87715 9.52207 7.48707C9.52184 6.09699 8.37785 4.95312 6.98766 4.95312C5.59711 4.95312 4.45312 6.09734 4.45312 7.48766ZM5.26863 26.01H8.70305C8.82737 26.01 8.9466 25.9606 9.0345 25.8727C9.12241 25.7848 9.1718 25.6655 9.1718 25.5412V12.4133C9.1718 12.289 9.12241 12.1697 9.0345 12.0818C8.9466 11.9939 8.82737 11.9445 8.70305 11.9445H5.26863C5.14431 11.9445 5.02508 11.9939 4.93718 12.0818C4.84927 12.1697 4.79988 12.289 4.79988 12.4133V25.5412C4.79988 25.6655 4.84927 25.7848 4.93718 25.8727C5.02508 25.9606 5.14431 26.01 5.26863 26.01Z" fill="white" />
        </svg>
    )
}

export const InstagramIcon = () => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 30 31" fill="none">
            <path d="M22.9688 0.5H7.03125C3.148 0.5 0 3.648 0 7.53125V23.4688C0 27.352 3.148 30.5 7.03125 30.5H22.9688C26.852 30.5 30 27.352 30 23.4688V7.53125C30 3.648 26.852 0.5 22.9688 0.5Z" fill="url(#paint0_radial_322_235)" />
            <path d="M22.9688 0.5H7.03125C3.148 0.5 0 3.648 0 7.53125V23.4688C0 27.352 3.148 30.5 7.03125 30.5H22.9688C26.852 30.5 30 27.352 30 23.4688V7.53125C30 3.648 26.852 0.5 22.9688 0.5Z" fill="url(#paint1_radial_322_235)" />
            <path d="M15.0011 3.78125C11.8185 3.78125 11.419 3.7952 10.1691 3.85203C8.92148 3.90922 8.06988 4.10668 7.3248 4.39648C6.55395 4.69578 5.90016 5.09621 5.24883 5.74777C4.59691 6.39922 4.19648 7.05301 3.89625 7.82352C3.60563 8.56883 3.40793 9.42078 3.3518 10.6678C3.2959 11.9178 3.28125 12.3174 3.28125 15.5001C3.28125 18.6828 3.29531 19.081 3.35203 20.3309C3.40945 21.5785 3.60691 22.4301 3.89648 23.1752C4.19602 23.9461 4.59645 24.5998 5.24801 25.2512C5.89922 25.9031 6.55301 26.3045 7.32328 26.6038C8.06895 26.8936 8.92066 27.091 10.168 27.1482C11.418 27.205 11.8172 27.219 14.9996 27.219C18.1826 27.219 18.5808 27.205 19.8307 27.1482C21.0783 27.091 21.9308 26.8936 22.6765 26.6038C23.447 26.3045 24.0998 25.9031 24.7509 25.2512C25.4029 24.5998 25.8032 23.9461 26.1035 23.1755C26.3916 22.4301 26.5894 21.5783 26.648 20.3312C26.7041 19.0812 26.7188 18.6828 26.7188 15.5001C26.7188 12.3174 26.7041 11.918 26.648 10.668C26.5894 9.42043 26.3916 8.56895 26.1035 7.82387C25.8032 7.05301 25.4029 6.39922 24.7509 5.74777C24.0991 5.09598 23.4472 4.69555 22.6758 4.3966C21.9287 4.10668 21.0766 3.9091 19.8291 3.85203C18.579 3.7952 18.1811 3.78125 14.9974 3.78125H15.0011ZM13.9498 5.89309C14.2618 5.89262 14.61 5.89309 15.0011 5.89309C18.1301 5.89309 18.5009 5.90434 19.7365 5.96047C20.8791 6.01273 21.4992 6.20363 21.9123 6.36406C22.4592 6.57641 22.8491 6.83035 23.259 7.24063C23.6692 7.65078 23.923 8.04137 24.1359 8.58828C24.2964 9.00078 24.4875 9.62094 24.5395 10.7635C24.5957 11.9989 24.6079 12.3699 24.6079 15.4974C24.6079 18.6249 24.5957 18.9961 24.5395 20.2313C24.4873 21.3739 24.2964 21.9941 24.1359 22.4067C23.9236 22.9536 23.6692 23.343 23.259 23.7529C22.8489 24.1631 22.4595 24.4169 21.9123 24.6294C21.4997 24.7905 20.8791 24.9809 19.7365 25.0332C18.5011 25.0893 18.1301 25.1015 15.0011 25.1015C11.8719 25.1015 11.501 25.0893 10.2657 25.0332C9.12316 24.9805 8.50301 24.7896 8.08957 24.6291C7.54277 24.4167 7.15207 24.1629 6.74191 23.7527C6.33176 23.3425 6.07793 22.9529 5.865 22.4057C5.70457 21.9931 5.51344 21.373 5.46141 20.2304C5.40527 18.995 5.39402 18.624 5.39402 15.4945C5.39402 12.3651 5.40527 11.996 5.46141 10.7606C5.51367 9.61801 5.70457 8.99785 5.865 8.58477C6.07746 8.03785 6.33176 7.64727 6.74203 7.23711C7.15219 6.82695 7.54277 6.57301 8.08969 6.3602C8.50277 6.19906 9.12316 6.00863 10.2657 5.95613C11.3468 5.90727 11.7657 5.89262 13.9498 5.89016V5.89309ZM21.2565 7.83887C20.4802 7.83887 19.8503 8.46816 19.8503 9.24465C19.8503 10.021 20.4802 10.6509 21.2565 10.6509C22.0329 10.6509 22.6628 10.021 22.6628 9.24465C22.6628 8.46828 22.0329 7.8384 21.2565 7.8384V7.83887ZM15.0011 9.48195C11.6776 9.48195 8.98301 12.1766 8.98301 15.5001C8.98301 18.8237 11.6776 21.517 15.0011 21.517C18.3246 21.517 21.0183 18.8237 21.0183 15.5001C21.0183 12.1767 18.3244 9.48195 15.0008 9.48195H15.0011ZM15.0011 11.5938C17.1584 11.5938 18.9074 13.3426 18.9074 15.5001C18.9074 17.6574 17.1584 19.4064 15.0011 19.4064C12.8436 19.4064 11.0948 17.6574 11.0948 15.5001C11.0948 13.3426 12.8436 11.5938 15.0011 11.5938Z" fill="white" />
            <defs>
                <radialGradient id="paint0_radial_322_235" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(7.96875 32.8106) rotate(-90) scale(29.7322 27.6533)">
                    <stop stopColor="#FFDD55" />
                    <stop offset="0.1" stopColor="#FFDD55" />
                    <stop offset="0.5" stopColor="#FF543E" />
                    <stop offset={1} stopColor="#C837AB" />
                </radialGradient>
                <radialGradient id="paint1_radial_322_235" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(-5.02512 2.66105) rotate(78.681) scale(13.2905 54.7837)">
                    <stop stopColor="#3771C8" />
                    <stop offset="0.128" stopColor="#3771C8" />
                    <stop offset={1} stopColor="#6600FF" stopOpacity={0} />
                </radialGradient>
            </defs>
        </svg>

    )
}

export const FacebookIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 31" fill="none">
            <path d="M30 15.5C30 7.21578 23.2842 0.5 15 0.5C6.71578 0.5 0 7.21578 0 15.5C0 22.9869 5.48531 29.1925 12.6562 30.3178V19.8359H8.84766V15.5H12.6562V12.1953C12.6562 8.43594 14.8957 6.35938 18.322 6.35938C19.9631 6.35938 21.6797 6.65234 21.6797 6.65234V10.3438H19.7883C17.9249 10.3438 17.3438 11.5 17.3438 12.6863V15.5H21.5039L20.8389 19.8359H17.3438V30.3178C24.5147 29.1925 30 22.987 30 15.5Z" fill="#1877F2" />
            <path d="M20.8389 19.8359L21.5039 15.5H17.3438V12.6863C17.3438 11.4999 17.9249 10.3438 19.7883 10.3438H21.6797V6.65234C21.6797 6.65234 19.9631 6.35938 18.3219 6.35938C14.8957 6.35938 12.6562 8.43594 12.6562 12.1953V15.5H8.84766V19.8359H12.6562V30.3178C13.4316 30.4393 14.2152 30.5002 15 30.5C15.7848 30.5002 16.5684 30.4393 17.3438 30.3178V19.8359H20.8389Z" fill="white" />
        </svg>
    )
}

export const MenuIcon = ({ onClick }) => {
    return (
        <svg className="stroke-primary" onClick={onClick} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 18 18" fill="none">
            <path d="M2.25 5.25H15.75" stroke="" strokeLinecap="round" />
            <path d="M2.25 9H15.75" stroke="" strokeLinecap="round" />
            <path d="M2.25 12.75H15.75" stroke="" strokeLinecap="round" />
        </svg>

    )
}

export const ShoppingCartIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={18} height={18} viewBox="0 0 18 18" fill="none">
            <path d="M1.5 1.50049H2.805C3.615 1.50049 4.2525 2.19799 4.185 3.00049L3.5625 10.4705C3.4575 11.693 4.42499 12.743 5.65499 12.743H13.6425C14.7225 12.743 15.6675 11.858 15.75 10.7855L16.155 5.16049C16.245 3.91549 15.3 2.90298 14.0475 2.90298H4.36501" stroke="#0B1215" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.1875 16.5C12.7053 16.5 13.125 16.0803 13.125 15.5625C13.125 15.0447 12.7053 14.625 12.1875 14.625C11.6697 14.625 11.25 15.0447 11.25 15.5625C11.25 16.0803 11.6697 16.5 12.1875 16.5Z" stroke="#0B1215" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.1875 16.5C6.70527 16.5 7.125 16.0803 7.125 15.5625C7.125 15.0447 6.70527 14.625 6.1875 14.625C5.66973 14.625 5.25 15.0447 5.25 15.5625C5.25 16.0803 5.66973 16.5 6.1875 16.5Z" stroke="#0B1215" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.75 6.00049H15.75" stroke="#0B1215" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const CloseIcon = () => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 13 12" fill="none">
            <path d="M0.751763 0.251763C0.831366 0.171957 0.925932 0.10864 1.03004 0.0654386C1.13416 0.0222369 1.24577 0 1.35849 0C1.47121 0 1.58282 0.0222369 1.68693 0.0654386C1.79104 0.10864 1.88561 0.171957 1.96521 0.251763L6.50022 4.78849L11.0352 0.251763C11.1149 0.172086 11.2095 0.108884 11.3136 0.065763C11.4177 0.0226426 11.5293 0.000448674 11.642 0.000448674C11.7546 0.000448674 11.8662 0.0226426 11.9703 0.065763C12.0744 0.108884 12.169 0.172086 12.2487 0.251763C12.3284 0.331439 12.3916 0.426028 12.4347 0.53013C12.4778 0.634232 12.5 0.745808 12.5 0.858488C12.5 0.971167 12.4778 1.08274 12.4347 1.18685C12.3916 1.29095 12.3284 1.38554 12.2487 1.46521L7.71196 6.00022L12.2487 10.5352C12.3284 10.6149 12.3916 10.7095 12.4347 10.8136C12.4778 10.9177 12.5 11.0293 12.5 11.142C12.5 11.2546 12.4778 11.3662 12.4347 11.4703C12.3916 11.5744 12.3284 11.669 12.2487 11.7487C12.169 11.8284 12.0744 11.8916 11.9703 11.9347C11.8662 11.9778 11.7546 12 11.642 12C11.5293 12 11.4177 11.9778 11.3136 11.9347C11.2095 11.8916 11.1149 11.8284 11.0352 11.7487L6.50022 7.21196L1.96521 11.7487C1.88554 11.8284 1.79095 11.8916 1.68685 11.9347C1.58274 11.9778 1.47117 12 1.35849 12C1.24581 12 1.13423 11.9778 1.03013 11.9347C0.926028 11.8916 0.831439 11.8284 0.751763 11.7487C0.672086 11.669 0.608884 11.5744 0.565763 11.4703C0.522643 11.3662 0.500449 11.2546 0.500449 11.142C0.500449 11.0293 0.522643 10.9177 0.565763 10.8136C0.608884 10.7095 0.672086 10.6149 0.751763 10.5352L5.28849 6.00022L0.751763 1.46521C0.671957 1.38561 0.60864 1.29104 0.565439 1.18693C0.522237 1.08282 0.5 0.971207 0.5 0.858488C0.5 0.745768 0.522237 0.634156 0.565439 0.530044C0.60864 0.425932 0.671957 0.331366 0.751763 0.251763Z" fill="black" />
        </svg>
    )
}

export const MinusCircularIcon = ({ className, strokeOpacity }) => {

    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
            <path d="M4 8H12" stroke="#0B1215" strokeOpacity={strokeOpacity ?? 1} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const AddCircularIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
            <path d="M4 8H12" stroke="#0B1215" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 12V4" stroke="#0B1215" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export const CloseAltIcon = ({ className }) => {

    return (
        <svg className={cn("fill-[#F8F8F8]", className)} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M0.307505 10.6925C0.504459 10.8894 0.771552 11 1.05005 11C1.32854 11 1.59563 10.8894 1.79259 10.6925L5.50634 6.97874L9.22009 10.6925C9.41818 10.8838 9.68348 10.9897 9.95886 10.9873C10.2342 10.9849 10.4977 10.8744 10.6924 10.6797C10.8871 10.485 10.9976 10.2216 11 9.94617C11.0024 9.6708 10.8965 9.4055 10.7052 9.20741L6.99142 5.49366L10.7052 1.77991C10.8965 1.58182 11.0024 1.31652 11 1.04114C10.9976 0.765767 10.8871 0.502346 10.6924 0.307617C10.4977 0.112889 10.2342 0.00243378 9.95886 4.1008e-05C9.68348 -0.00235271 9.41818 0.103509 9.22009 0.294824L5.50634 4.00858L1.79259 0.294824C1.5945 0.103509 1.3292 -0.00235271 1.05383 4.1008e-05C0.778448 0.00243378 0.515027 0.112889 0.320299 0.307617C0.12557 0.502346 0.0151142 0.765767 0.0127213 1.04114C0.0103283 1.31652 0.11619 1.58182 0.307505 1.77991L4.02126 5.49366L0.307505 9.20741C0.110609 9.40437 0 9.67146 0 9.94995C0 10.2284 0.110609 10.4955 0.307505 10.6925Z" />
        </svg>
    )
}

export const ShoppingCartRemoveIcon = ({ className }) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M21.01 11.22V15.71C21.01 20.2 19.22 22 14.72 22H9.33002C8.75002 22 8.21998 21.97 7.72998 21.9" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.03998 15.52V11.22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.03 12C13.86 12 15.21 10.5101 15.03 8.68005L14.36 2H9.69001L9.02003 8.68005C8.84003 10.5101 10.2 12 12.03 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.33 12C20.35 12 21.83 10.36 21.63 8.34998L21.35 5.59998C20.99 2.99998 19.99 2 17.37 2H14.32L15.02 9.01001C15.2 10.66 16.68 12 18.33 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.66998 12C7.31998 12 8.80996 10.66 8.96996 9.01001L9.19 6.80005L9.66998 2H6.61999C3.99999 2 3.00001 2.99998 2.64001 5.59998L2.35998 8.34998C2.15998 10.36 3.64998 12 5.66998 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 19C9 19.75 8.78998 20.4601 8.41998 21.0601C8.22998 21.3801 7.99998 21.67 7.72998 21.9C7.69998 21.94 7.67 21.97 7.63 22C6.93 22.63 6.01 23 5 23C3.78 23 2.68997 22.45 1.96997 21.59C1.94997 21.56 1.92002 21.54 1.90002 21.51C1.78002 21.37 1.67002 21.2201 1.58002 21.0601C1.21002 20.4601 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C2.67 15.74 2.84998 15.62 3.03998 15.52C3.61998 15.19 4.29 15 5 15C6 15 6.89998 15.36 7.59998 15.97C7.71998 16.06 7.82999 16.17 7.92999 16.28C8.58999 17 9 17.95 9 19Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.48999 18.98H3.51001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}