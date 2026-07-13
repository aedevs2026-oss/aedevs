import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="card max-w-md p-10 text-center">
          <Image
            src="/logo.png"
            alt="AEDEVS"
            width={48}
            height={48}
            className="mx-auto h-12 w-12 rounded-xl object-contain"
          />
          <p className="eyebrow mt-6">404</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Page not found</h1>
          <p className="mt-4 leading-relaxed text-slate-600">
            The page you requested doesn&apos;t exist, but we can still help you build something
            exceptional.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/">Back home</Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
