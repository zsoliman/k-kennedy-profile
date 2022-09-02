import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div className='Nav'>

            <Link
                className='Link Header' to='/'>
                <h3 style={{ margin: '0' }}>K.Kennedy Art Show Extravaganza</h3>
            </Link>

            <Link
                className='Link' to='/about'>
                <a>About</a>
            </Link>

            <Link
                className='Link' to='/still-gallery'>
                <a>Non-Moving Things</a>
            </Link>

            <Link
                className='Link' to='/moving-gallery'>
                <a>Moving Things</a>
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