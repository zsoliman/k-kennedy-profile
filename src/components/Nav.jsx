import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div className='Nav'>
            <div className='Logo'>
                <Link
                    className='Link Header' to='/'>
                    <h3 style={{ margin: '0' }}>The Kennedy Art Show</h3>
                </Link>
            </div>

            <Link
                className='Link' to='/about'>
                <a>About</a>
            </Link>

            <Link
                className='Link' to='/still-gallery'>
                <a>Images & Creations</a>
            </Link>

            <Link
                className='Link' to='/moving-gallery'>
                <a>Animations</a>
            </Link>

            <Link
                className='Link' to='/contact'>
                <a>Contact</a>
            </Link>

            <Link className='Link' to='/resume'>
                <a>Resume</a>
            </Link>
        </div>
    )
}

export default Nav;