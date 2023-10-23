import CarouselComponent from "../Carousel/CarouselImage.component";
import '@/assets/css/header.style.css';
import { getImages} from "@/services/carousel";
import CarouselImageComponent from "../Carousel/CarouselImage.component";


const HeaderComponent = async() =>{
    const images = await getImages();
    return(
       <header>
        <div className="header">
            <div className="header_carousel">
                <CarouselImageComponent data={images} />
            </div>
        </div>
       </header>
    );
}

export default HeaderComponent;