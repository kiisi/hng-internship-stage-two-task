import { useQuery } from "@tanstack/react-query";
import productService from "../../services/product";
import Navbar from "../navbar/navbar";
import Seo from "../seo";
import { useParams } from "react-router-dom";

export default function Product() {

    const { id } = useParams()

    const { data, isLoading, isError } = useQuery({
        queryKey: [`product-${id}`],
        queryFn: () => productService.single(id)
    })

    const productData = data?.data
    console.log(productData)

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
                            <figure>
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