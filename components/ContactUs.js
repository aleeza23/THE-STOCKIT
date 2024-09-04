"use client"
import ContactMap from './ContactMap';
import ContactForm from './ContactForm';

const ContactUs = () => {
    return (
        <section className="text-gray-600 body-font relative" id='contact'>
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                {/* map */}
                <ContactMap />

                {/* form */}
                <ContactForm />

            </div>
        </section>
    );
}

export default ContactUs;
