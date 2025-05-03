import {
  SiPython,
  SiKaggle,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiStreamlit,
  SiPytorch,
} from 'react-icons/si';
import { FaGithub, FaCloud } from 'react-icons/fa';
import { MdCarCrash, MdDashboard } from 'react-icons/md';
import type { JSX } from 'react';
import { RiFileExcel2Fill } from 'react-icons/ri';

type ProjectId = 'kaggle' | 'dashboard' | 'ml';

interface Project {
  id: ProjectId;
  icon: JSX.Element;
  technologies: JSX.Element[];
  availableAt: 'github' | 'cloud';
  link: string;
}

interface ProjectsProps {
  lang: 'pt' | 'en';
}

const Projects = ({ lang }: ProjectsProps) => {
  const translations: Record<
    'pt' | 'en',
    Record<ProjectId, { title: string; description: string }>
  > = {
    pt: {
      kaggle: {
        title: 'Competições Kaggle',
        description:
          'Neste repositório, eu documento minha jornada por diversas competições do Kaggle, apresentando projetos baseados em ML e modelos preditivos.',
      },
      dashboard: {
        title: 'Dashboard Interativo',
        description:
          'Este repositório apresenta um exemplo de como criar dashboards interativos em Python utilizando Streamlit e Plotly.',
      },
      ml: {
        title: 'Melhor Trajeto, Machine Learning',
        description:
          'Este repositório apresenta um exemplo de como aplicar técnicas de aprendizado de máquina para encontrar a linha ideal em uma pista 2D, utilizando Python e redes neurais.',
      },
    },
    en: {
      kaggle: {
        title: 'Kaggle Competitions',
        description:
          'In this repository, I document my journey through various Kaggle challenges, showcasing ML-based projects and predictive models.',
      },
      dashboard: {
        title: 'Interactive Dashboard',
        description:
          'This repository contains an example of how to create interactive dashboards in Python using Streamlit and Plotly.',
      },
      ml: {
        title: 'Optimal Line Machine Learning',
        description:
          'This repository presents an example of how to apply machine learning techniques to find the optimal line on a 2D track using Python and neural networks.',
      },
    },
  };

  const projects: Project[] = [
    {
      id: 'kaggle',
      icon: <SiKaggle size={48} />,
      technologies: [
        <SiPython size={24} key="py" />,
        <SiPandas size={24} key="pandas" />,
        <SiNumpy size={24} key="numpy" />,
        <SiScikitlearn size={24} key="scikitlearn" />,
      ],
      availableAt: 'github',
      link: 'https://github.com/jzampieri/Kaggle-Competitions',
    },
    {
      id: 'dashboard',
      icon: <MdDashboard size={48} />,
      technologies: [
        <SiPython size={24} key="py" />,
        <SiNumpy size={24} key="numpy" />,
        <SiStreamlit size={24} key="streamlit" />,
        <RiFileExcel2Fill size={24} key="excel" />,
      ],
      availableAt: 'github',
      link: 'https://github.com/jzampieri/Data-Visualization-w-Python',
    },
    {
      id: 'ml',
      icon: <MdCarCrash size={48} />,
      technologies: [
        <SiPython size={24} key="py" />,
        <SiPytorch size={24} key="pytorch" />,
        <SiNumpy size={24} key="numpy" />,
        <SiScikitlearn size={24} key="scikitlearn" />,
      ],
      availableAt: 'github',
      link: 'https://github.com/jzampieri/optimal-line-ML',
    },
  ];

  return (
    <main id="projects" className="w-full flex flex-col items-center mt-14 gap-24 px-4">
      <h2 className="text-xs font-bold text-center mt-20 text-neutral-500">
        {lang === 'pt' ? '<Projetos/>' : '<Projects/>'}
      </h2>

      {projects.map((project, index) => {
        const availabilityIcon =
          project.availableAt === 'github' ? <FaGithub size={20} /> : <FaCloud size={20} />;

        return (
          <div
            key={index}
            className="w-full max-w-6xl mx-auto flex flex-col gap-4 p-4 lg:grid lg:grid-cols-4 lg:grid-rows-[auto_auto_auto]"
          >
            {/* Ícone */}
            <div className="bg-[#1a1a1a]/80 p-10 flex items-center justify-center rounded-lg lg:row-span-3">
              {project.icon}
            </div>

            {/* Título */}
            <div className="flex items-center justify-center rounded-lg lg:col-span-2">
              <h2 className="text-lg font-bold text-center px-2 text-white">
                {translations[lang][project.id].title}
              </h2>
            </div>

            {/* GitHub / Cloud */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-800 p-10 flex items-center justify-center rounded-lg text-white hover:brightness-110 transition"
            >
              {availabilityIcon}
              <span className="ml-2">
                {project.availableAt === 'github' ? 'GitHub' : 'Cloud'}
              </span>
            </a>

            {/* Tecnologias linha 2 */}
            <div className="bg-[#1a1a1a]/80 p-10 flex items-center justify-center rounded-lg text-white">
              {project.technologies[0]}
            </div>
            <div className="bg-[#1a1a1a]/80 p-10 flex items-center justify-center rounded-lg text-white">
              {project.technologies[1]}
            </div>

            {/* Tecnologias linha 3 */}
            <div className="bg-[#1a1a1a]/80 p-10 flex items-center justify-center rounded-lg text-white">
              {project.technologies[3]}
            </div>
            <div className="bg-[#1a1a1a]/80 p-10 flex items-center justify-center rounded-lg text-white">
              {project.technologies[2]}
            </div>

            {/* Descrição */}
            <div className="bg-[#1a1a1a]/80 flex items-center justify-center text-center px-4 py-6 rounded-lg text-white text-sm lg:col-start-4 lg:row-start-2 lg:row-span-2">
              {translations[lang][project.id].description}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Projects;
