import Section from "../components/Section";
import { useLang } from "../context/LanguageContext";

function Contact() {
    const { t } = useLang();
    const c = t.contact;

    return (
        <Section id="contact" title={c.title} subtitle={c.subtitle}>
            <div className="flex flex-wrap items-center gap-4">
                <a
                    href="mailto:adityafahrezyd10@gmail.com"
                    className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition"
                >
                    ✉️ {c.emailButton}
                </a>
                <a
                    href="https://github.com/AdityaFahrezyD"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-500/60 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-sky-400 hover:text-sky-400 transition"
                >
                    {c.githubButton}
                </a>
                <a
                    href="https://www.linkedin.com/in/aditya-fahrezy-darmawan-69112731b/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-500/60 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-sky-400 hover:text-sky-400 transition"
                >
                    {c.linkedinButton}
                </a>
                <a
                    href="https://wa.me/+6285174085809"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-500/60 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-sky-400 hover:text-sky-400 transition"
                >
                    {c.WhatsAppButton}
                </a>
            </div>
        </Section>
    );
}

export default Contact;
