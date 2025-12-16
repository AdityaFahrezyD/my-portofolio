import { useLang } from "../context/LanguageContext";

function Navbar() {
    const { lang, setLang, t } = useLang();
    const nav = t.navbar;

    const toggleLang = () => {
        setLang(lang === "en" ? "id" : "en");
    };

    return (
        <header className="sticky top-0 z-30 border-b border-white/5 bg-[#020617]/80 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <div className="text-lg font-semibold tracking-tight text-sky-400">
                    {nav.brand}
                </div>

                <div className="flex items-center gap-6 text-sm font-medium text-slate-100">
                    <a href="#about" className="hover:text-sky-400 transition-colors">
                        {nav.about}
                    </a>
                    <a href="#projects" className="hover:text-sky-400 transition-colors">
                        {nav.projects}
                    </a>
                    <a href="#contact" className="hover:text-sky-400 transition-colors">
                        {nav.contact}
                    </a>

                    {/* tombol ganti bahasa */}
                    <button
                        onClick={toggleLang}
                        className="rounded-full border border-sky-500/60 px-3 py-1 text-xs font-semibold text-sky-300 hover:bg-sky-500/10 transition"
                    >
                        {lang === "en" ? "EN" : "ID"}
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
