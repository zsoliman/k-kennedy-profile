import Footer from "./Footer";
import Nav from "./Nav";
import Modal from "./Modal";
import { useState } from "react";



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

// import CopyofIMG_4350 from './art/CopyofIMG_4350.HEIC';
import IMG_0510 from './art/IMG_0510.JPG';
import IMG_0511 from './art/IMG_0511.JPG';
import IMG_0512 from './art/IMG_0512.JPG';
import IMG_0513 from './art/IMG_0513.jpg';
import IMG_4052 from './art/IMG_4052.jpg';
import IMG_20220722_204319 from './art/IMG_20220722_204319.jpg';
import IMG_20220806_025651_01 from './art/IMG_20220806_025651_01.jpg';
import IMG_20221015_183448 from './art/IMG_20221015_183448.jpg';
import IMG_20230203_005055 from './art/IMG_20230203_005055.jpg';
import IMG_20230203_005120 from './art/IMG_20230203_005120.jpg';
import IMG_20230203_005145 from './art/IMG_20230203_005145.jpg';
import IMG_20230203_005150 from './art/IMG_20230203_005150.jpg';
import IMG_20230203_005230 from './art/IMG_20230203_005230.jpg';
import IMG_20230203_005236 from './art/IMG_20230203_005236.jpg';
import IMG_20230203_005338 from './art/IMG_20230203_005338.jpg';
import IMG_20230203_005351 from './art/IMG_20230203_005351.jpg';
import IMG_20230203_005423 from './art/IMG_20230203_005423.jpg';
import IMG_20230203_005428 from './art/IMG_20230203_005428.jpg';
import PXL_20221005_025420532PORTRAIT from './art/PXL_20221005_025420532PORTRAIT.jpg';
import PXL_20221016_194931699 from './art/PXL_20221016_194931699.jpg';
import PXL_20221016_224458317 from './art/PXL_20221016_224458317.jpg';
import PXL_20221212_213818097 from './art/PXL_20221212_213818097.jpg';
import PXL_20221212_222642281 from './art/PXL_20221212_222642281.jpg';
import PXL_20221212_222645967 from './art/PXL_20221212_222645967.jpg';
import PXL_20230111_195538865 from './art/PXL_20230111_195538865.jpg';
import PXL_20230116_174305994 from './art/PXL_20230116_174305994.jpg';


// const driveArt = "https://drive.google.com/drive/folders/16T64VM8oYe28oLiFFTx-Z-1K9DFpsn8I?usp=share_link"
// const APIkey = "AIzaSyBLqkARpYMsbOelAl9pqSoMkTw8qMsLYTo"

const Image = () => {

    let driveArt = [
        DSC_0810,
        DSC_0822,
        IMG_1652,
        IMG_1653,
        IMG_1657,
        IMG_20200522_225711,
        IMG_20200522_234137,
        IMG_20210128_195856,
        IMG_20210128_195856,
        PXL_20210901_153025639,
        PXL_20210901_153157363,
        PXL_20220112_061728631,
        PXL_20220114_015321600,
        IMG_0510,
        IMG_0511,
        IMG_0512,
        IMG_0513,
        IMG_4052,
        IMG_20220722_204319,
        IMG_20220806_025651_01,
        IMG_20221015_183448,
        IMG_20230203_005055,
        IMG_20230203_005120,
        IMG_20230203_005145,
        IMG_20230203_005150,
        IMG_20230203_005230,
        IMG_20230203_005236,
        IMG_20230203_005338,
        IMG_20230203_005351,
        IMG_20230203_005423,
        IMG_20230203_005428,
        PXL_20221005_025420532PORTRAIT,
        PXL_20221016_194931699,
        PXL_20221016_224458317,
        PXL_20221212_213818097,
        PXL_20221212_222642281,
        PXL_20221212_222645967,
        PXL_20230111_195538865,
        PXL_20230116_174305994
    ]


    // const [images, setImages] = useState([])

    // const getImages = async () => {
    //     let req = await fetch('https://drive.google.com/drive/folders/16T64VM8oYe28oLiFFTx-Z-1K9DFpsn8I')
    //     let res = await req.json()
    //     setImages(res)
    //     console.log(images)
    // }

    // getImages()

    const [isHidden, setIsHidden] = useState(true)


    const displayModal = () => {
        setIsHidden(!isHidden)
    }


    return (
        <div>
            <Nav />
            <div className="Container">
                <h1>Images & Creations</h1>

                <div className="ImageContainer">


                    {/* <img src="https://drive.google.com/file/d/1g0Dbv10qjMGw7Y0WiSbVErq6NE-V5pph/view?usp=share_link" /> */}

                    {/* <img src="https://drive.google.com/uc?export=view&id=1g0Dbv10qjMGw7Y0WiSbVErq6NE-V5pph" /> */}

                    <Modal
                        isHidden={isHidden}
                        displayModal={displayModal}
                    />

                    {driveArt.map((art, index) =>
                        <img
                            className="ImageThumbnail"
                            src={art}
                            key={index}
                            onClick={displayModal}
                        />

                    )}

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Image;