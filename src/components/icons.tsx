const base = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export const ArrowRight = () => (<svg {...base}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const ArrowLeft = () => (<svg {...base}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>);
export const Play = () => (<svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true"><path d="M0 0.8v10.4L10 6z" /></svg>);
export const Download = () => (<svg {...base} width={16} height={16}><path d="M12 4v11M7 11l5 5 5-5M5 20h14" /></svg>);
export const Phone = () => (<svg {...base}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.7a2 2 0 0 1 1.7 2z" /></svg>);
export const LinkedIn = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6zM8 19H5V9.5h3V19zM6.5 8.2a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3V9.5h2.9v1.3c.4-.8 1.4-1.6 2.9-1.6 3 0 3.5 2 3.5 4.6V19z" /></svg>);
export const Copy = () => (<svg {...base} width={16} height={16}><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" /></svg>);
export const Check = () => (<svg {...base} width={16} height={16} strokeWidth={2.5}><path d="M5 12.5l4.500 4.500L19 7.500" /></svg>);
export const Sun = () => (<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><circle cx="8" cy="8" r="3.400" /><path d="M8 .8v2M8 13.200v2M.8 8h2M13.200 8h2M2.900 2.900l1.400 1.400M11.700 11.700l1.400 1.400M2.900 13.100l1.400-1.400M11.700 4.300l1.400-1.400" stroke="currentColor" strokeWidth="1.500" strokeLinecap="round" /></svg>);
export const Moon = () => (<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M14.200 10.300A6.600 6.600 0 0 1 5.700 1.800a.5.5 0 0 0-.7-.5 7.400 7.400 0 1 0 9.700 9.700.5.5 0 0 0-.5-.7z" /></svg>);
export const Menu = () => (<svg {...base} width={24} height={24}><path d="M4 9h16M4 15h16" /></svg>);
export const Close = () => (<svg {...base}><path d="M6 6l12 12M18 6L6 18" /></svg>);

/* UX research: a closer look at the person, and what they are trying to say. */
export const FindMark = () => (
  <svg className="mark" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
    <defs>
      <radialGradient id="fm-glass" cx=".4" cy=".3" r=".85"><stop stopColor="#fff" /><stop offset="1" stopColor="#d3e4f6" /></radialGradient>
      <linearGradient id="fm-rim" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f2f2f2" /><stop offset=".5" stopColor="#8d8d8d" /><stop offset="1" stopColor="#3a3a3a" /></linearGradient>
      <linearGradient id="fm-grip" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#4a4a4a" /><stop offset="1" stopColor="#050505" /></linearGradient>
      <linearGradient id="fm-body" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8fc2ff" /><stop offset="1" stopColor="#2f6df0" /></linearGradient>
      <radialGradient id="fm-head" cx=".38" cy=".32" r=".8"><stop stopColor="#ffe0b8" /><stop offset="1" stopColor="#eeaa6c" /></radialGradient>
      <clipPath id="fm-lens"><circle cx="31" cy="39" r="23" /></clipPath>
    </defs>
    <line x1="51" y1="59" x2="69" y2="75" stroke="url(#fm-grip)" strokeWidth="10" strokeLinecap="round" />
    <line x1="47" y1="55" x2="53" y2="61" stroke="#a8a8a8" strokeWidth="7" />
    <circle cx="31" cy="39" r="23" fill="url(#fm-glass)" />
    <g clipPath="url(#fm-lens)">
      <path d="M11 66c0-13 9-20 20-20s20 7 20 20z" fill="url(#fm-body)" />
      <circle cx="31" cy="33" r="9.500" fill="url(#fm-head)" />
      <path d="M21.500 32c0-7 4-11 9.500-11s9.500 4 9.500 11c-3-3.500-6-5-9-5s-7 1.500-10 5z" fill="#161616" />
    </g>
    <path d="M15 33c2-6 7-10 13-11" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".85" />
    <circle cx="31" cy="39" r="24.500" stroke="url(#fm-rim)" strokeWidth="4.500" />
    <path d="M47 4h22a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8h-10l-7 7v-7h-5a8 8 0 0 1-8-8v-8a8 8 0 0 1 8-8z" fill="#fbf8ec" stroke="#d8d2bb" strokeLinejoin="round" />
    <circle cx="48" cy="16" r="2.300" fill="#111" /><circle cx="58" cy="16" r="2.300" fill="#111" /><circle cx="68" cy="16" r="2.300" fill="#111" />
  </svg>
);

/* Prototyping: a sketch wired up to a real screen, ready for someone to click. */
export const TangibleMark = () => (
  <svg className="mark" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="tm-body" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#4d4d4d" /><stop offset="1" stopColor="#060606" /></linearGradient>
      <linearGradient id="tm-pic" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8fc2ff" /><stop offset="1" stopColor="#2f6df0" /></linearGradient>
    </defs>
    <g transform="rotate(-7 19 40)">
      <rect x="3" y="15" width="32" height="48" rx="3" fill="#fbf8ec" stroke="#d8d2bb" />
      <path d="M8.500 21.500c6-.5 15-.4 21 0 .3 4 .2 8.500-.1 12-6 .4-15 .3-20.800 0-.4-3.500-.4-8.500-.1-12z" stroke="#444" strokeWidth="1.200" strokeLinejoin="round" />
      <path d="M9 22l20 11M29 22L9 33" stroke="#444" strokeWidth=".8" />
      <path d="M9 39c5-.4 13-.3 18 0M9 44c4-.3 9-.3 13 0" stroke="#444" strokeWidth="1.200" strokeLinecap="round" />
      <rect x="9" y="50" width="20" height="7" rx="2" stroke="#2f6df0" strokeWidth="1.500" />
    </g>
    <g transform="rotate(5 60 40)">
      <rect x="44" y="8" width="31" height="62" rx="7.500" fill="url(#tm-body)" />
      <rect x="46.500" y="11" width="26" height="56" rx="5" fill="#fff" />
      <rect x="55" y="13" width="9" height="2.400" rx="1.200" fill="#111" />
      <rect x="49.500" y="18" width="20" height="17" rx="2.500" fill="url(#tm-pic)" />
      <rect x="49.500" y="39" width="20" height="2.500" rx="1.200" fill="#cfcfcf" />
      <rect x="49.500" y="44.500" width="14" height="2.500" rx="1.200" fill="#cfcfcf" />
      <rect x="49.500" y="53" width="20" height="8" rx="2.500" fill="#2f6df0" />
    </g>
    <path d="M32 53c10 1 8-20 18-24" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
    <path d="M32 53c10 1 8-20 18-24" stroke="#2f6df0" strokeWidth="2.200" strokeLinecap="round" />
    <circle cx="31" cy="53" r="3" fill="#fff" stroke="#2f6df0" strokeWidth="2" />
    <path d="M45 26l7 1.500-4 4.500z" fill="#2f6df0" stroke="#2f6df0" strokeWidth="1" strokeLinejoin="round" />
    <path d="M58 52l15 6-6.200 2-2.300 6.200z" fill="#111" stroke="#fff" strokeWidth="1.800" strokeLinejoin="round" />
  </svg>
);

/* UI design: the screen itself, with its type, its colours and the pen that drew it. */
export const PolishMark = () => (
  <svg className="mark" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="pm-bar" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#3a3a3a" /><stop offset="1" stopColor="#0a0a0a" /></linearGradient>
      <linearGradient id="pm-nib" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffd84d" /><stop offset="1" stopColor="#f09a12" /></linearGradient>
    </defs>
    <rect x="4" y="9" width="62" height="56" rx="8" fill="#fff" stroke="#dcdcdc" />
    <path d="M4 17a8 8 0 0 1 8-8h46a8 8 0 0 1 8 8v3H4z" fill="url(#pm-bar)" />
    <circle cx="11.500" cy="14.500" r="1.800" fill="#fff" opacity=".9" /><circle cx="17.500" cy="14.500" r="1.800" fill="#fff" opacity=".55" /><circle cx="23.500" cy="14.500" r="1.800" fill="#fff" opacity=".3" />
    <path fill="#111" transform="translate(-3 -1.500)" d="M17.5 37.6V36.4H26.2V37.6ZM29.8 42.8 31.8 43.5V44H24.7V43.5L26.9 42.8L21 28.8L21.7 28.8L16.2 42.8L18.3 43.5V44H12.8V43.5L14.8 42.8L21.5 26.2H22.7ZM39.4 36.8 39.5 37.7Q38.1 38.1 37.2 38.4Q36.3 38.8 35.8 39.1Q35.3 39.5 35.1 39.9Q35 40.3 35 40.8Q35 41.7 35.4 42.2Q35.9 42.6 36.7 42.6Q37.2 42.6 37.7 42.3Q38.1 42 38.4 41.6Q38.7 41.1 38.7 40.5V35.6Q38.7 34.7 38.2 34.2Q37.7 33.6 36.6 33.6Q36.2 33.6 35.7 33.7Q35.2 33.8 34.8 34.1L35.4 33.4Q35.4 33.9 35.3 34.3Q35.2 34.7 35.1 35Q35 35.3 34.9 35.5Q34.6 35.7 34.3 35.8Q34 35.9 33.6 35.9Q33.2 35.9 32.9 35.7Q32.6 35.5 32.6 35.2Q32.6 34.7 33.1 34.3Q33.5 33.8 34.2 33.4Q35 32.9 35.9 32.7Q36.8 32.4 37.7 32.4Q39 32.4 39.7 32.8Q40.5 33.2 40.8 33.9Q41.2 34.6 41.2 35.7V41.7Q41.2 42.1 41.3 42.3Q41.4 42.6 41.6 42.7Q41.8 42.8 42.1 42.8Q42.4 42.8 42.8 42.7Q43.1 42.6 43.4 42.4V43Q42.8 43.7 42.1 44Q41.5 44.3 40.9 44.3Q40.2 44.3 39.7 44Q39.2 43.7 39 43.1Q38.7 42.5 38.7 41.8L38.8 41.7Q38.6 42.5 38.1 43.1Q37.7 43.6 37 44Q36.4 44.3 35.6 44.3Q34.2 44.3 33.4 43.5Q32.5 42.8 32.5 41.4Q32.5 40.6 32.8 40Q33.1 39.4 33.8 38.9Q34.6 38.4 35.9 37.8Q37.3 37.3 39.4 36.8Z" />
    <circle cx="15" cy="54" r="4.500" fill="#2f6df0" /><circle cx="26" cy="54" r="4.500" fill="#f4b23a" /><circle cx="37" cy="54" r="4.500" fill="#e5392f" /><circle cx="48" cy="54" r="4.500" fill="#111" />
    <g transform="rotate(38 62 44)">
      <path d="M56 22h12v7l4 15-10 16-10-16 4-15z" fill="url(#pm-nib)" stroke="#111" strokeWidth="1.600" strokeLinejoin="round" />
      <rect x="54.500" y="16" width="15" height="7" rx="2" fill="#111" />
      <path d="M62 43v17" stroke="#111" strokeWidth="1.400" />
      <circle cx="62" cy="42" r="2.400" fill="#111" />
    </g>
  </svg>
);

/* Design systems: the same few components, ready to be used again and again. */
export const SystemMark = () => (
  <svg className="mark" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="sm-tile" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fff" /><stop offset="1" stopColor="#efefef" /></linearGradient>
      <linearGradient id="sm-blue" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#5b95ff" /><stop offset="1" stopColor="#1b56e0" /></linearGradient>
      <linearGradient id="sm-black" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#4a4a4a" /><stop offset="1" stopColor="#060606" /></linearGradient>
    </defs>
    <rect x="4" y="4" width="34" height="34" rx="8" fill="url(#sm-tile)" stroke="#d6d6d6" />
    <rect x="42" y="4" width="34" height="34" rx="8" fill="url(#sm-tile)" stroke="#d6d6d6" />
    <rect x="4" y="42" width="34" height="34" rx="8" fill="url(#sm-tile)" stroke="#d6d6d6" />
    <rect x="42" y="42" width="34" height="34" rx="8" fill="url(#sm-tile)" stroke="#d6d6d6" />
    <path d="M21 10.500l4.200 4.200-4.200 4.200-4.200-4.200zM13.800 17.700l4.200 4.200-4.200 4.200-4.200-4.200zM28.200 17.700l4.200 4.200-4.200 4.200-4.200-4.200zM21 24.900l4.200 4.200-4.200 4.200-4.200-4.200z" fill="url(#sm-blue)" />
    <rect x="47" y="14" width="24" height="14" rx="7" fill="url(#sm-blue)" />
    <circle cx="64" cy="21" r="5.500" fill="#fff" />
    <rect x="9" y="52" width="24" height="14" rx="5" fill="url(#sm-black)" />
    <rect x="14" y="58" width="14" height="2.400" rx="1.200" fill="#fff" />
    <rect x="49" y="49" width="20" height="20" rx="5" fill="url(#sm-blue)" />
    <path d="M53.500 59l4 4 7-8" stroke="#fff" strokeWidth="2.800" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
