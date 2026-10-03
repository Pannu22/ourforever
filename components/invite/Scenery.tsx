// Vector scenery for the invitation. Ported from the design canvas; every scene is an
// SVG that scales with its viewBox, and its moving parts are animated by classes in app/invite.css.

export function SvgLibrary() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
      <defs>
      <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f7e3a3" /><stop offset=".45" stopColor="#d4a548" /><stop offset=".6" stopColor="#a87a2a" /><stop offset="1" stopColor="#f0d488" /></linearGradient>
      <linearGradient id="goldH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#a87a2a" /><stop offset=".3" stopColor="#f7e3a3" /><stop offset=".5" stopColor="#d4a548" /><stop offset=".75" stopColor="#f3dc96" /><stop offset="1" stopColor="#a87a2a" /></linearGradient>
      <radialGradient id="glowY"><stop offset="0" stopColor="#fff4c4" stopOpacity=".95" /><stop offset=".35" stopColor="#ffd27a" stopOpacity=".45" /><stop offset="1" stopColor="#ffb347" stopOpacity="0" /></radialGradient>
      <radialGradient id="velvetShade" gradientUnits="userSpaceOnUse" cx="500" cy="560" r="620"><stop offset="0" stopColor="#7c1b28" /><stop offset=".55" stopColor="#5a121c" /><stop offset="1" stopColor="#2c060b" /></radialGradient>
      <linearGradient id="ivory" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#d9c49c" /><stop offset=".35" stopColor="#efe4cf" /><stop offset="1" stopColor="#fffdf7" /></linearGradient>
      <linearGradient id="lotusG" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#fff6f8" /><stop offset=".55" stopColor="#f7b8cf" /><stop offset="1" stopColor="#e6609a" /></linearGradient>
      <linearGradient id="leafG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#3f8a4c" /><stop offset="1" stopColor="#1b4a26" /></linearGradient>
      <linearGradient id="bananaG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#8cc792" /><stop offset=".5" stopColor="#5fa36a" /><stop offset="1" stopColor="#3f8550" /></linearGradient>
      <linearGradient id="dholG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4a2c16" /><stop offset=".35" stopColor="#8a5a32" /><stop offset=".65" stopColor="#7a4c28" /><stop offset="1" stopColor="#3a2210" /></linearGradient>
      <linearGradient id="rattanG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#8a5a24" /><stop offset=".45" stopColor="#e2b46a" /><stop offset="1" stopColor="#8a5a24" /></linearGradient>
      <linearGradient id="recessShade" gradientUnits="userSpaceOnUse" x1="0" y1="150" x2="0" y2="520"><stop offset="0" stopColor="#6a4a24" stopOpacity=".35" /><stop offset="1" stopColor="#6a4a24" stopOpacity="0" /></linearGradient>
      <filter id="grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch" /><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .7 -.25" /></filter>
      <filter id="crush" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".012 .05" numOctaves="3" seed="4" /><feColorMatrix values="0 0 0 0 1  0 0 0 0 .75  0 0 0 0 .8  0 0 0 .9 -.38" /></filter>
      <filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="40" /></filter>
      <filter id="haze" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="6" /></filter>

      <pattern id="stone" width="160" height="80" patternUnits="userSpaceOnUse"><path d="M0 0 H160 M0 40 H160 M0 0 V40 M80 40 V80" fill="none" stroke="#cfb894" strokeWidth="1.2" /></pattern>
      <pattern id="carve" width="40" height="40" patternUnits="userSpaceOnUse">
      <rect width="40" height="40" fill="#e1cca7" />
      <g transform="translate(20 20)" fill="#f2e5cb" stroke="#b39466" strokeWidth=".8">
      <ellipse cy="-8" rx="3.4" ry="7.5" /><ellipse cy="-8" rx="3.4" ry="7.5" transform="rotate(45)" /><ellipse cy="-8" rx="3.4" ry="7.5" transform="rotate(90)" /><ellipse cy="-8" rx="3.4" ry="7.5" transform="rotate(135)" /><ellipse cy="-8" rx="3.4" ry="7.5" transform="rotate(180)" /><ellipse cy="-8" rx="3.4" ry="7.5" transform="rotate(225)" /><ellipse cy="-8" rx="3.4" ry="7.5" transform="rotate(270)" /><ellipse cy="-8" rx="3.4" ry="7.5" transform="rotate(315)" />
      <circle r="3.2" fill="#c7a876" />
      </g>
      <circle cx="0" cy="0" r="2" fill="#c7a876" /><circle cx="40" cy="0" r="2" fill="#c7a876" /><circle cx="0" cy="40" r="2" fill="#c7a876" /><circle cx="40" cy="40" r="2" fill="#c7a876" />
      </pattern>
      <pattern id="rosette" width="90" height="90" patternUnits="userSpaceOnUse">
      <g fill="none" stroke="#a52650" strokeWidth="2" transform="translate(45 45)">
      <circle r="30" /><circle r="18" /><circle r="6" />
      <path d="M0 -30 Q10 -18 0 -6 Q-10 -18 0 -30Z M0 30 Q10 18 0 6 Q-10 18 0 30Z M-30 0 Q-18 10 -6 0 Q-18 -10 -30 0Z M30 0 Q18 10 6 0 Q18 -10 30 0Z" />
      </g>
      <circle cx="0" cy="0" r="8" fill="none" stroke="#a52650" strokeWidth="2" /><circle cx="90" cy="0" r="8" fill="none" stroke="#a52650" strokeWidth="2" /><circle cx="0" cy="90" r="8" fill="none" stroke="#a52650" strokeWidth="2" /><circle cx="90" cy="90" r="8" fill="none" stroke="#a52650" strokeWidth="2" />
      </pattern>
      <pattern id="paisley" width="120" height="120" patternUnits="userSpaceOnUse">
      <g fill="none" stroke="#56662f" strokeWidth="2">
      <path d="M30 70 C10 60 14 30 36 26 C58 22 66 46 52 56 C44 62 34 56 40 48" />
      <path d="M90 20 C110 30 106 60 84 64 C62 68 54 44 68 34 C76 28 86 34 80 42" />
      <path d="M60 100 q10 -10 20 0 q-10 10 -20 0Z" /><circle cx="100" cy="100" r="4" /><circle cx="15" cy="15" r="3" />
      </g>
      </pattern>
      <pattern id="scallop" width="70" height="40" patternUnits="userSpaceOnUse"><path d="M0 40 A35 35 0 0 1 70 40 M-35 20 A35 35 0 0 1 35 20 M35 20 A35 35 0 0 1 105 20" fill="none" stroke="#ffffff" strokeOpacity=".55" strokeWidth="2" /></pattern>
      <pattern id="tiles" width="60" height="30" patternUnits="userSpaceOnUse"><rect width="60" height="30" fill="#e9b9a6" /><path d="M0 0 H60 M0 0 V30" stroke="#f6d8cb" strokeWidth="2" /></pattern>
      <pattern id="weave" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0 0 L8 8 M8 0 L0 8" stroke="#6a4214" strokeWidth="1.1" opacity=".75" /></pattern>
      <pattern id="mina" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M30 0 L60 30 L30 60 L0 30Z" fill="none" stroke="#d6c39c" strokeWidth="1" /><circle cx="30" cy="30" r="2.5" fill="#c9973a" /></pattern>

      <clipPath id="clipWel"><path d="M130 1500 V330 A84.5 84.5 0 0 1 191.4 197.9 A96 96 0 0 1 335 115.5 A99.3 99.3 0 0 1 500 70 A99.3 99.3 0 0 1 665 115.5 A96 96 0 0 1 808.6 197.9 A84.5 84.5 0 0 1 870 330 V1500 Z" /></clipPath>
      <clipPath id="clipSha"><path d="M200 1500 V360 A300 300 0 0 1 800 360 V1500 Z" /></clipPath>
      <clipPath id="umbClip"><path d="M-100 60 C-100 -2 -52 -32 0 -32 C52 -32 100 -2 100 60Z" /></clipPath>

      <mask id="doorMask" maskUnits="userSpaceOnUse" x="-4000" y="-4000" width="9000" height="9000">
      <rect x="-4000" y="-4000" width="9000" height="9000" fill="#fff" />
      <path fill="#000" d="M410 885 V540 A35.9 35.9 0 0 1 424.9 484.1 A30.6 30.6 0 0 1 459.9 449.2 A27.6 27.6 0 0 1 500 430 A27.6 27.6 0 0 1 540.1 449.2 A30.6 30.6 0 0 1 575.1 484.1 A35.9 35.9 0 0 1 590 540 V885 Z" />
      </mask>

      {/* carved sandstone palace doorway (the door itself is the opening) */}
      <g id="doorway" mask="url(#doorMask)">
      <rect x="-4000" y="-4000" width="9000" height="9000" fill="#e7d4b3" />
      <rect x="-4000" y="-4000" width="9000" height="9000" fill="url(#stone)" />
      <rect x="140" y="0" width="720" height="30" fill="#d6bf98" /><rect x="140" y="30" width="720" height="8" fill="#bfa47a" />
      <path fill="url(#carve)" fillRule="evenodd" d="M165 50 H835 V1000 H165Z M215 100 V1000 H785 V100Z" />
      <path fill="none" stroke="#a88a5c" strokeWidth="3" d="M165 50 H835 V1000 M165 1000 V50 M215 1000 V100 H785 V1000" />
      <rect x="215" y="100" width="570" height="800" fill="#dcc6a0" />
      <rect x="215" y="100" width="570" height="280" fill="url(#carve)" opacity=".75" />
      <g transform="translate(286 172)"><circle r="58" fill="#ead9ba" stroke="#a88a5c" strokeWidth="2" /><circle r="44" fill="none" stroke="#b39466" strokeWidth="1.5" strokeDasharray="3 4" /><g fill="#f4e8d0" stroke="#a88a5c" strokeWidth="1.2"><ellipse cy="-22" rx="9" ry="20" /><ellipse cy="-22" rx="9" ry="20" transform="rotate(45)" /><ellipse cy="-22" rx="9" ry="20" transform="rotate(90)" /><ellipse cy="-22" rx="9" ry="20" transform="rotate(135)" /><ellipse cy="-22" rx="9" ry="20" transform="rotate(180)" /><ellipse cy="-22" rx="9" ry="20" transform="rotate(225)" /><ellipse cy="-22" rx="9" ry="20" transform="rotate(270)" /><ellipse cy="-22" rx="9" ry="20" transform="rotate(315)" /></g><circle r="9" fill="#c7a876" /></g>
      <g transform="translate(714 172)"><circle r="58" fill="#ead9ba" stroke="#a88a5c" strokeWidth="2" /><circle r="44" fill="none" stroke="#b39466" strokeWidth="1.5" strokeDasharray="3 4" /><g fill="#f4e8d0" stroke="#a88a5c" strokeWidth="1.2"><ellipse cy="-22" rx="9" ry="20" /><ellipse cy="-22" rx="9" ry="20" transform="rotate(45)" /><ellipse cy="-22" rx="9" ry="20" transform="rotate(90)" /><ellipse cy="-22" rx="9" ry="20" transform="rotate(135)" /><ellipse cy="-22" rx="9" ry="20" transform="rotate(180)" /><ellipse cy="-22" rx="9" ry="20" transform="rotate(225)" /><ellipse cy="-22" rx="9" ry="20" transform="rotate(270)" /><ellipse cy="-22" rx="9" ry="20" transform="rotate(315)" /></g><circle r="9" fill="#c7a876" /></g>
      <path fill="#efe3cb" stroke="#bfa274" strokeWidth="12" d="M235 900 V370 A46.3 46.3 0 0 1 251.9 297.3 A44.3 44.3 0 0 1 296.2 241.2 A46.5 46.5 0 0 1 358.6 199.6 A47.7 47.7 0 0 1 429.7 169.9 A45.3 45.3 0 0 1 500 150 A45.3 45.3 0 0 1 570.3 169.9 A47.7 47.7 0 0 1 641.4 199.6 A46.5 46.5 0 0 1 703.8 241.2 A44.3 44.3 0 0 1 748.1 297.3 A46.3 46.3 0 0 1 765 370 V900 Z" />
      <path fill="url(#recessShade)" d="M235 900 V370 A46.3 46.3 0 0 1 251.9 297.3 A44.3 44.3 0 0 1 296.2 241.2 A46.5 46.5 0 0 1 358.6 199.6 A47.7 47.7 0 0 1 429.7 169.9 A45.3 45.3 0 0 1 500 150 A45.3 45.3 0 0 1 570.3 169.9 A47.7 47.7 0 0 1 641.4 199.6 A46.5 46.5 0 0 1 703.8 241.2 A44.3 44.3 0 0 1 748.1 297.3 A46.3 46.3 0 0 1 765 370 V900 Z" />
      <path fill="none" stroke="#f8efdc" strokeWidth="2" d="M223 900 V370 A50 50 0 0 1 241 290" />
      <rect x="270" y="560" width="88" height="300" fill="none" stroke="#d3bf98" strokeWidth="2" /><rect x="642" y="560" width="88" height="300" fill="none" stroke="#d3bf98" strokeWidth="2" />
      <g fill="none" stroke="#4a3620" strokeWidth="3"><circle cx="340" cy="345" r="8" /><circle cx="500" cy="330" r="8" /><circle cx="660" cy="345" r="8" /></g>
      <path fill="url(#carve)" stroke="#a88a5c" strokeWidth="3" d="M382 885 V520 A42.1 42.1 0 0 1 401.6 455 A37.9 37.9 0 0 1 447.4 414.4 A35.5 35.5 0 0 1 500 392 A35.5 35.5 0 0 1 552.6 414.4 A37.9 37.9 0 0 1 598.4 455 A42.1 42.1 0 0 1 618 520 V885 Z" />
      <path fill="none" stroke="#5a4226" strokeWidth="10" d="M410 885 V540 A35.9 35.9 0 0 1 424.9 484.1 A30.6 30.6 0 0 1 459.9 449.2 A27.6 27.6 0 0 1 500 430 A27.6 27.6 0 0 1 540.1 449.2 A30.6 30.6 0 0 1 575.1 484.1 A35.9 35.9 0 0 1 590 540 V885" />
      <rect x="-4000" y="885" width="9000" height="4000" fill="#d4bd96" /><rect x="-4000" y="885" width="9000" height="5" fill="#b89d72" />
      <rect x="110" y="935" width="780" height="4000" fill="#e3d0ae" /><rect x="110" y="935" width="780" height="5" fill="#c4a97e" />
      <rect x="160" y="830" width="60" height="105" fill="url(#carve)" stroke="#a88a5c" strokeWidth="2" /><rect x="780" y="830" width="60" height="105" fill="url(#carve)" stroke="#a88a5c" strokeWidth="2" />
      </g>

      {/* Mughal lantern; hangs from (0,0) */}
      <g id="lantern">
      <circle cy="72" r="70" fill="url(#glowY)" opacity=".8"><animate attributeName="opacity" values=".65;.95;.75;1;.65" dur="2.6s" repeatCount="indefinite" /></circle>
      <circle cy="4" r="4" fill="none" stroke="#d4a548" strokeWidth="2" />
      <path d="M0 8 L4 18 H-4Z" fill="url(#gold)" />
      <path d="M-17 34 C-17 22 -6 18 0 12 C6 18 17 22 17 34Z" fill="url(#gold)" />
      <rect x="-21" y="33" width="42" height="7" rx="2" fill="#a87a2a" />
      <path d="M-18 40 H18 L23 52 V92 L18 100 H-18 L-23 92 V52Z" fill="url(#gold)" />
      <path d="M-13 96 V60 Q-13 50 -7 47 Q-1 50 -1 60 V96Z M1 96 V60 Q1 50 7 47 Q13 50 13 60 V96Z" fill="#fff0bf" />
      <ellipse cx="0" cy="80" rx="5" ry="10" fill="#ffc94a"><animate attributeName="ry" values="10;8;11;9;10" dur="1.2s" repeatCount="indefinite" /></ellipse>
      <path d="M-22 100 H22 L13 111 H-13Z" fill="url(#gold)" />
      <path d="M-6 111 H6 L0 126Z" fill="#a87a2a" />
      </g>

      {/* ivory lily with gold-glitter edges; centre at (0,0) */}
      <g id="lily">
      <g stroke="#c9a35e" strokeWidth="2.4" strokeDasharray="1 4" strokeLinecap="round" fill="url(#ivory)">
      <path d="M0 0 C-30 -30 -34 -80 0 -118 C34 -80 30 -30 0 0Z" transform="rotate(30) scale(.86)" />
      <path d="M0 0 C-30 -30 -34 -80 0 -118 C34 -80 30 -30 0 0Z" transform="rotate(150) scale(.86)" />
      <path d="M0 0 C-30 -30 -34 -80 0 -118 C34 -80 30 -30 0 0Z" transform="rotate(270) scale(.86)" />
      <path d="M0 0 C-30 -30 -34 -80 0 -118 C34 -80 30 -30 0 0Z" />
      <path d="M0 0 C-30 -30 -34 -80 0 -118 C34 -80 30 -30 0 0Z" transform="rotate(120)" />
      <path d="M0 0 C-30 -30 -34 -80 0 -118 C34 -80 30 -30 0 0Z" transform="rotate(240)" />
      </g>
      <g stroke="#e3d5b8" strokeWidth="1.5" fill="none"><path d="M0 -8 V-96" /><path d="M0 -8 V-96" transform="rotate(120)" /><path d="M0 -8 V-96" transform="rotate(240)" /></g>
      <circle r="10" fill="#d8c08a" />
      <g stroke="#9b7a45" strokeWidth="2" fill="#a0763a"><path d="M0 0 L-28 -50" /><path d="M0 0 L-10 -58" /><path d="M0 0 L10 -58" /><path d="M0 0 L28 -50" /><ellipse cx="-28" cy="-52" rx="3" ry="6" stroke="none" /><ellipse cx="-10" cy="-60" rx="3" ry="6" stroke="none" /><ellipse cx="10" cy="-60" rx="3" ry="6" stroke="none" /><ellipse cx="28" cy="-52" rx="3" ry="6" stroke="none" /></g>
      </g>

      {/* phulkari umbrella; hook at (0,-72) */}
      <g id="umbrella">
      <path d="M0 -32 V-62 C0 -76 16 -76 16 -64" fill="none" stroke="#5a3a1a" strokeWidth="4" strokeLinecap="round" />
      <g clipPath="url(#umbClip)">
      <polygon points="0,-32 -110,64 -66,64" fill="#e8358a" /><polygon points="0,-32 -66,64 -22,64" fill="#f7a325" />
      <polygon points="0,-32 -22,64 22,64" fill="#ffd23f" /><polygon points="0,-32 22,64 66,64" fill="#2fa36b" />
      <polygon points="0,-32 66,64 110,64" fill="#e8358a" />
      </g>
      <path d="M-92 38 C-80 4 -40 -12 0 -12 C40 -12 80 4 92 38" fill="none" stroke="#fff7d6" strokeWidth="3" strokeDasharray="2 6" strokeLinecap="round" />
      <path d="M-98 52 C-90 22 -46 6 0 6 C46 6 90 22 98 52" fill="none" stroke="#7a1a4a" strokeWidth="2" strokeDasharray="6 4" />
      <g fill="#fffdf2" stroke="#d4a548" strokeWidth="2"><circle cx="-62" cy="30" r="6" /><circle cx="-22" cy="18" r="6" /><circle cx="22" cy="18" r="6" /><circle cx="62" cy="30" r="6" /><circle cx="-40" cy="46" r="5" /><circle cx="0" cy="40" r="5" /><circle cx="40" cy="46" r="5" /><circle cx="0" cy="-14" r="5" /></g>
      <path d="M-100 60 a10 10 0 0 0 20 0 a10 10 0 0 0 20 0 a10 10 0 0 0 20 0 a10 10 0 0 0 20 0 a10 10 0 0 0 20 0 a10 10 0 0 0 20 0 a10 10 0 0 0 20 0 a10 10 0 0 0 20 0 a10 10 0 0 0 20 0 a10 10 0 0 0 20 0Z" fill="#ffd23f" stroke="#e8358a" strokeWidth="1.5" />
      <g stroke="#e8358a" strokeWidth="2"><path d="M-90 70 V80 M-70 70 V80 M-50 70 V80 M-30 70 V80 M-10 70 V80 M10 70 V80 M30 70 V80 M50 70 V80 M70 70 V80 M90 70 V80" /></g>
      </g>

      {/* dhol; centre (0,0), 200 long */}
      <g id="dhol">
      <path d="M-100 -56 Q0 -72 100 -56 V56 Q0 72 -100 56Z" fill="url(#dholG)" />
      <polyline points="-92,-56 -73,58 -54,-60 -35,61 -16,-62 3,62 22,-61 41,61 60,-59 79,58 92,-56" fill="none" stroke="#efdcb4" strokeWidth="3" />
      <path d="M-82 -60 V60 M82 -60 V60" stroke="#2e1a0a" strokeWidth="5" />
      <path d="M-56 -66 Q-22 0 -56 66" fill="none" stroke="#ffc21a" strokeWidth="13" strokeDasharray="0 14" strokeLinecap="round" />
      <path d="M88 -60 V60" fill="none" stroke="#ffc21a" strokeWidth="12" strokeDasharray="0 13" strokeLinecap="round" />
      <ellipse cx="-100" cy="0" rx="14" ry="56" fill="#cfb27c" stroke="#2e1a0a" strokeWidth="4" />
      <ellipse cx="100" cy="0" rx="20" ry="58" fill="#f2deb0" stroke="#2e1a0a" strokeWidth="5" />
      <ellipse cx="104" cy="0" rx="6" ry="18" fill="#3a2410" />
      </g>

      {/* rattan dome lamp; hangs from (0,0) */}
      <g id="rattan">
      <ellipse cy="98" rx="80" ry="34" fill="url(#glowY)"><animate attributeName="opacity" values=".7;1;.8;1;.7" dur="3s" repeatCount="indefinite" /></ellipse>
      <path d="M-8 0 H8 C42 10 62 50 62 92 H-62 C-62 50 -42 10 -8 0Z" fill="url(#rattanG)" />
      <path d="M-8 0 H8 C42 10 62 50 62 92 H-62 C-62 50 -42 10 -8 0Z" fill="url(#weave)" />
      <path d="M-46 30 H46 M-58 60 H58" stroke="#6a4214" strokeWidth="2" opacity=".6" />
      <rect x="-64" y="89" width="128" height="6" rx="3" fill="#a87532" />
      <ellipse cy="95" rx="58" ry="7" fill="#fff3c8" />
      </g>

      {/* lotus; base at (0,0) */}
      <g id="lotus">
      <g fill="url(#lotusG)" stroke="#e58bb0" strokeWidth="1">
      <path d="M0 0 C-40 -10 -62 -40 -58 -62 C-36 -54 -14 -30 0 0Z" /><path d="M0 0 C40 -10 62 -40 58 -62 C36 -54 14 -30 0 0Z" />
      <path d="M0 0 C-30 -22 -36 -64 -20 -84 C-6 -64 0 -34 0 0Z" /><path d="M0 0 C30 -22 36 -64 20 -84 C6 -64 0 -34 0 0Z" />
      <path d="M0 0 C-14 -30 -12 -76 0 -96 C12 -76 14 -30 0 0Z" />
      </g>
      <ellipse cy="-6" rx="12" ry="5" fill="#f6c94a" />
      </g>

      {/* chhatri pavilion; base centre (0,0) */}
      <g id="gazebo">
      <rect x="-86" y="-20" width="172" height="20" fill="#ecd3d4" stroke="#cfa9ab" />
      <g fill="#faf0f0" stroke="#cfa9ab"><rect x="-70" y="-170" width="12" height="150" /><rect x="-26" y="-170" width="12" height="150" /><rect x="14" y="-170" width="12" height="150" /><rect x="58" y="-170" width="12" height="150" /></g>
      <rect x="-84" y="-184" width="168" height="16" fill="#ecd3d4" stroke="#cfa9ab" />
      <path d="M-76 -184 C-76 -250 76 -250 76 -184Z" fill="#f6e4e4" stroke="#cfa9ab" strokeWidth="1.5" />
      <path d="M-40 -186 C-40 -226 -10 -238 0 -238 M40 -186 C40 -226 10 -238 0 -238 M0 -186 V-238" fill="none" stroke="#d9b6b8" strokeWidth="1.5" />
      <path d="M0 -236 V-256" stroke="#c9a35e" strokeWidth="3" /><circle cy="-258" r="4" fill="#c9a35e" />
      </g>

      <g id="khanda" fill="currentColor" stroke="currentColor">
      <circle cx="50" cy="52" r="20" fill="none" strokeWidth="6" />
      <path d="M50 6 L57 20 V66 H43 V20Z" stroke="none" />
      <rect x="38" y="66" width="24" height="5" stroke="none" /><rect x="47" y="71" width="6" height="12" stroke="none" /><circle cx="50" cy="87" r="4" stroke="none" />
      <path d="M30 88 C8 66 10 34 34 22" fill="none" strokeWidth="5" strokeLinecap="round" />
      <path d="M70 88 C92 66 90 34 66 22" fill="none" strokeWidth="5" strokeLinecap="round" />
      <path d="M22 80 L36 92" fill="none" strokeWidth="4" /><path d="M78 80 L64 92" fill="none" strokeWidth="4" />
      </g>
      </defs>
    </svg>
  )
}

