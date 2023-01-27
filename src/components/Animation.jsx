import Nav from "./Nav";
import Footer from "./Footer";

const Animation = () => {
    return (
        <div>
            <Nav />
            <div className="Container">
                <h1>Animations and Stop Motion</h1>
                <div className="ImageContainer">
                    <div className='ImagePlaceholder'></div>
                    <div className='ImagePlaceholder'></div>
                    <div className='ImagePlaceholder'></div>
                    <div className='ImagePlaceholder'></div>
                    <div className='ImagePlaceholder'></div>
                    <div className='ImagePlaceholder'></div>
                    <div className='ImagePlaceholder'></div>
                    <div className='ImagePlaceholder'></div>
                    <div className='ImagePlaceholder'></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Animation;