import { useQuery } from "@tanstack/react-query";
import productService from "../../services/product";
import Navbar from "../navbar/navbar";
import Seo from "../seo";
import { useNavigate, useParams } from "react-router-dom";

export default function Product() {

    const { id } = useParams()

    const navigate = useNavigate()

    const { data, isLoading, isError } = useQuery({
        queryKey: [`product-${id}`],
        queryFn: () => productService.single(id)
    })

    const productData = data?.data

    return (
        <>
            <Seo title="" />
            <Navbar />
            <div className="max-w-[1440px] mx-auto w-full">
                <div>
                    {
                        isLoading ? (
                            <div
                                className="shadow-[0px_3px_12px_0px_#00000014] flex gap-[10px] h-[286px] sm:h-[420px] lg:h-[520px] relative p-2"
                            >
                                <div className="w-full h-full bg-[#EBEBF4]"></div>
                                <div className="absolute shimmer-loading-effect inset-0 h-full w-full"></div>
                            </div>
                        ) : (
                            <figure className="relative">
                                <button onClick={() => navigate(-1)} className="h-[32px] w-[32px] absolute lg:left-[52px] sm:left-[32px] left-[16px] top-[20px] rounded-full bg-white grid place-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 33 28" fill="none">
                                        <path d="M33 12.2483H6.86022L16.3459 2.97684L13.8118 0.5L0 14L13.8118 27.5L16.3459 25.0232L6.86022 15.7517H33V12.2483Z" fill="black" />
                                    </svg>
                                </button>
                                <img
                                    src={`https://api.timbu.cloud/images/${productData.photos[0]?.url}`}
                                    alt={productData.name}
                                    className='w-full h-full object-cover h-[286px] sm:h-[420px] lg:h-[520px]'
                                />
                            </figure>
                        )
                    }
                </div>
            </div>
        </>
    )
}