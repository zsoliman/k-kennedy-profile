import { Link } from 'react-router-dom'

const Nav = ({
    handleTitleClick,
    handleAboutClick,
    handleProjectClick,
    handleContactClick,
    handleResumeClick
}) => {

    return (
        <div className='Nav'>
            <Link className='Link' to='/'><h3 style={{ margin: '0' }}>K.Kennedy Art Show Extravaganza</h3></Link>
            <Link className='Link' to='/about' > <a>about</a> </Link>
            <Link className='Link' to='/still-gallery'><a>Non-Moving Things</a></Link>
            <Link className='Link' to='/moving-gallery'><a>Moving Things</a></Link>
            <Link className='Link' to='/contact'><a>contact</a></Link>
            <Link className='Link' to='/resume'><a>resume</a></Link>
        </div>
    )
}

export default Nav;