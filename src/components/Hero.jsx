import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, socials } from "../data";

const RESPONSE_LINES = [
  "{",
  `  "name": "${profile.name}",`,
  `  "title": "${profile.role}",`,
  `  "location": "${profile.location}",`,
  `  "stack": [${profile.stack.map((s) => `"${s}"`).join(", ")}],`,
  `  "focus": "${profile.focus}",`,
  `  "status": "${profile.status}"`,
  "}",
];

const FULL_TEXT = RESPONSE_LINES.join("\n");

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const startedRef = useRef(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      let i = 0;
      const speed = 12;
      const tick = () => {
        i += 2;
        setTyped(FULL_TEXT.slice(0, i));
        if (i < FULL_TEXT.length) {
          setTimeout(tick, speed);
        } else {
          setTyped(FULL_TEXT);
          setDone(true);
        }
      };
      tick();
    };

    if (typeof IntersectionObserver === "undefined") {
      start();
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const renderTyped = () => {
    const lines = typed.split("\n");
    return lines.map((line, idx) => (
      <div key={idx} className="hero-json-line">
        {highlightLine(line)}
        {idx === lines.length - 1 && !done && <span className="hero-cursor" />}
      </div>
    ));
  };

  return (
    <section id="top" className="hero">
      <div className="grid-bg" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="method">GET</span> /
          </div>
          <h1 className="hero-title">
            Backend-focused developer,
            <br />
            building <span className="hl">AI-powered</span> web apps.
          </h1>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View projects <ArrowRight size={15} />
            </a>
            <a href={profile.resumeUrl} className="btn btn-ghost" download>
              <Download size={15} /> Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        <div className="hero-panel" ref={containerRef}>
          <div className="hero-panel-bar">
            <div className="hero-panel-dots">
              <span />
              <span />
              <span />
            </div>
            <span className="mono hero-panel-label">response — 200 OK</span>
          </div>
          <pre className="hero-json mono">{renderTyped()}</pre>
        </div>
      </div>
    </section>
  );
}

function highlightLine(line) {
  const match = line.match(/^(\s*)"([^"]+)":\s*(.*)$/);
  if (!match) return <span className="j-punc">{line}</span>;
  const [, indent, key, rest] = match;
  return (
    <>
      <span>{indent}</span>
      <span className="j-key">&quot;{key}&quot;</span>
      <span className="j-punc">: </span>
      <span className="j-val">{rest}</span>
    </>
  );
}
