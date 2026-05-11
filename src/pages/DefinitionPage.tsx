import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Eye, Shield } from "lucide-react";

export default function DefinitionPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
            Essay 1 — Definition
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            What Is{" "}
            <span className="gradient-text">Social Media</span>?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Social media is a constantly growing system of digital platforms that shape
            how people communicate, share information, and form new connections. It cannot
            be captured in a single word — its definition is as complex as the world that built it.
          </p>
        </div>
      </section>

      {/* Platforms section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Many Platforms, One Ecosystem
          </h2>
          <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">
            The various forms of social media — TikTok, YouTube, Instagram — demonstrate
            different purposes, designs, and user experiences. While Instagram focuses on
            photos that encourage people to share snapshots of their lives, TikTok's
            short-form videos spread trends and challenges. YouTube supports both long-form
            and short-form content, allowing everything from cooking tutorials to penguin
            documentaries.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                name: "Instagram",
                emoji: "📸",
                desc: "Photo-centric platform for sharing curated snapshots of daily life.",
              },
              {
                name: "TikTok",
                emoji: "🎵",
                desc: "Short-form video platform that drives viral trends and challenges.",
              },
              {
                name: "YouTube",
                emoji: "🎬",
                desc: "Long and short-form video hub for creators, educators, and storytellers.",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-indigo-500/30"
              >
                <div className="mb-3 text-3xl">{p.emoji}</div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 glass-card rounded-2xl p-6 sm:p-8">
            <p className="text-slate-300 leading-relaxed italic">
              As Rainie and Wellman describe, social media is part of a{" "}
              <span className="font-medium text-indigo-300">"networked society"</span>{" "}
              where people use multiple platforms to communicate, create, and connect
              (Rainie and Wellman 6).
            </p>
          </div>
        </div>
      </section>

      {/* What it is NOT */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            What Social Media Is <span className="text-rose-400">Not</span>
          </h2>
          <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">
            Understanding social media also means understanding its boundaries and dangers.
            It is defined just as much by what it fails to be.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: MessageCircle,
                title: "Not a Source of Fact",
                desc: "AI-generated content and personal biases shape what appears on feeds, prioritizing engagement over accuracy.",
                color: "text-rose-400",
              },
              {
                icon: Shield,
                title: "Not Inherently Safe",
                desc: "Despite casual use, social media environments are shaped by design, algorithms, and automated systems — not objectivity.",
                color: "text-amber-400",
              },
              {
                icon: Eye,
                title: "Not Neutral",
                desc: "Algorithms decide what users see, often reinforcing biases and reducing critical thinking ability.",
                color: "text-orange-400",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-rose-500/20"
              >
                <item.icon size={28} className={`${item.color} mb-4`} />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 glass-card rounded-2xl border-l-4 border-l-indigo-500 p-6 sm:p-8">
            <p className="text-slate-300 leading-relaxed">
              Sherry Turkle explains that online spaces can create{" "}
              <span className="font-medium text-indigo-300">
                "illusions of companionship without the demands of friendship,"
              </span>{" "}
              reminding us that social media environments are shaped by design, not
              objectivity (Turkle 1).
            </p>
          </div>
        </div>
      </section>

      {/* Evolution */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            How Technology Reshaped Social Media
          </h2>
          <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">
            The shift from home computers to mobile devices completely changed how people
            interact online. Instead of logging in from a desktop, users can now access
            social media anywhere, anytime. Features like live streaming, instant messaging,
            and algorithmic feeds have pushed social media far beyond its origins as a simple
            way to communicate.
          </p>

          {/* Creative Mode: Embedded YouTube video */}
          <div className="mt-10">
            <h3 className="mb-4 text-lg font-semibold text-indigo-300">
              🎬 Creative Mode: Video — The Evolution of Social Media
            </h3>
            <div className="overflow-hidden rounded-2xl border border-slate-800">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
<iframe width="805" height="453" src="https://www.youtube.com/embed/M5YKW6fhlss" title="Social Media: Crash Course Navigating Digital Information #10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>              </div>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              This video provides a visual overview of how social media platforms have evolved over time.
            </p>
          </div>
        </div>
      </section>

      {/* Next page */}
      <section className="border-t border-slate-800/60 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-sm text-slate-500">Next Section</p>
          <Link
            to="/comparison"
            className="mt-3 inline-flex items-center gap-2 text-xl font-semibold text-indigo-400 transition hover:text-indigo-300"
          >
            Old vs. New Social Media <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
