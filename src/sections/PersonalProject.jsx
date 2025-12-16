import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { useLang } from "../context/LanguageContext";
import { personalProject } from "../data/personalProject";

function PersonalProject() {
    const { lang, t } = useLang();

    const ps = t.personalProject;

    const items = personalProject[lang]

    return (
        <Section
            id="personalProjects"
            title={ps.title}
            subtitle={ps.subtitle}
        >
            <div className="grid gap-8 md:grid-cols-2">
                {items.map((personalProject) => (
                    <ProjectCard key={personalProject.id} {...personalProject} />
                ))}
            </div>
        </Section>
    );
}

export default PersonalProject;
