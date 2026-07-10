"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  const navigate = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", href);
  };

  return (
    <header className="site-header">
      <nav aria-label="主导航" className="nav-container">
        <button className="brand" onClick={() => navigate("#top")} type="button">
          <span className="brand-mark">F</span>
          <span>FanXin</span>
        </button>
        <div className="nav-links">
          {navItems.map((item, index) => (
            <button
              className={index === 0 ? "is-active" : ""}
              key={item.href}
              onClick={() => navigate(item.href)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          aria-expanded={open}
          aria-label={open ? "关闭菜单" : "打开菜单"}
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      {open && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button key={item.href} onClick={() => navigate(item.href)} type="button">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
