const Nav = ({
    handleTitleClick,
    handleAboutClick,
    handleProjectClick,
    handleContactClick,
    handleResumeClick }) => {

    return (
        <div>
            <h3 onClick={handleTitleClick}>K.Kennedy Art Show Extravaganza</h3>
            <a onClick={handleAboutClick} >about&nbsp;</a>
            <a onClick={handleProjectClick} >projects&nbsp;</a>
            <a onClick={handleContactClick} >contact&nbsp;</a>
            <a onClick={handleResumeClick} >resume&nbsp;</a>
        </div>
    )
}

export default Nav;