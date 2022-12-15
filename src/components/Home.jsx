import { Link } from 'react-router-dom'
import MixingPaint from './video/mixingPaint.mp4';
import Nav from "./Nav";

const Home = ({ titleRef }) => {

    return (
        <div ref={titleRef} className="Header">
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
                <h1>The Kennedy Art Show</h1>
                <p className='Name'>by Karla</p>

                <Link
                    className='Link' to='/about'>

                    <button className="enterBtn">Enter &nbsp; ></button>
                </Link>

            </div>


        </div >
    )
}

export default Home;