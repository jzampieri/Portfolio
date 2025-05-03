interface ContactProps {
    lang: 'pt' | 'en';
  }
  
  const Contact = ({ lang }: ContactProps) => {
    const translations = {
      pt: {
        title: 'CONTATO',
        email: 'Email',
        phone: 'Telefone',
        social: 'Redes Sociais',
        resume: 'CURRÍCULO 📄',
        designedBy: 'Desenhado e Desenvolvido por',
      },
      en: {
        title: 'CONTACT',
        email: 'Email',
        phone: 'Phone',
        social: 'Social',
        resume: 'RESUME 📄',
        designedBy: 'Designed and Developed by',
      },
    };
  
    const socialLinks = [
      { name: 'Github', href: 'https://github.com/jzampieri' },
      { name: 'Linkedin', href: 'https://www.linkedin.com/in/julio-cesar-zampieri-3257b6267/' },
      { name: 'Hugging Face', href: 'https://huggingface.co/jzampieri' },
    ];
  
    return (
      <section id="contato" className="w-full px-6 py-16 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">{translations[lang].title}</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="text-neutral-400 mb-2">{translations[lang].email}</p>
              <p className="mb-4">contact.zampieri@gmail.com</p>
              <p className="text-neutral-400 mb-2">{translations[lang].phone}</p>
              <p>+55 (11) 99129-2785</p>
            </div>
  
            <div>
              <p className="text-neutral-400 mb-2">{translations[lang].social}</p>
              <ul className="space-y-3 mt-2">
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl underline decoration-white hover:text-purple-400 transition"
                    >
                      {social.name} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="flex flex-col justify-between md:items-end">
              <div>
                <p className="text-neutral-400 text-sm mb-2 text-right md:text-right">
                  {translations[lang].designedBy}<br />
                  <span className="text-purple-400 font-medium">Julio Zampieri</span>
                </p>
                <p className="text-neutral-500 text-sm text-right md:text-right">
                  © {new Date().getFullYear()}
                </p>
              </div>
              <a
                href="/resume.pdf"
                target="_blank"
                className="text-xl underline decoration-white hover:text-purple-400 transition mt-6 text-right"
              >
                {translations[lang].resume}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  