export function WelcomeBack() {
  return (
    <svg className="scene px-back" viewBox="100 0 800 1000" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <path fill="#7a1430" fillRule="evenodd" d="M-4000 -4000 H5000 V5000 H-4000Z M130 4000 V330 A84.5 84.5 0 0 1 191.4 197.9 A96 96 0 0 1 335 115.5 A99.3 99.3 0 0 1 500 70 A99.3 99.3 0 0 1 665 115.5 A96 96 0 0 1 808.6 197.9 A84.5 84.5 0 0 1 870 330 V4000 Z" />
    <path fill="url(#rosette)" fillRule="evenodd" d="M-4000 -4000 H5000 V5000 H-4000Z M130 4000 V330 A84.5 84.5 0 0 1 191.4 197.9 A96 96 0 0 1 335 115.5 A99.3 99.3 0 0 1 500 70 A99.3 99.3 0 0 1 665 115.5 A96 96 0 0 1 808.6 197.9 A84.5 84.5 0 0 1 870 330 V4000 Z" />
    <g clipPath="url(#clipWel)">
    <rect x="100" y="0" width="800" height="1500" fill="url(#velvetShade)" />
    <rect x="100" y="0" width="800" height="1500" filter="url(#crush)" opacity=".22" />
    <rect x="100" y="0" width="800" height="1500" filter="url(#grain)" opacity=".5" />
    </g>
    <path fill="none" stroke="#2a0509" strokeWidth="22" opacity=".45" d="M130 4000 V330 A84.5 84.5 0 0 1 191.4 197.9 A96 96 0 0 1 335 115.5 A99.3 99.3 0 0 1 500 70 A99.3 99.3 0 0 1 665 115.5 A96 96 0 0 1 808.6 197.9 A84.5 84.5 0 0 1 870 330 V4000" transform="translate(0 8)" />
    <path fill="none" stroke="url(#goldH)" strokeWidth="14" d="M130 4000 V330 A84.5 84.5 0 0 1 191.4 197.9 A96 96 0 0 1 335 115.5 A99.3 99.3 0 0 1 500 70 A99.3 99.3 0 0 1 665 115.5 A96 96 0 0 1 808.6 197.9 A84.5 84.5 0 0 1 870 330 V4000" />
    <path fill="none" stroke="#fff3c8" strokeWidth="1.5" opacity=".7" d="M130 4000 V330 A84.5 84.5 0 0 1 191.4 197.9 A96 96 0 0 1 335 115.5 A99.3 99.3 0 0 1 500 70 A99.3 99.3 0 0 1 665 115.5 A96 96 0 0 1 808.6 197.9 A84.5 84.5 0 0 1 870 330 V4000" />
    <g className="sw"><path d="M168 236 V410" stroke="url(#gold)" strokeWidth="2.5" strokeDasharray="6 3" /><use href="#lantern" transform="translate(168 410) scale(1.05)" /></g>
    <g className="sw" style={{ animationDelay: '-1.6s' }}><path d="M188 222 V300" stroke="url(#gold)" strokeWidth="2.5" strokeDasharray="6 3" /><use href="#lantern" transform="translate(188 300) scale(.8)" /></g>
    <g className="sw" style={{ animationDelay: '-.8s' }}><path d="M832 236 V420" stroke="url(#gold)" strokeWidth="2.5" strokeDasharray="6 3" /><use href="#lantern" transform="translate(832 420) scale(1.05)" /></g>
    <g className="sw" style={{ animationDelay: '-2.4s' }}><path d="M812 222 V305" stroke="url(#gold)" strokeWidth="2.5" strokeDasharray="6 3" /><use href="#lantern" transform="translate(812 305) scale(.8)" /></g>
    </svg>
  )
}

