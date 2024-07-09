import { useNavigate } from "react-router-dom";
import Box from "../components/box";
import Navbar from "../components/navbar/navbar";
import Seo from "../components/seo";
import { AddCircularIcon, CloseIcon, MinusCircularIcon } from "../components/svg";

export default function Cart() {

    const navigate = useNavigate()

    return (
        <>
            <Seo title="Cart" />
            <Navbar />
            <Box className="py-[50px]">
                <header className="mb-[20px] sm:mb-[56px]">
                    <h1 className="text-center text-[24px] text-[#0B1215] font-semibold">Cart</h1>
                </header>
                <div className="rounded-[5px] flex flex-col gap-[24px] lg:gap-[32px]">
                    <div className="p-[14px] rounded-[10px] flex gap-[12px] lg:gap-[25px] shadow-custom">
                        <figure>
                            <img src="/images/featured-collection-img-1.png" className="rounded-[6px] w-[157px] h-full lg:w-[321px] lg:h-[325px] object-cover" alt="Cart" />
                        </figure>
                        <div className="flex-1 flex flex-col gap-3">
                            <div className="flex justify-end">
                                <button className="rounded-full shadow-custom w-[24px] h-[24px] grid place-items-center">
                                    <CloseIcon />
                                </button>
                            </div>
                            <div>
                                <h1 className="text-[15px] sm:text-[18px] lg:text-[24px] font-medium">Skirt & Blouse</h1>
                            </div>
                            <div className="text-[12px] sm:text-[14px]">
                                Explore our collection of stylish skirts and blouses! From maxi skirts to chic mini skirts and classic to trendy blouse.
                            </div>
                            <div className="flex items-center justify-between">
                                <p>Size: XL</p>
                                <div className="h-[35px] shrink-0 bg-[#F1F1EF] rounded-[5px] px-[10px] grid place-items-center w-fit">
                                    <div className="h-[22px] flex items-center gap-[6px]">
                                        <button className="bg-[#FFFFFF] disabled:bg-[#FFFFFF66] w-[22px] h-[22px] rounded-full grid place-items-center">
                                            <MinusCircularIcon />
                                        </button>
                                        <span className="w-[22px] text-center">1</span>
                                        <button className="bg-[#FFFFFF] w-[22px] h-[22px] rounded-full grid place-items-center">
                                            <AddCircularIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <p className="font-bold">$200.97</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-[14px] rounded-[10px] flex gap-[12px] lg:gap-[25px] shadow-custom">
                        <figure>
                            <img src="/images/featured-collection-img-1.png" className="rounded-[6px] w-[157px] h-full lg:w-[321px] lg:h-[325px] object-cover" alt="Cart" />
                        </figure>
                        <div className="flex-1 flex flex-col gap-3">
                            <div className="flex justify-end">
                                <button className="rounded-full shadow-custom w-[24px] h-[24px] grid place-items-center">
                                    <CloseIcon />
                                </button>
                            </div>
                            <div>
                                <h1 className="text-[15px] sm:text-[18px] lg:text-[24px] font-medium">Skirt & Blouse</h1>
                            </div>
                            <div className="text-[12px] sm:text-[14px]">
                                Explore our collection of stylish skirts and blouses! From maxi skirts to chic mini skirts and classic to trendy blouse.
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-[14px]">Size: XL</p>
                                <div className="h-[35px] shrink-0 bg-[#F1F1EF] rounded-[5px] px-[10px] grid place-items-center w-fit">
                                    <div className="h-[22px] flex items-center gap-[6px]">
                                        <button className="bg-[#FFFFFF] disabled:bg-[#FFFFFF66] w-[22px] h-[22px] rounded-full grid place-items-center">
                                            <MinusCircularIcon />
                                        </button>
                                        <span className="w-[22px] text-center">1</span>
                                        <button className="bg-[#FFFFFF] w-[22px] h-[22px] rounded-full grid place-items-center">
                                            <AddCircularIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <p className="font-bold">$200.97</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
            <div className="shadow-custom">
                <Box className="py-[40px]">
                    <header className="mb-[25px]">
                        <h1 className="text-[18px] lg:text-[24px] font-semibold">Order Summary</h1>
                    </header>
                    <div className="mb-[40px] flex flex-col gap-[10px]">
                        <div className="flex justify-between">
                            <p>Subtotal</p>
                            <span><b>$</b>200.97</span>
                        </div>
                        <div className="flex justify-between">
                            <p>Delivery fee</p>
                            <span><b>$</b>20</span>
                        </div>
                        <div className="flex justify-between mb-[15px]">
                            <p className="font-medium">Total</p>
                            <span><b>$</b>220.97</span>
                        </div>
                        <div className="flex justify-between border-t-[#808080] border-t-[1px] pt-[12px]">
                            <p className="font-medium">To Pay</p>
                            <span><b>$</b>220.97</span>
                        </div>
                    </div>
                    <div className="grid place-items-center">
                        <button onClick={() => navigate('/checkout')} className="w-full bg-primary h-[46px] lg:h-[56px] grid place-items-center text-[15px] lg:text-[18px] max-w-[619px] text-white rounded-[10px]">
                            Proceed to Checkout
                        </button>
                    </div>
                </Box>
            </div>
        </>
    )
}