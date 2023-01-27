import Footer from "./Footer";
import Nav from "./Nav";
import Modal from "./Modal";

import DSC_0810 from './art/DSC_0810.JPG';
import DSC_0822 from './art/DSC_0822.JPG';
import IMG_1652 from './art/IMG_1652.jpg';
import IMG_1653 from './art/IMG_1653.jpg';
import IMG_1657 from './art/IMG_1657.jpg';
import IMG_20200522_225711 from './art/IMG_20200522_225711.jpg';
import IMG_20200522_234137 from './art/IMG_20200522_234137.jpg';
import IMG_20210128_195856 from './art/IMG_20210128_195856.jpg';
import PXL_20210901_153025639 from './art/PXL_20210901_153025639.jpg';
import PXL_20210901_153157363 from './art/PXL_20210901_153157363.jpg';
import PXL_20220112_061728631 from './art/PXL_20220112_061728631.jpg';
import PXL_20220114_015321600 from './art/PXL_20220114_015321600.jpg';

const Image = () => {
    return (
        <div>
            <Nav />
            <div className="Container">
                <h1>Images & Creations</h1>

                {/* <Modal /> */}

                <div className="ImageContainer">
                    <img className="ImageThumbnail" src={DSC_0810} />
                    <img className="ImageThumbnail" src={DSC_0822} />
                    <img className="ImageThumbnail" src={IMG_1652} />
                    <img className="ImageThumbnail" src={IMG_1653} />
                    <img className="ImageThumbnail" src={IMG_1657} />
                    <img className="ImageThumbnail" src={IMG_20200522_225711} />
                    <img className="ImageThumbnail" src={IMG_20200522_234137} />
                    <img className="ImageThumbnail" src={IMG_20210128_195856} />
                    <img className="ImageThumbnail" src={PXL_20210901_153025639} />
                    <img className="ImageThumbnail" src={PXL_20210901_153157363} />
                    <img className="ImageThumbnail" src={PXL_20220112_061728631} />
                    <img className="ImageThumbnail" src={PXL_20220114_015321600} />

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Image;