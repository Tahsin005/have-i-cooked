import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Search,
  Download,
  ExternalLink,
  Eye,
  ArrowLeft,
  Sparkles,
  LayoutGrid,
  List,
  Check,
  Copy,
  BookOpen,
  HardDrive,
  FolderArchive,
  Layers,
  ArrowUpDown,
  X,
} from "lucide-react";
import { NOTES_DATA, CATEGORIES, NotePdf } from "@/data/notesData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import AmbientBackground from "@/components/AmbientBackground";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import tahsinLogo from "@/assets/tahsin-logo.png";

type SortOption = "featured" | "name-asc" | "size-desc" | "size-asc";

const Notes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [previewPdf, setPreviewPdf] = useState<NotePdf | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Engineering Notes & Systems Library | MD. Tahsin Ferdous";
  }, []);

  const handleCopyFilename = (id: string, filename: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(filename);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredNotes = useMemo(() => {
    const result = NOTES_DATA.filter((note) => {
      const matchesCategory =
        selectedCategory === "All" || note.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        note.title.toLowerCase().includes(q) ||
        note.filename.toLowerCase().includes(q) ||
        note.description.toLowerCase().includes(q) ||
        note.category.toLowerCase().includes(q) ||
        note.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        (note.author && note.author.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });

    switch (sortBy) {
      case "name-asc":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "size-desc":
        result.sort((a, b) => b.sizeBytes - a.sizeBytes);
        break;
      case "size-asc":
        result.sort((a, b) => a.sizeBytes - b.sizeBytes);
        break;
      case "featured":
      default:
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: NOTES_DATA.length };
    NOTES_DATA.forEach((note) => {
      counts[note.category] = (counts[note.category] || 0) + 1;
    });
    return counts;
  }, []);

  const totalBytes = useMemo(() => {
    return NOTES_DATA.reduce((acc, note) => acc + note.sizeBytes, 0);
  }, []);

  const totalFormattedSize = useMemo(() => {
    const mb = totalBytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  }, [totalBytes]);

  return (
    <div className="min-h-screen bg-transparent text-foreground relative selection:bg-primary/30 selection:text-white">
      <AmbientBackground />
      <CustomCursor />


      <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-background/80 border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1"
              title="Return to Home Portfolio"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/50 group-hover:scale-105 transition-all">
                <img
                  src={tahsinLogo}
                  alt="MD. Tahsin Ferdous"
                  className="h-6 w-auto object-contain brightness-110"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-display font-semibold text-sm tracking-wide text-foreground group-hover:text-primary transition-colors">
                  Tahsin Ferdous
                </span>
                <span className="text-[11px] font-mono text-muted-foreground">
                  Portfolio / Notes
                </span>
              </div>
            </Link>

            <span className="hidden sm:inline-block text-white/20 font-light">/</span>

            <div className="hidden md:flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono border border-primary/20">
                /notes
              </span>
              <span className="text-xs text-muted-foreground font-display">
                {NOTES_DATA.length} PDFs Available
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium font-display text-muted-foreground hover:text-foreground bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </header>


      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-32 relative z-10">

        <div className="relative mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Technical Archive & Study Notes</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground max-w-3xl leading-[1.15]">
            Engineering Notes &{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Systems Library
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A curated library of technical whitepapers, system design blueprints, backend
            architecture guides, and computer science references served directly from the assets
            repository.
          </p>


          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/5">
            <div className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-display text-foreground">
                  {NOTES_DATA.length}
                </div>
                <div className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
                  Documents
                </div>
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-display text-foreground">
                  {CATEGORIES.length - 1}
                </div>
                <div className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
                  Topics
                </div>
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <HardDrive className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-display text-foreground">
                  {totalFormattedSize}
                </div>
                <div className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
                  Repository Size
                </div>
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <FolderArchive className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-display text-foreground">
                  100% Free
                </div>
                <div className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
                  Read & Download
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">

            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input
                id="notes-search-input"
                type="text"
                placeholder="Search notes by title, topic, tags, or filename..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 focus:border-primary/60 focus:bg-white/[0.06] text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground rounded-full hover:bg-white/10"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>


            <div className="flex items-center gap-2 self-end md:self-auto">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
                <ArrowUpDown className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-muted-foreground hidden sm:inline">Sort:</span>
                <select
                  aria-label="Sort notes"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-transparent text-foreground font-medium focus:outline-none cursor-pointer"
                >
                  <option value="featured" className="bg-[#0f0c20] text-foreground">
                    Featured First
                  </option>
                  <option value="name-asc" className="bg-[#0f0c20] text-foreground">
                    Name (A → Z)
                  </option>
                  <option value="size-desc" className="bg-[#0f0c20] text-foreground">
                    Size (Largest)
                  </option>
                  <option value="size-asc" className="bg-[#0f0c20] text-foreground">
                    Size (Smallest)
                  </option>
                </select>
              </div>


              <div className="flex items-center bg-white/[0.04] border border-white/10 rounded-xl p-0.5">
                <button
                  id="view-mode-grid"
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${viewMode === "grid"
                      ? "bg-primary text-primary-foreground shadow"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                  title="Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  id="view-mode-list"
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${viewMode === "list"
                      ? "bg-primary text-primary-foreground shadow"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                  title="List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>


          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = categoryCounts[cat] || 0;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-display whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${isSelected
                      ? "bg-primary text-primary-foreground font-medium shadow-md shadow-primary/20 scale-105"
                      : "bg-white/[0.04] text-muted-foreground hover:text-foreground hover:bg-white/[0.08] border border-white/5"
                    }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${isSelected
                        ? "bg-white/20 text-white"
                        : "bg-white/5 text-muted-foreground"
                      }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>


        <div className="flex items-center justify-between text-xs text-muted-foreground font-mono mb-6">
          <span>
            Showing {filteredNotes.length} of {NOTES_DATA.length} documents
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>

          {(searchQuery || selectedCategory !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-primary hover:underline font-medium"
            >
              Reset all filters
            </button>
          )}
        </div>


        {filteredNotes.length === 0 ? (
          <div className="text-center py-20 px-4 rounded-2xl glass-card border border-white/5">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-muted-foreground">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">
              No matching PDF documents found
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
              Try adjusting your search terms or selecting a different category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-display font-medium hover:bg-primary/90 transition-colors"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <div
                key={note.id}
                className="group relative glass-card rounded-2xl p-6 border border-white/5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between"
              >
                <div>

                  <div className="flex items-start justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[11px] font-mono border border-primary/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      {note.category}
                    </span>

                    <span className="text-[11px] font-mono text-muted-foreground bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
                      {note.sizeFormatted}
                    </span>
                  </div>


                  <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-2 line-clamp-2">
                    {note.title}
                  </h3>


                  {note.author && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-display">
                      <BookOpen className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                      <span className="truncate">{note.author}</span>
                      {note.readTimeEstimate && (
                        <>
                          <span className="text-white/20">•</span>
                          <span className="text-[11px] font-mono opacity-80">
                            {note.readTimeEstimate}
                          </span>
                        </>
                      )}
                    </div>
                  )}


                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {note.description}
                  </p>


                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {note.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-foreground/70 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                    {note.tags.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-muted-foreground">
                        +{note.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div>

                  <div
                    onClick={(e) => handleCopyFilename(note.id, note.filename, e)}
                    className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 mb-4 text-[11px] font-mono text-foreground/60 hover:text-foreground cursor-pointer hover:border-white/20 transition-all group/fn"
                    title="Click to copy filename"
                  >
                    <span className="truncate pr-2">{note.filename}</span>
                    <button
                      type="button"
                      className="shrink-0 p-1 text-muted-foreground group-hover/fn:text-primary"
                    >
                      {copiedId === note.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>


                  <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                    <button
                      onClick={() => setPreviewPdf(note)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-primary text-primary-foreground font-display text-xs font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/25"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </button>

                    <a
                      href={note.url}
                      download={note.filename}
                      className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-primary/40 text-foreground transition-all"
                      title={`Download ${note.filename} (${note.sizeFormatted})`}
                    >
                      <Download className="w-4 h-4" />
                    </a>

                    <a
                      href={note.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-primary/40 text-foreground transition-all"
                      title="Open PDF in new browser tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="glass-card rounded-2xl border border-white/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02] text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                    <th className="py-3 px-4">Document</th>
                    <th className="py-3 px-4 hidden md:table-cell">Category</th>
                    <th className="py-3 px-4 hidden sm:table-cell">Size</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {filteredNotes.map((note) => (
                    <tr
                      key={note.id}
                      className="hover:bg-white/[0.02] transition-colors group cursor-pointer"
                      onClick={() => setPreviewPdf(note)}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-primary/50 transition-colors">
                            <FileText className="w-4 h-4 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-display font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                              {note.title}
                            </div>
                            <div className="text-xs text-muted-foreground font-mono flex items-center gap-2 mt-0.5 truncate">
                              <span>{note.filename}</span>
                              <span className="sm:hidden text-white/30">•</span>
                              <span className="sm:hidden text-primary/80">
                                {note.sizeFormatted}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-4 hidden md:table-cell">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-primary/10 text-primary border border-primary/20">
                          {note.category}
                        </span>
                      </td>

                      <td className="py-4 px-4 hidden sm:table-cell font-mono text-xs text-muted-foreground">
                        {note.sizeFormatted}
                      </td>

                      <td className="py-4 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="inline-flex items-center gap-1.5 justify-end">
                          <button
                            onClick={() => setPreviewPdf(note)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground text-xs font-display font-medium transition-colors border border-primary/20"
                            title="Preview PDF"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Preview</span>
                          </button>

                          <a
                            href={note.url}
                            download={note.filename}
                            className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-primary/40 text-muted-foreground hover:text-foreground transition-colors"
                            title={`Download ${note.filename}`}
                          >
                            <Download className="w-3.5 h-3.5" />
                          </a>

                          <a
                            href={note.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-primary/40 text-muted-foreground hover:text-foreground transition-colors"
                            title="Open in new tab"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>


      <Dialog open={!!previewPdf} onOpenChange={(open) => !open && setPreviewPdf(null)}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-[#090714] border border-white/10 overflow-hidden flex flex-col rounded-2xl shadow-2xl">
          {previewPdf && (
            <>

              <div className="px-6 py-4 bg-[#090714] border-b border-white/10 flex flex-wrap items-center justify-between gap-4 shrink-0 pr-14">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-primary/10 text-primary border border-primary/20">
                      {previewPdf.category}
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      {previewPdf.sizeFormatted}
                    </span>
                  </div>
                  <DialogTitle className="font-display text-base sm:text-lg font-bold text-foreground truncate max-w-xl">
                    {previewPdf.title}
                  </DialogTitle>
                  <DialogDescription className="text-xs font-mono text-muted-foreground truncate">
                    {previewPdf.filename}
                  </DialogDescription>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={previewPdf.url}
                    download={previewPdf.filename}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-primary text-primary-foreground font-display text-xs font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>

                  <a
                    href={previewPdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-foreground font-display text-xs font-medium transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">New Tab</span>
                  </a>
                </div>
              </div>


              <div className="flex-1 w-full bg-[#05040a] relative overflow-hidden">
                <object
                  data={previewPdf.url}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <iframe
                    src={previewPdf.url}
                    title={previewPdf.title}
                    className="w-full h-full border-0"
                  >
                    <div className="p-8 text-center flex flex-col items-center justify-center h-full text-foreground">
                      <p className="text-base font-display mb-4">
                        Unable to render PDF preview directly in this browser viewport.
                      </p>
                      <div className="flex items-center gap-3">
                        <a
                          href={previewPdf.url}
                          download={previewPdf.filename}
                          className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-display text-xs font-semibold"
                        >
                          Download {previewPdf.filename}
                        </a>
                        <a
                          href={previewPdf.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-white/10 text-foreground font-display text-xs"
                        >
                          Open in New Tab
                        </a>
                      </div>
                    </div>
                  </iframe>
                </object>
              </div>


              <div className="px-6 py-2.5 bg-[#090714] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-muted-foreground shrink-0">
                <span className="truncate">
                  {previewPdf.author ? `Source: ${previewPdf.author}` : "Engineering Archive"}
                </span>
                <span className="hidden sm:inline">Press ESC to close preview</span>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>


      <footer className="pt-12 pb-24 border-t border-white/5 relative z-10 text-center text-xs text-muted-foreground font-display">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p>
            Designed & built by{" "}
            <span className="text-foreground/90 font-medium">MD. Tahsin Ferdous</span>
          </p>
          <p className="text-[11px] font-mono opacity-60">
            PDFs served from <span className="text-primary font-mono">src/assets/pdfs</span> · ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default Notes;