export function ShaganBack() {
  return (
    <svg className="scene px-back" viewBox="150 0 700 1000" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <rect x="-4000" y="-4000" width="9000" height="9000" fill="#e5d9c4" />
    <rect x="-4000" y="-4000" width="9000" height="9000" fill="url(#stone)" opacity=".6" />
    <rect x="-400" y="-100" width="1800" height="1600" filter="url(#grain)" opacity=".35" />
    <g clipPath="url(#clipSha)">
    <rect x="150" y="0" width="700" height="1500" fill="url(#velvetShade)" />
    <rect x="150" y="0" width="700" height="1500" filter="url(#crush)" opacity=".22" />
    <rect x="150" y="0" width="700" height="1500" filter="url(#grain)" opacity=".5" />
    <path d="M200 4000 V360 A300 300 0 0 1 800 360 V4000" fill="none" stroke="#1e0306" strokeWidth="30" opacity=".35" />
    </g>
    <path d="M200 4000 V360 A300 300 0 0 1 800 360 V4000" fill="none" stroke="#c9b28c" strokeWidth="2" />
    </svg>
  )
}

export function ShaganFront() {
  return (
    <svg className="scene px-front" viewBox="150 0 700 1000" preserveAspectRatio="xMidYMid meet" aria-hidden="true" style={{ zIndex: '4' }}>
    <g className="sw-c"><use href="#lily" transform="translate(770 120) rotate(-20) scale(1.25)" /></g>
    <g className="sw-c" style={{ animationDelay: '-2s' }}><use href="#lily" transform="translate(860 230) rotate(25) scale(.75)" /></g>
    <g className="sw-c" style={{ animationDelay: '-1s' }}><use href="#lily" transform="translate(220 900) rotate(160) scale(1.35)" /></g>
    <g className="sw-c" style={{ animationDelay: '-3s' }}><use href="#lily" transform="translate(130 790) rotate(200) scale(.8)" /></g>
    </svg>
  )
}

