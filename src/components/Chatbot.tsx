import { useState, useRef, useEffect, useCallback } from "react";
import { MessageSquare, X, Sparkles, ChevronDown, RotateCcw } from "lucide-react";

// ─── Q&A Knowledge Base ─────────────────────────────────────────────────────
interface QA {
  id: string;
  question: string;
  answer: string;
  category: string;
  followUps?: string[]; // IDs of suggested follow-up questions
}

const QA_MAP: Record<string, QA> = {
  // ── about ──────────────────────────────────────────────────────────────────
  about_yourself: {
    id: "about_yourself",
    question: "Tell me about yourself",
    answer:
      "I'm **MD. Tahsin Ferdous**, a Full Stack Developer from Bangladesh 🇧🇩. I specialize in backend development with **Python, Django & DRF**, while also building modern frontends using **React.js & Next.js**. I've shipped production-grade SaaS apps, payment systems, workflow automation tools, and microservices.",
    category: "About",
    followUps: ["about_dev_type", "about_stack", "exp_affpilot"],
  },
  about_dev_type: {
    id: "about_dev_type",
    question: "What kind of developer are you?",
    answer:
      "I'm a **Full Stack Developer** with a strong **backend focus**. I love designing scalable APIs, backend architecture, async systems, and distributed applications — while staying comfortable building polished React frontends.",
    category: "About",
    followUps: ["about_stack", "backend_django", "career_role"],
  },
  about_stack: {
    id: "about_stack",
    question: "What technologies do you use?",
    answer:
      "My core stack includes:\n\n🐍 **Python** · Django · DRF\n⚛️ **React.js** · Next.js\n🟢 **Node.js** · Express.js\n🗄️ **PostgreSQL** · MongoDB · Redis\n🐇 **RabbitMQ** · Docker · Git\n\nI've also worked with Golang, gRPC, Stripe, Shopify APIs, and various third-party integrations.",
    category: "About",
    followUps: ["backend_django", "db_which", "api_third_party"],
  },

  // ── experience ──────────────────────────────────────────────────────────────
  exp_affpilot: {
    id: "exp_affpilot",
    question: "Tell me about AffPilot",
    answer:
      "At **AffPilot** I worked as a **Junior Software Engineer**, helping build and scale SaaS products for **1,000+ active users**. My work included backend dev, CMS features, payment integrations, workflow automation via RabbitMQ, security improvements (reCAPTCHA, rate limiting), Dockerization, and full-stack collaboration.",
    category: "Experience",
    followUps: ["exp_contribution", "exp_challenges", "payments_gateways"],
  },
  exp_contribution: {
    id: "exp_contribution",
    question: "Biggest contribution at AffPilot?",
    answer:
      "My biggest contribution was building **workflow automation** using **RabbitMQ-powered background processing**, dramatically reducing manual operations. I also designed a **centralized payment system** shared across multiple SaaS products.",
    category: "Experience",
    followUps: ["backend_rabbitmq", "payments_gateways", "exp_challenges"],
  },
  exp_challenges: {
    id: "exp_challenges",
    question: "What challenges did you solve?",
    answer:
      "Key challenges I tackled:\n\n⚡ Processing long-running tasks **asynchronously**\n💳 Integrating **multiple payment gateways**\n🔗 Managing third-party publishing APIs\n🔒 Improving **application security**\n📐 Designing scalable backend architecture",
    category: "Experience",
    followUps: ["backend_rabbitmq", "payments_security", "api_third_party"],
  },

  // ── projects ────────────────────────────────────────────────────────────────
  proj_proud: {
    id: "proj_proud",
    question: "Most proud project?",
    answer:
      "The **AffPilot SaaS platform** 🏆. It's where backend engineering, payment systems, third-party integrations, workflow automation, and production deployment all came together in one large-scale product serving real users.",
    category: "Projects",
    followUps: ["exp_affpilot", "proj_northwind", "proj_microservices"],
  },
  proj_northwind: {
    id: "proj_northwind",
    question: "Tell me about Northwind",
    answer:
      "**Northwind** is a full-stack e-commerce platform built with **React, Node.js & PostgreSQL**. It features:\n\n🔐 Role-based authentication\n💬 Live support via **Stream Chat & Video**\n💳 Secure payments with **Polar**\n🖼️ Image management via **ImageKit**\n🐛 Production monitoring with **Sentry**",
    category: "Projects",
    followUps: ["proj_microservices", "payments_gateways", "about_stack"],
  },
  proj_microservices: {
    id: "proj_microservices",
    question: "Tell me about your microservices project",
    answer:
      "A backend-only e-commerce platform built as **Node.js microservices**. Each service handles a separate responsibility — users, products, carts, orders, payments. Services communicate via **gRPC & RabbitMQ**, with **Redis** for caching.",
    category: "Projects",
    followUps: ["proj_why_microservices", "backend_rabbitmq", "backend_redis"],
  },
  proj_why_microservices: {
    id: "proj_why_microservices",
    question: "Why build microservices?",
    answer:
      "I wanted **hands-on experience with distributed systems**. Building it taught me service boundaries, API gateways, async messaging, caching, and inter-service communication — all critical skills for large-scale engineering.",
    category: "Projects",
    followUps: ["backend_rabbitmq", "backend_redis", "learn_currently"],
  },

  // ── backend ─────────────────────────────────────────────────────────────────
  backend_django: {
    id: "backend_django",
    question: "Why do you prefer Django?",
    answer:
      "Django lets me build **secure, scalable apps quickly** 🚀. Django REST Framework provides excellent tools for APIs while keeping the code organized and maintainable. The batteries-included philosophy saves enormous development time.",
    category: "Backend",
    followUps: ["backend_node", "api_rest", "about_stack"],
  },
  backend_node: {
    id: "backend_node",
    question: "When would you choose Node.js?",
    answer:
      "I'd choose **Node.js** when:\n\n✅ JavaScript is already used across the stack\n✅ Building lightweight microservices\n✅ Real-time applications are needed\n\nBut **Django** remains my go-to for feature-rich backend systems.",
    category: "Backend",
    followUps: ["backend_django", "proj_microservices", "about_stack"],
  },
  backend_rabbitmq: {
    id: "backend_rabbitmq",
    question: "Why use RabbitMQ?",
    answer:
      "**RabbitMQ** allows time-consuming tasks to run **asynchronously** instead of blocking user requests. This dramatically improves application responsiveness and horizontal scalability.",
    category: "Backend",
    followUps: ["backend_redis", "backend_docker", "exp_contribution"],
  },
  backend_redis: {
    id: "backend_redis",
    question: "Why Redis?",
    answer:
      "**Redis** is excellent for:\n\n⚡ Caching frequently accessed data\n📉 Reducing database load\n🔑 Storing sessions\n⚙️ Supporting background task systems\n\nIt's an essential tool in any high-performance backend stack.",
    category: "Backend",
    followUps: ["db_which", "backend_rabbitmq", "backend_docker"],
  },
  backend_docker: {
    id: "backend_docker",
    question: "Have you worked with Docker?",
    answer:
      "Yes! I've **containerized applications and services** using Docker to simplify deployment and ensure consistent environments across development and production.",
    category: "Backend",
    followUps: ["backend_rabbitmq", "exp_affpilot", "learn_currently"],
  },

  // ── payments ────────────────────────────────────────────────────────────────
  payments_gateways: {
    id: "payments_gateways",
    question: "Which payment gateways?",
    answer:
      "I've integrated:\n\n💳 **Stripe** — for international payments\n🇧🇩 **SSLCOMMERZ** — for local Bangladeshi payments\n\nBoth with secure webhook handling and idempotent transaction processing.",
    category: "Payments",
    followUps: ["payments_security", "api_third_party", "exp_contribution"],
  },
  payments_security: {
    id: "payments_security",
    question: "How do you handle payment security?",
    answer:
      "I've implemented **secure payment flows**, webhook handling, and **idempotent payment processing** to avoid duplicate transactions — critical for any production-grade payment system.",
    category: "Payments",
    followUps: ["payments_gateways", "exp_challenges", "api_rest"],
  },

  // ── apis ────────────────────────────────────────────────────────────────────
  api_third_party: {
    id: "api_third_party",
    question: "Third-party API experience?",
    answer:
      "Yes! I've integrated:\n\n🛍️ **Shopify** · WordPress · Blogger\n💳 Stripe · SSLCOMMERZ\n📡 Stream SDK · ImageKit · Polar\n🤖 Google reCAPTCHA\n\nAnd more across different projects.",
    category: "APIs",
    followUps: ["api_rest", "payments_gateways", "about_stack"],
  },
  api_rest: {
    id: "api_rest",
    question: "Do you design REST APIs?",
    answer:
      "Absolutely — designing **clean, maintainable REST APIs** is one of my strongest skills. I focus on:\n\n🔐 Authentication · Validation\n❌ Error handling · Pagination\n🔍 Filtering · Proper HTTP status codes",
    category: "APIs",
    followUps: ["backend_django", "db_which", "api_third_party"],
  },

  // ── databases ───────────────────────────────────────────────────────────────
  db_which: {
    id: "db_which",
    question: "Which databases do you use?",
    answer:
      "Primarily **PostgreSQL** and **MongoDB**. I also use **Redis** for caching. I choose based on the use case — PostgreSQL for relational structured data, MongoDB for flexible schemas.",
    category: "Databases",
    followUps: ["backend_redis", "api_rest", "about_stack"],
  },

  // ── competitive programming ─────────────────────────────────────────────────
  cp_achievements: {
    id: "cp_achievements",
    question: "Competitive programming achievements?",
    answer:
      "🏆 **Codeforces Pupil**\n⭐ **3-Star CodeChef** programmer\n🎓 **Two-time ICPC Dhaka Regional Onsite Contestant**\n\nCompetitive programming sharpened my problem-solving and ability to write efficient code under time pressure.",
    category: "Competitive Programming",
    followUps: ["cp_how_helped", "work_debug", "career_strength"],
  },
  cp_how_helped: {
    id: "cp_how_helped",
    question: "How did CP help you as an engineer?",
    answer:
      "It improved my **problem-solving skills**, algorithmic thinking, debugging ability, and writing **efficient code under time constraints** — all of which directly translate to better real-world engineering.",
    category: "Competitive Programming",
    followUps: ["cp_achievements", "work_debug", "career_strength"],
  },

  // ── learning ────────────────────────────────────────────────────────────────
  learn_currently: {
    id: "learn_currently",
    question: "What are you currently learning?",
    answer:
      "I'm continuously improving my **backend architecture skills** while learning more about:\n\n☁️ **Cloud deployment** (AWS/GCP)\n🛠️ **DevOps** practices\n📐 Scalable software design patterns\n🌐 Distributed systems at scale",
    category: "Learning",
    followUps: ["learn_how", "backend_docker", "career_5years"],
  },
  learn_how: {
    id: "learn_how",
    question: "How do you learn new technologies?",
    answer:
      "My learning approach:\n\n📖 **Official documentation** first\n🔬 **Build small projects** to experiment\n🚀 **Apply in real-world** larger applications\n\nHands-on building is always the most effective teacher.",
    category: "Learning",
    followUps: ["learn_currently", "proj_microservices", "career_5years"],
  },

  // ── working style ───────────────────────────────────────────────────────────
  work_team: {
    id: "work_team",
    question: "Do you enjoy teamwork?",
    answer:
      "Absolutely! I enjoy **collaborating with teammates**, discussing ideas, reviewing code, and solving challenging problems together. Great software is always a team effort.",
    category: "Working Style",
    followUps: ["work_debug", "work_clean_code", "career_role"],
  },
  work_debug: {
    id: "work_debug",
    question: "How do you debug hard problems?",
    answer:
      "My debugging process:\n\n1️⃣ **Reproduce** the issue reliably\n2️⃣ **Isolate** the root cause\n3️⃣ **Inspect logs** and system state\n4️⃣ **Test assumptions** systematically\n5️⃣ **Verify the fix** before deployment",
    category: "Working Style",
    followUps: ["work_clean_code", "cp_how_helped", "work_team"],
  },
  work_clean_code: {
    id: "work_clean_code",
    question: "How do you write maintainable code?",
    answer:
      "I keep code **modular**, follow consistent **naming conventions**, separate concerns, write reusable components, and always **prioritize readability** over cleverness. Code is read far more often than written.",
    category: "Working Style",
    followUps: ["work_debug", "api_rest", "career_hire"],
  },

  // ── career ──────────────────────────────────────────────────────────────────
  career_role: {
    id: "career_role",
    question: "What role are you looking for?",
    answer:
      "I'm looking for a **Full Stack or Backend Software Engineer** role where I can:\n\n📈 Work on **scalable products**\n🎓 Learn from experienced engineers\n🌟 Contribute to **meaningful software**\n\nI thrive in environments that value engineering excellence.",
    category: "Career",
    followUps: ["career_hire", "career_5years", "about_yourself"],
  },
  career_hire: {
    id: "career_hire",
    question: "Why should I hire you?",
    answer:
      "I bring:\n\n🔧 **Strong backend engineering** with full-stack capability\n🏭 Production **SaaS development** experience\n🧠 **Competitive programming** problem-solving mindset\n📚 A genuine passion for **continuously learning**\n\nI don't just write code — I engineer solutions.",
    category: "Career",
    followUps: ["career_strength", "exp_affpilot", "career_5years"],
  },
  career_5years: {
    id: "career_5years",
    question: "Where do you see yourself in 5 years?",
    answer:
      "I aim to become a **Senior Backend Engineer or Software Architect** 🎯, designing scalable systems, mentoring developers, and contributing to impactful products that solve real problems at scale.",
    category: "Career",
    followUps: ["learn_currently", "career_role", "career_strength"],
  },
  career_strength: {
    id: "career_strength",
    question: "What's your biggest strength?",
    answer:
      "**Learning quickly and solving complex problems** 🧠. I genuinely enjoy understanding how systems work and continuously improving both my technical and software design skills. Curiosity is my superpower.",
    category: "Career",
    followUps: ["cp_achievements", "career_hire", "work_debug"],
  },

  // ── personal ────────────────────────────────────────────────────────────────
  personal_lang: {
    id: "personal_lang",
    question: "Favorite programming language?",
    answer:
      "**Python** 🐍. It's expressive, productive, and has an excellent ecosystem for backend development. The readability makes it a joy to work with, and the ecosystem is unmatched.",
    category: "Personal",
    followUps: ["backend_django", "about_stack", "personal_back_vs_front"],
  },
  personal_back_vs_front: {
    id: "personal_back_vs_front",
    question: "Backend or Frontend?",
    answer:
      "**Backend** ❤️. I love designing systems, APIs, databases, and solving architectural challenges. But I'm comfortable building modern React frontends too — being full-stack gives me the full picture.",
    category: "Personal",
    followUps: ["backend_django", "about_stack", "career_role"],
  },
};

