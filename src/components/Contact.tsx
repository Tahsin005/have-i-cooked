import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Mail, MapPin, Send, Loader2, Linkedin, Github, BookOpen } from "lucide-react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
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
          toast.success("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="section-shell">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="section-label mb-3">// 07 CONTACT</div>
          <h2 className="section-title mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
              <h3 className="text-xl font-bold mb-6">
                Contact <span className="text-primary">Information</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded mr-4">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:tahsin.ferdous3546@gmail.com" className="text-foreground hover:text-primary transition-colors font-medium">
                      tahsin.ferdous3546@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded mr-4">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-foreground font-medium">Dhaka, Bangladesh (UTC+6)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
              <h3 className="text-xl font-bold mb-6">
                Social <span className="text-primary">Links</span>
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/tahsin005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-secondary/50 text-secondary-foreground px-4 py-2 rounded border border-border/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/md-tahsin-ferdous/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-secondary/50 text-secondary-foreground px-4 py-2 rounded border border-border/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://purpleonion.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-secondary/50 text-secondary-foreground px-4 py-2 rounded border border-border/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <BookOpen size={20} />
                  <span>Purple Onion</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden flex flex-col h-full">
            <div className="bg-secondary/50 border-b border-border p-3 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <span className="ml-2 text-xs text-muted-foreground">Send Message</span>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-6 flex-1 flex flex-col">
              <div className="space-y-4 flex-1">
                <div>
                  <label htmlFor="name" className="text-foreground block mb-2 text-sm font-medium">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-background/50 border border-border rounded px-4 py-2 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-foreground block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full bg-background/50 border border-border rounded px-4 py-2 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="flex-1">
                  <label htmlFor="message" className="text-foreground block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className="w-full bg-background/50 border border-border rounded px-4 py-2 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/50 resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground font-bold py-3 rounded flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send className="group-hover:translate-x-1 transition-transform" size={18} />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: 'hsl(var(--card))',
          color: 'hsl(var(--foreground))',
          border: '1px solid hsl(var(--border))',
        }
      }} />
    </section>
  );
};

export default Contact;

