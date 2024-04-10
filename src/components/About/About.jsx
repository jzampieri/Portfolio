import {} from 'react'
import './about.css'
import Logo from '../../assets/logo dark.png'
import AboutCard from './AboutCard'

function About() {
    return(
        <section className='min-h-screen bg-dark text-white grid grid-cols-4 grid-flow-col gap-4'>
            <div className='col-span-2 flex justify-center'>
                <div className='items-center border-2 border-gray w-4/5 h-4/5 bg-preto rounded-2xl flex justify-center flex-col'>
                        <img src={Logo} alt="" className='w-2/5 h-2/5' />
                        <h1 className='text-3xl'>JULIO CESAR ZAMPIERI</h1>
                        <h2 className='text-cinza mt-5'>BASED IN:</h2>
                        <h1 className='font-bold'>São Paulo, Brazil</h1>
                        <AboutCard/>
                </div>
            </div>
            <div className='border-gray border-2 rounded-2xl h-4/5 text-center'>
                <h1 className='mt-4 text-3xl'>Education</h1>
                <h2 className='mt-4'>FIAP</h2>
                <h2 className='mt-1'>Graduating Software Engineer</h2>
                <h2 className='mt-1'>2023 | 2026</h2>
                <h1 className='mt-5 text-2xl'>University projects</h1>
            </div>
            <div className='border-gray border-2 rounded-2xl w-4/5 h-4/5'>
                <h1 className='text-center mt-4 text-3xl'>Goals</h1>
            </div>
        </section>
    )
}

export default About