export function JagoBack() {
  return (
    <svg className="scene px-back" viewBox="150 0 700 1000" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <rect x="-4000" y="-4000" width="9000" height="9000" fill="#3c4a22" />
    <rect x="-4000" y="-4000" width="9000" height="9000" fill="url(#paisley)" />
    <path d="M190 4000 V440 C190 420 205 410 225 405 C245 400 250 380 250 360 V120 H750 V360 C750 380 755 400 775 405 C795 410 810 420 810 440 V4000 Z" fill="#f1d3c3" stroke="#6e4e30" strokeWidth="12" />
    <path d="M204 4000 V448 C204 432 215 424 231 419 C256 412 264 392 264 362 V134 H736 V362 C736 392 744 412 769 419 C785 424 796 432 796 448 V4000" fill="none" stroke="#f8e3d7" strokeWidth="2" />
    <g className="sw-slow"><path d="M150 -20 V560" stroke="#e8750e" strokeWidth="22" strokeDasharray="0 20" strokeLinecap="round" /><path d="M150 -20 V560" stroke="#ffc21a" strokeWidth="11" strokeDasharray="0 20" strokeLinecap="round" /></g>
    <g className="sw-slow" style={{ animationDelay: '-2s' }}><path d="M178 -20 V480" stroke="#e8750e" strokeWidth="22" strokeDasharray="0 20" strokeLinecap="round" /><path d="M178 -20 V480" stroke="#ffc21a" strokeWidth="11" strokeDasharray="0 20" strokeLinecap="round" /></g>
    <g className="sw-slow" style={{ animationDelay: '-1s' }}><path d="M822 -20 V480" stroke="#e8750e" strokeWidth="22" strokeDasharray="0 20" strokeLinecap="round" /><path d="M822 -20 V480" stroke="#ffc21a" strokeWidth="11" strokeDasharray="0 20" strokeLinecap="round" /></g>
    <g className="sw-slow" style={{ animationDelay: '-3s' }}><path d="M850 -20 V560" stroke="#e8750e" strokeWidth="22" strokeDasharray="0 20" strokeLinecap="round" /><path d="M850 -20 V560" stroke="#ffc21a" strokeWidth="11" strokeDasharray="0 20" strokeLinecap="round" /></g>
    <g className="sw"><path d="M340 0 V250" stroke="#e8750e" strokeWidth="30" strokeDasharray="0 26" strokeLinecap="round" /><path d="M340 0 V250" stroke="#ffc21a" strokeWidth="16" strokeDasharray="0 26" strokeLinecap="round" /><path d="M332 262 H348 L340 284Z" fill="#d4a548" /></g>
    <g className="sw" style={{ animationDelay: '-1.2s' }}><path d="M500 0 V320" stroke="#e8750e" strokeWidth="34" strokeDasharray="0 28" strokeLinecap="round" /><path d="M500 0 V320" stroke="#ffc21a" strokeWidth="18" strokeDasharray="0 28" strokeLinecap="round" /><path d="M491 334 H509 L500 358Z" fill="#d4a548" /></g>
    <g className="sw" style={{ animationDelay: '-.6s' }}><path d="M660 0 V260" stroke="#e8750e" strokeWidth="30" strokeDasharray="0 26" strokeLinecap="round" /><path d="M660 0 V260" stroke="#ffc21a" strokeWidth="16" strokeDasharray="0 26" strokeLinecap="round" /><path d="M652 272 H668 L660 294Z" fill="#d4a548" /></g>
    <g className="sw"><use href="#umbrella" transform="translate(250 130) rotate(-14) scale(1.05)" /></g>
    <g className="sw" style={{ animationDelay: '-1.5s' }}><use href="#umbrella" transform="translate(420 70) rotate(6)" /></g>
    <g className="sw" style={{ animationDelay: '-.7s' }}><use href="#umbrella" transform="translate(585 80) rotate(-6) scale(1.02)" /></g>
    <g className="sw" style={{ animationDelay: '-2.2s' }}><use href="#umbrella" transform="translate(755 140) rotate(14) scale(1.05)" /></g>
    <g className="bob"><g transform="translate(70 620) scale(.62)">
    <path d="M30 140 C10 180 30 230 80 232 C130 230 150 180 130 140 C120 120 100 115 100 108 H60 C60 115 40 120 30 140Z" fill="#b4522a" />
    <rect x="56" y="94" width="48" height="16" rx="4" fill="#8d3d1d" />
    <path d="M30 162 Q80 180 130 162" fill="none" stroke="#f5c542" strokeWidth="4" /><path d="M26 192 Q80 212 134 192" fill="none" stroke="#e8358a" strokeWidth="4" />
    <path d="M62 94 Q80 106 98 94Z" fill="#d98a3a" /><path className="flame" d="M80 70 C86 80 85 88 80 90 C75 88 74 80 80 70Z" fill="#ffd04a" />
    <path d="M40 92 Q54 104 68 92Z" fill="#d98a3a" /><path className="flame" d="M54 68 C60 78 59 86 54 88 C49 86 48 78 54 68Z" fill="#ffd04a" />
    <path d="M92 92 Q106 104 120 92Z" fill="#d98a3a" /><path className="flame" d="M106 68 C112 78 111 86 106 88 C101 86 100 78 106 68Z" fill="#ffd04a" />
    </g></g>
    <g className="bob" style={{ animationDelay: '-1.2s' }}><g transform="translate(830 640) scale(.58)">
    <path d="M30 140 C10 180 30 230 80 232 C130 230 150 180 130 140 C120 120 100 115 100 108 H60 C60 115 40 120 30 140Z" fill="#b4522a" />
    <rect x="56" y="94" width="48" height="16" rx="4" fill="#8d3d1d" />
    <path d="M30 162 Q80 180 130 162" fill="none" stroke="#f5c542" strokeWidth="4" /><path d="M26 192 Q80 212 134 192" fill="none" stroke="#e8358a" strokeWidth="4" />
    <path d="M62 94 Q80 106 98 94Z" fill="#d98a3a" /><path className="flame" d="M80 70 C86 80 85 88 80 90 C75 88 74 80 80 70Z" fill="#ffd04a" />
    <path d="M40 92 Q54 104 68 92Z" fill="#d98a3a" /><path className="flame" d="M54 68 C60 78 59 86 54 88 C49 86 48 78 54 68Z" fill="#ffd04a" />
    <path d="M92 92 Q106 104 120 92Z" fill="#d98a3a" /><path className="flame" d="M106 68 C112 78 111 86 106 88 C101 86 100 78 106 68Z" fill="#ffd04a" />
    </g></g>
    </svg>
  )
}

