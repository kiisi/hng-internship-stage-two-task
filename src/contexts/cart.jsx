/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext(null)

const initState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
}
const reducer = (state, action) => {
    switch (action.type){
        case "ADD_TO_CART": {
            const product = action.payload
            product.quantity = 1
            product.total = product.quantity * product.price
            return {
                ...state,
                cart: [product, ...state.cart]
            }
        }
        case "REMOVE_FROM_CART": {
            const productId = action.payload
            const filteredCart = state.cart.filter(product => product.id !== productId)

            return {
                ...state,
                cart: filteredCart
            }
        }
        case "ADD_CART_PRODUCT_QUANTITY": {
            const cart = state.cart
            const productId = action.payload
            const productIndex = cart.findIndex(prod => prod.id === productId)
            
            if(cart[productIndex].quantity > 0){
                cart[productIndex].quantity += 1
            }

            cart[productIndex].total = cart[productIndex].quantity * cart[productIndex].price

            return {
                ...state,
                cart: cart
            }
        }
        case "REDUCE_CART_PRODUCT_QUANTITY": {
            const cart = state.cart
            const productId = action.payload
            const productIndex = cart.findIndex(prod => prod.id === productId)

            if(cart[productIndex].quantity > 1){
                cart[productIndex].quantity -= 1
            }

            cart[productIndex].total = cart[productIndex].quantity * cart[productIndex].price

            return {
                ...state,
                cart: cart
            }
        }
        case "DELETE_CART_PRODUCT": {
            const productId = action.payload
            const filteredCart = state.cart.filter(prod => prod.id !== productId)

            return {
                ...state,
                cart: filteredCart
            }
        }
        
        default: {
            throw Error("Unknown Action")
        }
    }
}

export default function CartProvider({ children }){

    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(() => {
        // Save the state to local storage whenever it changes
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }, [state]);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)