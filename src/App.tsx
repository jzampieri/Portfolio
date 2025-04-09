import { useState  } from 'react'
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Main from './pages/Main/Main'

function App() {
  useSmoothScroll();
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  return (
    <>
      <Main lang={lang} setLang={setLang} />
    </>
  )
}

export default App
