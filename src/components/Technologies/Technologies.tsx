import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiPandas,
  SiPython,
  SiMysql,
  SiPytorch,
  SiApachespark,
  SiNumpy,
  SiThealgorithms,
  SiTensorflow,
  SiDjango,
  SiJupyter,
  SiScikitlearn,
  SiStreamlit
} from 'react-icons/si';
import { FaAws } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { Tooltip } from '@mui/material';

interface TechnologiesProps {
  lang: 'pt' | 'en';
}

const Technologies = ({ lang }: TechnologiesProps) => {
  const content = {
    pt: {
      title: '<Tecnologias e Habilidades/>',
      items: {
        React: {
          description: '⚛️ Biblioteca JavaScript para criar interfaces de usuário modernas. Muito usada em aplicações web como Facebook, Instagram e dashboards interativos.',
        },
        TypeScript: {
          description: '📘 Superset do JavaScript que adiciona tipagem estática. Utilizado em grandes sistemas como VSCode e Angular para reduzir erros em tempo de desenvolvimento.',
        },
        'Node.js': {
          description: '🟢 Ambiente de execução para JavaScript no lado do servidor. Base de plataformas como Netflix, PayPal e aplicações em tempo real como chats e APIs.',
        },
        Git: {
          description: '🔧 Sistema de controle de versão distribuído. Essencial para qualquer projeto de software com múltiplos desenvolvedores, como no GitHub ou GitLab.',
        },
        'Apache Spark': {
          description: '🔥 Framework de processamento de dados em larga escala. Ideal para análises massivas de dados em empresas como Amazon, Uber e bancos.',
        },
        Python: {
          description: '🐍 Linguagem de programação versátil, com uso em IA, automações, ciência de dados e APIs. Usada em projetos como o YouTube, Spotify e sistemas de IA.',
        },
        MySQL: {
          description: '🗃️ Banco de dados relacional muito usado em sites, e-commerces e CRMs como WordPress, Magento e aplicações de cadastro.',
        },
        PyTorch: {
          description: '🧠 Biblioteca para deep learning com foco em flexibilidade. Utilizada em pesquisas acadêmicas e empresas como Tesla e OpenAI.',
        },
        Pandas: {
          description: '🐼 Biblioteca para análise de dados em Python. Ideal para tratamento de dados tabulares, como planilhas, relatórios e bases de BI.',
        },
        NumPy: {
          description: '🔢 Biblioteca de computação numérica. Base para bibliotecas como Pandas, Matplotlib e algoritmos científicos e estatísticos.',
        },
        Algorithms: {
          description: '📚 Conjunto de algoritmos e estruturas de dados. Fundamentais para resolver problemas computacionais de forma otimizada.',
        },
        TensorFlow: {
          description: '🧮 Plataforma de machine learning do Google. Usada em reconhecimento de voz, imagem e modelos preditivos em escala.',
        },
        Django: {
          description: '🌐 Framework web robusto e escalável em Python. Ideal para desenvolvimento rápido de aplicações seguras, como plataformas, APIs e sistemas administrativos (ex: Instagram começou com Django).',
        },
        Jupyter: {
          description: '📓 Ambiente interativo para análise de dados, machine learning e visualizações em Python. Muito usado em ciência de dados, pesquisas e ensino com notebooks executáveis.',
        },
        Csharp: {
          description: '💻 Linguagem de programação moderna e orientada a objetos da Microsoft. Utilizada principalmente para desenvolvimento de aplicações Windows, jogos com Unity, APIs e sistemas corporativos com .NET.',
        },
        AWS: {
          description: '☁️ Plataforma de computação em nuvem da Amazon. Usada para hospedagem de sites, bancos de dados, servidores, aprendizado de máquina, APIs e muito mais em escala global.'
        },
        ScikitLearn: {
          description: '🔍 Biblioteca de machine learning em Python para classificação, regressão, clustering e mais. Muito usada em projetos acadêmicos e aplicações de ciência de dados.'
        },
        Streamlit: {
          description: '📊 Framework Python para criação rápida de dashboards interativos e aplicações web de dados. Muito utilizado para protótipos e visualização em projetos de Data Science.'
        },        
      }
    },
    en: {
      title: '<Technologies and Skills/>',
      items: {
        React: {
          description: '⚛️ JavaScript library for building modern user interfaces. Widely used in web apps like Facebook, Instagram, and interactive dashboards.',
        },
        TypeScript: {
          description: '📘 Superset of JavaScript that adds static typing. Used in large-scale apps like VSCode and Angular to reduce development-time errors.',
        },
        'Node.js': {
          description: '🟢 JavaScript runtime for server-side applications. Powers platforms like Netflix, PayPal, and real-time apps like chats and APIs.',
        },
        Git: {
          description: '🔧 Distributed version control system. Essential for collaborative development in projects hosted on GitHub, GitLab, etc.',
        },
        'Apache Spark': {
          description: '🔥 Big data processing framework. Ideal for large-scale data analytics used by Amazon, Uber, banks, and research centers.',
        },
        Python: {
          description: '🐍 Versatile programming language used in AI, automation, data science, and APIs. Powers projects like YouTube, Spotify, and AI systems.',
        },
        MySQL: {
          description: '🗃️ Relational database management system. Common in websites, e-commerces, and CRMs like WordPress and Magento.',
        },
        PyTorch: {
          description: '🧠 Deep learning library focused on flexibility. Used in academic research and companies like Tesla and OpenAI.',
        },
        Pandas: {
          description: '🐼 Data analysis library for Python. Perfect for handling tabular data such as spreadsheets, reports, and BI datasets.',
        },
        NumPy: {
          description: '🔢 Numerical computing library. Foundation for Pandas, Matplotlib, and scientific or statistical algorithms.',
        },
        Algorithms: {
          description: '📚 Collection of algorithms and data structures. Fundamental to solving computational problems efficiently.',
        },
        TensorFlow: {
          description: '🧮 Google\'s machine learning platform. Used in voice recognition, image processing, and scalable predictive models.',
        },
        Django: {
          description: '🌐 Powerful and scalable web framework built with Python. Ideal for quickly developing secure applications, including platforms, APIs, and admin systems (e.g., Instagram started with Django).',
        },
        Jupyter: {
          description: '📓 Interactive environment for data analysis, machine learning, and visualizations using Python. Widely used in data science, research, and education with executable notebooks.',
        },
        Csharp: {
          description: '💻 Modern object-oriented programming language developed by Microsoft. Commonly used for building Windows applications, games with Unity, APIs, and enterprise systems using .NET.',
        },
        AWS: {
          description: '☁️ Amazon\'s cloud computing platform. Used for hosting websites, databases, servers, machine learning models, APIs, and more at a global scale.'
        },
        ScikitLearn: {
          description: '🔍 Python machine learning library for classification, regression, clustering and more. Widely used in academic projects and data science applications.'
        },
        Streamlit: {
          description: '📊 Python framework for rapidly building interactive dashboards and data-driven web apps. Widely used for prototyping and visualizing Data Science projects.'
        },        
      }
    }
  };

  const technologies = [
    { name: 'Python', icon: <SiPython size={40} /> },
    { name: 'TypeScript', icon: <SiTypescript size={40} /> },
    { name: 'Csharp', icon: <TbBrandCSharp size={40} /> },
    { name: 'Node.js', icon: <SiNodedotjs size={40} /> },
    { name: 'Git', icon: <SiGit size={40} /> },
    { name: 'AWS', icon: <FaAws size={40} /> },
    { name: 'React', icon: <SiReact size={40} /> },
    { name: 'Apache Spark', icon: <SiApachespark size={40} /> },
    { name: 'MySQL', icon: <SiMysql size={40} /> },
    { name: 'PyTorch', icon: <SiPytorch size={40} /> },
    { name: 'Pandas', icon: <SiPandas size={40} /> },
    { name: 'NumPy', icon: <SiNumpy size={40} /> },
    { name: 'TensorFlow', icon: <SiTensorflow size={40} /> },
    { name: 'Django', icon: <SiDjango size={40} /> },
    { name: 'Jupyter', icon: <SiJupyter size={40} /> },
    { name: 'ScikitLearn', icon: <SiScikitlearn size={40} /> },
    { name: 'Streamlit', icon: <SiStreamlit size={40} /> },
    { name: 'Algorithms', icon: <SiThealgorithms size={40} /> },
  ];

  return (
    <main className="w-full flex items-center flex-col" id='skills'>
      <h2 className="text-xs font-bold text-center mb-8 mt-14 text-neutral-500">
        {content[lang].title}
      </h2>
      <section className="w-4/5 flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <Tooltip
              title={
                <span className="text-sm">
                  {content[lang].items[tech.name as keyof typeof content['pt']['items']].description}
                </span>
              }
              placement="top"
              key={index}
            >
              <div className="bg-[#1a1a1a]/80 backdrop-blur-md p-3 sm:p-6 rounded-2xl shadow-lg ring-0 hover:ring-4 hover:ring-white/10 hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">{tech.icon}</div>
                <h3 className="text-base text-center text-white">{tech.name}</h3>
              </div>
            </Tooltip>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Technologies;
