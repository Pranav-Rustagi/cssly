"use client";

import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";

const Contact = () => {
    const handleFormSubmit = (data: { name: string; email: string; type: string; message: string }) => {
        console.log("Form submitted:", data);
    };

    return (
        <section id="contact" className="w-full bg-light-2 py-24 px-8 dark:bg-primary-2">
            <div className="max-w-[1400px] mx-auto px-40">
                <ContactHeader />

                <div className="w-full flex justify-center">
                    <ContactForm onSubmit={handleFormSubmit} />
                </div>
            </div>
        </section>
    );
};

export default Contact;
