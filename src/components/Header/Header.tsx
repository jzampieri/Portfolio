import { useState } from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import gsap from 'gsap';

interface HeaderProps {
  lang: 'pt' | 'en';
  setLang: (lang: 'pt' | 'en') => void;
}

const Header = ({ lang }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  const links = lang === 'pt'
    ? ['Sobre', 'Projetos', 'Habilidades', 'Contato']
    : ['About', 'Projects', 'Skills', 'Contact'];

  const hrefs = ['#sobre', '#projetos', '#skills', '#contato'];

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);

    if (!open) {
      gsap.set('.menu', {
        display: 'flex',
        opacity: 1,
        y: '-100%',
      });

      gsap.to('.menu', {
        duration: 1,
        y: 0,
        ease: 'power3.out',
      });
    } else {
      gsap.to('.menu', {
        duration: 1,
        y: '-100%',
        ease: 'power3.in',
        opacity: 1,
        onComplete: () => {
          gsap.set('.menu', { display: 'none' });
        },
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent, target: HTMLElement) => {
    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    gsap.to(target, {
      duration: 0.3,
      x: deltaX / 10,
      y: deltaY / 10,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = (e: React.MouseEvent, target: HTMLElement) => {
    gsap.to(target, {
      duration: 0.3,
      x: 0,
      y: 0,
      ease: 'power3.out',
    });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        justifyContent: 'center',
        boxShadow: 'none',
        zIndex: 10,
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Zampieri
        </Typography>

        <div
          className={`relative w-8 h-4 cursor-pointer z-20 ${open ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div className={`bar bg-white h-1 w-full mb-2 transition-all duration-300 ease-in-out ${open ? 'rotate-45 top-2' : ''}`} />
          <div className={`bar bg-white h-1 w-full mb-2 transition-all duration-300 ease-in-out ${open ? 'opacity-0' : ''}`} />
          <div className={`bar bg-white h-1 w-full mb-2 transition-all duration-300 ease-in-out ${open ? 'rotate-45 bottom-2' : ''}`} />
        </div>

        <Box
          className="menu"
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'black',
            display: 'none',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            opacity: 0,
            transform: 'translateY(-100%)',
          }}
        >
          {hrefs.map((href, i) => (
            <Box
              key={href}
              component="a"
              href={href}
              onClick={toggleMenu}
              sx={{
                transition: '0.3s',
                position: 'relative',
                textDecoration: 'none',
                color: '#a1a1a1',
                fontWeight: 500,
                fontSize: '2rem',
                marginBottom: '20px',
                display: 'block',
                '&:hover': {
                  color: '#fff',
                  '&::before': {
                    transform: 'scaleX(1)',
                    width: '100%',
                  },
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '0%',
                  height: '2px',
                  backgroundColor: '#fff',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.25s ease, width 0.25s ease',
                },
              }}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e, e.currentTarget)}
            >
              <div className='w-5xl h-20'>{links[i]}</div>
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;