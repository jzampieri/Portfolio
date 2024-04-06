import {} from 'react'
import Logo from '../../assets/logo dark.png'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function About() {
    return(
        <section className='min-h-screen bg-dark text-white grid grid-cols-4 grid-flow-col'>
            <div className='col-span-2 flex justify-center'>
                <div className='items-center border-2 border-gray w-4/5 h-4/5 bg-preto rounded-2xl flex justify-center flex-col'>
                    <img src={Logo} alt="" className='w-2/5 h-2/5' />
                    <h1 className='text-3xl'>JULIO CESAR ZAMPIERI</h1>
                        <h2 className='text-cinza mt-5'>BASED IN:</h2>
                        <h1 className='font-bold'>São Paulo, Brazil</h1>
                    <div>
                        <h1 className='text-xl font-bold mt-6'>See my social medias:</h1>
                        <div className='flex gap-2 mt-7'>
                            <div className='border-2 border-gray rounded-xl w-1/3 transition h-10 flex justify-center items-center hover:scale-110'>
                               <a href="https://github.com/jzampieri"><FaGithub className='text-2xl'/></a> 
                            </div>
                            <div className='border-2 border-gray rounded-xl transition w-1/3 h-10 flex justify-center items-center hover:scale-110'>
                                <a href="https://www.linkedin.com/in/julio-cesar-zampieri-3257b6267/"><FaLinkedin className='text-2xl'/></a>
                            </div>
                            <div className='border-2 border-gray rounded-xl transition w-1/3 h-10 flex justify-center items-center hover:scale-110'>
                                <a href="https://www.instagram.com/j.zampierii/"><FaInstagram className='text-2xl'/></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div>
                <h1>oioi</h1>
            </div>
            <div>

            </div>
        </section>
    )
}

export default About