import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import ExampleProjects from "@/components/landing/ExampleProjects";
import JuiceboxEmbed from "@/components/site/JuiceboxEmbed";

export default function Index() {
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <Hero />

      {/* Upcoming projects section */}
      <section className="container py-12">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Upcoming projects</h2>
            <p className="mt-2 text-muted-foreground">
              Curated projects coming to WebMoses — tokenized, community-driven,
              and creator-first.
            </p>
          </div>
          <a
            href="/founders"
            className="text-sm px-4 py-2 rounded-md border border-white/10 hover:bg-white/5"
          >
            Founders
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl glass p-6">
            <h3 className="text-lg font-semibold">BirdWhistle.nft</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              An NFT platform built for artists and musicians — mint, share, and
              collaborate.
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1">
                NFT • Music • Art
              </span>
              <span className="ml-auto">Launching Q2</span>
            </div>
          </article>
        </div>
      </section>

      {/* How it works section */}
      <HowItWorks />

      {/* Example projects section */}
      <ExampleProjects />

      {/* Juicebox funding section */}
      <JuiceboxEmbed />
    </main>
  );
}
