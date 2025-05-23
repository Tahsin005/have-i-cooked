import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { HelpCircleIcon, MailPlus } from 'lucide-react';
import ContactSocials from './ContactSocials';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // show loading state

        emailjs
            .send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                {
                    from_name: form.name,
                    reply_to: form.email,
                    to_name: "MD. Tahsin Ferdous",
                    to_email: "tahsin.ferdous3546@gmail.com",
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_KEY
            )
            .then(
                () => {
                    toast.success('Mail sent. Thank you for contacting!');
                    setForm({ name: "", email: "", message: "" });
                    setLoading(false);
                },
                (error) => {
                    console.error(error);
                    toast('Error while sending mail. Try again!', {
                        style: {
                            border: '1px solid #713200',
                            padding: '16px',
                            color: 'red',
                        },
                    });
                    setLoading(false);
                }
            );
    };

    return (
        <section id='contact' className="group relative text-gray-300 text-md leading-relaxed px-4">
            <div className='pb-8'>
                <ContactSocials />
            </div>
            <p className="text-2xl font-bold text-white mb-6 flex">Say Hello <MailPlus className='ms-3 mt-1' /></p>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 py-6 rounded-lg shadow-xl"
            >
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-300 mb-1">
                        Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        id="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="px-4 py-2 bg-[#112044] text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accentColor"
                        placeholder="Your Name"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-300 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="px-4 py-2 bg-[#112044] text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accentColor"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-300 mb-1">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows="6"
                        required
                        value={form.message}
                        onChange={handleChange}
                        className="px-4 py-3 bg-[#112044] text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accentColor"
                        placeholder="Type your message here..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`flex items-center justify-center gap-2 bg-[#ab66ff] text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                        loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'
                    }`}
                >
                    {loading ? (
                        <>
                            <svg className="animate-spin w-5 h-5 text-white" viewBox="0 0 24 24">
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                />
                            </svg>
                            Sending...
                        </>
                    ) : (
                        'Send Message'
                    )}
                </button>
            </form>
        </section>
    );
};

export default Contact;
