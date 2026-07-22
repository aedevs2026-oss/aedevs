import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="card max-w-md overflow-hidden p-8 text-center sm:p-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 to-teal-400/10">
            <Image src="/logo.png" alt="AEDevs" width={48} height={48} className="h-12 w-12 rounded-xl object-contain" />
          </div>
          <p className="eyebrow mt-6">404</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Page not found</h1>
          <p className="mt-4 leading-relaxed text-slate-600">The page you requested doesn&apos;t exist, but we can still help you build something exceptional.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/">Back home</Button>
            <Button href="/contact" variant="secondary">Contact us</Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
