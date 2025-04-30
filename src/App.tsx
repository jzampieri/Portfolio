import { useEffect, useState } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Main from './pages/Main/Main';
import Preloader from './components/Preloader/Preloader';
import gsap from 'gsap';

function App() {
  useSmoothScroll();
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    setTimeout(() => {
      const el = document.getElementById('home');
      if (el) el.scrollIntoView({ behavior: 'auto' });
    }, 10);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.to('.main-content', {
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div
        className="main-content"
        style={{
          opacity: 0,
          pointerEvents: loading ? 'none' : 'auto',
        }}
      >
        <Main lang={lang} setLang={setLang} />
      </div>
    </>
  );
}

export default App;
