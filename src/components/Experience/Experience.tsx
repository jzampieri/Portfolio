import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceProps {
  lang: 'pt' | 'en';
}

const Experience = ({ lang }: ExperienceProps) => {
  const [activeTab, setActiveTab] = useState<'profissional' | 'projetos'>('profissional');

  const TimelineItem = ({
    title,
    date,
    description,
  }: {
    title: string;
    date: string;
    description: string;
  }) => (
    <div className="relative pl-6 pb-8 border-l border-neutral-600">
      <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-blue-400" />
      <h4 className="text-base font-semibold text-white">{title}</h4>
      <span className="text-xs text-neutral-400">{date}</span>
      <p className="text-sm text-neutral-300 mt-1">{description}</p>
    </div>
  );

  return (
    <section id="experiencia" className="py-20 px-4 flex flex-col justify-center items-center">
        <div className="px-6 pt-6 pb-2">
            <p className="text-xs text-neutral-500 font-mono tracking-wide">
                {lang === 'pt' ? '<experiencia/>' : '<experience/>'}
            </p>
        </div>
      <div className="w-full max-w-4xl bg-[#1a1a1a] rounded-lg shadow-lg border border-neutral-700">

        <div className="flex border-b border-neutral-700">
          <button
            onClick={() => setActiveTab('profissional')}
            className={`px-4 py-2 text-sm font-medium cursor-pointer ${
              activeTab === 'profissional' ? 'bg-[#2a2a2a] text-white' : 'text-neutral-400'
            } transition-all rounded-tl-lg`}
          >
            🧑‍💼 {lang === 'pt' ? 'Profissional' : 'Professional'}
          </button>
          <button
            onClick={() => setActiveTab('projetos')}
            className={`px-4 py-2 text-sm font-medium cursor-pointer ${
              activeTab === 'projetos' ? 'bg-[#2a2a2a] text-white' : 'text-neutral-400'
            } transition-all rounded-tr-lg`}
          >
            🎓 {lang === 'pt' ? 'Projetos Universitários' : 'University Projects'}
          </button>
        </div>

        <div className="p-6 min-h-[200px] text-[#e2e2e2]">
          <AnimatePresence mode="wait">
            {activeTab === 'profissional' ? (
              <motion.div
                key="profissional"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <TimelineItem
                  title={
                    lang === 'pt'
                      ? 'Engenheiro de Software Júnior - CG CONTADORES'
                      : 'Junior Software Engineer - CG CONTADORES'
                  }
                  date={lang === 'pt' ? 'Abr 2024 — Atual' : 'Apr 2024 — Present'}
                  description={
                    lang === 'pt'
                      ? 'Desenvolvimento de aplicações full stack, manutenção e desenvolvimento de ambiente Python DJANGO, criações de API REST, automações de tarefas, desenvolvimento de aplicações web utilizando ReactJS.'
                      : 'Development of full stack applications, maintenance and development of Python Django environments, creation of REST APIs, task automations, and development of web applications using ReactJS.'
                  }
                />
              </motion.div>
            ) : (
              <motion.div
                key="projetos"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <TimelineItem
                  title={
                    lang === 'pt' ?
                    (
                        <>
                          Valoriza – Mentor Financeiro Consciente{' '}
                          <span className="text-neutral-400 font-normal text-sm">
                            | em parceria com a XP Inc.
                          </span>
                        </>
                      ) : (
                        <>
                          Valoriza – Mindful Money Mentor{' '}
                          <span className="text-neutral-400 font-normal text-sm">
                            | in partnership with XP Inc.
                          </span>
                        </>
                      )
                  }
                  date="2025 - on going"
                  description={
                    lang === 'pt'
                      ? 'Valoriza é um assistente inteligente que une inteligência artificial e educação financeira para ajudar usuários a investirem de forma consciente, ao mesmo tempo em que monitora seus comportamentos para evitar recaídas em hábitos compulsivos, como apostas. A aplicação funciona através de um app mobile integrado a uma API desenvolvida em Python com FastAPI, que coleta dados de uso, transações financeiras e padrões de comportamento. Esses dados são analisados por modelos de machine learning treinados com bibliotecas como scikit-learn e XGBoost, capazes de identificar sinais de risco comportamental em tempo real. Quando detecta padrões preocupantes, o sistema envia alertas personalizados, sugere mudanças e oferece recomendações de investimento baseadas no perfil do usuário. Além disso, utiliza técnicas de IA explicável (XAI) com SHAP ou LIME para justificar as decisões, promovendo transparência.'
                      : 'Valoriza is an intelligent assistant that combines artificial intelligence and financial education to help users invest consciously while monitoring their behavior to prevent relapses into compulsive habits such as gambling. The application operates through a mobile app integrated with a Python-based FastAPI backend, which collects data on usage, financial transactions, and behavioral patterns. This data is analyzed by machine learning models trained with libraries like scikit-learn and XGBoost, capable of identifying behavioral risk signals in real time. When concerning patterns are detected, the system sends personalized alerts, suggests changes, and offers investment recommendations based on the user’s profile. In addition, it uses explainable AI (XAI) techniques such as SHAP or LIME to justify its decisions, promoting transparency and trust.'
                  }
                />
                <TimelineItem
                  title={
                    lang === 'pt' ?
                    (
                        <>
                          LapIn – Simulador de Laparoscopia{' '}
                          <span className="text-neutral-400 font-normal text-sm">
                            | em parceria com a LEPIC
                          </span>
                        </>
                      ) : (
                        <>
                          LapIn – Laparoscopic Simulator{' '}
                          <span className="text-neutral-400 font-normal text-sm">
                            | in partnership with LEPIC
                          </span>
                        </>
                      )
                  }
                  date="2024"
                  description={
                    lang === 'pt'
                      ? 'O LapIn (Laparoscopy Inclusive) é um projeto acadêmico voltado para auxiliar pessoas que não têm acesso tão fácil a centros de treinamento em laparoscopia. Utilizando realidade virtual e inteligência artificial, o LapIn simula ambientes cirúrgicos acessíveis, oferecendo métricas de desempenho e suporte personalizado para o aprendizado técnico, junto com uma IA que auxilia quem estiver praticando a qualquer hora.'
                      : 'LapIn (Laparoscopy Inclusive) is an academic project aimed at supporting people who don’t have easy access to laparoscopic training centers. Using virtual reality and artificial intelligence, LapIn simulates accessible surgical environments, providing performance metrics and personalized support for technical learning, along with an AI assistant available to guide the trainee at any time.'
                  }
                />
                <TimelineItem
                  title={
                    lang === 'pt' ?
                    (
                        <>
                          ElectroDrive - Carregamento de carros elétricos por indução{' '}
                          <span className="text-neutral-400 font-normal text-sm">
                            | em parceria com a IBM
                          </span>
                        </>
                      ) : (
                        <>
                          ElectroDrive – Inductive charging for electric vehicles{' '}
                          <span className="text-neutral-400 font-normal text-sm">
                            | in partnership with IBM
                          </span>
                        </>
                      )
                  }
                  date="2023"
                  description={
                    lang === 'pt'
                      ? 'O ElectroDrive é um projeto voltado ao carregamento inteligente de carros elétricos por indução. Utilizando modelos de machine learning, o sistema aprende padrões de uso e otimiza rotas e horários ideais para o carregamento da bateria, considerando fatores como consumo, distância, tempo de recarga e eficiência energética. O objetivo é tornar o processo de recarga mais inteligente, automatizado e sustentável.'
                      : 'ElectroDrive is a project focused on intelligent wireless charging for electric vehicles. By applying machine learning models, the system learns usage patterns and optimizes the best routes and timing for battery charging, taking into account factors such as consumption, distance, charging duration, and energy efficiency. The goal is to make the charging process smarter, automated, and more sustainable.'
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
