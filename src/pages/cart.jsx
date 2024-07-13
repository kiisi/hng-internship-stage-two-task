import { useNavigate } from "react-router-dom";
import Box from "../components/box";
import Navbar from "../components/navbar/navbar";
import Seo from "../components/seo";
import { AddCircularIcon, CloseIcon, MinusCircularIcon } from "../components/svg";
import { useCartContext } from "../contexts/cart";

export default function Cart() {

    const navigate = useNavigate()

    const { state, dispatch } = useCartContext()

    const cart = state.cart

    function formatNumberWithCommas(number) {
        return number.toLocaleString('en-US');
    }

    const addProductQuantityHandler = (id) => {
        dispatch({ type: "ADD_CART_PRODUCT_QUANTITY", payload: id })
    }

    const reduceProductQuantityHandler = (id) => {
        dispatch({ type: "REDUCE_CART_PRODUCT_QUANTITY", payload: id })
    }

    const deleteCartProductHandler = (id) => {
        dispatch({ type: "DELETE_CART_PRODUCT", payload: id })
    }

    const subtotal = state.cart.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0)

    return (
        <>
            <Seo title="Cart" />
            <Navbar />
            <Box className="py-[50px]">
                <header className="mb-[20px] sm:mb-[56px]">
                    <h1 className="text-center text-[24px] text-[#0B1215] font-semibold">Cart</h1>
                </header>
                <div className="rounded-[5px] flex flex-col gap-[24px] lg:gap-[32px]">
                    {
                        cart.map((data) => (
                            <div key={data.id} className="p-[14px] rounded-[10px] flex gap-[12px] lg:gap-[25px] shadow-custom">
                                <figure>
                                    <img src={`https://api.timbu.cloud/images/${data?.photos[0]?.url}`} className="rounded-[6px] w-[157px] h-full lg:w-[321px] lg:h-[325px] object-cover" alt="Cart" />
                                </figure>
                                <div className="flex-1 flex flex-col gap-3">
                                    <div className="flex justify-end">
                                        <button onClick={() => deleteCartProductHandler(data.id)} className="rounded-full shadow-custom w-[24px] h-[24px] grid place-items-center">
                                            <CloseIcon />
                                        </button>
                                    </div>
                                    <div>
                                        <h1 className="text-[15px] sm:text-[18px] lg:text-[24px] font-medium">Skirt & Blouse</h1>
                                    </div>
                                    <div className="text-[12px] sm:text-[14px]">
                                        Explore our collection of stylish skirts and blouses!.
                                    </div>
                                    <div className="flex gap-4 flex-wrap items-center justify-between">
                                        <p className="text-[12px] sm:text-[14px]">Size: XL</p>
                                        <div className="h-[35px] shrink-0 bg-[#F1F1EF] rounded-[5px] px-[10px] grid place-items-center w-fit">
                                            <div className="h-[22px] flex items-center gap-[6px]">
                                                <button disabled={data.quantity <= 1} onClick={() => reduceProductQuantityHandler(data.id)} className="bg-[#FFFFFF] disabled:bg-[#FFFFFF66] w-[22px] h-[22px] rounded-full grid place-items-center disabled:cursor-not-allowed">
                                                    <MinusCircularIcon />
                                                </button>
                                                <span className="w-[22px] text-center">{data.quantity}</span>
                                                <button disabled={data.quantity >= data.available_quantity} onClick={() => addProductQuantityHandler(data.id)} className="bg-[#FFFFFF] w-[22px] h-[22px] rounded-full grid place-items-center disabled:cursor-not-allowed">
                                                    <AddCircularIcon />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-auto">
                                        <p className="font-bold">₦ {formatNumberWithCommas(data.current_price[0]["NGN"][0])}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
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
                            <span><b>₦ </b>{formatNumberWithCommas(subtotal)}</span>
                        </div>
                        <div className="flex justify-between">
                            <p>Delivery fee</p>
                            <span><b>₦ </b>0.0</span>
                        </div>
                        <div className="flex justify-between mb-[15px]">
                            <p className="font-medium">Total</p>
                            <span><b>₦ </b>{formatNumberWithCommas(subtotal)}</span>
                        </div>
                        <div className="flex justify-between border-t-[#808080] border-t-[1px] pt-[12px]">
                            <p className="font-medium">To Pay</p>
                            <span><b>₦ </b>{formatNumberWithCommas(subtotal)}</span>
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