import { ImageResponse } from "next/og";
import { allPosts } from "content-collections";

export const runtime = "edge";
export const alt = "Blog Post";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((p) => p._meta.path.replace(/\.mdx$/, "") === slug);

  if (!post) {
    return new ImageResponse(
      (
        <div tw="w-full h-full bg-white flex items-center justify-center">
          <div tw="text-4xl font-bold">Not Found</div>
        </div>
      ),
      {
        ...size,
      }
    );
  }

  return new ImageResponse(
    (
      <div
        tw="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col justify-between p-16 text-white"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.8) 100%)",
        }}
      >
        <div tw="flex flex-col gap-4">
          <div tw="text-sm font-mono opacity-60">{post.author}</div>
          <h1 tw="text-5xl font-bold leading-tight max-w-4xl">{post.title}</h1>
          <p tw="text-xl opacity-80 max-w-3xl">{post.summary}</p>
        </div>
        <div tw="flex items-center justify-between">
          <div tw="text-sm font-mono opacity-60">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div tw="text-sm font-mono opacity-60">sahilbetal.dev</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
