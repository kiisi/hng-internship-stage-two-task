import Category from "../components/home/category";
import FeaturedCollection from "../components/home/featured-collection";
import LatestArrival from "../components/home/latest-arrival";
import Navbar from "../components/navbar/navbar";
import Seo from "../components/seo";

export default function Home() {

    return (
        <>
            <Seo title="Home" />
            <Navbar />
            <div className="h-[50px] lg:h-[72px]"></div>
            <Category />
            <div className="h-[50px] lg:h-[72px]"></div>
            <FeaturedCollection />
            <div className="h-[50px] lg:h-[72px]"></div>
            <LatestArrival />
            <div className="h-[50px] lg:h-[72px]"></div>
        </>
    )
}