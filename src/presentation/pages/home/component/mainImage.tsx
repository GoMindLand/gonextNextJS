import {ImageElement} from "@/application/dto/home-page.dto";
import {strapiURL} from "@/config/constant";

interface MainImageProps {
    image: ImageElement;
}

const MainImage: React.FC<MainImageProps> = ({ image }) => {
    return (
        <div className="mt-5">
            <img
                src={strapiURL + image.Image.url}
                alt={image.Image.alternativeText || ""}
                width={image.Size ? `${image.Size}%` : undefined}
            />
        </div>
    );
};

export default MainImage;