export function JagoFront() {
  return (
    <svg className="scene px-front" viewBox="150 0 700 1000" preserveAspectRatio="xMidYMid meet" aria-hidden="true" style={{ zIndex: '4' }}>
    <g className="thump"><use href="#dhol" transform="translate(270 925) rotate(-24) scale(1.15)" /></g>
    <g className="thump" style={{ animationDelay: '-.3s' }}><use href="#dhol" transform="translate(500 960) rotate(6) scale(1.2)" /></g>
    <g className="thump" style={{ animationDelay: '-.6s' }}><use href="#dhol" transform="translate(740 930) rotate(20) scale(1.15)" /></g>
    <g transform="translate(745 820)">
    <path d="M-62 0 H62 C58 40 32 58 0 58 C-32 58 -58 40 -62 0Z" fill="url(#gold)" />
    <path d="M-50 22 H50" stroke="#a87a2a" strokeWidth="3" strokeDasharray="6 4" />
    <g fill="none" strokeWidth="5"><ellipse cx="-24" cy="-4" rx="26" ry="9" stroke="#e8358a" transform="rotate(-10 -24 -4)" /><ellipse cx="10" cy="-8" rx="26" ry="9" stroke="#2fa36b" transform="rotate(8 10 -8)" /><ellipse cx="28" cy="-2" rx="24" ry="8" stroke="#2b6cd4" /><ellipse cx="-6" cy="-14" rx="24" ry="8" stroke="#f7a325" transform="rotate(-4 -6 -14)" /></g>
    <ellipse cx="0" cy="0" rx="62" ry="10" fill="none" stroke="#f7e3a3" strokeWidth="4" />
    </g>
    </svg>
  )
}

export function GardenLamps() {
  return (
    <svg className="px-back" viewBox="0 0 1440 440" preserveAspectRatio="xMidYMin slice" aria-hidden="true" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '48%', overflow: 'visible', pointerEvents: 'none' }}>
    <g className="sw-slow"><path d="M230 0 V200" stroke="#8a7a5a" strokeWidth="2" /><use href="#rattan" transform="translate(230 200) scale(1.15)" /></g>
    <g className="sw-slow" style={{ animationDelay: '-1s' }}><path d="M400 0 V130" stroke="#8a7a5a" strokeWidth="2" /><use href="#rattan" transform="translate(400 130)" /></g>
    <g className="sw-slow" style={{ animationDelay: '-2s' }}><path d="M560 0 V230" stroke="#8a7a5a" strokeWidth="2" /><use href="#rattan" transform="translate(560 230) scale(.9)" /></g>
    <g className="sw-slow" style={{ animationDelay: '-3s' }}><path d="M880 0 V215" stroke="#8a7a5a" strokeWidth="2" /><use href="#rattan" transform="translate(880 215) scale(.95)" /></g>
    <g className="sw-slow" style={{ animationDelay: '-.5s' }}><path d="M1040 0 V135" stroke="#8a7a5a" strokeWidth="2" /><use href="#rattan" transform="translate(1040 135) scale(1.05)" /></g>
    <g className="sw-slow" style={{ animationDelay: '-2.5s' }}><path d="M1210 0 V205" stroke="#8a7a5a" strokeWidth="2" /><use href="#rattan" transform="translate(1210 205) scale(1.15)" /></g>
    <g fill="#24502c"><ellipse cx="0" cy="0" rx="120" ry="40" /><ellipse cx="200" cy="-6" rx="140" ry="34" /><ellipse cx="420" cy="0" rx="130" ry="30" /><ellipse cx="720" cy="-8" rx="200" ry="34" /><ellipse cx="1020" cy="0" rx="140" ry="32" /><ellipse cx="1240" cy="-6" rx="150" ry="36" /><ellipse cx="1440" cy="0" rx="120" ry="42" /></g>
    <g fill="#f7f1e2"><circle cx="40" cy="22" r="3" /><circle cx="120" cy="30" r="2.5" /><circle cx="230" cy="18" r="3" /><circle cx="330" cy="24" r="2.5" /><circle cx="470" cy="20" r="3" /><circle cx="600" cy="22" r="2.5" /><circle cx="720" cy="24" r="3" /><circle cx="840" cy="20" r="2.5" /><circle cx="960" cy="26" r="3" /><circle cx="1080" cy="20" r="2.5" /><circle cx="1190" cy="26" r="3" /><circle cx="1320" cy="24" r="2.5" /><circle cx="1410" cy="30" r="3" /></g>
    </svg>
  )
}

