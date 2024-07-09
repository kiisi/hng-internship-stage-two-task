/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import { useState } from "react";
import { HeartIcon, ShoppingCartAltIcon } from "../svg";

export default function Navbar() {

    const [mobileNavBarVisibility, setMobileNavBarVisibility] = useState(false);

    const toggleMobileNavBarVisibility = () => setMobileNavBarVisibility(prev => !prev)

    return (
        <>
            <nav className="border-b-[1px] border-b-[#0B12151F]">
                <div className="flex items-center gap-2 justify-between w-full max-w-[1440px] mx-auto py-[18px] lg:py-[24px] lg:px-[52px] sm:px-[32px] px-[16px] overflow-hidden">
                    <div className="flex-1">
                        <h1 className="text-[24px] font-semibold">FASION<span className="text-[18px]">EXTRA</span></h1>
                    </div>
                    <div className="hidden lg:flex items-center gap-[40px] font-medium flex-1">
                        <Link to='/'>Home</Link>
                        <Link to='/'>Category</Link>
                        <Link to='/'>Featured Collections</Link>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <div className="flex items-center gap-[6px] sm:gap-[8px] lg:gap-[12px]">
                            <Link to="/favorite" className="relative group grid place-items-center">
                                <HeartIcon className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]" />
                            </Link>
                            <Link to="/cart" className="relative group grid place-items-center">
                                <ShoppingCartAltIcon className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />
                                <div className="absolute top-[-12px] right-[-8px]">
                                    <span className="relative flex h-5 w-5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-0 group-hover:opacity-75"></span>
                                        <span className="relative grid place-items-center rounded-full h-5 w-5 bg-primary text-white text-[11px] font-semibold">
                                            0
                                        </span>
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Mobile Navbar */}
            <div
                className={cn("h-[100vh] z-[100] flex flex-col fixed top-0 transition-all w-full max-w-[260px] bg-white", mobileNavBarVisibility ? 'left-0' : 'left-[-260px]')}
            >

            </div>
            {/* Backdrops */}
            {
                mobileNavBarVisibility && (
                    <div
                        className="bg-[#00000033] w-screen h-screen fixed z-[99] inset-0"
                        onClick={toggleMobileNavBarVisibility}
                    >
                    </div>
                )
            }
        </>
    )
}