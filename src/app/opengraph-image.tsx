import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.businessName} — ${site.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#162939",
          backgroundImage:
            "radial-gradient(120% 100% at 85% -20%, #2a5068 0%, #1d3a4d 45%, #162939 80%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              border: "6px solid #ffffff",
              borderRight: "6px solid transparent",
              transform: "rotate(45deg)",
            }}
          />
          <span style={{ fontSize: 30, fontWeight: 700, color: "#ffffff", letterSpacing: 2 }}>
            CAMBRIDGE HVAC
          </span>
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          Air conditioning &amp; heating for Cambridge homes
        </div>

        <div style={{ display: "flex", gap: 14, marginTop: 40 }}>
          {["F-Gas certified", "Fully insured", "Fixed-price quotes"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                fontSize: 22,
                color: "#ffffff",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
