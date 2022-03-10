import { FunctionComponent, useEffect, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

import Image from "next/image";

const ProjectCard: FunctionComponent<{
  project: any;
}> = ({
  project: {
    project_name,
    project_Image,
    category,
    deployed_url,
    project_des,
    github_url,
    key_tech
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      <Image
        src={project_Image?.data?.attributes?.formats?.large?.url !== undefined ? "http://localhost:1337"+project_Image?.data?.attributes?.formats?.large?.url : "/images/Plexuss.png"}
        alt={project_name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      />
      {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
      <p className="my-2 text-center">{project_name}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            {/* <img src={image_path} alt={name} /> */}

            <Image
              src={project_Image?.data?.attributes?.formats?.large?.url !== undefined ? "http://localhost:1337"+project_Image?.data?.attributes?.formats?.large?.url : "/images/Plexuss.png"}
              alt={project_name}
              layout="responsive"
              height="150"
              width="300"
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                target="_blank"
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                target="_blank"
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{project_name}</h2>
            <h3 className="mb-3 font-medium">{project_des}</h3>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_tech.map((tech) => (
                <span
                  key={tech.id}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