export function GardenFoliageLeft() {
  return (
    <svg className="px-front" viewBox="0 0 400 500" aria-hidden="true" style={{ position: 'absolute', left: '0', bottom: '0', width: 'clamp(150px, 28vw, 440px)', zIndex: '4', pointerEvents: 'none', overflow: 'visible' }}>
    <g className="sw-base" style={{ animationDelay: '-1s' }}><g fill="#173d22"><path transform="translate(70 500) rotate(8) scale(1.15)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /><path transform="translate(40 500) rotate(40) scale(1.05)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /><path transform="translate(10 500) rotate(68) scale(0.95)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /><path transform="translate(90 500) rotate(-22) scale(0.9)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /></g></g><g className="sw-base" style={{ animationDelay: '-2.5s' }}><g fill="url(#leafG)" stroke="#143820" strokeWidth="1.5"><path transform="translate(20 500) rotate(-8) scale(1)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /><path transform="translate(30 500) rotate(24) scale(0.95)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /><path transform="translate(10 500) rotate(52) scale(0.85)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /><path transform="translate(0 500) rotate(80) scale(0.7)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /><path transform="translate(40 500) rotate(-34) scale(0.75)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /></g><g fill="none" stroke="#9fd0a8" strokeWidth="2" opacity=".45"><path transform="translate(20 500) rotate(-8) scale(1)" d="M0 -6 V-226" /><path transform="translate(30 500) rotate(24) scale(0.95)" d="M0 -6 V-226" /><path transform="translate(10 500) rotate(52) scale(0.85)" d="M0 -6 V-226" /><path transform="translate(0 500) rotate(80) scale(0.7)" d="M0 -6 V-226" /><path transform="translate(40 500) rotate(-34) scale(0.75)" d="M0 -6 V-226" /></g></g>
    <g fill="#f8f3e6"><circle cx="60" cy="420" r="4" /><circle cx="80" cy="380" r="3" /><circle cx="100" cy="340" r="3.5" /><circle cx="130" cy="400" r="3" /><circle cx="150" cy="300" r="4" /><circle cx="170" cy="360" r="3" /><circle cx="200" cy="320" r="3.5" /><circle cx="110" cy="450" r="3" /><circle cx="40" cy="360" r="3" /><circle cx="70" cy="300" r="3.5" /><circle cx="220" cy="280" r="3" /><circle cx="240" cy="340" r="3.5" /><circle cx="180" cy="420" r="3" /><circle cx="90" cy="250" r="3" /><circle cx="130" cy="260" r="2.5" /><circle cx="260" cy="300" r="2.5" /></g>
    <g transform="translate(300 380) scale(.75)"><use href="#lantern" /></g>
    </svg>
  )
}

export function GardenFoliageRight() {
  return (
    <svg className="px-front" viewBox="0 0 400 500" aria-hidden="true" style={{ position: 'absolute', right: '0', bottom: '0', width: 'clamp(150px, 28vw, 440px)', zIndex: '4', pointerEvents: 'none', overflow: 'visible' }}><g transform="translate(400 0) scale(-1 1)">
    <g className="sw-base" style={{ animationDelay: '-1s' }}><g fill="#173d22"><path transform="translate(70 500) rotate(8) scale(1.15)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /><path transform="translate(40 500) rotate(40) scale(1.05)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /><path transform="translate(10 500) rotate(68) scale(0.95)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /><path transform="translate(90 500) rotate(-22) scale(0.9)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /></g></g><g className="sw-base" style={{ animationDelay: '-2.5s' }}><g fill="url(#leafG)" stroke="#143820" strokeWidth="1.5"><path transform="translate(20 500) rotate(-8) scale(1)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /><path transform="translate(30 500) rotate(24) scale(0.95)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /><path transform="translate(10 500) rotate(52) scale(0.85)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /><path transform="translate(0 500) rotate(80) scale(0.7)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /><path transform="translate(40 500) rotate(-34) scale(0.75)" d="M0 0 C-60 -70 -48 -190 0 -240 C48 -190 60 -70 0 0Z" /></g><g fill="none" stroke="#9fd0a8" strokeWidth="2" opacity=".45"><path transform="translate(20 500) rotate(-8) scale(1)" d="M0 -6 V-226" /><path transform="translate(30 500) rotate(24) scale(0.95)" d="M0 -6 V-226" /><path transform="translate(10 500) rotate(52) scale(0.85)" d="M0 -6 V-226" /><path transform="translate(0 500) rotate(80) scale(0.7)" d="M0 -6 V-226" /><path transform="translate(40 500) rotate(-34) scale(0.75)" d="M0 -6 V-226" /></g></g>
    <g fill="#f8f3e6"><circle cx="60" cy="420" r="4" /><circle cx="80" cy="380" r="3" /><circle cx="100" cy="340" r="3.5" /><circle cx="130" cy="400" r="3" /><circle cx="150" cy="300" r="4" /><circle cx="170" cy="360" r="3" /><circle cx="200" cy="320" r="3.5" /><circle cx="110" cy="450" r="3" /><circle cx="40" cy="360" r="3" /><circle cx="70" cy="300" r="3.5" /><circle cx="220" cy="280" r="3" /><circle cx="240" cy="340" r="3.5" /><circle cx="180" cy="420" r="3" /><circle cx="90" cy="250" r="3" /></g>
    <g transform="translate(300 380) scale(.75)"><use href="#lantern" /></g>
    </g></svg>
  )
}