const TOPICS: { label: string; emoji: string; questionIds: string[] }[] = [
  {
    label: "About Me",
    emoji: "👋",
    questionIds: ["about_yourself", "about_dev_type", "about_stack"],
  },
  {
    label: "Experience",
    emoji: "💼",
    questionIds: ["exp_affpilot", "exp_contribution", "exp_challenges"],
  },
  {
    label: "Projects",
    emoji: "🚀",
    questionIds: ["proj_proud", "proj_northwind", "proj_microservices"],
  },
  {
    label: "Backend & Tools",
    emoji: "🛠️",
    questionIds: ["backend_django", "backend_rabbitmq", "backend_redis", "backend_docker"],
  },
  {
    label: "APIs & Payments",
    emoji: "💳",
    questionIds: ["payments_gateways", "payments_security", "api_third_party", "api_rest"],
  },
  {
    label: "Databases",
    emoji: "🗄️",
    questionIds: ["db_which"],
  },
  {
    label: "Competitive Programming",
    emoji: "🏆",
    questionIds: ["cp_achievements", "cp_how_helped"],
  },
  {
    label: "Career & Goals",
    emoji: "🎯",
    questionIds: ["career_hire", "career_role", "career_5years", "career_strength"],
  },
  {
    label: "Working Style",
    emoji: "🤝",
    questionIds: ["work_team", "work_debug", "work_clean_code"],
  },
  {
    label: "Personal",
    emoji: "🎲",
    questionIds: ["personal_lang", "personal_back_vs_front", "learn_currently"],
  },
];

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
}

