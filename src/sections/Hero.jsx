import { useLang } from "../context/LanguageContext";
import RotatingText from "../components/RotatingText";

function Hero() {
    const { t } = useLang();
    const h = t.hero;

    return (
        <section
            id="hero"
            className="flex flex-col gap-12 pt-10 pb-16 md:flex-row md:items-center"
        >
            <div className="flex-1 max-w-xl">
                <p className="text-xs font-semibold tracking-[0.25em] text-sky-400">
                    {h.role}
                </p>

                <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-50 md:text-5xl">
                    {h.titlePrefix} <span className="text-sky-400">{h.name}</span>
                </h1>

                <p className="mt-4 text-base leading-relaxed text-slate-200">
                    {h.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition"
                    >
                        {h.primaryCta}
                        <span aria-hidden="true">→</span>
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-500/60 bg-transparent px-5 py-3 text-sm font-semibold text-slate-100 hover:border-sky-400 hover:text-sky-400 transition"
                    >
                        {h.secondaryCta}
                    </a>
                </div>
            </div>

            <div className="flex-1 md:flex md:justify-end">
                <div className="relative h-60 w-full max-w-md overflow-hidden rounded-3xl border border-sky-500/40 bg-gradient-to-br from-sky-900/50 via-slate-900 to-sky-950 shadow-2xl">
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="relative flex h-full flex-col items-center justify-center gap-3">
                        <div className="text-5xl font-extrabold text-sky-300">A</div>

                        <RotatingText
                            texts={[
                                "Web Developer",
                                "Mobile Developer",
                                "WordPress Developer",
                                "SEO",
                            ]}
                            mainClassName="px-3 py-1 rounded-lg bg-slate-900/70 text-slate-100 text-bold justify-center"
                            staggerFrom="last"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5"
                            elementLevelClassName=""
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={4000}
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero;
