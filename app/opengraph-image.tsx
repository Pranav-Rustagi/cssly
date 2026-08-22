import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
          padding: "80px",
          backgroundColor: "#000000",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#9c9dff",
          }}
        >
          cssly
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.15 }}>
          CSSly | Pure HTML &amp; CSS Designs
        </div>
        <div style={{ fontSize: 30, color: "#B5B5B5", maxWidth: 980 }}>
          A collection of beautiful, responsive, and accessible web designs
          built using only HTML and CSS.
        </div>
      </div>
    ),
    size,
  );
}
