import { useState } from "react";

const socials = [
  {
    social: "email",
    un: "tahsin.ferdous3546@gmail.com",
    href: "mailto:tahsin.ferdous3546@gmail.com",
  },
  {
    social: "whatsapp",
    un: "+8801795368447",
    href: "https://wa.me/8801795368447",
  },
  {
    social: "github",
    un: "tahsin005",
    href: "https://www.github.com/tahsin005/",
  },
  {
    social: "linkedin",
    un: "md-tahsin-ferdous",
    href: "https://www.linkedin.com/in/md-tahsin-ferdous/",
  },
  {
    social: "instagram",
    un: "tahsin_exe",
    href: "https://www.instagram.com/tahsin_exe/",
  },
  {
    social: "medium",
    un: "tahsin.ferdous3546",
    href: "https://medium.com/@tahsin.ferdous3546",
  },
  {
    social: "dev.to",
    un: "tahsin005",
    href: "https://dev.to/api/articles?username=tahsin005",
  },
];

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: "system", text: "type 'contact' to see all contacts..." },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(null);

  const handleCommand = () => {
    const cmd = input.trim().toLowerCase();
    let newEntry = { type: "user", text: cmd };
    let response;

    if (cmd === "clear") {
      setHistory([{ type: "system", text: "type 'contact' to see all contacts..." }]);
      setCommandHistory([]);
      setInput("");
      setHistoryIndex(null);
      return;
    }

    if (cmd === "contact") {
      response = {
        type: "system",
        text:
          "" + socials.map((s) => s.social).join(" "),
      };
    } else {
      const contact = socials.find((s) => s.social === cmd);
      if (contact) {
        response = {
          type: "link",
          text: `${cmd}: ${contact.un}`,
          href: contact.href,
        };
      } else {
        response = { type: "error", text: `Command not found: '${cmd}'` };
      }
    }

    setHistory([...history, newEntry, response]);
    setCommandHistory([...commandHistory, input]);
    setInput("");
    setHistoryIndex(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand();
    } else if (e.key === "ArrowUp") {
      if (commandHistory.length === 0) return;
      setHistoryIndex((prev) => {
        const newIndex = prev === null ? commandHistory.length - 1 : Math.max(prev - 1, 0);
        setInput(commandHistory[newIndex]);
        return newIndex;
      });
    } else if (e.key === "ArrowDown") {
      if (commandHistory.length === 0) return;
      setHistoryIndex((prev) => {
        if (prev === null) return null;
        const newIndex = Math.min(prev + 1, commandHistory.length - 1);
        setInput(commandHistory[newIndex] || "");
        return newIndex === commandHistory.length - 1 ? null : newIndex;
      });
    }
  };

  return (
    <div className="bg-[#112044] text-white p-6 rounded-md shadow-lg w-full h-[400px] overflow-y-auto custom-scrollbar border border-transparent transition-all duration-300 hover:border-white/20  hover:backdrop-blur-sm relative">
      {/* macOS navigation menu */}
      <div className="absolute left-4 top-4 flex space-x-2 z-20 ps-2">
        <span className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-300 shadow-sm inline-block"></span>
        <span className="w-3 h-3 rounded-full bg-green-500 border border-green-400 shadow-sm inline-block"></span>
        <span className="w-3 h-3 rounded-full bg-red-500 border border-red-400 shadow-sm inline-block"></span>
      </div>
      <div className="mb-2 space-y-1 pt-6">
        {history.map((entry, index) => (
          <div key={index}>
            {entry.type === "user" && <span className="text-[#ab66ff] font-semibold">➜ ~ </span>}
            {entry.type === "link" ? (
              <a
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#4FC1FF] hover:text-[#ab66ff] transition-colors"
              >
                {entry.text}
              </a>
            ) : (
              <span
                className={
                  entry.type === "error"
                    ? "text-red-400 font-semibold"
                    : "text-gray-300"
                }
              >
                {entry.text}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center mt-4">
        <span className="text-[#ab66ff] font-semibold">➜ ~ </span>
        <input
          className="bg-transparent text-white outline-none flex-1 ml-2 placeholder:text-gray-500 font-sans"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          placeholder="Type a command..."
        />
      </div>
    </div>
  );
};

export default Terminal;
