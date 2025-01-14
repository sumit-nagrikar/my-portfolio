import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-3xl md:text-4xl font-bold"
          id="projects"
        >
          PROJECTS
        </motion.h2>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap lg:flex-nowrap items-start lg:items-center p-4 lg:gap-10"
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                src={project.image}
                alt={project.title}
                className="rounded-sm w-full max-w-md mx-auto lg:mx-0"
              />
            </div>

            {/* Project Description */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-2/3"
            >
              <h6 className="text-xl font-semibold mb-2">{project.title}</h6>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-gray-200 text-gray-800 px-2 py-1 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Live Link
                </a>
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Source Code
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
