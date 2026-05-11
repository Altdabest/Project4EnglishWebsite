import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Monitor, Smartphone } from "lucide-react";

const comparisons = [
  {
    category: "Technology & Access",
    old: "Desktop-based, profile-oriented frameworks with slower, text-based interactions.",
    new: "Mobile-first design with instantaneous posts and continuous content consumption.",
  },
  {
    category: "Content Style",
    old: "Lengthy text posts, photo albums, and long status updates shared at life's milestones.",
    new: "Short, fast, visually oriented videos — TikTok, Reels, and Snapchat stories prioritize speed.",
  },
  {
    category: "Feed Control",
    old: "Users controlled their feeds with chronological ordering of posts.",
    new: "Algorithms recommend content based on engagement, promoting viral trends over personal expression.",
  },
  {
    category: "User Culture",
    old: "Focused on connecting with friends and loved ones in semi-private digital spaces.",
    new: "Monetized creator economy with sponsorships, branding, and a culture of self-promotion.",
  },
  {
    category: "Privacy",
    old: "Fewer privacy concerns; users had more control over who saw their content.",
    new: "Platforms aggressively gather and analyze data to optimize advertising and surveillance.",
  },
];

export default function ComparisonPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute top-10 left-1/3 h-80 w-80 rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-pink-600/10 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
            Essay 2 — Comparison
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Old vs. New{" "}
            <span className="gradient-text">Social Media</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            A cultural and technological shift: how social media transformed from
            slow, profile-based platforms into algorithm-driven, mobile-first ecosystems.
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="py-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-800">
            <img
              src="./images/old-vs-new.jpg"
              alt="Old vs New Social Media — from desktop computers to smartphones"
              className="w-full object-cover"
              style={{ maxHeight: "420px" }}/*should works*/
            />
          </div>
          <p className="mt-3 text-center text-sm text-slate-500">
            The evolution from desktop social media to mobile platforms.
          </p>
        </div>
      </section>

      {/* Side by side icons */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="glass-card rounded-2xl p-8 text-center">
              <Monitor size={40} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold">Legacy Platforms</h3>
              <p className="mt-2 text-sm text-slate-400">
                MySpace · Early Facebook · Forums
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed text-sm">
                Profile-oriented, desktop-based, chronological feeds, personal connection
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center">
              <Smartphone size={40} className="mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-bold">Modern Platforms</h3>
              <p className="mt-2 text-sm text-slate-400">
                TikTok · Instagram Reels · X
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed text-sm">
                Mobile-first, algorithm-driven, short-form video, creator economy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-serif text-2xl font-bold sm:text-3xl">
            Key Differences
          </h2>

          <div className="space-y-4">
            {comparisons.map((item) => (
              <div
                key={item.category}
                className="glass-card overflow-hidden rounded-2xl"
              >
                <div className="bg-slate-800/40 px-6 py-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
                    {item.category}
                  </h3>
                </div>
                <div className="grid gap-px sm:grid-cols-2">
                  <div className="border-r border-slate-800/60 p-6">
                    <span className="mb-2 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                      Old
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.old}
                    </p>
                  </div>
                  <div className="p-6">
                    <span className="mb-2 inline-block rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400">
                      New
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.new}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implication */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            The Broader Implication
          </h2>
          <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
            <p>
              Analyzing older and newer social media demonstrates how both formats impact
              user engagement in important, if different, ways. Whereas older social media
              platforms were more about <strong className="text-slate-100">linking and personalizing</strong>,
              newer social media platforms focus more on{" "}
              <strong className="text-slate-100">speed, visibility, and the impact of algorithms</strong>.
            </p>
            <p>
              This has fundamentally altered the nature of online interaction and
              self-perception. As van Dijck argues, the shift has taken social media away
              from personal expression and transformed it into something that promotes
              immediate influences (van Dijck).
            </p>
            <p>
              The implications extend to privacy as well. Shoshana Zuboff warns that modern
              platforms aggressively gather data to optimize advertising, creating new
              concerns about surveillance and the morality of data ownership (Zuboff).
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-slate-800/60 py-16">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 sm:px-6">
          <Link
            to="/definition"
            className="flex items-center gap-2 text-slate-400 transition hover:text-indigo-400"
          >
            <ArrowLeft size={16} /> Definition
          </Link>
          <Link
            to="/cause-effect"
            className="flex items-center gap-2 text-indigo-400 transition hover:text-indigo-300"
          >
            Mental Health Impact <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
