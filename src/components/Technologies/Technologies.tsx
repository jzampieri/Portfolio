import { SiReact, SiTypescript, SiNodedotjs, SiGit, SiPandas , SiPython, SiMysql, SiPytorch, SiApachespark, SiNumpy, SiThealgorithms, SiTensorflow } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: <SiReact size={40} /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} /> },
  { name: 'Node.js', icon: <SiNodedotjs size={40} /> },
  { name: 'Git', icon: <SiGit size={40} /> },
  { name: 'ApacheSpark', icon: <SiApachespark size={40} /> },
  { name: 'Python', icon: <SiPython size={40} /> },
  { name: 'MySQL', icon: <SiMysql size={40} /> },
  { name: 'PyTorch', icon: <SiPytorch size={40} /> },
  { name: 'Pandas', icon: <SiPandas size={40} /> },
  { name: 'Numpy', icon: <SiNumpy size={40} /> },
  { name: 'Algorithms', icon: <SiThealgorithms size={40} /> },
  { name: 'TensorFlow', icon: <SiTensorflow  size={40} /> },
];

const Technologies = () => {
  return (
    <main className="w-full flex items-center flex-col">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Tecnologias</h2>
      <section className='w-4/5 flex justify-center'>
        <div className=" grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
                <div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
                >
                <div className="flex justify-center mb-4">{tech.icon}</div>
                <h3 className="text-xl text-center text-white">{tech.name}</h3>
            </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Technologies;
