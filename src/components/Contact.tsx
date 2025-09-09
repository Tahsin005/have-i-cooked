import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

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
          toast.success("Mail sent. Thank you for contacting!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          toast.error("Error while sending mail. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text text-center mb-12">
          Get In Touch
        </h2>

        {/* JSON-style block */}
        <div
          className="code-block mb-12"
          style={{
            wordBreak: "break-all",
            overflowWrap: "break-word",
            whiteSpace: "pre-wrap",
          }}
        >
          <div className="flex items-start">
            <div className="flex-1 pl-4">
              <div className="text-base md:text-lg">
                <div>
                  <span className="text-foreground">{"{"}</span>
                </div>
                <div className="ml-4">
                  <span className="syntax-string">"email"</span>:
                  <a
                    href="mailto:tahsin.ferdous3546@gmail.com"
                    className="syntax-string hover:text-primary transition-colors underline"
                  >
                    "tahsin.ferdous3546@gmail.com"
                  </a>
                  ,
                </div>
                {/* Rest of the JSON content remains the same */}
                <div className="ml-4">
                  <span className="syntax-string">"location"</span>:
                  <span className="syntax-string">"Dhaka, Bangladesh"</span>,
                </div>
                <div className="ml-4">
                  <span className="syntax-string">"linkedin"</span>:
                  <a
                    href="https://www.linkedin.com/in/md-tahsin-ferdous/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="syntax-string hover:text-primary transition-colors underline"
                  >
                    "md-tahsin-ferdous"
                  </a>
                  ,
                </div>
                <div className="ml-4">
                  <span className="syntax-string">"github"</span>:
                  <a
                    href="https://github.com/tahsin005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="syntax-string hover:text-primary transition-colors underline"
                  >
                    "tahsin005"
                  </a>
                  ,
                </div>
                <div className="ml-4">
                  <span className="syntax-string">"medium"</span>:
                  <a
                    href="https://medium.com/@tahsin.ferdous3546"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="syntax-string hover:text-primary transition-colors underline"
                  >
                    "@tahsin.ferdous3546"
                  </a>
                  ,
                </div>
                <div className="ml-4">
                  <span className="syntax-string">"timezone"</span>:
                  <span className="syntax-string">"UTC+6 (Dhaka)"</span>
                </div>
                <div>
                  <span className="text-foreground">{"}"}</span>
                </div>
                <div className="mt-4">
                  <span className="syntax-comment">
                    // Let's build something amazing together!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Form */}
        <div className="mt-12">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 py-6 px-4 rounded-lg shadow-xl bg-muted/5"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold mb-1">
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                value={form.name}
                onChange={handleChange}
                className="px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-semibold mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                // rows="6"
                required
                value={form.message}
                onChange={handleChange}
                className="px-4 py-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-black"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-2 bg-primary text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-primary/90"
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                  >
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
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
      <Toaster position="top-center" />
    </section>
  );
};

export default Contact;
