import { Box, IconButton, Tooltip, Switch, useMediaQuery } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HuggingFaceIcon from '../../assets/HuggingFaceIcon';

interface SocialLinksProps {
  lang: 'pt' | 'en';
  setLang: (lang: 'pt' | 'en') => void;
}

const Social = ({ lang, setLang }: SocialLinksProps) => {
  const isMobile = useMediaQuery('(max-width:640px)');

  return (
    <Box
      className={`fixed z-50 ${isMobile ? 'bottom-2 left-2' : 'bottom-4 left-4'}`}
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        alignItems: 'center',
        gap: isMobile ? 2 : 4,
      }}
    >
      {/* Switch de idioma */}
      <Box className="flex flex-col items-center">
        <Switch
          checked={lang === 'en'}
          onChange={() => setLang(lang === 'pt' ? 'en' : 'pt')}
          color="default"
          size="small"
          sx={{
            '& .MuiSwitch-thumb': { backgroundColor: '#888' },
            '& .MuiSwitch-track': { backgroundColor: '#444' },
          }}
        />
        <span className="text-[10px] text-neutral-400 -mt-2 font-mono tracking-wide">
          {lang.toUpperCase()}
        </span>
      </Box>

      {/* Linha divisora */}
      <Box
        className="bg-neutral-600"
        sx={{
          width: isMobile ? '40px' : '2px',
          height: isMobile ? '2px' : '160px',
        }}
      />

      {/* Ícones sociais */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'column',
          gap: isMobile ? 1 : 2,
        }}
      >
        <Tooltip title="GitHub" placement={isMobile ? 'top' : 'right'}>
          <IconButton
            href="https://github.com/jzampieri"
            target="_blank"
            size="small"
            sx={{
              color: '#a1a1a1',
              transition: 'color 0.3s ease',
              '&:hover': { color: '#ffffff' },
            }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn" placement={isMobile ? 'top' : 'right'}>
          <IconButton
            href="https://www.linkedin.com/in/julio-cesar-zampieri-3257b6267/"
            target="_blank"
            size="small"
            sx={{
              color: '#a1a1a1',
              transition: 'color 0.3s ease',
              '&:hover': { color: '#0077B5' },
            }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Hugging Face" placement={isMobile ? 'top' : 'right'}>
          <IconButton
            href="https://huggingface.co/jzampieri"
            target="_blank"
            size="small"
            sx={{
              color: '#a1a1a1',
              transition: 'color 0.3s ease',
              '&:hover': { color: '#FFCC00' },
            }}
          >
            <HuggingFaceIcon size={20} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Social;
