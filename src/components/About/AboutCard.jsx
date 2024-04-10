import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function AboutCard(){
    return(
        <div>
            <h1 className='text-xl font-bold mt-6'>See my social medias:</h1>
            <div className='flex gap-2 mt-7'>
                <a href="https://github.com/jzampieri" className='border-2 border-gray rounded-xl w-1/3 transition h-10 flex justify-center items-center hover:scale-110'>
                <a href="https://github.com/jzampieri"><FaGithub className='text-2xl rotate-icon'/></a> 
                </a>
                <a href="https://www.linkedin.com/in/julio-cesar-zampieri-3257b6267/" className='border-2 border-gray rounded-xl transition w-1/3 h-10 flex justify-center items-center hover:scale-110'>
                    <a href="https://www.linkedin.com/in/julio-cesar-zampieri-3257b6267/"><FaLinkedin className='text-2xl rotate-icon'/></a>
                </a>
                <a href="https://www.instagram.com/j.zampierii/" className='border-2 border-gray rounded-xl transition w-1/3 h-10 flex justify-center items-center hover:scale-110'>
                    <a href="https://www.instagram.com/j.zampierii/"><FaInstagram className='text-2xl rotate-icon'/></a>
                </a>
            </div>
        </div>

    )
}

export default AboutCard
