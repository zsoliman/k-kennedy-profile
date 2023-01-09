import Nav from "./Nav";
import Footer from "./Footer";

const Contact = () => {
    return (
        <div>
            <Nav />
            <div className="Container">
                <h1>How to Contact the Artist:</h1>
                <br />
                <br />
                <br />

                <div className="formDiv">

                    <form className="form">
                        <input placeholder="First Name..."></input>
                        <input placeholder="Last Name..."></input>
                        <input placeholder="Email..."></input>
                        <textarea placeholder="Message..." ></textarea>
                        <input type="submit" value="Send"></input>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;