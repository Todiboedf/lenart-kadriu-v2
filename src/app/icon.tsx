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
          background: "#0a0a0a",
          color: "#f8f6f0",
          fontSize: 20,
          fontWeight: 500,
          letterSpacing: -1,
          fontFamily: "serif",
          fontStyle: "italic",
        }}
      >
        <span style={{ display: "flex" }}>
          L<span style={{ color: "#c9a84c", display: "flex" }}>K</span>
        </span>
      </div>
    ),
    { ...size },
  );
}
