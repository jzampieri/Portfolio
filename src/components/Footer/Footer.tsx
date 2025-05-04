interface FooterProps {
    lang: 'pt' | 'en';
  }
  
  function Footer({ lang }: FooterProps) {
    const translations = {
      pt: {
        developedBy: 'Desenvolvido por',
        rights: 'Todos os direitos reservados',
      },
      en: {
        developedBy: 'Developed by',
        rights: 'All rights reserved',
      },
    };
  
    const { developedBy, rights } = translations[lang];
  
    return (
      <footer className="w-full py-12 md:py-6 flex justify-center items-center text-sm text-neutral-500">
        <p className="text-center">
          {developedBy} <span className="text-white font-medium">Julio Zampieri</span> • {rights} © {new Date().getFullYear()}
        </p>
      </footer>
    );
  }
  
  export default Footer;  