import MixingPaint from './video/mixingPaint.mp4';
import Nav from "./Nav";

const Home = ({ titleRef }) => {

    return (
        <div ref={titleRef} className="Header">
            <Nav />
            <video
                className='Video'
                autoPlay
                loop
                muted
            >
                <source src={MixingPaint} type='video/mp4' />
            </video>

            <div className='HeaderBackground'></div>
            <div className='HeaderContainer'>
                <h1>The Kennedy of Art</h1>
                <p className='Name'>by Karla</p>
            </div>

        </div >
    )
}

export default Home;