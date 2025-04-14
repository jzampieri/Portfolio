import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const Projects = () => {
  const sectionRef = useRef(null);

  const projects = [
    {
      title: 'Valoriza',
      description: 'IA financeira com detecção de risco comportamental.',
    },
    {
      title: 'LapIn',
      description: 'Simulador laparoscópico com IA e realidade virtual.',
    },
    {
      title: 'ElectroDrive',
      description: 'Carregamento de carros elétricos por indução com ML.',
    },
    {
      title: 'HelpFeet',
      description: 'E-commerce inclusivo para pés com tamanhos diferentes.',
    },
    {
      title: 'BeReal IA',
      description: 'Plataforma de match entre clientes e agências com IA.',
    },
    {
      title: 'TaskMaster',
      description: 'Gerenciador de tarefas com foco em eficiência de equipes.',
    },
  ];

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const lineFill = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={sectionRef} id="projetos" className="relative  text-white px-4 md:px-12 py-24">
      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-[2px] bg-neutral-700 overflow-hidden">
          <motion.div
            style={{ height: lineFill }}
            className="absolute top-0 left-0 w-full bg-red-500"
          />
          {projects.map((_, i) => {
            const progressStart = i / projects.length;
            const progressEnd = (i + 1) / projects.length;
            const markerOffset = useTransform(
              scrollYProgress,
              [progressStart, progressEnd],
              [0, 10]
            );
            const scale = useTransform(
              scrollYProgress,
              [progressStart, progressEnd],
              [1, 1.5]
            );
            const opacity = useTransform(
              scrollYProgress,
              [progressStart, progressEnd],
              [0.4, 1]
            );
            const markerY = `${(i + 1) * 150}`;
            return (
              <motion.div
                key={i}
                style={{ top: `calc(${markerY}px + ${markerOffset})`, scale, opacity }}
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-red-500 rounded-full shadow-lg"
              />
            );
          })}
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
            >
              <div className="text-right md:pr-12">
                <h3 className="text-3xl font-bold text-red-500">{project.title}</h3>
              </div>

              <div className="text-left md:pl-12">
                <p className="text-neutral-300 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;