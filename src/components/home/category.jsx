import { register } from "swiper/element";
import Box from "../box";
import { useEffect, useRef } from "react";

export default function Category() {

    const categoryData = [
        {
            image: '/images/category-img-1.png',
            title: 'T-shirt',
        },
        {
            image: '/images/category-img-2.png',
            title: 'Trouser',
        },
        {
            image: '/images/category-img-3.png',
            title: 'Jacket',
        },
        {
            image: '/images/category-img-4.png',
            title: 'Dress',
        },
        {
            image: '/images/category-img-5.png',
            title: 'Skirt',
        },
        {
            image: '/images/category-img-1.png',
            title: 'T-shirt',
        },
        {
            image: '/images/category-img-2.png',
            title: 'Trouser',
        },
        {
            image: '/images/category-img-3.png',
            title: 'Jacket',
        },
        {
            image: '/images/category-img-4.png',
            title: 'Dress',
        },
        {
            image: '/images/category-img-5.png',
            title: 'Skirt',
        },
    ]

    const swiperRef = useRef(null);

    useEffect(() => {
        // Register Swiper web component
        register();

        const params = {
            injectStyles: [`
            
            `],
            spaceBetween: 10,
            breakpoints: {
                1024: {
                    spaceBetween: 30,
                },
                625: {
                    spaceBetween: 20,
                },
            },
        }

        // Assign it to swiper element
        Object.assign(swiperRef.current, params);



        // initialize swiper
        swiperRef.current.initialize();
    }, []);

    return (
        <Box>
            <header className="mb-[32px]">
                <h1 className="text-[18px] lg:text-[24px] text-[#0B1215] font-semibold">Category</h1>
            </header>
            <div className='relative'>
                <swiper-container
                    ref={swiperRef}
                    init="false"
                    slides-per-view="auto"
                >
                    {
                        categoryData.map((data, index) => (
                            <swiper-slide key={index} class="relative w-[120px] sm:w-[150px] lg:w-[193px]">
                                <figure className="w-[100px] sm:w-[150px] lg:w-[193px]">
                                    <img src={data.image} alt={data.title} />
                                    <figcaption className="text-center pt-4 font-medium text-[15px] lg:text-[18px]">{data.title}</figcaption>
                                </figure>
                            </swiper-slide>
                        ))
                    }
                </swiper-container>
            </div>
        </Box>
    )
}