import { cn } from "../utils/cn";

/* eslint-disable react/prop-types */
export default function Box({ children, className }){

    return (
        <div className={cn("w-full max-w-[1440px] mx-auto lg:px-[52px] sm:px-[32px] px-[16px]", className)}>
            { children }
        </div>
    )
}