export function AnandBack() {
  return (
    <svg className="scene px-back" viewBox="150 0 700 1000" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <rect x="-4000" y="-4000" width="9000" height="9000" fill="#cde1ee" />
    <g filter="url(#soft)"><circle cx="120" cy="200" r="220" fill="#b3d2e6" /><circle cx="900" cy="300" r="240" fill="#e7f2f2" /><circle cx="100" cy="700" r="200" fill="#e6f1f4" /><circle cx="880" cy="760" r="220" fill="#bcd8e8" /></g>
    <rect x="-4000" y="-4000" width="9000" height="9000" fill="url(#scallop)" />
    <path fill="#a7c9da" stroke="#86b0c4" strokeWidth="2" d="M172 4000 V390 A75.7 75.7 0 0 1 203.9 272.1 A72.2 72.2 0 0 1 284.3 187.9 A74.7 74.7 0 0 1 390.6 131.2 A71.2 71.2 0 0 1 500 96 A71.2 71.2 0 0 1 609.4 131.2 A74.7 74.7 0 0 1 715.7 187.9 A72.2 72.2 0 0 1 796.1 272.1 A75.7 75.7 0 0 1 828 390 V4000 Z" />
    <path fill="none" stroke="#f7f0e2" strokeWidth="3" strokeDasharray="16 6 3 6" d="M188 4000 V397 A71.8 71.8 0 0 1 218.3 285.1 A68.6 68.6 0 0 1 294.8 205.2 A71 71 0 0 1 395.9 151.4 A67.7 67.7 0 0 1 500 118 A67.7 67.7 0 0 1 604.1 151.4 A71 71 0 0 1 705.2 205.2 A68.6 68.6 0 0 1 781.7 285.1 A71.8 71.8 0 0 1 812 397 V4000" />
    <path fill="none" stroke="#f3a6b3" strokeWidth="7" strokeDasharray="0 38" strokeLinecap="round" d="M188 4000 V397 A71.8 71.8 0 0 1 218.3 285.1 A68.6 68.6 0 0 1 294.8 205.2 A71 71 0 0 1 395.9 151.4 A67.7 67.7 0 0 1 500 118 A67.7 67.7 0 0 1 604.1 151.4 A71 71 0 0 1 705.2 205.2 A68.6 68.6 0 0 1 781.7 285.1 A71.8 71.8 0 0 1 812 397 V4000" />
    <path fill="#fbf6ec" stroke="#86b0c4" strokeWidth="2" d="M204 4000 V404 A68 68 0 0 1 232.8 298.2 A65 65 0 0 1 305.4 222.5 A67.3 67.3 0 0 1 401.3 171.6 A64.3 64.3 0 0 1 500 140 A64.3 64.3 0 0 1 598.7 171.6 A67.3 67.3 0 0 1 694.6 222.5 A65 65 0 0 1 767.2 298.2 A68 68 0 0 1 796 404 V4000 Z" />
    <rect x="-4000" y="880" width="9000" height="4000" fill="url(#tiles)" />
    <rect x="-4000" y="876" width="9000" height="6" fill="#d9a593" />
    <text x="500" y="640" textAnchor="middle" style={{ fontFamily: 'var(--font-gurmukhi), serif' }} fontSize="420" fill="#b08a3e" opacity=".07">ੴ</text>
    <g className="sw"><path d="M120 -20 V170" stroke="#c9a35e" strokeWidth="2" /><g fill="#f4a7b9"><circle cx="112" cy="40" r="7" /><circle cx="128" cy="62" r="6" /><circle cx="110" cy="88" r="7" /><circle cx="130" cy="112" r="5" /></g><use href="#lantern" transform="translate(120 170) scale(1.1)" /></g>
    <g className="sw" style={{ animationDelay: '-1.4s' }}><path d="M70 -20 V100" stroke="#c9a35e" strokeWidth="2" /><g fill="#f7c1cf"><circle cx="62" cy="30" r="6" /><circle cx="78" cy="56" r="7" /></g><use href="#lantern" transform="translate(70 100) scale(.85)" /></g>
    <g className="sw" style={{ animationDelay: '-.7s' }}><path d="M880 -20 V170" stroke="#c9a35e" strokeWidth="2" /><g fill="#f4a7b9"><circle cx="872" cy="40" r="7" /><circle cx="888" cy="62" r="6" /><circle cx="870" cy="88" r="7" /><circle cx="890" cy="112" r="5" /></g><use href="#lantern" transform="translate(880 170) scale(1.1)" /></g>
    <g className="sw" style={{ animationDelay: '-2.1s' }}><path d="M930 -20 V100" stroke="#c9a35e" strokeWidth="2" /><g fill="#f7c1cf"><circle cx="922" cy="30" r="6" /><circle cx="938" cy="56" r="7" /></g><use href="#lantern" transform="translate(930 100) scale(.85)" /></g>
    </svg>
  )
}

export function AnandFront() {
  return (
    <svg className="scene px-front" viewBox="150 0 700 1000" preserveAspectRatio="xMidYMid meet" aria-hidden="true" style={{ zIndex: '4' }}>
    <g className="sw-base"><path d="M150 880 C130 760 150 660 200 600 C210 700 190 790 170 880Z" fill="url(#bananaG)" /><path d="M180 880 C220 780 280 720 330 700 C290 770 240 830 200 880Z" fill="url(#bananaG)" /></g>
    <use href="#gazebo" transform="translate(205 880) scale(.72)" />
    <g className="sw-base" style={{ animationDelay: '-2s' }}><path d="M850 880 C870 760 850 660 800 600 C790 700 810 790 830 880Z" fill="url(#bananaG)" /><path d="M820 880 C780 780 720 720 670 700 C710 770 760 830 800 880Z" fill="url(#bananaG)" /></g>
    <use href="#gazebo" transform="translate(795 880) scale(.72)" />
    <g fill="#7fbf8f" stroke="#5e9e6e" strokeWidth="2"><ellipse cx="230" cy="975" rx="70" ry="20" /><ellipse cx="400" cy="990" rx="60" ry="17" /><ellipse cx="600" cy="988" rx="64" ry="18" /><ellipse cx="780" cy="975" rx="70" ry="20" /><ellipse cx="120" cy="1000" rx="60" ry="17" /><ellipse cx="890" cy="1000" rx="60" ry="17" /></g>
    <g className="sw-base"><use href="#lotus" transform="translate(240 970) scale(.85)" /></g>
    <g className="sw-base" style={{ animationDelay: '-1s' }}><use href="#lotus" transform="translate(150 990) scale(.6)" /></g>
    <g className="sw-base" style={{ animationDelay: '-2s' }}><use href="#lotus" transform="translate(770 970) scale(.85)" /></g>
    <g className="sw-base" style={{ animationDelay: '-3s' }}><use href="#lotus" transform="translate(860 992) scale(.6)" /></g>
    <g className="sw-base" style={{ animationDelay: '-1.5s' }}><use href="#lotus" transform="translate(500 1000) scale(.55)" /></g>
    </svg>
  )
}

