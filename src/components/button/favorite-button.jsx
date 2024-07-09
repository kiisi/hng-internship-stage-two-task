/* eslint-disable react/prop-types */
import { useState } from "react";
import { cn } from "../../utils/cn";

export default function FavoriteButton({ className }) {

    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <button
            onClick={() => setIsFavorite(prev => !prev)}
            className={cn("bg-white w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] rounded-[30px] absolute right-[10px] top-[10px] sm:right-[14px] sm:top-[14px] lg:right-[16px] lg:top-[16px] grid place-items-center hover:scale-[.90] transition", className)}>
            <svg xmlns="http://www.w3.org/2000/svg" className={cn("w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]", isFavorite ? "fill-[#ED5642] stroke-[#ED5642]" : "stroke-[#0B1215]")} width={20} height={20} viewBox="0 0 20 20" fill="none">
                <path d="M10.5167 17.3413C10.2334 17.4413 9.76675 17.4413 9.48341 17.3413C7.06675 16.5163 1.66675 13.0747 1.66675 7.24134C1.66675 4.66634 3.74175 2.58301 6.30008 2.58301C7.81675 2.58301 9.15841 3.31634 10.0001 4.44967C10.8417 3.31634 12.1917 2.58301 13.7001 2.58301C16.2584 2.58301 18.3334 4.66634 18.3334 7.24134C18.3334 13.0747 12.9334 16.5163 10.5167 17.3413Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    )
}