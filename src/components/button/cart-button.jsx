/* eslint-disable react/prop-types */
import { useCartContext } from "../../contexts/cart";
import { ShoppingCartIcon, ShoppingCartRemoveIcon } from "../svg";
import { success } from "../toast";

export default function CartButton({ productData }) {

    const { state, dispatch } = useCartContext()

    const cart = state.cart

    const addToCartHandler = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product })
        success("Product added to cart!")
    }

    const removeFromCartHandler = (product) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: product })
    }

    return (
        <div className="hidden group-hover:block bottom-[16px] sm:bottom-[24px] lg:bottom-[32px] px-[13px] sm:px-[20px] lg:px-[25px] w-full absolute">
            {
                cart.find(product => product.id === productData.id) ?
                    <button
                        className="bottom-[32px] w-full bg-white h-[26px] sm:h-[35px] lg:h-[50px] grid place-items-center rounded-[3px]"
                        onClick={(event) => { event.stopPropagation(); removeFromCartHandler(productData.id)}}
                    >
                        <div className="flex items-center gap-[8px] sm:gap-[10px] lg:gap-[12px] text-[#0B1215] text-[8px] sm:text-[12px] lg:text-[14px] font-medium">
                            <ShoppingCartRemoveIcon className="w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] lg:w-[18px] lg:h-[18px]" />
                            <span className="text-primary">Remove from Cart</span>
                        </div>
                    </button>
                    :
                    <button
                        className="bottom-[32px] w-full bg-[#b9ceeb] h-[26px] sm:h-[35px] lg:h-[50px] grid place-items-center rounded-[3px]"
                        onClick={(event) => { event.stopPropagation(); addToCartHandler(productData) }}
                    >
                        <div className="flex items-center gap-[8px] sm:gap-[10px] lg:gap-[12px] text-[#0B1215] text-[8px] sm:text-[12px] lg:text-[14px] font-medium">
                            <ShoppingCartIcon className="w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] lg:w-[18px] lg:h-[18px]" />
                            <span className="text-primary">Add to Cart</span>
                        </div>
                    </button>
            }
        </div>
    )
}