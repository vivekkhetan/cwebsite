const PATHS = {
  cpu: "M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2M7 7h10v10H7V7Zm3 3h4v4h-4v-4Z",
  server:
    "M4 5h16v5H4V5Zm0 9h16v5H4v-5Zm3 2.5h.01M7 7.5h.01",
  cube: "m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 0v9m0 0-8-4.5M12 12l8-4.5",
  disk: "M4 5h16v14H4V5Zm3 3h6M4 15h16",
  bucket: "M5 8h14l-1.2 11H6.2L5 8Zm0 0 1-3h12l1 3M9 12v3m6-3v3",
  "shield-check": "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Zm-3 9 2 2 4-4",
  grid: "M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z",
  shield: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z",
  "bolt-shield": "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Zm1 4-4 6h3l-1 5 4-6h-3l1-5Z",
  network: "M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM12 8v4m0 0-7 4m7-4 7 4",
  scale: "M12 3v18M7 7h10M4 7l3-3 3 3-3 4-3-4Zm10 0 3-3 3 3-3 4-3-4Z",
  globe: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-9 9h18M12 3c2.5 2.4 4 5.6 4 9s-1.5 6.6-4 9c-2.5-2.4-4-5.6-4-9s1.5-6.6 4-9Z",
  database: "M12 5c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3Zm8-3v14c0 1.7-3.6 3-8 3s-8-1.3-8-3V2m16 6c0 1.7-3.6 3-8 3s-8-1.3-8-3m16 6c0 1.7-3.6 3-8 3s-8-1.3-8-3",
  factory: "M4 21V11l5 3v-3l5 3V8l6 4v9H4Zm3-4h.01M12 17h.01M17 17h.01",
  health: "M12 21s-7-4.4-9.5-9C.8 8.4 2.5 5 6 5c2 0 3.3 1.1 4 2.2C10.7 6.1 12 5 14 5c3.5 0 5.2 3.4 3.5 7-2.5 4.6-9.5 9-9.5 9Z",
  book: "M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5c-.8 0-1.5-.7-1.5-1.5v-13Zm16 0c0-.8-.7-1.5-1.5-1.5H12v16h6.5c.8 0 1.5-.7 1.5-1.5v-13Z",
  hotel: "M3 21V7l7-4v18M3 21h18M10 21V3l7 4v14M7 10h.01M7 14h.01",
  check: "m5 12 5 5 9-9",
  arrow: "M5 12h14m0 0-6-6m6 6-6 6",
  lock: "M6 11V8a6 6 0 1 1 12 0v3m-13 0h14v9H5v-9Zm7 4v2",
  chat: "M4 5h16v10H8l-4 4V5Z",
};

export default function Icon({ name, className = "w-6 h-6", strokeWidth = 1.75 }) {
  const d = PATHS[name] || PATHS.cube;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
