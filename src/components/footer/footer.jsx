import { Link } from "react-router-dom";
import Box from "../box";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../svg";

export default function Footer() {

    return (
        <footer className="pt-[50px] pb-[20px] lg:pb-[30px] shadow-custom">
            <Box>
                <header className="mb-[63px]">
                    <h1 className="text-[24px] font-semibold">FASION<span className="text-[18px]">EXTRA</span></h1>
                </header>
                <div className="mb-10 w-full max-w-[810px] mx-auto flex justify-around flex-wrap items-start gap-[50px] lg:gap-[100px] whitespace-nowrap">
                    <div className="grid place-items-center gap-2">
                        <h2 className="font-medium text-[16px] lg:text-[18px] mb-2">Home</h2>
                        <div className="text-[14px]"><Link to='/'>Category</Link></div>
                        <div className="text-[14px]"><Link to='/'>Featured Collection</Link></div>
                        <div className="text-[14px]"><Link to='/'>Latest Arrival</Link></div>
                    </div>
                    <div className="grid place-items-center gap-2">
                        <h2 className="font-medium text-[16px] lg:text-[18px] mb-2">Support</h2>
                        <div className="text-[14px]"><Link to='/'>Order Status</Link></div>
                        <div className="text-[14px]"><Link to='/'>Payment</Link></div>
                        <div className="text-[14px]"><Link to='/'>Track Order</Link></div>
                    </div>
                    <div className="grid place-items-center gap-2">
                        <h2 className="font-medium text-[16px] lg:text-[18px] mb-2">Contact Us</h2>
                        <div className="text-[14px]"><Link to='/'>lovy@gmail.com</Link></div>
                        <div className="text-[14px]"><Link to='/'>+12340945688493</Link></div>
                    </div>
                    <div className="grid place-items-center gap-2">
                        <h2 className="font-medium text-[16px] lg:text-[18px] mb-2">Follow Us</h2>
                        <div className="flex gap-3 items-center">
                            <FacebookIcon />
                            <LinkedInIcon />
                            <InstagramIcon />
                        </div>
                    </div>
                </div>
                <div className="border-t-[#22222228] border-t-[1px] pt-4 text-center text-[#686868] text-[12px] sm:text-[14px]">
                    Copyright &copy; {new Date().getFullYear()}, All rights reserved.
                </div>
            </Box>
        </footer>
    )
}