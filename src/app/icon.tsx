import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { site } from "@/content/site";

export const runtime = "nodejs";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const archivo = await readFile(
    path.join(process.cwd(), "src/app/fonts/Archivo-700.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0B0C",
          color: "#F3F2EE",
          fontFamily: "Archivo",
          fontWeight: 700,
          fontSize: 17,
          letterSpacing: -1,
        }}
      >
        {site.monogram}
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Archivo", data: archivo, weight: 700, style: "normal" }],
    },
  );
}
