import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TextLink } from "@/components/ui/TextLink";
import { blogPosts } from "@/lib/content";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "SEO & Web Development Blog | AE DEVS",
  description: "Insights on web development, SEO, ecommerce, AI chatbots, and website maintenance for businesses in Dharmapuri and Tamil Nadu.",
  path: "/blog",
  keywords: [
    "top web development company in Dharmapuri",
    "how much does a website cost in Dharmapuri",
    "benefits of ecommerce websites",
    "AI chatbots for businesses",
  ],
});

export default function BlogPage() {
  const breadcrumbs = [{ href: "/blog", label: "Blog" }];
  const featured = blogPosts.find((post) => post.featured);
  const rest = blogPosts.filter((post) => !post.featured);

  return (
    <div className="page-shell">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <PageHero eyebrow="Blog" title="SEO, development, and growth insights for modern businesses." description="Practical notes on website cost, performance, local SEO, ecommerce, AI chatbots, and digital strategy for companies in Dharmapuri and nearby regions.">
          <Breadcrumbs items={breadcrumbs} />
        </PageHero>

        <section className="container-main section-pad">
          {featured ? (
            <article className="card animate-[fade-up_0.45s_ease-out_both] overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 p-0 lg:aspect-auto">
                  {featured.image ? (
                    <Image src={featured.image} alt={`${featured.title} cover image`} fill className="object-cover" loading="lazy" />
                  ) : (
                    <span className="chip">{featured.category}</span>
                  )}
                </div>
                <div className="flex flex-col justify-center p-8">
                  <p className="eyebrow">Featured</p>
                  <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">{featured.title}</h2>
                  <p className="mt-4 leading-relaxed text-slate-600">{featured.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500"><span>{featured.date}</span><span aria-hidden>·</span><span>{featured.readTime}</span></div>
                  <div className="mt-6"><TextLink href={`/blog/${featured.slug}`}>Read article</TextLink></div>
                </div>
              </div>
            </article>
          ) : null}

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {rest.map((post, index) => (
              <article key={post.slug} className="card card-lift animate-[fade-up_0.45s_ease-out_both] overflow-hidden" style={{ animationDelay: `${index * 0.04}s` }}>
                <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
                  {post.image ? (
                    <Image src={post.image} alt={`${post.title} cover image`} fill className="object-cover" loading="lazy" />
                  ) : (
                    <span className="chip">{post.category}</span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 text-sm text-slate-500"><span>{post.date}</span><span aria-hidden>·</span><span>{post.readTime}</span></div>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{post.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                  <div className="mt-4"><TextLink href={`/blog/${post.slug}`}>Read more</TextLink></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container-main section-pad !pt-0">
          <CTASection title="Want us to turn your vision into a polished digital experience?" description="We can help you shape content, product, and design into something memorable and measurable." />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
