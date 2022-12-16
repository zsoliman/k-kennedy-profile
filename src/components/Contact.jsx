import Nav from "./Nav";
import Footer from "./Footer";

const Contact = () => {
    return (
        <div>
            <Nav />
            <div className="Container">
                <h1>How to Contact the Artist:</h1>
                <h3>Probably just call her</h3>
                <h3>Shoot a text</h3>
                <h3>Email</h3>
                <h3>Regular mail</h3>
                <h3>Show up at her house</h3>

                <form className="form">
                    <input placeholder="First Name..."></input>
                    <input placeholder="Last Name..."></input>
                    <input placeholder="Email..."></input>
                    <textarea placeholder="Message..." ></textarea>
                    <input type="submit" value="Send"></input>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;