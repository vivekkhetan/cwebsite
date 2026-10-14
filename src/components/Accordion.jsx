import { useState } from "react";
import Icon from "./Icon";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-line/10 rounded-[20px] border border-line/10 bg-surface">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-ink">{item.q}</span>
              <Icon
                name="arrow"
                className={`h-5 w-5 shrink-0 text-muted transition-transform ${isOpen ? "rotate-90" : "rotate-0"}`}
              />
            </button>
            {isOpen && <div className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</div>}
          </div>
        );
      })}
    </div>
  );
}
