// src/components/SertificateCard.jsx
function SertificateCard({ title,
    penyelenggara,
    image,
    description,
    yearStart,
    yearEnd,
    onPreview,
}) {
    const yearLabel =
        yearStart && yearEnd
            ? `${yearStart} – ${yearEnd}`
            : yearStart && !yearEnd
                ? `${yearStart} – sekarang`
                : null;

    return (
        <article className="flex h-full flex-col rounded-3xl border border-sky-500/40 bg-sky-950/40 p-6 shadow-xl shadow-sky-900/40">
            <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-50">{title}</h3>
                <p className="mt-1 text-sm font-medium text-sky-300">
                    {penyelenggara}
                </p>

                {yearLabel && (
                    <span className="mt-2 inline-flex items-center rounded-full border border-sky-500/50 bg-sky-900/60 px-3 py-1 text-[11px] font-medium text-sky-100">
                        {yearLabel}
                    </span>
                )}
            </div>

            {image && (
                <button
                    type="button"
                    onClick={onPreview}
                    className="mt-4 overflow-hidden rounded-2xl border border-sky-500/40 bg-sky-950/60 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                    <img
                        src={image}
                        alt={title}
                        className="h-40 w-full object-cover md:h-48 hover:scale-[1.02] transition-transform"
                        loading="lazy"
                    />
                </button>
            )}

            <p className="mt-4 text-sm leading-relaxed text-slate-200">
                {description}
            </p>

        </article>
    );
}

export default SertificateCard;
