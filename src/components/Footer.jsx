import { ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="mono footer-prompt">
          suleman@karachi:~$ echo $STATUS <span className="dim">→ building things, one commit at a time.</span>
        </p>
        <div className="footer-bottom">
          <span className="mono">© {year} Suleman Patras Khan</span>
          <a href="#top" className="footer-top mono">
            back to top <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
