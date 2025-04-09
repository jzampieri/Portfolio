import { useEffect, useState } from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';

interface HeaderProps {
  lang: 'pt' | 'en';
  setLang: (lang: 'pt' | 'en') => void;
}

const Header = ({ lang }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = lang === 'pt'
    ? ['Sobre', 'Projetos', 'Contato']
    : ['About', 'Projects', 'Contact'];

  const hrefs = ['#sobre', '#projetos', '#contato'];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        transition: 'all 0.3s ease',
        backgroundColor: 'rgba(13, 13, 13, 0.6)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(8px)',
        height: scrolled ? '56px' : '80px',
        justifyContent: 'center',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: scrolled ? '4rem' : '5rem',
          transition: 'all 0.3s ease',
        }}
      >
        {hrefs.map((href, i) => (
          <Box
            key={href}
            component="a"
            href={href}
            sx={{
              transition: '0.3s',
              position: 'relative',
              textDecoration: 'none',
              color: '#a1a1a1',
              fontWeight: 500,
              overflow: 'hidden',
              px: '4px',
              '&:hover': {
                color: '#fff',
              },
            }}
          >
            {links[i]}
          </Box>
        ))}

      </Toolbar>
    </AppBar>
  );
};

export default Header;
