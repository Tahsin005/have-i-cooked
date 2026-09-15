import { useState, useEffect, useRef } from "react";
import {
  Trophy,
  Star,
  Target,
  Code,
  Medal,
  Zap,
  Eye,
  Download,
  ExternalLink,
  ShieldCheck,
  Award,
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
import racdoxCertificate from "@/assets/RACDOX_Hackathon_Certificate.png";

gsap.registerPlugin(ScrollTrigger);

interface CertificateInfo {
  url: string;
  fileName: string;
  label: string;
  type?: "pdf" | "image";
  credentialBadge?: string;
  postUrl?: string;
  postLabel?: string;
}

interface AchievementItem {
  title: string;
  subtitle?: string;
  icon: JSX.Element;
  certificate?: CertificateInfo;
}

const Achievements = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<AchievementItem | null>(null);

  const achievements: AchievementItem[] = [
    {
      title: "ICPC Dhaka Regional-25 Finalist",
      icon: <Trophy size={24} className="text-yellow-400" />,
      certificate: {
        url: encodeURI("/2026-ICPC Asia Dhaka RC-MEDAL.pdf"),
        fileName: "ICPC_Dhaka_Regional_2025_Certificate.pdf",
        label: "Official ICPC Regional Certificate • 2025",
        type: "pdf",
        credentialBadge: "Official ICPC Credential",
      },
    },
    {
      title: "ICPC Dhaka Regional-24 Finalist",
      icon: <Medal size={24} className="text-yellow-400" />,
      certificate: {
        url: encodeURI("/2025-ICPC Asia Dhaka 2024-HONORABLE.pdf"),
        fileName: "ICPC_Dhaka_Regional_2024_Certificate.pdf",
        label: "Official ICPC Regional Certificate • 2024",
        type: "pdf",
        credentialBadge: "Official ICPC Credential",
      },
    },
    {
      title: "Racdox Hackathon Runner-up",
      subtitle: "Top 10 Finalist • 300+ Candidates",
      icon: <Award size={24} className="text-primary" />,
      certificate: {
        url: racdoxCertificate,
        fileName: "RACDOX_Hackathon_Certificate.png",
        label: "Official Racdox Hackathon 2024 Certificate",
        type: "image",
        credentialBadge: "Hackathon Top 10",
        postUrl: "https://www.facebook.com/photo/?fbid=1532180672267976&set=pb.100064281720173.-2207520000",
        postLabel: "Official Post",
      },
    },
    {
      title: "2000+ problem solved",
      icon: <Target size={24} className="text-primary" />,
    },
    {
      title: "Problem Setter for Intra-University Programming Contest",
      icon: <Code size={24} className="text-accent-2" />,
    },
    {
      title: "Pupil rank at Codeforces",
      icon: <Star size={24} className="text-blue-400" />,
    },
    {
      title: "3 Star at Codechef",
      icon: <Zap size={24} className="text-orange-500" />,
    },
  ];

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (!gridRef.current) return;

      const cards = gridRef.current.querySelectorAll(".achievement-card");

      // Cards burst in with elastic scale in a wave
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            scale: 0,
            opacity: 0,
            y: 40,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.08,
            ease: "elastic.out(1, 0.6)",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Icons bounce after cards appear
      const icons = gridRef.current.querySelectorAll(".achievement-icon");
      icons.forEach((icon, i) => {
        gsap.fromTo(
          icon,
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            delay: 0.3 + i * 0.08,
            ease: "back.out(3)",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-shell relative overflow-hidden border-none" id="achievements">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="Achievements"
          subtitle="Milestones and accomplishments in competitive programming & hackathons."
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`achievement-card h-full ${index === 6 ? "md:col-span-2 lg:col-span-3 max-w-md mx-auto w-full" : ""
                }`}
              style={{ opacity: 0 }}
            >
              <TiltCard className="h-full">
                <div
                  onClick={() => {
                    if (achievement.certificate) {
                      setSelectedCert(achievement);
                    }
                  }}
                  className={`glass-card glass-hover p-6 rounded-2xl flex flex-col items-center justify-center text-center group h-full transition-all duration-500 min-h-[170px] relative overflow-hidden ${achievement.certificate ? "cursor-pointer" : ""
                    }`}
                >
                  <div
                    className="achievement-icon bg-white/5 p-4 rounded-full mb-3 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 z-10"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {achievement.icon}
                  </div>
                  <span
                    className="font-display text-[16px] font-medium tracking-wide text-foreground/70 group-hover:text-foreground transition-colors z-10"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    {achievement.title}
                  </span>

                  {achievement.subtitle && (
                    <span
                      className="font-display text-[12px] text-foreground/50 tracking-wide mt-1 z-10"
                      style={{ transform: "translateZ(25px)" }}
                    >
                      {achievement.subtitle}
                    </span>
                  )}

                  {achievement.certificate && (
                    <span
                      className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 group-hover:bg-primary/20 text-foreground/70 group-hover:text-foreground text-[11px] font-display font-medium border border-white/10 group-hover:border-primary/40 transition-all duration-300 z-10 shadow-sm"
                      style={{ transform: "translateZ(25px)" }}
                    >
                      <Eye size={12} className="text-primary group-hover:scale-110 transition-transform" />
                      <span>View Certificate</span>
                    </span>
                  )}
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>


      <Dialog
        open={!!selectedCert}
        onOpenChange={(open) => !open && setSelectedCert(null)}
      >
        <DialogContent className="max-w-5xl w-[95vw] h-[88vh] flex flex-col p-0 bg-[#0c0a1d]/98 backdrop-blur-2xl border border-white/15 rounded-[24px] shadow-[0_24px_64px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden">
          {selectedCert?.certificate && (
            <>

              <div className="px-6 py-4 bg-[#090714]/95 border-b border-white/10 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pr-14">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck size={15} className="text-primary" />
                    <span className="text-[11px] font-display uppercase tracking-[0.15em] text-primary font-semibold">
                      {selectedCert.certificate.credentialBadge || "Verified Credential"}
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="text-[11px] text-foreground/60 font-display">
                      Mohammad Tahsin Ferdous
                    </span>
                  </div>
                  <DialogTitle className="font-display text-[18px] sm:text-[20px] font-bold tracking-tight text-foreground">
                    {selectedCert.title}
                  </DialogTitle>
                  <DialogDescription className="text-xs text-foreground/50 font-display mt-0.5">
                    {selectedCert.subtitle ? `${selectedCert.subtitle} • ` : ""}Official achievement certificate.
                  </DialogDescription>
                </div>

                <div className="flex items-center gap-2 shrink-0 flex-wrap">
                  {selectedCert.certificate.postUrl && (
                    <a
                      href={selectedCert.certificate.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-foreground/80 hover:text-foreground text-xs font-display border border-white/10 hover:border-white/20 transition-all"
                    >
                      <ExternalLink size={13} />
                      <span>{selectedCert.certificate.postLabel || "Official Post"}</span>
                    </a>
                  )}
                  <a
                    href={selectedCert.certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-foreground/80 hover:text-foreground text-xs font-display border border-white/10 hover:border-white/20 transition-all"
                  >
                    <ExternalLink size={13} />
                    <span>Open in Tab</span>
                  </a>
                  <a
                    href={selectedCert.certificate.url}
                    download={selectedCert.certificate.fileName}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-display font-semibold transition-all shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                  >
                    <Download size={13} />
                    <span>Download</span>
                  </a>
                </div>
              </div>


              <div className="flex-1 w-full min-h-0 relative bg-[#070510] p-2 sm:p-4">
                <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] bg-black/70 flex items-center justify-center relative">
                  {selectedCert.certificate.type === "image" ? (
                    <div className="w-full h-full flex items-center justify-center p-2 sm:p-4 overflow-auto">
                      <img
                        src={selectedCert.certificate.url}
                        alt={selectedCert.title}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                      />
                    </div>
                  ) : (
                    <>
                      <object
                        data={`${selectedCert.certificate.url}#toolbar=0&navpanes=0&view=Fit`}
                        type="application/pdf"
                        className="w-full h-full rounded-xl pointer-events-none"
                      >
                        <iframe
                          src={`${selectedCert.certificate.url}#toolbar=0&navpanes=0&view=Fit`}
                          title={selectedCert.title}
                          className="w-full h-full rounded-xl border-0 pointer-events-none"
                        >
                          <div className="p-8 text-center flex flex-col items-center justify-center h-full gap-4">
                            <p className="text-foreground/70 font-display text-sm">
                              PDF preview is not supported directly in this browser.
                            </p>
                            <a
                              href={selectedCert.certificate.url}
                              download={selectedCert.certificate.fileName}
                              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-display text-sm font-semibold"
                            >
                              <Download size={16} />
                              <span>Download Certificate PDF</span>
                            </a>
                          </div>
                        </iframe>
                      </object>

                      <div className="absolute inset-0 z-10 cursor-none" />
                    </>
                  )}
                </div>
              </div>


              <div className="px-6 py-3 bg-[#090714]/90 border-t border-white/10 shrink-0 flex flex-wrap items-center justify-between text-xs text-foreground/50 font-display gap-2">
                <span>{selectedCert.certificate.label}</span>
                <div className="flex items-center gap-2">
                  {selectedCert.certificate.postUrl && (
                    <a
                      href={selectedCert.certificate.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      View Facebook post →
                    </a>
                  )}
                  <span>Having trouble viewing?</span>
                  <a
                    href={selectedCert.certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Open directly
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Achievements;
