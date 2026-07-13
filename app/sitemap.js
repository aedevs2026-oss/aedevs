import { blogPosts, siteConfig } from "@/lib/content";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/services",
    "/technologies",
    "/portfolio",
    "/blog",
    "/faq",
    "/contact",
  ];

  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...blogRoutes].map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/blog") ? 0.6 : 0.8,
  }));
}
