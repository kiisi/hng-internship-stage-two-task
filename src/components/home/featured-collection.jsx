import { useInfiniteQuery } from "@tanstack/react-query";
import Box from "../box";
import FavoriteButton from "../button/favorite-button";
import { CartIcon, StarIcon } from "../svg";
import productService from "../../services/product";
import LineLoader from "../loaders/line-loader";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function FeaturedCollection() {

    const { data, isError, fetchNextPage, isFetchingNextPage, isLoading } =
        useInfiniteQuery({
            queryKey: ['products'],
            queryFn: ({ pageParam }) => productService.all({ page: pageParam }),
            initialPageParam: 1,
            getNextPageParam: (lastPage) => lastPage.data.page + 1
        });

    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            console.log("trigger")
            fetchNextPage();
        }
    }, [fetchNextPage, inView]);

    return (
        <Box>
            <header className="mb-[32px]">
                <h1 className="text-[18px] lg:text-[24px] text-[#0B1215] font-semibold">Featured Collection</h1>
            </header>
            {
                isLoading && (
                    <LineLoader />
                )
            }
            {
                isError && (
                    <p>An error occurred while retrieving login activity information</p>
                )
            }
            <div className='grid gap-x-[9px] sm:gap-x-[11px] lg:gap-x-[21px] gap-y-[48px] sm:gap-y-[64px] lg:gap-y-[84px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
                {
                    data?.pages?.map(pageData => (
                        pageData?.data?.items.map(data => (
                            <div key={data.id} className="relative">
                                <figure className="group relative">
                                    <img
                                        src={`https://api.timbu.cloud/images/${data?.photos[0]?.url}`}
                                        alt={data.name}
                                        className='w-full object-cover rounded-[5px] h-[186px] sm:h-[249px] lg:h-[426px]'
                                    />
                                    <div className="hidden group-hover:block bottom-[16px] sm:bottom-[24px] lg:bottom-[32px] px-[13px] sm:px-[20px] lg:px-[25px] w-full absolute">
                                        <button
                                            className="bottom-[32px] w-full bg-[#b9ceeb] h-[26px] sm:h-[35px] lg:h-[50px] grid place-items-center rounded-[3px]"
                                        >
                                            <div className="flex items-center gap-[8px] sm:gap-[10px] lg:gap-[12px] text-[#0B1215] text-[8px] sm:text-[12px] lg:text-[14px] font-medium">
                                                <CartIcon className="w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] lg:w-[18px] lg:h-[18px]" />
                                                <span className="text-primary">Add to Cart</span>
                                            </div>
                                        </button>
                                    </div>
                                </figure>
                                <FavoriteButton />
                                <div className="pt-[14px] sm:pt-[16px] lg:pt-[20px] text-[13px] lg:text-[16px]">
                                    <div className="text-[#0B1215] flex items-center justify-between">
                                        <p>{data.name}</p>
                                        <div className="flex items-center gap-[4px]">
                                            <StarIcon />
                                            5.0 (0)
                                        </div>
                                    </div>
                                    <div className="text-[#0B1215] mt-[10px] flex items-center justify-between">
                                        <span className="underline text-primary">View Details</span>
                                        <p className="font-bold">${data.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ))
                }
            </div>
            <div ref={ref}></div>
            <div className="pt-4">
                {isFetchingNextPage && (
                    <div className="pb-2">
                        <LineLoader />
                    </div>
                )}
            </div>
        </Box>
    )
}