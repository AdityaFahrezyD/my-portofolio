// src/sections/Sertificate.jsx
import { useState } from "react";
import Section from "../components/Section";
import SertificateCard from "../components/SertificateCard";
import Modal from "../components/Modal";
import { useLang } from "../context/LanguageContext";
import { sertificates } from "../data/sertificate";

function Sertificate() {
    const { lang, t } = useLang();
    const s = t.sertificate;
    const items = sertificates[lang];

    const [selected, setSelected] = useState(null);

    const handleOpen = (item) => {
        setSelected(item);
    };

    const handleClose = () => {
        setSelected(null);
    };

    return (
        <>
            <Section id="sertificate" title={s.title} subtitle={s.subtitle}>
                <div className="grid gap-8 md:grid-cols-2">
                    {items.map((item) => (
                        <SertificateCard
                            key={item.id}
                            {...item}
                            onPreview={() => handleOpen(item)}
                        />
                    ))}
                </div>
            </Section>

            {/* Modal preview sertifikat besar */}
            <Modal
                isOpen={!!selected}
                onClose={handleClose}
                title={selected?.title}
            >
                {selected && (
                    <div className="flex flex-col gap-3">
                        {selected.image && (
                            <div className="overflow-hidden rounded-xl border border-sky-500/40 bg-slate-900">
                                <img
                                    src={selected.image}
                                    alt={selected.title}
                                    className="w-full object-contain max-h-[70vh]"
                                />
                            </div>
                        )}

                        <p className="text-sm text-slate-200">{selected.description}</p>

                        {(selected.yearStart || selected.yearEnd) && (
                            <div className="text-[11px] text-sky-300">
                                {selected.yearStart &&
                                    (selected.yearEnd
                                        ? `Berlaku dari tahun ${selected.yearStart} hingga ${selected.yearEnd}.`
                                        : `Berlaku dari tahun ${selected.yearStart} hingga sekarang.`)}
                            </div>
                        )}
                    </div>
                )}
            </Modal>
        </>
    );
}

export default Sertificate;
