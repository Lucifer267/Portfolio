import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Blog";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        tw="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.8) 100%)",
        }}
      >
        <div tw="flex flex-col items-center justify-center gap-4 text-white">
          <h1 tw="text-6xl font-bold">Blog</h1>
          <p tw="text-2xl opacity-80">Thoughts on software development, life, and more</p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
