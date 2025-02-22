import { projectsData } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";
import { BlurFade } from "./magicui/blur-fade";

function Projects() {
    return (
        <>
        <BlurFade>
            <div className="flex text-center justify-center pb-5 text-3xl font-bold">
                <h1>See My Work</h1>
            </div>
            <div className="text-center pb-5">
                <p id="type">I have built a few things, mostly driven by curiosity. Check them about here. </p>
            </div>
            </BlurFade>
            <div className="columns-1 sm:columns-2 gap-4">
                {projectsData.map(project => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        technologies={project.technologies} 
                        content={project.content} 
                        button={project.button} 
                        url={project.url}
                    />
                ))}
            </div>
        </>
    );
}

export default Projects;
