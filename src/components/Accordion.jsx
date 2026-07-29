import { useState } from "react";
import Icon from "./Icon";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-navy-900/10 rounded-2xl border border-navy-900/10 bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-navy-900">{item.q}</span>
              <Icon
                name="arrow"
                className={`h-5 w-5 shrink-0 text-navy-500 transition-transform ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-navy-600 sm:px-6">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
