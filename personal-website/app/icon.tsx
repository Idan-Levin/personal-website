import { ImageResponse } from "next/og"

// Removing edge runtime as it's incompatible with static exports
// export const runtime = "edge"
export const dynamic = "force-static"

export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "#4285F4",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "monospace",
          fontWeight: 700,
          borderRadius: "50%",
        }}
      >
        IL
      </div>
    ),
    {
      ...size,
    }
  )
} 