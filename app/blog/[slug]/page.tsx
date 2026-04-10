import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "../../components/PageHero";
import { blogPosts } from "../blogdata";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Tolk360 Blog`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Tolk360",
      url: "https://tolk360.dk",
    },
    publisher: {
      "@type": "Organization",
      name: "Tolk360",
      url: "https://tolk360.dk",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tolk360.dk/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero title={post.title} description={post.excerpt} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Article */}
          <article className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--brand-light)] text-[var(--brand-primary)]">
                {post.category}
              </span>
              <time
                dateTime={post.date}
                className="text-sm text-[var(--text-muted)]"
              >
                {formatDate(post.date)}
              </time>
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[var(--text-muted)] leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <Link
              href="/blog"
              className="mt-10 inline-flex items-center text-sm font-semibold text-[var(--brand-accent)] hover:text-[var(--brand-primary)] transition-colors"
            >
              &larr; Tilbage til blog
            </Link>
          </article>

          {/* Sidebar */}
          <aside className="mt-12 lg:mt-0">
            {/* Related articles */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-[var(--brand-primary)] mb-4">
                Relaterede artikler
              </h2>
              <ul className="space-y-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="block p-4 rounded-lg border border-gray-100 hover:border-[var(--brand-accent)] hover:shadow-sm transition-all"
                    >
                      <span className="text-xs font-semibold text-[var(--brand-accent)]">
                        {r.category}
                      </span>
                      <h3 className="text-sm font-semibold text-[var(--brand-primary)] mt-1 leading-snug">
                        {r.title}
                      </h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-accent)] p-6 text-white">
              <h2 className="text-lg font-bold mb-2">
                Har du brug for en tolk?
              </h2>
              <p className="text-sm text-white/80 mb-4">
                Få et uforpligtende tilbud på tolkning eller oversættelse.
                Vi svarer inden for 1 time på hverdage.
              </p>
              <Link
                href="/faa-tilbud"
                className="inline-block bg-white text-[var(--brand-primary)] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Få tilbud nu
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
