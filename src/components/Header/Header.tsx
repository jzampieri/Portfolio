import { useEffect, useState } from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        transition: 'all 0.3s ease',
        backgroundColor: '#ffffff',
        height: scrolled ? '56px' : '80px',
        justifyContent: 'center',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: scrolled ? '4rem' : '5rem',
          transition: 'all 0.3s ease',
        }}
      >
        {['#sobre', '#projetos', '#contato'].map((href, i) => (
            <Box
            key={href}
            component="a"
            href={href}
            sx={{
                position: 'relative',
                textDecoration: 'none',
                color: scrolled ? '#333' : '#111',
                fontWeight: 500,
                overflow: 'hidden',
                px: '4px',
                transition: 'color 0.3s ease',
                '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: 0,
                height: '2px',
                width: '0%',
                backgroundColor: scrolled ? '#333' : '#111',
                transition: 'width 0.3s ease',
                },
                '&:hover': {
                color: scrolled ? '#000' : '#000',
                },
                '&:hover::after': {
                width: '100%',
                },
            }}
            >
            {['Sobre', 'Projetos', 'Contato'][i]}
          </Box>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
