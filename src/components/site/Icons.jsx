// Inline stroke icons (currentColor, decorative by default).
function Svg({ size = 20, stroke = 1.7, children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const SearchIcon = (p) => (
  <Svg {...p}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></Svg>
);
export const MoonIcon = (p) => (
  <Svg {...p}><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" /></Svg>
);
export const SunIcon = (p) => (
  <Svg {...p}><circle cx="12" cy="12" r="4" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" /></Svg>
);
export const MenuIcon = (p) => (
  <Svg stroke={1.8} {...p}><path d="M4 8h16M4 16h16" /></Svg>
);
export const CloseIcon = (p) => (
  <Svg stroke={1.8} {...p}><path d="M6 6l12 12M18 6L6 18" /></Svg>
);
export const ArrowRight = (p) => (
  <Svg size={16} stroke={2} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
);
export const GithubIcon = (p) => (
  <Svg {...p}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></Svg>
);
export const ScholarIcon = (p) => (
  <Svg {...p}><path d="M22 9L12 5 2 9l10 4 10-4z" /><path d="M6 10.6V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.4" /></Svg>
);
export const LinkedinIcon = (p) => (
  <Svg {...p}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" /></Svg>
);
export const MailIcon = (p) => (
  <Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></Svg>
);
