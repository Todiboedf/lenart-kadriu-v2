import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const alt =
  "Lenart Kadriu — Tennisman Suisse U14 · JOJ Hualien 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const imgBuffer = fs.readFileSync(
    path.join(process.cwd(), "public/assets/photo_identite.jpg"),
  );
  const imgSrc = `data:image/jpeg;base64,${imgBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#050810",
          position: "relative",
        }}
      >
        <img
          src={imgSrc}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(to right, rgba(5,8,16,0.95) 0%, rgba(5,8,16,0.55) 65%, rgba(5,8,16,0.25) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 80px",
            zIndex: 2,
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              color: "#c8ee44",
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            <span
              style={{
                display: "flex",
                width: 56,
                height: 2,
                background: "#c8ee44",
              }}
            />
            JOJ Hualien 2026
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <div
              style={{
                fontSize: 140,
                fontWeight: 900,
                color: "#f0ede8",
                letterSpacing: -4,
                lineHeight: 1,
                display: "flex",
              }}
            >
              LENART
            </div>
            <div
              style={{
                fontSize: 140,
                fontWeight: 900,
                color: "#c8ee44",
                letterSpacing: -4,
                lineHeight: 1,
                display: "flex",
              }}
            >
              KADRIU
            </div>
            <div
              style={{
                fontSize: 30,
                color: "#f0ede8",
                marginTop: 28,
                display: "flex",
              }}
            >
              Tennisman suisse U14 · Qualifié JOJ Hualien 2026
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              color: "#8896a8",
              fontSize: 22,
            }}
          >
            <span
              style={{
                color: "#c8ee44",
                letterSpacing: 4,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              lenartkadriu.com
            </span>
            <span style={{ display: "flex" }}>
              29 juillet – 8 août 2026 · Taïwan
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
