import { Github, Mail, Rss } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>FanXin</strong>
        <span>© 2026 FanXin Knowledge Base</span>
      </div>
      <div className="footer-links" aria-label="社交入口">
        <a aria-label="GitHub" href="https://github.com" rel="noreferrer" target="_blank">
          <Github aria-hidden="true" className="h-5 w-5" />
        </a>
        <a aria-label="Email" href="mailto:hello@fanxin.dev">
          <Mail aria-hidden="true" className="h-5 w-5" />
        </a>
        <a aria-label="RSS" href="#notes">
          <Rss aria-hidden="true" className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}
