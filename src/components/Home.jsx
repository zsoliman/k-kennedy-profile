import Nav
    from "./Nav";
const Home = ({ titleRef }) => {

    return (
        <div ref={titleRef} className="Header">
            <Nav />
            <div className='HeaderContainer'>
                <p style={{ paddingTop: '20px' }} className="Subtitle">hi, my name is...</p>
                <h1 className="Title">Karla Kennedy</h1>
                <p className="Subtitle">and I'm a...</p>
                <h2
                    style={{ paddingBottom: '20px' }}
                    className="Title"
                >Mother Fucking Artist</h2>
            </div>
        </div>
    )
}

export default Home;