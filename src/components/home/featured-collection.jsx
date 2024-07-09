import Box from "../box";
import FavoriteButton from "../button/favorite-button";
import { StarIcon } from "../svg";

export default function FeaturedCollection() {

    const images = [
        {
            id: 'product-id-1',
            image: '/images/featured-collection-img-1.png',
            name: "Jean & T-Shirt",
            price: 200.97,
        },
        {
            id: 'product-id-2',
            image: '/images/featured-collection-img-2.png',
            name: "Jean & T-Shirt",
            price: 200.97,
        },
        {
            id: 'product-id-3',
            image: '/images/featured-collection-img-3.png',
            name: "Jean & T-Shirt",
            price: 200.97,
        },
        {
            id: 'product-id-4',
            image: '/images/featured-collection-img-4.png',
            name: "Jean & T-Shirt",
            price: 200.97,
        },
        {
            id: 'product-id-5',
            image: '/images/featured-collection-img-5.png',
            name: "Skirt & Blouse",
            price: 200.97,
        },
        {
            id: 'product-id-6',
            image: '/images/featured-collection-img-6.png',
            name: "Skirt & Blouse",
            price: 200.97,
        },
        {
            id: 'product-id-7',
            image: '/images/featured-collection-img-7.png',
            name: "Skirt & Blouse",
            price: 200.97,
        },
        {
            id: 'product-id-8',
            image: '/images/featured-collection-img-8.png',
            name: "Skirt & Blouse",
            price: 200.97,
        },
    ]

    return (
        <Box>
            <header className="mb-[32px]">
                <h1 className="text-[18px] lg:text-[24px] text-[#0B1215] font-semibold">Featured Collection</h1>
            </header>
            <div className='grid gap-x-[9px] sm:gap-x-[11px] lg:gap-x-[21px] gap-y-[24px] sm:gap-y-[64px] lg:gap-y-[84px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
                {
                    images.map((data, index) => (
                        <div key={index} className="relative">
                            <figure className="group relative">
                                <img
                                    src={data.image}
                                    alt={data.name}
                                    className='w-full object-cover rounded-[5px] h-[186px] sm:h-[249px] lg:h-[426px]'
                                />
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
                }
            </div>
        </Box>
    )
}