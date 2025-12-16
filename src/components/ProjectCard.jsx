function ProjectCard({ title, subtitle, description, techStack, liveDemo, repo }) {
    return (
        <article className="flex h-full flex-col rounded-3xl border border-sky-500/40 bg-sky-950/40 p-6 shadow-xl shadow-sky-900/40">
            <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-50">{title}</h3>
                <p className="mt-1 text-sm font-medium text-sky-300">{subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-200">
                    {description}
                </p>

                <div className="mt-6">
                    <p className="text-xs font-semibold tracking-[0.2em] text-sky-400">
                        TECH STACK
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                        {techStack?.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-sky-500/40 bg-sky-900/40 px-3 py-1 text-slate-100"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
                {liveDemo && (
                    <a
                        href={liveDemo}
                        className="font-semibold text-sky-300 hover:text-sky-200"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo ↗
                    </a>
                )}
                {repo && (
                    <a
                        href={repo}
                        className="font-semibold text-slate-300 hover:text-slate-100"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Code 🐙
                    </a>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;
