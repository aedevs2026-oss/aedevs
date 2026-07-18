import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TextLink } from "@/components/ui/TextLink";
import { blogPosts, siteConfig } from "@/lib/content";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    keywords: [
      post.title,
      "web development company in Dharmapuri",
      "SEO services near me",
      "AI chatbot development",
    ],
  });
}

function articleJsonLd(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.domain}/logo.png` },
    },
    mainEntityOfPage: `${siteConfig.domain}/blog/${post.slug}`,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const breadcrumbs = [
    { href: "/blog", label: "Blog" },
    { href: `/blog/${post.slug}`, label: post.title },
  ];

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <div className="page-shell">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={articleJsonLd(post)} />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <article className="container-main section-pad">
          <Breadcrumbs items={breadcrumbs} />

          <header className="mx-auto mt-8 max-w-3xl">
            <div className="flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="chip">{post.category}</span>
              <span>{post.date}</span>
              <span aria-hidden>·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-slate-600">{post.excerpt}</p>
          </header>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="card p-8 sm:p-12">
              <div className="article-content">
                <h2 id="intro">Introduction</h2>
                <p>
                  Premium digital products win when the experience feels calm, clear, and
                  intentional. Great interfaces quietly remove friction and make the value
                  obvious for visitors searching for a trusted web development company in Dharmapuri.
                </p>

                <h2 id="principles">Why this matters for local businesses</h2>
                <p>
                  Businesses in Dharmapuri, Salem, Krishnagiri, Hosur, and nearby towns need websites that are fast, accessible, and easy to find in search. Strong content, local relevance, and a clear conversion path help turn traffic into enquiries and sales.
                </p>

                <h2 id="implementation">Implementation guide</h2>
                <p>
                  Start by clarifying the user&apos;s core task, then define success metrics,
                  content hierarchy, and interaction moments. Build in layers so the experience
                  stays flexible as the product grows and continues to support long-term SEO gains.
                </p>

                <p>
                  You can explore related services such as <a href="/services">custom website development</a>, <a href="/services">ecommerce solutions</a>, and <a href="/contact">SEO support</a> to build a complete growth plan.
                </p>
              </div>
            </div>
          </div>
        </article>

        {related.length > 0 ? (
          <section className="container-main section-pad !pt-0">
            <h2 className="text-2xl font-bold text-slate-900">Related articles</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <article key={item.slug} className="card card-lift p-6">
                  <span className="chip">{item.category}</span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.excerpt}</p>
                  <div className="mt-4">
                    <TextLink href={`/blog/${item.slug}`}>
                      Read more
                    </TextLink>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="container-main section-pad !pt-0">
          <CTASection
            title="Want a product that feels just as great in practice as it does in design?"
            description="We'll help turn your next release into a polished experience that builds confidence and momentum."
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
