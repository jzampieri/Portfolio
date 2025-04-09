import Social from "../../components/Social/Social";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Experience from "../../components/Experience/Experience";

function Main() {
    return ( 
        <main className="bg-[#0d0d0d] text-[#b9b9b9]">
            <Header/>
            <section className="min-h-screen flex items-center justify-center text-center px-4">
                <article>
                    <h1 className="text-4xl">Hi, my name is Julio Zampieri</h1>
                    <h2>Data Engineer</h2>
                </article>
            </section>
            <Experience/>
            <Social/>
            <Footer/>
        </main>
     );
}

export default Main;