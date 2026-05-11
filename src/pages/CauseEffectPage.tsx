import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, TrendingDown, Eye, HeartCrack } from "lucide-react";

export default function CauseEffectPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-rose-600/10 blur-[150px]" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-orange-600/10 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-400">
            Essay 3 — Cause &amp; Effect
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            How Social Media Fosters a{" "}
            <span className="gradient-text">Mental Health Crisis</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Platforms like TikTok, Instagram, and X promise connection but often deliver
            distress. Their core design encourages social comparison, fostering anxiety
            and depression among young people.
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="py-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-800">
            <img
              src="./public/images/mental-health.jpg"
              alt="Young person looking at phone screen in dark room — illustrating social media's mental health impact"
              className="w-full object-cover"
              style={{ maxHeight: "420px" }}
            />
          </div>
          <p className="mt-3 text-center text-sm text-slate-500">
            The isolating glow of social media.
          </p>
        </div>
      </section>

      {/* Cause: Social Comparison */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            The Cause: Social Comparison
          </h2>
          <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">
            Social media feeds are "highlight reels." Users broadcast the best and
            greatest of their lives, creating skewed perceptions of reality. People
            become unsatisfied with their own lives because they are constantly measuring
            themselves against others' curated accomplishments.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Curated Reality",
                desc: "Users post idealized versions of their lives, creating an environment of relentless comparison.",
                color: "text-rose-400",
              },
              {
                icon: TrendingDown,
                title: "Upward Comparison",
                desc: "Individuals compare themselves to those who seem better off, directly linked to lower self-esteem.",
                color: "text-amber-400",
              },
              {
                icon: HeartCrack,
                title: "Chronic Dissatisfaction",
                desc: "What begins as connection can become a source of profound dissatisfaction and inadequacy.",
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

          <div className="mt-8 glass-card rounded-2xl border-l-4 border-l-rose-500 p-6 sm:p-8">
            <p className="text-slate-300 leading-relaxed">
              As researchers Vogel and colleagues explain, platforms like Facebook facilitate{" "}
              <span className="font-medium text-rose-300">
                "an abundance of social comparison opportunities"
              </span>{" "}
              where individuals engage in "upward comparisons" with others who seem
              better off — a process directly linked to lower self-esteem (Vogel et al. 207).
            </p>
          </div>
        </div>
      </section>

      {/* Effect: Rising Depression */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            The Effect: Rising Depression &amp; Anxiety
          </h2>
          <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">
            Psychologist Jean Twenge's research reveals a striking correlation: after
            2010 — coinciding with the rise of smartphones — there was a sharp increase
            in depressive symptoms and suicide-related outcomes among U.S. adolescents.
          </p>

          {/* Visual data representation */}
          <div className="mt-10 glass-card rounded-2xl p-6 sm:p-8">
            <h3 className="mb-6 text-lg font-semibold text-rose-300">
              📊 Trends After 2010: Smartphone Ownership vs. Depression
            </h3>
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-400">Smartphone Ownership (teens)</span>
                  <span className="font-semibold text-blue-400">Rapid Increase ↑</span>
                </div>
                <div className="h-4 w-full overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                    style={{ width: "92%" }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-400">Major Depressive Episodes</span>
                  <span className="font-semibold text-rose-400">Steady Increase ↑</span>
                </div>
                <div className="h-4 w-full overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-rose-600 to-rose-400"
                    style={{ width: "78%" }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-400">Suicide-Related Outcomes</span>
                  <span className="font-semibold text-amber-400">Significant Rise ↑</span>
                </div>
                <div className="h-4 w-full overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-600 to-amber-400"
                    style={{ width: "65%" }}
                  />
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs text-slate-500">
              Based on data from Twenge, Jean M., et al. "Increases in Depressive Symptoms,
              Suicide-Related Outcomes, and Suicide Rates Among U.S. Adolescents After 2010."
              <em> Clinical Psychological Science</em>, 2018.
            </p>
          </div>

          <div className="mt-8 space-y-4 text-slate-300 leading-relaxed">
            <p>
              Unlike studies that attributed mental decline to academic or economic
              stressors, Twenge's research found that those stressors were actually
              <strong className="text-slate-100"> declining over time</strong>. The
              primary factor correlated with the spike in depression was new media
              screen time.
            </p>
            <p>
              The environment of social media — designed to specifically reward
              unattainable perfection and punish authenticity — creates a{" "}
              <strong className="text-slate-100">chronic mental health stressor</strong>.
              Users lose mental resilience, trapped in a cycle of mentally distorting
              comparison and validation-seeking.
            </p>
          </div>
        </div>
      </section>

      {/* Creative Mode: Video */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="mb-4 text-lg font-semibold text-indigo-300">
            🎬 Video — Social Media &amp; Mental Health
          </h3>
          <div className="overflow-hidden rounded-2xl border border-slate-800">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 h-full w-full"
                src="https://www.youtube.com/embed/Czg_9C7gw0o"
                title="Is Social Media Hurting Your Mental Health?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            TED Talk: "Is Social Media Hurting Your Mental Health?" — A relevant exploration of the topics discussed in this essay.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            The Takeaway
          </h2>
          <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
            <p>
              Social media is detrimental to mental health — especially for youth — even
              with good intentions of being more unifying and connective. It creates ideal
              versions of people that cultivate an unhealthy cycle of social comparison,
              breeding insecurities of anxiety, depression, and low self-esteem.
            </p>
            <p>
              <strong className="text-slate-100">
                Creators of social media and the public need to consume social media with
                intention.
              </strong>{" "}
              In the same light, social media should be treated with intention.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-slate-800/60 py-16">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 sm:px-6">
          <Link
            to="/comparison"
            className="flex items-center gap-2 text-slate-400 transition hover:text-indigo-400"
          >
            <ArrowLeft size={16} /> Comparison
          </Link>
          <Link
            to="/works-cited"
            className="flex items-center gap-2 text-indigo-400 transition hover:text-indigo-300"
          >
            Works Cited <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
