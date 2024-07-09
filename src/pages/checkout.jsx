import Box from "../components/box";
import Navbar from "../components/navbar/navbar";
import Seo from "../components/seo";

export default function Checkout() {

    return (
        <>
            <Seo title="Checkout" />
            <Navbar />
            <Box className="py-[50px]">
                <header className="mb-[20px] sm:mb-[56px]">
                    <h1 className="text-center text-[24px] text-[#0B1215] font-semibold">Checkout</h1>
                </header>
                <div className="shadow-custom rounded-[10px]">
                    
                </div>
            </Box>
        </>
    )
}