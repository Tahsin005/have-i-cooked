import microservicesWithGoPdf from "@/assets/pdfs/1012_Microservices-with-Go.pdf";
import jwtAdvancedPdf from "@/assets/pdfs/JWT-Advanced.pdf";
import sqlInterviewPdf from "@/assets/pdfs/SQL-interview-topics-and-answers.pdf";
import accessRefreshTokenPdf from "@/assets/pdfs/access-refresh-token.pdf";
import apiAuthGuidePdf from "@/assets/pdfs/api-authentication-guide.pdf";
import byteByteGo2024Pdf from "@/assets/pdfs/byte-byte-go-system-design-2024.pdf";
import byteByteGo2025Pdf from "@/assets/pdfs/byte-byte-go-system-design-2025.pdf";
import corsAdvancedPdf from "@/assets/pdfs/cors-advanced-guide.pdf";
import fullstackInterviewPdf from "@/assets/pdfs/fullstack-interview-qna.pdf";
import ostepPdf from "@/assets/pdfs/operating-systems-three-easy-pieces.pdf";
import singletonPatternPdf from "@/assets/pdfs/singleton-pattern.pdf";
import banglaCProgPdf from "@/assets/pdfs/বাংলায়_C_Programming_শিখি_by_Md_Shahriar_Alam.pdf";

export interface NotePdf {
  id: string;
  title: string;
  filename: string;
  url: string;
  category: "System Design" | "Security & Auth" | "Databases & SQL" | "Backend & Go" | "CS Fundamentals" | "Interview Prep" | "Design Patterns" | "Web & Networking";
  tags: string[];
  description: string;
  sizeBytes: number;
  sizeFormatted: string;
  featured?: boolean;
  author?: string;
  readTimeEstimate?: string;
}

export const CATEGORIES = [
  "All",
  "System Design",
  "Security & Auth",
  "Databases & SQL",
  "Backend & Go",
  "CS Fundamentals",
  "Interview Prep",
  "Design Patterns",
  "Web & Networking",
] as const;