export function TunnelBack() {
  return (
    <svg className="scene px-back" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <rect x="-4000" y="-4000" width="9000" height="9000" fill="#000" />
    <g fill="none" strokeLinecap="round" stroke="#ffe2a8">
    <path className="twinkle" style={{ animationDelay: '-.2s' }} strokeWidth="15" strokeDasharray="0 36" opacity=".55" d="M-374 1600 V176 C-374 -401 185 -566 500 -648 C815 -566 1374 -401 1374 176 V1600" />
    <path className="twinkle" style={{ animationDelay: '-.9s' }} strokeWidth="13" strokeDasharray="0 31" opacity=".6" d="M-222 1600 V288 C-222 -210 240 -353 500 -424 C760 -353 1222 -210 1222 288 V1600" />
    <path className="twinkle" style={{ animationDelay: '-1.4s' }} strokeWidth="11" strokeDasharray="0 26" opacity=".65" d="M-89 1600 V386 C-89 -44 288 -167 500 -228 C712 -167 1089 -44 1089 386 V1600" />
    <path className="twinkle" style={{ animationDelay: '-.5s' }} strokeWidth="9" strokeDasharray="0 22" opacity=".75" d="M25 1600 V470 C25 99 329 -7 500 -60 C671 -7 975 99 975 470 V1600" />
    <path className="twinkle" style={{ animationDelay: '-1.1s' }} strokeWidth="7.5" strokeDasharray="0 18" opacity=".85" d="M120 1600 V540 C120 218 363 126 500 80 C637 126 880 218 880 540 V1600" />
    <path className="twinkle" style={{ animationDelay: '-.3s' }} strokeWidth="6.9" strokeDasharray="0 16.5" d="M160 1600 V569 C160 268 378 182 500 139 C622 182 840 268 840 569 V1600" />
    <path className="twinkle" style={{ animationDelay: '-1.7s' }} strokeWidth="6.2" strokeDasharray="0 15" d="M200 1600 V599 C200 318 392 238 500 198 C608 238 800 318 800 599 V1600" />
    <path className="twinkle" style={{ animationDelay: '-.8s' }} strokeWidth="5.6" strokeDasharray="0 13.6" d="M240 1600 V628 C240 368 406 294 500 256 C594 294 760 368 760 628 V1600" />
    <path className="twinkle" style={{ animationDelay: '-1.3s' }} strokeWidth="5" strokeDasharray="0 12" d="M280 1600 V658 C280 418 421 349 500 315 C579 349 720 418 720 658 V1600" />
    <path className="twinkle" style={{ animationDelay: '-.1s' }} strokeWidth="4.3" strokeDasharray="0 10.6" d="M320 1600 V687 C320 468 435 405 500 374 C565 405 680 468 680 687 V1600" />
    <path className="twinkle" style={{ animationDelay: '-1.5s' }} strokeWidth="3.7" strokeDasharray="0 9.2" d="M359 1600 V716 C359 518 449 461 500 433 C551 461 641 518 641 716 V1600" />
    <path className="twinkle" style={{ animationDelay: '-.6s' }} strokeWidth="3.1" strokeDasharray="0 7.7" d="M399 1600 V746 C399 568 464 517 500 492 C536 517 601 568 601 746 V1600" />
    </g>
    <path d="M439 1000 V775 C439 618 478 573 500 550 C522 573 561 618 561 775 V1000Z" fill="#050505" />
    <path d="M60 1600 L462 790 H538 L940 1600Z" fill="#000" />
    <ellipse cx="500" cy="420" rx="300" ry="260" fill="url(#glowY)" opacity=".12" />
    <g className="sw-slow">
    <path d="M500 -400 V40" stroke="#b8862f" strokeWidth="3" />
    <ellipse cx="500" cy="190" rx="220" ry="90" fill="url(#glowY)" opacity=".35" />
    <rect x="494" y="40" width="12" height="150" fill="url(#gold)" />
    <circle cx="500" cy="60" r="12" fill="url(#gold)" /><circle cx="500" cy="120" r="16" fill="url(#gold)" /><circle cx="500" cy="190" r="20" fill="url(#gold)" />
    <g fill="none" stroke="url(#goldH)" strokeWidth="5" strokeLinecap="round">
    <path d="M500 180 C460 230 330 230 320 170" /><path d="M500 180 C540 230 670 230 680 170" />
    <path d="M500 180 C470 220 400 225 390 185" /><path d="M500 180 C530 220 600 225 610 185" />
    <path d="M500 180 C480 250 260 240 250 180" /><path d="M500 180 C520 250 740 240 750 180" />
    <path d="M500 110 C470 150 400 150 395 115" /><path d="M500 110 C530 150 600 150 605 115" />
    <path d="M500 110 C480 160 330 150 330 110" /><path d="M500 110 C520 160 670 150 670 110" />
    </g>
    <g fill="url(#gold)"><circle cx="250" cy="178" r="6" /><circle cx="320" cy="168" r="6" /><circle cx="390" cy="183" r="6" /><circle cx="610" cy="183" r="6" /><circle cx="680" cy="168" r="6" /><circle cx="750" cy="178" r="6" /><circle cx="330" cy="108" r="5" /><circle cx="395" cy="113" r="5" /><circle cx="605" cy="113" r="5" /><circle cx="670" cy="108" r="5" /></g>
    <g fill="#fffaf0"><rect x="247" y="156" width="6" height="18" /><rect x="317" y="146" width="6" height="18" /><rect x="387" y="161" width="6" height="18" /><rect x="607" y="161" width="6" height="18" /><rect x="677" y="146" width="6" height="18" /><rect x="747" y="156" width="6" height="18" /><rect x="327" y="88" width="6" height="16" /><rect x="392" y="93" width="6" height="16" /><rect x="602" y="93" width="6" height="16" /><rect x="667" y="88" width="6" height="16" /></g>
    <g fill="#ffd36b"><ellipse className="flame" cx="250" cy="150" rx="3" ry="6" /><ellipse className="flame" cx="320" cy="140" rx="3" ry="6" /><ellipse className="flame" cx="390" cy="155" rx="3" ry="6" /><ellipse className="flame" cx="610" cy="155" rx="3" ry="6" /><ellipse className="flame" cx="680" cy="140" rx="3" ry="6" /><ellipse className="flame" cx="750" cy="150" rx="3" ry="6" /><ellipse className="flame" cx="330" cy="83" rx="2.6" ry="5" /><ellipse className="flame" cx="395" cy="88" rx="2.6" ry="5" /><ellipse className="flame" cx="605" cy="88" rx="2.6" ry="5" /><ellipse className="flame" cx="670" cy="83" rx="2.6" ry="5" /></g>
    <g fill="none" stroke="#fdf6e6" strokeWidth="3" strokeDasharray="0 7" strokeLinecap="round">
    <path d="M250 182 Q285 225 320 172" /><path d="M320 172 Q355 225 390 187" /><path d="M390 187 Q445 250 500 200" /><path d="M500 200 Q555 250 610 187" /><path d="M610 187 Q645 225 680 172" /><path d="M680 172 Q715 225 750 182" />
    <path d="M280 205 Q390 300 500 260 Q610 300 720 205" />
    </g>
    <g className="twinkle" fill="#ffffff"><path d="M250 186 l-4 12 4 8 4 -8z" /><path d="M320 176 l-4 12 4 8 4 -8z" /><path d="M390 191 l-4 12 4 8 4 -8z" /><path d="M610 191 l-4 12 4 8 4 -8z" /><path d="M680 176 l-4 12 4 8 4 -8z" /><path d="M750 186 l-4 12 4 8 4 -8z" /><path d="M500 210 l-7 20 7 26 7 -26z" /><path d="M440 238 l-4 12 4 8 4 -8z" /><path d="M560 238 l-4 12 4 8 4 -8z" /><path d="M340 230 l-3 10 3 7 3 -7z" /><path d="M660 230 l-3 10 3 7 3 -7z" /></g>
    </g>
    </svg>
  )
}

export function TajSkyline() {
  return (
    <svg viewBox="0 0 1200 470" aria-hidden="true" style={{ marginTop: 'auto', width: '100%', maxWidth: '1400px', display: 'block' }}>
    <g id="taj" fill="#fbe9dc" stroke="#c99f86" strokeWidth="1.5">
    <rect x="140" y="380" width="920" height="30" />
    <polygon points="231,380 235,175 255,175 259,380" /><rect x="227" y="300" width="36" height="6" /><rect x="227" y="235" width="36" height="6" /><rect x="229" y="160" width="32" height="15" /><path d="M227 160 Q245 126 263 160Z" />
    <polygon points="941,380 945,175 965,175 969,380" /><rect x="937" y="300" width="36" height="6" /><rect x="937" y="235" width="36" height="6" /><rect x="939" y="160" width="32" height="15" /><path d="M937 160 Q955 126 973 160Z" />
    <polygon points="156,380 161,150 183,150 188,380" /><rect x="152" y="300" width="40" height="7" /><rect x="152" y="225" width="40" height="7" /><rect x="154" y="133" width="36" height="17" /><path d="M152 133 Q172 95 192 133Z" />
    <polygon points="1012,380 1017,150 1039,150 1044,380" /><rect x="1008" y="300" width="40" height="7" /><rect x="1008" y="225" width="40" height="7" /><rect x="1010" y="133" width="36" height="17" /><path d="M1008 133 Q1028 95 1048 133Z" />
    <rect x="350" y="246" width="34" height="134" /><rect x="816" y="246" width="34" height="134" />
    <rect x="380" y="226" width="440" height="154" />
    <rect x="418" y="200" width="44" height="26" /><path d="M414 200 Q440 162 466 200Z" />
    <rect x="738" y="200" width="44" height="26" /><path d="M734 200 Q760 162 786 200Z" />
    <rect x="520" y="186" width="160" height="40" />
    <path d="M520 186 C494 156 490 106 530 78 C565 54 590 44 600 18 C610 44 635 54 670 78 C710 106 706 156 680 186Z" />
    <path d="M525 222 V300 Q525 248 600 236 Q675 248 675 300 V380 H525Z" fill="none" />
    <path d="M548 380 V302 Q548 262 600 250 Q652 262 652 302 V380Z" fill="#e2c3b0" />
    <path d="M405 300 V270 Q405 248 425 242 Q445 248 445 270 V300Z" fill="#e2c3b0" /><path d="M405 372 V342 Q405 320 425 314 Q445 320 445 342 V372Z" fill="#e2c3b0" />
    <path d="M465 300 V270 Q465 248 485 242 Q505 248 505 270 V300Z" fill="#e2c3b0" /><path d="M465 372 V342 Q465 320 485 314 Q505 320 505 342 V372Z" fill="#e2c3b0" />
    <path d="M695 300 V270 Q695 248 715 242 Q735 248 735 270 V300Z" fill="#e2c3b0" /><path d="M695 372 V342 Q695 320 715 314 Q735 320 735 342 V372Z" fill="#e2c3b0" />
    <path d="M755 300 V270 Q755 248 775 242 Q795 248 795 270 V300Z" fill="#e2c3b0" /><path d="M755 372 V342 Q755 320 775 314 Q795 320 795 342 V372Z" fill="#e2c3b0" />
    <line x1="600" y1="18" x2="600" y2="0" /><line x1="440" y1="162" x2="440" y2="150" /><line x1="760" y1="162" x2="760" y2="150" />
    </g>
    <rect x="0" y="410" width="1200" height="60" fill="#5b4a7a" />
    <use href="#taj" transform="translate(0 820) scale(1 -1)" opacity=".22" />
    <rect x="0" y="410" width="1200" height="60" fill="#3b2f5e" opacity=".5" />
    </svg>
  )
}
