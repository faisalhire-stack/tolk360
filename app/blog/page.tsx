import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { blogPosts } from "./blogdata";

export const metadata: Metadata = {
  title: "Blog – Viden om tolkning og oversættelse | Tolk360",
  description:
    "Læs artikler om tolkning, oversættelse, priser, lovgivning og brancheviden. Tolk360 deler viden, der hjælper dig med at træffe de rigtige valg.",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog – Viden om tolkning og oversættelse"
        description="Artikler, guides og nyheder om tolkning, oversættelse, lovgivning og priser. Alt hvad du skal vide for at træffe de rigtige valg."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--brand-light)] text-[var(--brand-primary)]">
                    {post.category}
                  </span>
                  <time
                    dateTime={post.date}
                    className="text-xs text-[var(--text-muted)]"
                  >
                    {formatDate(post.date)}
                  </time>
                </div>

                <h2 className="text-lg font-bold text-[var(--brand-primary)] mb-2 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--brand-accent)] hover:text-[var(--brand-primary)] transition-colors"
                >
                  Læs mere &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