export const NOTES_DATA: NotePdf[] = [
  {
    id: "byte-byte-go-2025",
    title: "ByteByteGo: System Design Interview (2025 Edition)",
    filename: "byte-byte-go-system-design-2025.pdf",
    url: byteByteGo2025Pdf,
    category: "System Design",
    tags: ["System Design", "Scalability", "High Availability", "Distributed Systems", "2025"],
    description: "The definitive visual guide to designing massive scale systems: microservice architectures, distributed cache, rate limiting, and real-world case studies.",
    sizeBytes: 216602954,
    sizeFormatted: "206.6 MB",
    featured: true,
    author: "Alex Xu & Sahn Lam",
    readTimeEstimate: "Comprehensive Handbook",
  },
  {
    id: "byte-byte-go-2024",
    title: "ByteByteGo: System Design Interview (2024 Edition)",
    filename: "byte-byte-go-system-design-2024.pdf",
    url: byteByteGo2024Pdf,
    category: "System Design",
    tags: ["System Design", "Architecture", "Cloud Infrastructure", "Distributed Systems"],
    description: "Visual breakdown of core real-world architecture patterns including key-value stores, distributed message queues, and notification systems.",
    sizeBytes: 51559391,
    sizeFormatted: "49.2 MB",
    featured: true,
    author: "Alex Xu",
    readTimeEstimate: "Deep Reference",
  },
  {
    id: "microservices-with-go",
    title: "Building Microservices with Go",
    filename: "1012_Microservices-with-Go.pdf",
    url: microservicesWithGoPdf,
    category: "Backend & Go",
    tags: ["Golang", "Microservices", "REST API", "gRPC", "Docker"],
    description: "Comprehensive guide covering idiomatic Go patterns, microservice boundaries, RPC/REST communication, resiliency, and container deployment.",
    sizeBytes: 4365687,
    sizeFormatted: "4.16 MB",
    featured: true,
    author: "Nic Jackson",
    readTimeEstimate: "Full Textbook",
  },
  {
    id: "ostep",
    title: "Operating Systems: Three Easy Pieces (OSTEP)",
    filename: "operating-systems-three-easy-pieces.pdf",
    url: ostepPdf,
    category: "CS Fundamentals",
    tags: ["Operating Systems", "Virtualization", "Concurrency", "Persistence", "Memory"],
    description: "The acclaimed computer science master textbook exploring CPU/memory virtualization, threads & locks concurrency, and storage persistence.",
    sizeBytes: 5018944,
    sizeFormatted: "4.79 MB",
    featured: true,
    author: "Remzi & Andrea Arpaci-Dusseau",
    readTimeEstimate: "Full Textbook",
  },
  {
    id: "sql-interview",
    title: "SQL Interview Topics & In-Depth Solutions",
    filename: "SQL-interview-topics-and-answers.pdf",
    url: sqlInterviewPdf,
    category: "Databases & SQL",
    tags: ["SQL", "PostgreSQL", "Query Optimization", "Window Functions", "Indexing"],
    description: "Curated collection of high-frequency SQL interview questions, complex joins, subqueries, indexing internals, CTEs, and query optimization techniques.",
    sizeBytes: 2626169,
    sizeFormatted: "2.50 MB",
    featured: true,
    author: "Interview Collective",
    readTimeEstimate: "Study Guide",
  },
  {
    id: "jwt-advanced",
    title: "Advanced JSON Web Tokens (JWT) Architecture",
    filename: "JWT-Advanced.pdf",
    url: jwtAdvancedPdf,
    category: "Security & Auth",
    tags: ["JWT", "Security", "Cryptographic Signing", "Key Rotation", "OAuth2"],
    description: "In-depth technical guide on JWT internals, claim structures, asymmetric signing (RS256 vs HS256), token revocation, and defense against attacks.",
    sizeBytes: 442475,
    sizeFormatted: "432 KB",
    featured: false,
    author: "Security Engineering",
    readTimeEstimate: "Deep-Dive Article",
  },
  {
    id: "access-refresh-token",
    title: "Access & Refresh Token Flow Implementation",
    filename: "access-refresh-token.pdf",
    url: accessRefreshTokenPdf,
    category: "Security & Auth",
    tags: ["Authentication", "Tokens", "Silent Refresh", "Security", "HttpOnly Cookies"],
    description: "Production architectural protocols for dual-token authentication lifecycles, silent refresh mechanisms, token family tracking, and securing SPA web clients.",
    sizeBytes: 194227,
    sizeFormatted: "190 KB",
    featured: false,
    author: "Auth Architecture",
    readTimeEstimate: "Technical Guide",
  },
  {
    id: "api-auth-guide",
    title: "Complete API Authentication & Authorization Guide",
    filename: "api-authentication-guide.pdf",
    url: apiAuthGuidePdf,
    category: "Security & Auth",
    tags: ["API Security", "OAuth 2.0", "RBAC", "API Keys", "Authorization"],
    description: "Comparative architectural handbook covering API keys, Basic Auth, Session Cookies, OAuth 2.0 / OIDC, and fine-grained Role-Based Access Control (RBAC).",
    sizeBytes: 291436,
    sizeFormatted: "285 KB",
    featured: false,
    author: "API Security Guild",
    readTimeEstimate: "Architecture Guide",
  },
  {
    id: "cors-advanced",
    title: "Cross-Origin Resource Sharing (CORS) Masterclass",
    filename: "cors-advanced-guide.pdf",
    url: corsAdvancedPdf,
    category: "Web & Networking",
    tags: ["CORS", "HTTP Headers", "Preflight Options", "Browser Security", "Networking"],
    description: "Deep dive into browser Same-Origin Policy, simple vs preflighted requests, CORS headers (`Access-Control-Allow-*`), credentialed requests, and debugging errors.",
    sizeBytes: 191166,
    sizeFormatted: "187 KB",
    featured: false,
    author: "Web Standards Collective",
    readTimeEstimate: "Masterclass Guide",
  },
  {
    id: "singleton-pattern",
    title: "Singleton Pattern: Implementations & Pitfalls",
    filename: "singleton-pattern.pdf",
    url: singletonPatternPdf,
    category: "Design Patterns",
    tags: ["Design Patterns", "OOP", "Thread Safety", "Concurrency", "Anti-patterns"],
    description: "Technical breakdown of the Singleton design pattern, double-checked locking, thread safety, testing challenges, dependency injection alternatives, and best practices.",
    sizeBytes: 293286,
    sizeFormatted: "286 KB",
    featured: false,
    author: "Software Architecture Notes",
    readTimeEstimate: "Design Review",
  },
  {
    id: "fullstack-interview-qna",
    title: "Full-Stack Software Engineer Interview Q&A",
    filename: "fullstack-interview-qna.pdf",
    url: fullstackInterviewPdf,
    category: "Interview Prep",
    tags: ["Full-Stack", "JavaScript", "React", "Node.js", "System Design", "Q&A"],
    description: "Concise cheat sheet covering common full-stack engineering interview questions across frontend state management, backend async models, databases, and CI/CD.",
    sizeBytes: 97352,
    sizeFormatted: "95 KB",
    featured: false,
    author: "Engineering Interview Prep",
    readTimeEstimate: "Quick Reference",
  },
  {
    id: "bangla-c-programming",
    title: "বাংলায় C Programming শিখি (Learn C in Bengali)",
    filename: "বাংলায়_C_Programming_শিখি_by_Md_Shahriar_Alam.pdf",
    url: banglaCProgPdf,
    category: "CS Fundamentals",
    tags: ["C Programming", "Bangla", "Pointers", "Memory Management", "Algorithms"],
    description: "A comprehensive, beginner-to-advanced programming textbook written in Bengali, covering computer fundamentals, memory pointers, structures, file I/O, and problem-solving.",
    sizeBytes: 9006127,
    sizeFormatted: "8.59 MB",
    featured: true,
    author: "Md. Shahriar Alam",
    readTimeEstimate: "Full Bengali Book",
  },
];
