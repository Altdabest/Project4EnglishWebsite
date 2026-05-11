import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const sources = [
  {
    essay: "Essay 1 — Definition",
    entries: [
      'Cheng, Li, et al. "Impact of Social Media use on Critical Thinking Ability of University Students." <em>Library Hi Tech</em>, vol. 42, no. 2, 2024, pp. 642-669.',
      'Naik, V. S., et al. "Impact of Social Media on Cognitive Development of Children and Young Adults: A Systematic Review." <em>BMC Pediatrics</em>, vol. 25, no. 1, 2025, p. 826.',
      "Pew Research Center. <em>Social Media Fact Sheet</em>. Pew Research Center, 2024, www.pewresearch.org/internet/fact-sheet/social-media/.",
      "Rainie, Lee, and Barry Wellman. <em>Networked: The New Social Operating System</em>. MIT Press, 2012.",
      "Turkle, Sherry. <em>Alone Together: Why We Expect More from Technology and Less from Each Other</em>. Basic Books, 2011.",
    ],
  },
  {
    essay: "Essay 2 — Comparison",
    entries: [
      'boyd, danah. "Why Youth (Heart) Social Network Sites: The Role of Networked Publics in Teenage Social Life." <em>Youth, Identity, and Digital Media</em>, edited by David Buckingham, The MIT Press, 2007, pp. 119-142.',
      'Ellison, Nicole B., and danah boyd. "Social Network Sites: Definition, History, and Scholarship." <em>Journal of Computer-Mediated Communication</em>, vol. 13, no. 1, 2007, pp. 210-230.',
      "Kaye, D. Bondy Valdovinos, et al. <em>TikTok: Creativity and Culture in Short Video</em>. Polity Press, 2022.",
      "Marwick, Alice E. <em>Status Update: Celebrity, Publicity, and Branding in the Social Media Age</em>. Yale University Press, 2013.",
      "van Dijck, José. <em>The Culture of Connectivity: A Critical History of Social Media</em>. Oxford University Press, 2013.",
      "Zuboff, Shoshana. <em>The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power</em>. PublicAffairs, 2019.",
    ],
  },
  {
    essay: "Essay 3 — Cause & Effect",
    entries: [
      'Pew Research Center. "Teens, Social Media and Technology 2022." Pew Research Center, 9 Aug. 2022, www.pewresearch.org/internet/2022/08/10/teens-social-media-and-technology-2022/.',
      'Twenge, Jean M., et al. "Increases in Depressive Symptoms, Suicide-Related Outcomes, and Suicide Rates Among U.S. Adolescents After 2010 and Links to Increased New Media Screen Time." <em>Clinical Psychological Science</em>, vol. 6, no. 1, 2018, pp. 3-17.',
      'Vogel, Erin A., et al. "Social Comparison, Social Media, and Self-Esteem." <em>Psychology of Popular Media Culture</em>, vol. 3, no. 4, 2014, pp. 206-22.',
    ],
  },
];

export default function WorksCitedPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute top-10 right-1/3 h-72 w-72 rounded-full bg-emerald-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Academic Sources
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Works Cited
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            All academic sources used throughout this semester-long project,
            formatted in MLA 9th edition style.
          </p>
        </div>
      </section>

      {/* Sources grouped by essay */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sources.map((group) => (
              <div key={group.essay}>
                <h2 className="mb-6 font-serif text-xl font-bold text-emerald-300">
                  {group.essay}
                </h2>
                <div className="space-y-4">
                  {group.entries.map((entry, i) => (
                    <div
                      key={i}
                      className="glass-card rounded-xl px-6 py-4"
                    >
                      <p
                        className="text-sm leading-relaxed text-slate-300"
                        style={{ paddingLeft: "2rem", textIndent: "-2rem" }}
                        dangerouslySetInnerHTML={{ __html: entry }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back navigation */}
      <section className="border-t border-slate-800/60 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link
            to="/cause-effect"
            className="flex items-center gap-2 text-slate-400 transition hover:text-indigo-400"
          >
            <ArrowLeft size={16} /> Back to Mental Health Impact
          </Link>
        </div>
      </section>
    </div>
  );
}
