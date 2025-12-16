import { createContext, useContext, useState } from "react";
import { content } from "../i18n/content";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState("en");

    const value = {
        lang,
        setLang,
        t: content[lang],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLang() {
    return useContext(LanguageContext);
}
