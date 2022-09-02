import { Link } from 'react-router-dom'

const Nav = ({
    handleTitleClick,
    handleAboutClick,
    handleProjectClick,
    handleContactClick,
    handleResumeClick
}) => {

    return (
        <div>
            <Link to='/'><h3 onClick={handleTitleClick}>K.Kennedy Art Show Extravaganza</h3></Link>
            <Link to='/about' > <a onClick={handleAboutClick} >about&nbsp;</a> </Link>
            <Link to='/still-gallery'><a onClick={handleProjectClick} >Non-Moving Things&nbsp;</a></Link>
            <a onClick={handleContactClick} >contact&nbsp;</a>
            <a onClick={handleResumeClick} >resume&nbsp;</a>
        </div>
    )
}

export default Nav;