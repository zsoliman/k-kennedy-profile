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
                <p>hi, my name is...</p>
                <h1>Karla Kennedy</h1>
                <p >and I'm a...</p>
                <h2>Mother Fucking Artist</h2>
            </div>

        </div >
    )
}

export default Home;