import Box from "../components/box";
import Navbar from "../components/navbar/navbar";
import Seo from "../components/seo";

export default function Checkout() {

    return (
        <>
            <Seo title="Checkout" />
            <Navbar />
            <Box className="py-[50px]">
                <header className="mb-[20px] sm:mb-[56px]">
                    <h1 className="text-center text-[24px] text-[#0B1215] font-semibold">Checkout</h1>
                </header>
                <div className="shadow-custom rounded-[10px] p-4 flex flex-col gap-[24px]">
                    <div>
                        <header className="flex items-center justify-between mb-[28px]">
                            <h1 className="font-medium lg:text-[20px] font-medium">Delivery</h1>
                            <span>Change</span>
                        </header>
                        <div className="shadow-[0px_0px_4px_0px_#00000015] rounded-[6px] p-2">
                            <h2 className="text-[18px] mb-[2px]">Ajah, sangotedo.</h2>
                            <p className="text-[14px] leading-[24px]">NT16, Avera estate. After Lagos business School </p>
                            <p className="text-[14px] leading-[24px]">Sangotedo-Lekki</p>
                            <p className="text-[14px] leading-[24px]">$20</p>
                        </div>
                    </div>
                    <div>
                        <header className="mb-[28px]">
                            <h1 className="font-medium lg:text-[20px] font-medium">Payment method</h1>
                        </header>
                        <div>
                            <div className="flex flex-col gap-2">
                                <div className="shadow-[0px_0px_4px_0px_#00000015] rounded-[6px] p-3">
                                    Waiting for Transfer
                                </div>
                                <div className="flex justify-between shadow-[0px_0px_4px_0px_#00000015] rounded-[6px] p-3">
                                    Card Payment
                                    <img src="/images/card-payment.png" />
                                </div>
                                <div className="shadow-[0px_0px_4px_0px_#00000015] rounded-[6px] p-3">
                                    Bank Transfer
                                </div>
                                <div className="shadow-[0px_0px_4px_0px_#00000015] rounded-[6px] p-3">
                                    USSD
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <header className="mb-[25px]">
                            <h1 className="lg:text-[20px] font-medium">Order Summary</h1>
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
                            <button className="w-full bg-primary h-[46px] lg:h-[56px] grid place-items-center text-[15px] lg:text-[18px] max-w-[619px] text-white rounded-[10px]">
                                Finalize Order
                            </button>
                        </div>
                    </div>
                </div>
            </Box>
        </>
    )
}