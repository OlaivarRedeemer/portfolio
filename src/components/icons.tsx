const base = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export const ArrowRight = () => (<svg {...base}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const ArrowLeft = () => (<svg {...base}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>);
export const Play = () => (<svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true"><path d="M0 0.8v10.4L10 6z" /></svg>);
export const Download = () => (<svg {...base} width={16} height={16}><path d="M12 4v11M7 11l5 5 5-5M5 20h14" /></svg>);
export const Phone = () => (<svg {...base}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.7a2 2 0 0 1 1.7 2z" /></svg>);
export const LinkedIn = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6zM8 19H5V9.5h3V19zM6.5 8.2a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3V9.5h2.9v1.3c.4-.8 1.4-1.6 2.9-1.6 3 0 3.5 2 3.5 4.6V19z" /></svg>);
export const Copy = () => (<svg {...base} width={16} height={16}><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" /></svg>);
export const Check = () => (<svg {...base} width={16} height={16} strokeWidth={2.5}><path d="M5 12.5l4.500 4.500L19 7.500" /></svg>);
export const Menu = () => (<svg {...base} width={24} height={24}><path d="M4 9h16M4 15h16" /></svg>);
export const Close = () => (<svg {...base}><path d="M6 6l12 12M18 6L6 18" /></svg>);

/* The real problem, caught under the glass: a ladybug. */
export const FindMark = () => (
  <svg className="mark" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
    <defs>
      <radialGradient id="fm-glass" cx=".4" cy=".35" r=".8"><stop stopColor="#fff" /><stop offset="1" stopColor="#d6e6f5" /></radialGradient>
      <linearGradient id="fm-rim" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f2f2f2" /><stop offset=".5" stopColor="#8d8d8d" /><stop offset="1" stopColor="#3d3d3d" /></linearGradient>
      <linearGradient id="fm-grip" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#4a4a4a" /><stop offset="1" stopColor="#050505" /></linearGradient>
      <radialGradient id="fm-shell" cx=".35" cy=".3" r=".85"><stop stopColor="#ff6a55" /><stop offset="1" stopColor="#c8141c" /></radialGradient>
      <clipPath id="fm-lens"><circle cx="33" cy="33" r="23" /></clipPath>
    </defs>
    <line x1="53" y1="53" x2="71" y2="71" stroke="url(#fm-grip)" strokeWidth="11" strokeLinecap="round" />
    <line x1="49" y1="49" x2="55" y2="55" stroke="#a8a8a8" strokeWidth="7" />
    <circle cx="33" cy="33" r="23" fill="url(#fm-glass)" />
    <g clipPath="url(#fm-lens)">
      <g transform="rotate(-24 33 35)">
        <path d="M23 28l-6-4M22 37h-7M24 46l-6 5M43 28l6-4M44 37h7M42 46l6 5" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        <path d="M29 20c-1-3-3-5-5-5M37 20c1-3 3-5 5-5" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="33" cy="24" r="6.5" fill="#111" />
        <circle cx="30.5" cy="22.5" r="1.4" fill="#fff" /><circle cx="35.5" cy="22.5" r="1.4" fill="#fff" />
        <ellipse cx="33" cy="37" rx="12.5" ry="13.5" fill="url(#fm-shell)" />
        <path d="M33 24v26" stroke="#111" strokeWidth="1.4" />
        <circle cx="27" cy="32" r="2.4" fill="#111" /><circle cx="39" cy="32" r="2.4" fill="#111" />
        <circle cx="26.5" cy="41" r="2.1" fill="#111" /><circle cx="39.5" cy="41" r="2.1" fill="#111" />
      </g>
    </g>
    <path d="M17 27c2-6 7-10 13-11" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" opacity=".9" />
    <circle cx="33" cy="33" r="24.5" stroke="url(#fm-rim)" strokeWidth="5" />
  </svg>
);

/* A rough sketch on paper, then the real thing you can tap. */
export const TangibleMark = () => (
  <svg className="mark" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="tm-body" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#4d4d4d" /><stop offset="1" stopColor="#060606" /></linearGradient>
      <linearGradient id="tm-pic" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8fc2ff" /><stop offset="1" stopColor="#2f6df0" /></linearGradient>
      <linearGradient id="tm-btn" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#5b95ff" /><stop offset="1" stopColor="#1b56e0" /></linearGradient>
    </defs>
    <g transform="rotate(-11 26 40)">
      <rect x="6" y="14" width="38" height="52" rx="3" fill="#fbf8ec" stroke="#d8d2bb" />
      <path d="M12.5 21.5c7-.8 18-.6 25-.2.5 5.500.3 11-.1 16.200-7 .5-18 .4-24.800 0-.4-5.200-.4-11 0-16z" stroke="#444" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M13 22l24 15.500M37 22L13.500 37.500" stroke="#444" strokeWidth=".9" />
      <path d="M12.500 44c6-.6 16-.5 21 0M12.500 49.500c5-.5 11-.4 15 0" stroke="#444" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M13 56.500c7-.5 12-.5 15.500 0 .3 1.600.2 3-.1 4.300-4 .4-10 .4-15.200 0-.4-1.300-.5-2.800-.2-4.300z" stroke="#444" strokeWidth="1.300" strokeLinejoin="round" />
    </g>
    <g transform="rotate(7 56 44)">
      <rect x="40" y="16" width="31" height="58" rx="7.500" fill="url(#tm-body)" />
      <rect x="42.500" y="18.500" width="26" height="53" rx="5.500" fill="#fff" />
      <rect x="44.500" y="24" width="22" height="18" rx="3" fill="url(#tm-pic)" />
      <path d="M46 46h17M46 50h12" stroke="#c9c9c9" strokeWidth="2" strokeLinecap="round" />
      <rect x="44.500" y="56" width="22" height="10" rx="5" fill="url(#tm-btn)" />
      <path d="M47 58.300h16" stroke="#fff" strokeOpacity=".55" strokeLinecap="round" />
      <rect x="52" y="20" width="7" height="2" rx="1" fill="#111" />
    </g>
  </svg>
);

/* The last pass: a cut gem with the shine on it. */
export const PolishMark = () => (
  <svg className="mark" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="pm-star" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffd84d" /><stop offset="1" stopColor="#f09a12" /></linearGradient>
    </defs>
    <path d="M18 24L8 37h15z" fill="#4b8ff5" /><path d="M18 24l5 13 13-13z" fill="#a9d2ff" />
    <path d="M36 24L23 37h26z" fill="#d8ecff" /><path d="M36 24l13 13 5-13z" fill="#8ec2ff" />
    <path d="M54 24l-5 13h15z" fill="#3f7fe8" />
    <path d="M8 37h15l13 36z" fill="#2a66dc" /><path d="M23 37h26L36 73z" fill="#6aa9ff" /><path d="M49 37h15L36 73z" fill="#1646b4" />
    <path d="M26 37h9L31 55z" fill="#fff" opacity=".45" />
    <path d="M18 24h36l10 13-28 36L8 37z" stroke="#123a96" strokeOpacity=".35" strokeLinejoin="round" />
    <path d="M65 5c1 6 3 8 9 9-6 1-8 3-9 9-1-6-3-8-9-9 6-1 8-3 9-9z" fill="url(#pm-star)" />
    <path d="M12 8c.600 4 2 5.400 6 6-4 .600-5.400 2-6 6-.600-4-2-5.400-6-6 4-.600 5.400-2 6-6z" fill="url(#pm-star)" />
    <path d="M66 49c.500 3 1.500 4 4.500 4.500-3 .500-4 1.500-4.500 4.500-.500-3-1.500-4-4.500-4.500 3-.500 4-1.500 4.500-4.500z" fill="url(#pm-star)" />
  </svg>
);
