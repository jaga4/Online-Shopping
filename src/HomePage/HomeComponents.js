
import BackToTopButton from "./BackToTopComponent";
import CarousleComponent from "./Carousel";
import Footer from "./FooterComponent";
import LatestProducts from "./LatestProducts";

import NavbarComponent from "./Navbar";
import OurFeaturesComponent from "./OurFeatures";
import ShopByCategory from "./ShopByCategory";


const HomeComponent=()=>{
    return(
     <div>
        <NavbarComponent/>
        <CarousleComponent/>
        <ShopByCategory/>
        <LatestProducts/>
        <OurFeaturesComponent/>
        <Footer/>
        <BackToTopButton/>
     </div>
    )
}

export default HomeComponent;