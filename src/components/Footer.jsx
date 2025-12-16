import { useLang } from "../context/LanguageContext";

function Footer() {
    const { t } = useLang();
    const f = t.footer;

    return (
        <footer className="border-t border-white/5 bg-[#020617]/90">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
                <p>
                    © {new Date().getFullYear()} Aditya. {f.rights}
                </p>

                <div className="flex gap-4">
                    <button className="hover:text-sky-300">{f.privacy}</button>
                    <button className="hover:text-sky-300">{f.terms}</button>
                    <button className="hover:text-sky-300">{f.sitemap}</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
