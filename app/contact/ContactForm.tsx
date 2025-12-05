"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

interface ContactFormProps {
    onSubmit?: (data: { name: string; email: string; type: string; message: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("request");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        // Call the onSubmit callback if provided
        if (onSubmit) {
            onSubmit({ name, email, type, message });
        }

        // Simulate send — replace with real API endpoint/service if desired
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
            setName("");
            setEmail("");
            setType("request");
            setMessage("");
        }, 900);
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <form
                onSubmit={handleSubmit}
                className="bg-light dark:bg-secondary p-6 md:p-8 rounded-2xl shadow-sm transition-all duration-300"
            >
                {submitted ? (
                    <div className="text-center py-8">
                        <h4 className="text-lg md:text-xl font-bold text-decorative">
                            Thanks — message received!
                        </h4>
                        <p className="text-sm md:text-base text-decorative opacity-80 mt-2">
                            I'll get back to you as soon as I can.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-5">
                        <div>
                            <label className="block text-xs md:text-sm font-medium text-primary dark:text-light mb-1">
                                Name
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full p-2 md:p-2.5 rounded-md text-primary dark:text-light bg-light-2 dark:bg-primary-2 border border-border-light dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-decorative/50 placeholder-primary/50 dark:placeholder-light/50"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label className="block text-xs md:text-sm font-medium text-primary dark:text-light mb-1">
                                Email
                            </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                required
                                className="w-full p-2 md:p-2.5 rounded-md text-primary dark:text-light bg-light-2 dark:bg-primary-2 border border-border-light dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-decorative/50 placeholder-primary/50 dark:placeholder-light/50"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-xs md:text-sm font-medium text-primary dark:text-light mb-1">
                                Type
                            </label>
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="w-full p-2 md:p-2.5 rounded-md text-primary dark:text-light bg-light-2 dark:bg-primary-2 border border-border-light dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-decorative/50"
                            >
                                <option value="request">Request a design</option>
                                <option value="share">Share a project</option>
                                <option value="appreciation">Appreciation / Feedback</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs md:text-sm font-medium text-primary dark:text-light mb-1">
                                Message
                            </label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows={4}
                                className="resize-none w-full p-2 md:p-2.5 rounded-md text-primary dark:text-light bg-light-2 dark:bg-primary-2 border border-border-light dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-decorative/50 placeholder-primary/50 dark:placeholder-light/50"
                                placeholder="Your message..."
                            />
                        </div>

                        <div className="flex items-center justify-start pt-1">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="bg-decorative text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 text-sm md:text-base hover:-translate-y-1 transition-all cursor-pointer"
                                style={{ boxShadow: "0 2px 16px rgba(99, 102, 241, 0.5)" }}
                            >
                                <FaPaperPlane /> {submitting ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