type ViewState =
  | { type: "topics" }
  | { type: "questions"; topicIndex: number }
  | { type: "followups"; questionId: string };

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n\n/g, "<br/><br/>")
    .replace(/\n/g, "<br/>");
}

function BotAvatar() {
  return (
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 mt-0.5"
      style={{ background: "linear-gradient(135deg, hsl(272,80%,55%), hsl(258,90%,70%))" }}
    >
      T
    </div>
  );
}

function ChatMessage({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  return (
    <div className={`flex gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {!isUser && <BotAvatar />}
      <div
        className={`max-w-[78%] px-3 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
          isUser ? "rounded-tr-sm text-white" : "rounded-tl-sm text-white/85"
        }`}
        style={
          isUser
            ? {
                background: "linear-gradient(135deg, hsl(272,80%,45%), hsl(258,90%,58%))",
                boxShadow: "0 2px 12px hsl(272 80% 55% / 0.3)",
              }
            : {
                background: "hsl(246 45% 14% / 0.8)",
                border: "1px solid hsl(255 30% 30% / 0.4)",
              }
        }
        dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.text) }}
      />
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-2 items-end">
      <BotAvatar />
      <div
        className="px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1"
        style={{
          background: "hsl(246 45% 14% / 0.8)",
          border: "1px solid hsl(255 30% 30% / 0.4)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block animate-bounce"
            style={{ animationDelay: `${i * 150}ms`, animationDuration: "0.8s" }}
          />
        ))}
      </div>
    </div>
  );
}

function OptionButton({
  label,
  onClick,
  emoji,
}: {
  label: string;
  onClick: () => void;
  emoji?: string;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left text-[12.5px] px-3 py-2 rounded-xl flex items-center gap-2
        text-purple-200/80 border transition-all duration-200
        hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 active:scale-[0.98]"
      style={{
        borderColor: "hsl(272 80% 55% / 0.25)",
        background: "hsl(272 80% 55% / 0.05)",
      }}
    >
      {emoji && <span className="text-base leading-none shrink-0">{emoji}</span>}
      <span className="leading-tight">{label}</span>
    </button>
  );
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "bot",
      text: "Hey! 👋 I'm **TahBot** — Tahsin's assistant.\n\nPick a topic below to learn about his skills, experience, or projects!",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [view, setView] = useState<ViewState>({ type: "topics" });
  const [hasNotification, setHasNotification] = useState(true);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen, scrollToBottom]);

  useEffect(() => {
    if (isOpen) setHasNotification(false);
  }, [isOpen]);

  const handleSelectQuestion = useCallback((qa: QA) => {
    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      text: qa.question,
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    setView({ type: "topics" }); // hide options while typing

    setTimeout(() => {
      const botMsg: Message = {
        id: `b-${Date.now()}`,
        role: "bot",
        text: qa.answer,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      if (qa.followUps && qa.followUps.length > 0) {
        setView({ type: "followups", questionId: qa.id });
      } else {
        setView({ type: "topics" });
      }
    }, 600 + Math.random() * 500);
  }, []);

  const handleReset = () => {
    setMessages([
      {
        id: "reset",
        role: "bot",
        text: "Back to the start! 🔄 Pick a topic below.",
      },
    ]);
    setView({ type: "topics" });
  };

  const renderActionPanel = () => {
    if (isTyping) return null;

    if (view.type === "topics") {
      return (
        <div className="space-y-2">
          <p className="text-[10.5px] text-white/30 font-medium tracking-wider uppercase px-0.5">
            Choose a topic
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {TOPICS.map((topic, i) => (
              <OptionButton
                key={i}
                label={topic.label}
                emoji={topic.emoji}
                onClick={() => setView({ type: "questions", topicIndex: i })}
              />
            ))}
          </div>
        </div>
      );
    }

    if (view.type === "questions") {
      const topic = TOPICS[view.topicIndex];
      return (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[10.5px] text-white/30 font-medium tracking-wider uppercase px-0.5">
              {topic.emoji} {topic.label}
            </p>
            <button
              onClick={() => setView({ type: "topics" })}
              className="text-[10.5px] text-purple-400/60 hover:text-purple-300 transition-colors"
            >
              ← All topics
            </button>
          </div>
          <div className="flex flex-col gap-1.5">
            {topic.questionIds.map((qid) => {
              const qa = QA_MAP[qid];
              if (!qa) return null;
              return (
                <OptionButton
                  key={qid}
                  label={qa.question}
                  onClick={() => handleSelectQuestion(qa)}
                />
              );
            })}
          </div>
        </div>
      );
    }

    if (view.type === "followups") {
      const currentQA = QA_MAP[view.questionId];
      const followUpQAs = (currentQA?.followUps ?? [])
        .map((id) => QA_MAP[id])
        .filter(Boolean) as QA[];

      return (
        <div className="space-y-2">
          <p className="text-[10.5px] text-white/30 font-medium tracking-wider uppercase px-0.5">
            You might also ask…
          </p>
          <div className="flex flex-col gap-1.5">
            {followUpQAs.map((qa) => (
              <OptionButton
                key={qa.id}
                label={qa.question}
                onClick={() => handleSelectQuestion(qa)}
              />
            ))}
          </div>
          <button
            onClick={() => setView({ type: "topics" })}
            className="w-full text-[11px] text-white/25 hover:text-white/50 transition-colors py-1 flex items-center justify-center gap-1"
          >
            <RotateCcw className="w-3 h-3" /> Browse all topics
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <button
        id="chatbot-toggle"
        onClick={() => setIsOpen((o) => !o)}
        aria-label="Open chatbot"
        className={`
          fixed bottom-6 right-6 z-[200]
          w-14 h-14 rounded-full
          flex items-center justify-center
          transition-all duration-300 ease-out
          ${isOpen ? "scale-90 rotate-12" : "scale-100 rotate-0 hover:scale-110"}
          shadow-[0_8px_32px_hsl(272_80%_55%/0.5)]
        `}
        style={{
          background: "linear-gradient(135deg, hsl(272,80%,55%), hsl(258,90%,70%))",
        }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" strokeWidth={2.5} />
        ) : (
          <MessageSquare className="w-6 h-6 text-white" strokeWidth={2.5} />
        )}
        {hasNotification && !isOpen && (
          <>
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-background animate-ping" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-background" />
          </>
        )}
      </button>

      <div
        className={`
          fixed bottom-24 right-6 z-[199]
          w-[360px] sm:w-[400px]
          flex flex-col
          rounded-2xl overflow-hidden
          transition-all duration-300 ease-out
          ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-6 scale-95 pointer-events-none"
          }
        `}
        style={{
          maxHeight: "580px",
          background: "hsl(248 50% 8% / 0.95)",
          backdropFilter: "blur(60px)",
          border: "1px solid hsl(255 30% 30% / 0.6)",
          boxShadow:
            "inset 0 1.5px 1px rgba(255,255,255,0.12), 0 24px 64px rgba(0,0,0,0.65), 0 0 0 1px hsl(272 80% 55% / 0.15)",
        }}
      >
        <div
          className="flex items-center gap-3 px-4 py-3 border-b shrink-0"
          style={{
            background: "linear-gradient(135deg, hsl(272,80%,15%), hsl(258,70%,12%))",
            borderBottomColor: "hsl(255 30% 30% / 0.4)",
          }}
        >
          <div className="relative">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "linear-gradient(135deg, hsl(272,80%,55%), hsl(258,90%,70%))" }}
            >
              T
            </div>
            <span
              className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2"
              style={{ borderColor: "hsl(272,80%,15%)" }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-white/90 leading-tight">TahBot</p>
            <p className="text-[11px] text-white/40 leading-tight flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-purple-400" />
              Tahsin's assistant · Always online
            </p>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={handleReset}
              title="Restart"
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/10 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/10 transition-colors"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="overflow-y-auto px-4 py-3 space-y-3"
          style={{ maxHeight: "240px", minHeight: "100px" }}
          id="chatbot-messages"
        >
          {messages.map((msg) => (
            <ChatMessage key={msg.id} msg={msg} />
          ))}
          {isTyping && <TypingIndicator />}
        </div>

        {!isTyping && (
          <div
            className="px-4 py-3 overflow-y-auto"
            style={{
              borderTop: "1px solid hsl(255 30% 30% / 0.25)",
              maxHeight: "260px",
            }}
          >
            {renderActionPanel()}
          </div>
        )}
      </div>
    </>
  );
};

export default Chatbot;
