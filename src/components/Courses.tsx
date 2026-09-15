import { useState, useEffect, useRef } from "react";
import {
  CheckCircle2,
  Calendar,
  Award,
  Eye,
  Download,
  ExternalLink,
  Sparkles,
  Youtube,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { TiltCard } from "./TiltCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/hooks/useGSAP";
import SectionHeader from "./SectionHeader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import phitronCertificate from "@/assets/phitron-certificate.pdf";

gsap.registerPlugin(ScrollTrigger);

const Courses = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  const courseData = {
    name: "CS Fundamentals with Phitron",
    institution: "Phitron • Programming Hero",
    period: "Spring 2023",
    batch: "Batch 3",
    status: "Completed",
    learnings: [
      "Data Structures, Algorithms, and Problem Solving",
      "Object-Oriented Programming and Database Management Systems",
      "Python, C/C++, Django, and Software Engineering principles",
    ],
    highlight:
      "Transitioned from foundational learning to Codeforces Pupil and CodeChef 3-Star Coder in 2.5 months of rigorous problem-solving practice.",
  };

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (!gridRef.current) return;

      const cards = gridRef.current.querySelectorAll(".course-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            x: i % 2 === 0 ? -40 : 40,
            y: 30,
            opacity: 0,
            scale: 0.94,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );

        // Learning items stagger
        const items = card.querySelectorAll(".learning-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { x: -20, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-shell relative overflow-hidden border-none" id="courses">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="Courses &"
          titleHighlight="Certifications"
          subtitle="Continuous learning, professional development, and featured milestones."
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >

          <div className="course-card h-full" style={{ opacity: 0 }}>
            <TiltCard className="h-full">
              <div className="glass-card glass-hover p-6 md:p-8 rounded-2xl h-full border border-white/5 relative overflow-hidden group flex flex-col justify-between">
                <div className="relative z-10 space-y-6">

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full border border-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 flex-shrink-0">
                        <Award size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className="font-display text-[11px] font-medium uppercase tracking-[0.15em] text-primary">
                            {courseData.institution}
                          </span>
                          <span className="text-white/30">•</span>
                          <span className="font-display text-[11px] font-medium tracking-wide bg-white/5 text-foreground/80 px-2.5 py-0.5 rounded-full border border-white/10">
                            {courseData.batch}
                          </span>
                        </div>
                        <h3 className="font-display text-[22px] md:text-[24px] font-bold tracking-tight text-foreground">
                          {courseData.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center font-display text-[11px] font-medium tracking-wide text-foreground/80 bg-white/5 px-3.5 py-1.5 rounded-full w-fit border border-white/10 flex-shrink-0 shadow-sm">
                      <Calendar size={13} className="mr-1.5 opacity-70 text-primary" />
                      {courseData.period}
                    </div>
                  </div>


                  <div className="space-y-3 pt-1">
                    <h4 className="font-display text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      Core Curriculum & Competencies
                    </h4>
                    <div className="space-y-3 font-mono text-[13px] leading-[1.6]">
                      {courseData.learnings.map((item, i) => (
                        <div
                          key={i}
                          className="learning-item flex items-start text-foreground/75 group-hover:text-foreground/90 transition-colors duration-300"
                          style={{ opacity: 0 }}
                        >
                          <CheckCircle2
                            size={16}
                            className="text-primary mt-0.5 mr-3 flex-shrink-0"
                          />
                          <span className="font-display text-[14px] leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>


                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-primary/30 transition-colors flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 flex-shrink-0 mt-0.5">
                      <Zap size={15} />
                    </div>
                    <p className="font-mono text-[13px] leading-[1.6] text-foreground/80">
                      <span className="font-display font-semibold text-foreground mr-1.5">
                        Key Milestone:
                      </span>
                      {courseData.highlight}
                    </p>
                  </div>
                </div>


                <div className="relative z-10 pt-6 border-t border-white/5 mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPdfOpen(true)}
                    className="inline-flex items-center gap-2 font-display text-[13px] sm:text-[14px] font-semibold text-primary-foreground bg-primary hover:bg-primary/90 px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_hsl(var(--primary)/0.35)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Eye size={15} />
                    <span>View Certificate</span>
                  </button>

                  <a
                    href={phitronCertificate}
                    download="Mohammad_Tahsin_Ferdous_Phitron_Certificate.pdf"
                    className="inline-flex items-center gap-2 font-display text-[13px] sm:text-[14px] font-medium text-foreground/80 hover:text-foreground bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Download size={14} />
                    <span>Download PDF</span>
                  </a>

                  <div className="ml-auto hidden sm:inline-flex items-center gap-1.5 font-display text-[11px] font-medium tracking-wide bg-emerald-400/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-400/20">
                    <ShieldCheck size={13} />
                    <span>Verified Credential</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>


          <div className="course-card h-full" style={{ opacity: 0 }}>
            <TiltCard className="h-full">
              <div className="glass-card glass-hover p-6 md:p-8 rounded-2xl h-full border border-white/5 relative overflow-hidden group flex flex-col justify-between">
                <div className="relative z-10 space-y-4">

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-3 rounded-full border border-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 flex-shrink-0">
                        <Youtube size={22} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-display text-[11px] font-medium uppercase tracking-[0.15em] text-primary">
                            PhiCast
                          </span>
                          <span className="text-white/30">•</span>
                          <span className="font-display text-[11px] font-medium tracking-wide bg-white/5 text-foreground/80 px-2.5 py-0.5 rounded-full border border-white/10">
                            Episode 09
                          </span>
                        </div>
                        <h3 className="font-display text-[18px] md:text-[20px] font-bold tracking-tight text-foreground">
                          কোডফোর্সে পিউপিল কোডার হওয়া কি সহজ? 🤔
                        </h3>
                      </div>
                    </div>

                    <span className="font-display text-[11px] font-medium uppercase tracking-[0.15em] text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full flex items-center gap-1.5 flex-shrink-0">
                      <Sparkles size={12} />
                      Featured Story
                    </span>
                  </div>


                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 group-hover:border-primary/40 transition-colors">
                    <iframe
                      src="https://www.youtube.com/embed/Vt_WnXsNwOw?si=AR1yPu9ShLBV3wkS"
                      title="PhiCast - Ep.09 featuring Mohammad Tahsin Ferdous"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>


                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[12px] font-display">
                      <span className="text-foreground/40 text-[10px] uppercase tracking-wider font-semibold">
                        Host:
                      </span>
                      <a
                        href="https://www.linkedin.com/in/abdurrakib0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/90 hover:text-primary transition-colors font-medium inline-flex items-center gap-1"
                      >
                        Abdur Rakib (COO, Programming Hero)
                        <ExternalLink size={11} className="opacity-60" />
                      </a>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[12px] font-display">
                      <span className="text-foreground/40 text-[10px] uppercase tracking-wider font-semibold">
                        Guest:
                      </span>
                      <span className="text-foreground/90 font-medium">
                        Mohammad Tahsin Ferdous (Batch 3)
                      </span>
                    </div>
                  </div>


                  <p className="font-mono text-[13px] leading-[1.6] text-muted-foreground group-hover:text-foreground/80 transition-colors line-clamp-3">
                    Featured on Phitron's official podcast sharing the journey from starting with computer science fundamentals to building competitive problem-solving discipline—reaching Codeforces Pupil and CodeChef 3-Star coder in 2.5 months.
                  </p>
                </div>


                <div className="relative z-10 pt-6 border-t border-white/5 mt-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-display text-[11px] font-medium tracking-wide text-foreground/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    PhiCast Podcast Series
                  </span>
                  <a
                    href="https://www.youtube.com/watch?v=Vt_WnXsNwOw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display text-[13px] sm:text-[14px] font-medium text-foreground/80 hover:text-foreground bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 group/yt"
                  >
                    <Youtube size={15} className="text-primary group-hover/yt:scale-110 transition-transform" />
                    <span>Watch on YouTube</span>
                    <ExternalLink
                      size={13}
                      className="opacity-60 group-hover/yt:translate-x-0.5 group-hover/yt:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>


      <Dialog open={isPdfOpen} onOpenChange={setIsPdfOpen}>
        <DialogContent className="max-w-5xl w-[95vw] h-[88vh] flex flex-col p-0 bg-[#0c0a1d]/98 backdrop-blur-2xl border border-white/15 rounded-[24px] shadow-[0_24px_64px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden">

          <div className="px-6 py-4 bg-[#090714]/95 border-b border-white/10 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pr-14">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck size={15} className="text-emerald-400" />
                <span className="text-[11px] font-display uppercase tracking-[0.15em] text-emerald-400 font-semibold">
                  Verified Credential
                </span>
                <span className="text-white/30">•</span>
                <span className="text-[11px] text-foreground/60 font-display">
                  Phitron Batch 3
                </span>
              </div>
              <DialogTitle className="font-display text-[18px] sm:text-[20px] font-bold tracking-tight text-foreground">
                Certificate of Completion — CS Fundamentals
              </DialogTitle>
              <DialogDescription className="text-xs text-foreground/50 font-display mt-0.5">
                Issued to Mohammad Tahsin Ferdous for completing Computer Science Fundamentals.
              </DialogDescription>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={phitronCertificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-foreground/80 hover:text-foreground text-xs font-display border border-white/10 hover:border-white/20 transition-all"
              >
                <ExternalLink size={13} />
                <span>Open in Tab</span>
              </a>
              <a
                href={phitronCertificate}
                download="Mohammad_Tahsin_Ferdous_Phitron_Certificate.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-display font-semibold transition-all shadow-[0_0_15px_rgba(147,51,234,0.3)]"
              >
                <Download size={13} />
                <span>Download</span>
              </a>
            </div>
          </div>


          <div className="flex-1 w-full min-h-0 relative bg-[#070510] p-2 sm:p-4">
            <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] bg-black/70 relative">
              <object
                data={`${phitronCertificate}#toolbar=0&navpanes=0&view=Fit`}
                type="application/pdf"
                className="w-full h-full rounded-xl pointer-events-none"
              >
                <iframe
                  src={`${phitronCertificate}#toolbar=0&navpanes=0&view=Fit`}
                  title="Phitron Certificate Preview"
                  className="w-full h-full rounded-xl border-0 pointer-events-none"
                >
                  <div className="p-8 text-center flex flex-col items-center justify-center h-full gap-4">
                    <p className="text-foreground/70 font-display text-sm">
                      PDF preview is not supported directly in this browser.
                    </p>
                    <a
                      href={phitronCertificate}
                      download="Mohammad_Tahsin_Ferdous_Phitron_Certificate.pdf"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-display text-sm font-semibold"
                    >
                      <Download size={16} />
                      <span>Download Certificate PDF</span>
                    </a>
                  </div>
                </iframe>
              </object>

              <div className="absolute inset-0 z-10 cursor-none" />
            </div>
          </div>


          <div className="px-6 py-3 bg-[#090714]/90 border-t border-white/10 shrink-0 flex flex-wrap items-center justify-between text-xs text-foreground/50 font-display gap-2">
            <span>Course: CS Fundamentals with Phitron</span>
            <div className="flex items-center gap-1.5">
              <span>Having trouble viewing?</span>
              <a
                href={phitronCertificate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Open PDF directly
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Courses;
