import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050810",
          color: "#f0ede8",
          fontSize: 20,
          fontWeight: 900,
          letterSpacing: -1,
          borderRadius: 6,
        }}
      >
        <span style={{ display: "flex" }}>
          L<span style={{ color: "#c8ee44", display: "flex" }}>K</span>
        </span>
      </div>
    ),
    { ...size },
  );
}
