import Footer from "./Footer";
import Nav
    from "./Nav";
const Image = () => {
    return (
        <div>
            <Nav />
            <div className="Container">
                <h1>Images All Over This Bitch</h1>

                <div className="ImagePlaceholderContainer">
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

export default Image;