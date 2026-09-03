import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { IconPin } from "@/components/ui/icons";
import { site } from "@/config/site";

const towns = [
  { name: "Ely", x: 192, y: 62, label: true },
  { name: "Newmarket", x: 322, y: 152, label: true },
  { name: "St Ives", x: 108, y: 125, label: false },
  { name: "Huntingdon", x: 65, y: 90, label: true },
  { name: "Royston", x: 168, y: 322, label: true },
  { name: "Saffron Walden", x: 298, y: 292, label: false },
  { name: "Haverhill", x: 335, y: 252, label: false },
  { name: "St Neots", x: 40, y: 178, label: true },
];

const cx = 200;
const cy = 182;

export function ServiceArea() {
  return (
    <Section tone="ink">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow text-plum-light">Where we work</p>
          <h2 className="mt-3 text-h2 text-white">
            Covering {site.serviceArea.primary} and{" "}
            <span className="text-plum-light">the towns around it</span>
          </h2>
          <p className="measure mt-4 text-white/70">
            Based in {site.serviceArea.primary}, we cover homes within about{" "}
            {site.serviceArea.radiusMiles} miles &mdash; across Cambridgeshire and into the bordering
            counties. If you&rsquo;re nearby and not listed, just ask.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {[site.serviceArea.primary, ...site.serviceArea.towns].map((town) => (
              <li
                key={town}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.88rem] text-white/85"
              >
                <IconPin className="h-4 w-4 text-plum-light" />
                {town}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <ButtonLink href="/get-a-quote" size="lg">
              Check we cover you
            </ButtonLink>
          </div>
        </div>

        <div aria-hidden="true" className="relative mx-auto hidden w-full max-w-md lg:block">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <defs>
              <radialGradient id="sa-glow" cx="0.5" cy="0.46" r="0.45">
                <stop offset="0%" stopColor="rgba(106,33,83,0.2)" />
                <stop offset="60%" stopColor="rgba(106,33,83,0.06)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="sa-center" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="rgba(194,116,158,0.5)" />
                <stop offset="100%" stopColor="rgba(194,116,158,0)" />
              </radialGradient>
              <filter id="sa-blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
              </filter>
            </defs>

            {/* Background glow */}
            <ellipse cx={cx} cy={cy} rx="185" ry="180" fill="url(#sa-glow)" />

            {/* Organic terrain contours — slightly irregular ellipses */}
            <ellipse cx={cx} cy={cy + 4} rx="172" ry="165" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
            <ellipse cx={cx + 3} cy={cy - 2} rx="138" ry="130" stroke="white" strokeOpacity="0.06" strokeWidth="1" transform="rotate(-3 200 182)" />
            <ellipse cx={cx - 2} cy={cy + 3} rx="102" ry="95" stroke="white" strokeOpacity="0.07" strokeWidth="1" transform="rotate(4 200 182)" />

            {/* Service radius — dashed */}
            <ellipse
              cx={cx}
              cy={cy + 2}
              rx="155"
              ry="148"
              stroke="rgba(194,116,158,0.3)"
              strokeWidth="1"
              strokeDasharray="6 4"
              transform="rotate(-2 200 184)"
            />

            {/* Road-like connection lines from Cambridge to towns */}
            {towns.map((t) => {
              const mx = cx + (t.x - cx) * 0.45 + (t.y > cy ? -8 : 6);
              const my = cy + (t.y - cy) * 0.45 + (t.x > cx ? -5 : 5);
              return (
                <path
                  key={t.name}
                  d={`M${cx},${cy} Q${mx},${my} ${t.x},${t.y}`}
                  stroke="white"
                  strokeOpacity="0.07"
                  strokeWidth="1"
                />
              );
            })}

            {/* Subtle secondary connecting roads between nearby towns */}
            <path d={`M${108},${125} Q${85},${108} ${65},${90}`} stroke="white" strokeOpacity="0.04" strokeWidth="0.75" />
            <path d={`M${298},${292} Q${318},${272} ${335},${252}`} stroke="white" strokeOpacity="0.04" strokeWidth="0.75" />
            <path d={`M${65},${90} Q${50},${135} ${40},${178}`} stroke="white" strokeOpacity="0.04" strokeWidth="0.75" />

            {/* Town markers */}
            {towns.map((t) => (
              <g key={t.name}>
                <circle cx={t.x} cy={t.y} r="5" fill="rgba(255,255,255,0.08)" />
                <circle cx={t.x} cy={t.y} r="3" fill="rgba(255,255,255,0.5)" />
                {t.label && (
                  <text
                    x={t.x + (t.x > cx ? 10 : -10)}
                    y={t.y + (t.y > cy ? 14 : -8)}
                    textAnchor={t.x > cx ? "start" : "end"}
                    fill="rgba(255,255,255,0.35)"
                    fontSize="10"
                    fontFamily="var(--font-sans)"
                  >
                    {t.name}
                  </text>
                )}
              </g>
            ))}

            {/* Cambridge — prominent marker */}
            <circle cx={cx} cy={cy} r="22" fill="rgba(106,33,83,0.15)" />
            <circle cx={cx} cy={cy} r="14" fill="rgba(106,33,83,0.2)" stroke="rgba(194,116,158,0.25)" strokeWidth="1" />
            <circle cx={cx} cy={cy} r="6" fill="rgba(194,116,158,0.8)" />
            <circle cx={cx} cy={cy} r="3" fill="white" fillOpacity="0.9" />

            {/* Cambridge label */}
            <text
              x={cx}
              y={cy - 30}
              textAnchor="middle"
              fill="white"
              fillOpacity="0.85"
              fontSize="13"
              fontWeight="600"
              fontFamily="var(--font-display)"
              letterSpacing="0.03em"
            >
              Cambridge
            </text>

            {/* Radius label */}
            <text
              x={cx + 112}
              y={cy - 126}
              fill="rgba(194,116,158,0.4)"
              fontSize="9"
              fontFamily="var(--font-sans)"
              transform="rotate(-12 312 56)"
            >
              ~{site.serviceArea.radiusMiles} mi
            </text>

            {/* Tiny decorative crosses at cardinal points */}
            {[
              [cx, cy - 168],
              [cx, cy + 172],
              [cx - 170, cy],
              [cx + 170, cy],
            ].map(([x, y], i) => (
              <g key={i} stroke="white" strokeOpacity="0.12" strokeWidth="0.75">
                <line x1={x as number - 4} y1={y as number} x2={x as number + 4} y2={y as number} />
                <line x1={x as number} y1={y as number - 4} x2={x as number} y2={y as number + 4} />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </Section>
  );
}
