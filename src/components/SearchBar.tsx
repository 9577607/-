"use client";

import { Search } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import type { SearchItem } from "@/lib/content";

function openResult(href: string) {
  if (!href.startsWith("#")) {
    window.location.href = href;
    return;
  }

  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    history.replaceState(null, "", href);
  }
}

type SearchBarProps = {
  items: SearchItem[];
};

export function SearchBar({ items }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return items.slice(0, 5);
    return items
      .filter((item) =>
        [item.title, item.type, item.detail].some((value) =>
          value.toLowerCase().includes(keyword)
        )
      )
      .slice(0, 6);
  }, [items, query]);

  return (
    <div className="search-shell">
      <label className="sr-only" htmlFor="knowledge-search">
        搜索笔记、主题或项目
      </label>
      <div className="search-input-wrap">
        <Search aria-hidden="true" className="h-6 w-6 text-slate-300" />
        <input
          ref={inputRef}
          id="knowledge-search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
          }}
          onFocus={() => setActiveIndex(0)}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActiveIndex((index) => Math.min(index + 1, results.length - 1));
            }
            if (event.key === "ArrowUp") {
              event.preventDefault();
              setActiveIndex((index) => Math.max(index - 1, 0));
            }
            if (event.key === "Enter" && results[activeIndex]) {
              event.preventDefault();
              openResult(results[activeIndex].href);
              inputRef.current?.blur();
            }
          }}
          placeholder="搜索笔记、主题或项目"
          type="search"
          aria-controls="search-results"
          aria-activedescendant={results[activeIndex]?.id}
        />
      </div>
      {query.trim() && (
        <div className="search-results" id="search-results" role="listbox">
          {results.length ? (
            results.map((item, index) => (
              <button
                aria-selected={activeIndex === index}
                className="search-result"
                id={item.id}
                key={`${item.type}-${item.id}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => openResult(item.href)}
                role="option"
                type="button"
              >
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.detail}</small>
                </span>
                <em>{item.type}</em>
              </button>
            ))
          ) : (
            <div className="search-empty">暂无匹配内容，换个关键词试试。</div>
          )}
        </div>
      )}
    </div>
  );
}
