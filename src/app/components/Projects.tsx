
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";

export const projects = [
    {
        title: "coolingRepairERP",
        imageUrls: ['/CoolingRepairERPImage1.png', '/CoolingRepairERPImage2.png', '/CoolingRepairERPImage3.png'],
    }
]

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex items-center justify-center ">
      {projects.map((project, index) => {
        return (
            <ProjectCard 
              key={index} 
              title={t(`projects.${project.title}.title`)}
              description={t(`projects.${project.title}.description`)}
              imageUrls={project.imageUrls}
              projectLink=""
            />
        )
      })}
    </div>
  );
};

export default Projects;
