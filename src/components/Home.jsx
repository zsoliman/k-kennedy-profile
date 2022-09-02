import MixingPaint from './video/mixingPaint.mp4';
import Nav from "./Nav";
const Home = ({ titleRef }) => {

    return (
        <div ref={titleRef} className="Header">
            <Nav />
            <video
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"
                }}
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