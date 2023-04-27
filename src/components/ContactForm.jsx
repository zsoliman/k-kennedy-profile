import { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/d6bcb3e0-e50d-11ed-9b25-13156513d0a3";

const ContactForm = () => {

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div>Thank you!</div>
                <div>We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <div className="contactForm">
                <input
                    type="text"
                    placeholder="Name..."
                    name="name"
                    required
                />
            </div>
            <div className="contactForm">
                <input
                    type="email"
                    placeholder="Email..."
                    name="email"
                    required
                />
            </div>
            <div className="contactForm">
                <textarea
                    placeholder="Your message..."
                    name="message"
                    required
                />
            </div>
            <div className="contactForm">
                <button
                    type="submit"
                >
                    Send a message
                </button>
            </div>
        </form>
    );
};


export default ContactForm;