import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Mail, MapPin, Send, Loader2, Linkedin, Github } from "lucide-react";

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
          toast.success("Message transmitted successfully.");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          toast.error("Transmission failed. Please retry.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Mail className="text-primary mr-3" size={32} />
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-primary">./</span>contact_me.sh
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold font-mono mb-6 border-b border-border pb-2">
                System Coordinates
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded mr-4">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-mono mb-1">Electronic Mail</p>
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
                    <p className="text-sm text-muted-foreground font-mono mb-1">Location</p>
                    <p className="text-foreground font-medium">Dhaka, Bangladesh (UTC+6)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold font-mono mb-6 border-b border-border pb-2">
                Connect Uplinks
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/tahsin005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/md-tahsin-ferdous/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://purpleonion.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <BookOpenIcon className="w-5 h-5" />
                  <span>Purple Onion</span>
                </a>
              </div>
            </div>
          </div>

          {/* Terminal Form */}
          <div className="bg-card border border-border rounded-lg shadow-xl overflow-hidden flex flex-col h-full">
            <div className="bg-secondary/50 border-b border-border p-3 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <span className="ml-2 text-xs text-muted-foreground font-mono">send_message.exe</span>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-6 flex-1 flex flex-col">
              <div className="space-y-4 flex-1">
                <div className="font-mono">
                  <label htmlFor="name" className="text-primary block mb-2 text-sm">
                    $ enter_name
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="_"
                    className="w-full bg-background/50 border border-border rounded px-4 py-2 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-mono placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="font-mono">
                  <label htmlFor="email" className="text-primary block mb-2 text-sm">
                    $ enter_email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="_"
                    className="w-full bg-background/50 border border-border rounded px-4 py-2 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-mono placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="font-mono flex-1">
                  <label htmlFor="message" className="text-primary block mb-2 text-sm">
                    $ enter_message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="_"
                    className="w-full bg-background/50 border border-border rounded px-4 py-2 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-mono placeholder:text-muted-foreground/50 resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground font-bold py-3 rounded flex items-center justify-center gap-2 hover:bg-primary/90 transition-all font-mono disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send className="group-hover:translate-x-1 transition-transform" size={18} />}
                {loading ? "TRANSMITTING..." : "EXECUTE_SEND"}
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
          fontFamily: 'monospace',
        }
      }} />
    </section>
  );
};

// Helper for BookOpen icon if needed
import { BookOpen } from "lucide-react";
const BookOpenIcon = ({ className }: { className?: string }) => <BookOpen className={className} />;

export default Contact;
