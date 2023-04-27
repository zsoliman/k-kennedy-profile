import Nav from "./Nav";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div>
            <Nav />
            <div className="contactContainer">

                <h1>How to Contact the Artist:</h1>
                <br />
                <br />
                <br />
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}

export default Contact;