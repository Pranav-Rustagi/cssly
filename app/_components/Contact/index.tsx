"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaPaperPlane, FaCoffee } from "react-icons/fa";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("request");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
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
        <section id="contact" className="w-full bg-light py-48 px-8 dark:bg-primary">
            <div className="max-w-[1400px] mx-auto px-10">
                <div className="text-center mb-16">
                    <div className="flex gap-6 mb-4 justify-center items-end">
                        <h2 className="text-5xl md:text-6xl font-black text-primary dark:text-light">Contact</h2>
                        <h2 className="text-5xl md:text-6xl font-semibold text-decorative font-mono">Say Hello</h2>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed text-primary dark:text-light opacity-85 mx-auto max-w-2xl">
                        Have a design request, found something neat, or want to share appreciation? <br />Use the form to
                        request a design or send a short message — I read everything.
                    </p>
                </div>

                <div className="flex w-full">
                    {/* Left Column: Contact Info */}
                    <div className="flex flex-col pr-10 w-1/2 border-r border-primary-2">
                        {/* Contact Info Section */}
                        <div className="flex flex-col gap-4">
                            <div>
                                <h3 className="text-xl md:text-3xl font-bold text-primary dark:text-light mb-3">
                                    Get in Touch
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-20">
                                <div className="flex items-center gap-4 bg-white dark:bg-secondary p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-2xl md:text-3xl text-decorative">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h4 className="text-sm md:text-base font-bold text-primary dark:text-light">Email</h4>
                                        <a
                                            href="mailto:hello@cssly.dev"
                                            className="text-xs md:text-sm text-primary dark:text-light opacity-80 hover:underline"
                                        >
                                            hello@cssly.dev
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white dark:bg-secondary p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-2xl md:text-3xl text-decorative">
                                        <FaLinkedin />
                                    </div>
                                    <div>
                                        <h4 className="text-sm md:text-base font-bold text-primary dark:text-light">LinkedIn</h4>
                                        <Link
                                            href="#"
                                            className="text-xs md:text-sm text-primary dark:text-light opacity-80 hover:underline"
                                        >
                                            linkedin.com/in/your
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="w-1/2 pl-10 border-l border-primary-2">
                        <form onSubmit={handleSubmit} className="bg-primary-2 border border-light/10 p-6 md:p-8 rounded-lg shadow-sm">
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
                                        <label className="block text-xs md:text-sm font-medium text-light mb-1">
                                            Name
                                        </label>
                                        <input
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className="w-full p-2 md:p-2.5 rounded-md text-light bg-light-2/5 border border-decorative/20 placeholder-light/50"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs md:text-sm font-medium text-light mb-1">
                                            Email
                                        </label>
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            required
                                            className="w-full p-2 md:p-2.5 rounded-md text-light bg-light-2/5 border border-decorative/20 placeholder-light/50"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs md:text-sm font-medium text-light mb-1">
                                            Type
                                        </label>
                                        <select
                                            value={type}
                                            onChange={(e) => setType(e.target.value)}
                                            className="w-full p-2 md:p-2.5 rounded-md text-light bg-light-2/5 border border-decorative/20"
                                        >
                                            <option value="request">Request a design</option>
                                            <option value="share">Share a project</option>
                                            <option value="appreciation">Appreciation / Feedback</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs md:text-sm font-medium text-light mb-1">
                                            Message
                                        </label>
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                            rows={4}
                                            className="w-full p-2 md:p-2.5 rounded-md text-light bg-light-2/5 border border-decorative/20 placeholder-light/50"
                                            placeholder="Your message..."
                                        />
                                    </div>

                                    <div className="flex items-center justify-start pt-1">
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="bg-decorative text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 text-xs md:text-sm hover:-translate-y-1 transition-all cursor-pointer"
                                            style={{ boxShadow: "0 2px 16px rgba(99, 102, 241, 0.5)" }}
                                        >
                                            <FaPaperPlane /> {submitting ? "Sending..." : "Send"}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Buy Me A Coffee Section */}
                <div className="mt-20 pt-16 border-t border-primary/10 dark:border-light/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-light dark:bg-primary/50 p-8 md:p-10 rounded-lg">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-light mb-2">
                                Support the Project
                            </h3>
                            <p className="text-base md:text-lg text-primary dark:text-light opacity-80">
                                Enjoy CSSly? Consider buying me a coffee to fuel more creative experiments.
                            </p>
                        </div>
                        <Link
                            href="https://buymeacoffee.com/your-username"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 text-base md:text-lg px-8 py-3 rounded-full bg-yellow-400 dark:bg-yellow-500 text-yellow-900 dark:text-yellow-900 font-bold hover:bg-yellow-500 dark:hover:bg-yellow-400 transition-colors shadow-sm whitespace-nowrap"
                        >
                            <FaCoffee /> Buy Me A Coffee
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
