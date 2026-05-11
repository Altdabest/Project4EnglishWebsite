import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GitCompareArrows, Brain, FileText } from "lucide-react";

const pages = [
  {
    to: "/definition",
    icon: BookOpen,
    title: "What Is Social Media?",
    desc: "Defining social media through its platforms, limitations, and evolution.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    to: "/comparison",
    icon: GitCompareArrows,
    title: "Old vs. New",
    desc: "Comparing legacy and modern platforms across technology, culture, and design.",
    color: "from-purple-500 to-pink-600",
  },
  {
    to: "/cause-effect",
    icon: Brain,
    title: "Mental Health Impact",
    desc: "How social media fosters anxiety, depression, and social comparison.",
    color: "from-rose-500 to-orange-500",
  },
  {
    to: "/works-cited",
    icon: FileText,
    title: "Works Cited",
    desc: "All academic sources in MLA format used throughout this project.",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-social-media.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />

        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <p className="animate-fade-in-up mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            ENGL 1301-088 · Spring 2026
          </p>
          <h1 className="animate-fade-in-up animate-delay-100 font-serif text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
            The World of{" "}
            <span className="gradient-text">Social Media</span>
          </h1>
          <p className="animate-fade-in-up animate-delay-200 mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            A multi-modal exploration of social media — its definition, cultural
            evolution, and profound impact on mental health.
          </p>
          <div className="animate-fade-in-up animate-delay-300 mt-4 text-sm text-slate-500">
            By <span className="font-medium text-slate-300">Andrew Trainor</span> · Professor Salman · Collin College
          </div>
          <Link
            to="/definition"
            className="animate-fade-in-up animate-delay-400 mt-10 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:bg-indigo-500 hover:shadow-indigo-600/40 hover:-translate-y-0.5"
          >
            Start Exploring <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Explore the Project
            </h2>
            <p className="mt-3 text-slate-400">
              Navigate through each section of this semester-long research project.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {pages.map((page) => (
              <Link
                key={page.to}
                to={page.to}
                className="glass-card group relative rounded-2xl p-8 transition-all duration-300 hover:border-indigo-500/30 hover:-translate-y-1"
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${page.color} shadow-lg`}
                >
                  <page.icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">{page.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {page.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-indigo-400 opacity-0 transition-opacity group-hover:opacity-100">
                  Read more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/50 via-purple-950/50 to-indigo-950/50" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="glass-card glow rounded-3xl px-8 py-14 sm:px-14">
            <svg className="mx-auto mb-6 h-10 w-10 text-indigo-400 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
            </svg>
            <blockquote className="font-serif text-xl leading-relaxed text-slate-200 italic sm:text-2xl">
              "Social media platforms like Facebook facilitate an abundance of social comparison
              opportunities where individuals are more likely to engage in upward comparisons
              with others who seem better off."
            </blockquote>
            <cite className="mt-6 block text-sm not-italic text-slate-400">
              — Vogel, Erin A., et al. "Social Comparison, Social Media, and Self-Esteem."&nbsp;
              <em>Psychology of Popular Media Culture</em>, vol. 3, no. 4, 2014, p. 207.
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
}
