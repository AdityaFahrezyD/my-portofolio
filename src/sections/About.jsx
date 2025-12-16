import Section from "../components/Section";
import { useLang } from "../context/LanguageContext";

function About() {
    const { t } = useLang();
    const a = t.about;

    return (
        <Section id="about" title={a.title} subtitle={a.subtitle}>
            <div className="grid gap-8 text-[15px] text-slate-200 md:grid-cols-2">
                <p className="leading-relaxed">{a.paragraph1}</p>
                <p className="leading-relaxed">{a.paragraph2}</p>
            </div>

            <div className="mt-10">
                <h3 className="text-xs font-semibold tracking-[0.25em] text-sky-400">
                    {a.skillsTitle}
                </h3>
                <div className="mt-4 grid gap-3 text-sm md:grid-cols-4">
                    {a.skills.map((skill) => (
                        <div
                            key={skill}
                            className="rounded-xl border border-sky-500/30 bg-sky-950/20 px-4 py-3 text-slate-100 shadow-sm shadow-sky-900/40"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

export default About;
