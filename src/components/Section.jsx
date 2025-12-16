// src/components/Section.jsx
import ScrollFloat from "./ScrollFloat";
import ScrollReveal from './ScrollReveal';

function Section({
    id,
    title,
    subtitle,
    children,
    withFloatTitle = true, // bisa dimatikan kalau perlu
}) {
    return (
        <section
            id={id}
            className="py-16 border-t border-white/5 scroll-mt-24"
        >
            {withFloatTitle ? (
                <ScrollFloat
                    containerClassName="mt-0 mb-2"
                    textClassName="text-3xl font-bold tracking-tight text-slate-50"
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                >
                    {title}
                </ScrollFloat>
            ) : (
                <h2 className="text-3xl font-bold tracking-tight text-slate-50">
                    {title}
                </h2>
            )}

            {subtitle && (
                <p className="mt-2 text-sm text-slate-300">{subtitle}</p>
            )}

            <div className="mt-8">{children}</div>
        </section>
    );
}

export default Section;
