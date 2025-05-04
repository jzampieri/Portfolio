import Social from "../../components/Social/Social";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Experience from "../../components/Experience/Experience";
import About from "../../components/About/About";
import Technologies from "../../components/Technologies/Technologies"
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

interface MainProps {
  lang: 'pt' | 'en';
  setLang: (lang: 'pt' | 'en') => void;
}

function Main({ lang, setLang }: MainProps) {
  return (
    <main className="bg-[#0d0d0d] text-[#b9b9b9]" id="home">
      <Header lang={lang} setLang={setLang} />

      <section className=" min-h-screen flex items-center justify-center text-center px-4">
        <article>
          <h1 className="text-4xl md:text-6xl font-light text-[#f2f2f2] mb-4">
            {lang === 'pt'
              ? 'Olá, meu nome é Julio Zampieri'
              : 'Hello, my name is Julio Zampieri'}
          </h1>
          <h2 className="text-xl text-gray-400">
            {lang === 'pt' ? 'Engenheiro de Dados (Entusiasta)' : 'Data Engineer (Enthusiast)'}
          </h2>
        </article>
      </section>
      <About lang={lang} />
      <Experience lang={lang} />
      <Technologies lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
      <Social lang={lang} setLang={setLang} />
      <Footer lang={lang} />
    </main>
  );
}

export default Main;
