import Footer from "../components/footer/footer";
import Category from "../components/home/category";
import FeaturedCollection from "../components/home/featured-collection";
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
            <div className="h-[100px] lg:h-[150px]"></div>
            <Footer />
        </>
    )
}