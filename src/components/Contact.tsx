import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Mail, MapPin, Send, Loader2, Linkedin, Github, BookOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { TiltCard } from "./TiltCard";

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
    <section className="section-shell relative overflow-hidden border-none" id="contact">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="section-label mb-3"></div>
          <h2 className="font-display text-[clamp(40px,8vw,80px)] font-bold tracking-tighter mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">Get In </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary/40">Touch</span>
          </h2>
          <p className="font-display text-[18px] md:text-[22px] text-foreground/70 max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 h-full flex flex-col">
            <ScrollReveal animation="animate-in fade-in slide-in-from-left-8 duration-700" delay="delay-200" className="flex-1">
              <TiltCard className="h-full">
                <div className="glass-card glass-hover p-8 rounded-2xl h-full border border-white/5 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-500 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div style={{ transform: 'translateZ(30px)' }}>
                    <h3 className="text-2xl font-display font-bold mb-8 tracking-wider text-foreground transition-colors">
                      Contact Information
                    </h3>
                    <div className="space-y-8">
                      <div className="flex items-start">
                        <div className="bg-white/5 p-3 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors duration-300 mr-5">
                          <Mail className="text-foreground/80 group-hover:text-foreground" size={24} />
                        </div>
                        <div>
                          <p className="font-display text-[12px] uppercase tracking-wide text-foreground/50 mb-2">Email</p>
                          <a href="mailto:tahsin.ferdous3546@gmail.com" className="font-display text-[14px] md:text-[16px] leading-[1.6] text-foreground/80 hover:text-foreground transition-colors font-medium">
                            tahsin.ferdous3546@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-white/5 p-3 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors duration-300 mr-5">
                          <MapPin className="text-foreground/80 group-hover:text-foreground" size={24} />
                        </div>
                        <div>
                          <p className="font-display text-[12px] uppercase tracking-wide text-foreground/50 mb-2">Location</p>
                          <p className="font-display text-[14px] md:text-[16px] leading-[1.6] text-foreground/80 font-medium transition-colors">Dhaka, Bangladesh (UTC+6)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal animation="animate-in fade-in slide-in-from-left-8 duration-700" delay="delay-400" className="flex-1">
              <TiltCard className="h-full">
                <div className="glass-card glass-hover p-8 rounded-2xl h-full border border-white/5 transition-all duration-500 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div style={{ transform: 'translateZ(30px)' }}>
                    <h3 className="text-2xl font-display font-bold mb-8 tracking-wider text-foreground transition-colors">
                      Social Links
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="https://github.com/tahsin005"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-[13px] tracking-wide font-medium flex items-center gap-3 bg-white/5 text-foreground/80 px-5 py-3 rounded-full border border-white/10 hover:bg-white/10 hover:text-foreground transition-all duration-300 shadow-sm"
                      >
                        <Github size={18} />
                        <span>GitHub</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/md-tahsin-ferdous/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-[13px] tracking-wide font-medium flex items-center gap-3 bg-white/5 text-foreground/80 px-5 py-3 rounded-full border border-white/10 hover:bg-white/10 hover:text-foreground transition-all duration-300 shadow-sm"
                      >
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href="https://purpleonion.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-[13px] tracking-wide font-medium flex items-center gap-3 bg-white/5 text-foreground/80 px-5 py-3 rounded-full border border-white/10 hover:bg-white/10 hover:text-foreground transition-all duration-300 shadow-sm"
                      >
                        <BookOpen size={18} />
                        <span>Blog</span>
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="animate-in fade-in slide-in-from-right-8 duration-1000" className="h-full">
            <TiltCard className="h-full">
              <div className="glass-card glass-hover rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-500 group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <form ref={formRef} onSubmit={handleSubmit} className="p-8 space-y-6 flex-1 flex flex-col relative z-10" style={{ transform: 'translateZ(20px)' }}>
                  <div className="space-y-6 flex-1">
                    <div>
                      <label htmlFor="name" className="text-foreground/70 block mb-2 font-display text-[13px] tracking-wide font-medium">
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
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-display text-sm text-foreground focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 placeholder:text-foreground/30 transition-all shadow-inner"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-foreground/70 block mb-2 font-display text-[13px] tracking-wide font-medium">
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
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-display text-sm text-foreground focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 placeholder:text-foreground/30 transition-all shadow-inner"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label htmlFor="message" className="text-foreground/70 block mb-2 font-display text-[13px] tracking-wide font-medium">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        className="w-full flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-display text-sm text-foreground focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 placeholder:text-foreground/30 resize-none transition-all shadow-inner"
                      ></textarea>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-white/10 text-foreground border border-white/20 font-display font-medium tracking-wide py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group/btn shadow-sm"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : <Send className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" size={18} />}
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: 'hsl(var(--card))',
          color: 'hsl(var(--foreground))',
          border: '1px solid hsl(var(--border))',
          fontFamily: 'monospace'
        }
      }} />
    </section>
  );
};

export default Contact;
