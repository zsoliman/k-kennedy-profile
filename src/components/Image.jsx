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

// const driveArt = "https://drive.google.com/drive/folders/16T64VM8oYe28oLiFFTx-Z-1K9DFpsn8I?usp=share_link"
// const APIkey = "AIzaSyBLqkARpYMsbOelAl9pqSoMkTw8qMsLYTo"

const Image = () => {

    let driveArt = [DSC_0810, DSC_0822, IMG_1652, IMG_1653, IMG_1657, IMG_20200522_225711, IMG_20200522_234137, IMG_20210128_195856, IMG_20210128_195856, PXL_20210901_153025639, PXL_20210901_153157363, PXL_20220112_061728631, PXL_20220114_015321600]


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

                    <Modal isHidden={isHidden} />

                    {driveArt.map((art, index) =>
                        <img
                            className="ImageThumbnail"
                            src={art}
                            key={index}
                            onClick={displayModal}
                        />)}


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Image;