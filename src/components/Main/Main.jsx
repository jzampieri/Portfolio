import { useEffect, useRef } from 'react'
import './main.css'

function Main() {
    const tituloRef = useRef(null);

    useEffect(() => {
      typeWriter(tituloRef.current);
    }, []);
  
    const typeWriter = (elemento) => {
      const textoArray = elemento.textContent.split('');
      elemento.textContent = '';
      textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.textContent += letra, 155 * i);
      });
    };

    return(
        <main className='text-center flex flex-col justify-center h-screen bg-dark'>
            <h1 className='bg-gradient-to-r from-accent to-secondary inline-block text-transparente bg-clip-text text-9xl'>ZAMPIERI</h1>
            <h3 className='text-white font-bold text-x'>SOFTWARE ENGINEER <span ref={tituloRef} className='text-decoration'> | UI UX DESIGNER | Front-End | Back-End | Database</span></h3>
        </main>
    )
}

export default Main