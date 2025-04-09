import { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

interface AboutProps {
  lang: 'pt' | 'en';
}

const About = ({ lang }: AboutProps) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      setProgress(v);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const text = lang === 'pt'
    ? 'Opa! Sou uma mente curiosa, apaixonado por dados, tecnologia e transformar o caos em estrutura. Organizado (quase sempre), ambicioso e movido a desafios, especialmente quando envolvem código e café. Atualmente, estou em busca de uma oportunidade na área de dados. Meu objetivo? Me tornar um engenheiro de dados que cria soluções escaláveis, úteis e quem sabe até divertidas.'
    : 'Hey! I’m a curious mind with a strong passion for data, technology, and turning chaos into structure. Organized (most of the time), ambitious, and always up for a challenge, especially if it involves solving problems with code and coffee. Right now, I’m focused on landing an internship in the data universe. My goal? Become a data engineer who builds scalable, meaningful, and maybe even fun solutions.';

  const words = text.split(' ');

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative h-[200vh] px-6 flex items-start justify-center"
    >
      <div className="sticky top-[30vh]">
        <div className="max-w-3xl text-center text-lg leading-relaxed flex flex-wrap justify-center">
          <h2 className="text-3xl font-semibold mb-6 w-full text-[#e2e2e2]">
            {lang === 'pt' ? 'Sobre mim' : 'About me'}
          </h2>

          {words.map((word, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;

            const visible = progress >= start && progress <= end;
            const faded = progress < start;

            const style = {
              opacity: visible ? 1 : faded ? 0.2 : 1,
              color: visible ? '#e2e2e2' : '#666',
              transition: 'opacity 0.3s ease, color 0.3s ease',
            };

            return (
              <motion.span
                key={i}
                style={style}
                className="mr-2"
              >
                {word}
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
