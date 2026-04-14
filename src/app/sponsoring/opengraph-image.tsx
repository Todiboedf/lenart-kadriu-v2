import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const alt =
  "Sponsoring Lenart Kadriu — Devenez partenaire · JOJ Hualien 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const imgBuffer = fs.readFileSync(
    path.join(process.cwd(), "public/assets/photo_8.jpg"),
  );
  const imgSrc = `data:image/jpeg;base64,${imgBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0a0a0a",
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
              "linear-gradient(to right, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.7) 60%, rgba(10,10,10,0.3) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 88px",
            zIndex: 2,
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              color: "#c9a84c",
              fontSize: 16,
              letterSpacing: 5,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            <span
              style={{
                display: "flex",
                width: 56,
                height: 1,
                background: "#c9a84c",
              }}
            />
            Sponsoring · JOJ Hualien 2026
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <div
              style={{
                fontSize: 92,
                fontWeight: 300,
                color: "#f8f6f0",
                letterSpacing: -2,
                lineHeight: 1.02,
                display: "flex",
                maxWidth: 960,
                fontFamily: "serif",
              }}
            >
              Devenez partenaire
            </div>
            <div
              style={{
                fontSize: 92,
                fontWeight: 400,
                color: "#c9a84c",
                letterSpacing: -2,
                lineHeight: 1.02,
                display: "flex",
                fontStyle: "italic",
                fontFamily: "serif",
              }}
            >
              d&apos;un champion
            </div>
            <div
              style={{
                fontSize: 26,
                color: "#f8f6f0",
                marginTop: 16,
                display: "flex",
                opacity: 0.85,
              }}
            >
              Lenart Kadriu · Trois packages Bronze / Silver / Gold
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              color: "#a8a8a8",
              fontSize: 20,
            }}
          >
            <span
              style={{
                color: "#c9a84c",
                letterSpacing: 4,
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              lenartkadriu.com/sponsoring
            </span>
            <span style={{ display: "flex" }}>GHaas Management SA</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
