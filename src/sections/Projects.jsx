import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { useLang } from "../context/LanguageContext";

function Projects() {
    const { t } = useLang();
    const p = t.projects;

    return (
        <Section id="projects" title={p.title} subtitle={p.subtitle}>
            <div className="grid gap-8 md:grid-cols-2">
                {p.items.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </Section>
    );
}

export default Projects;
