import { Box, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HuggingFaceIcon from '../../assets/HuggingFaceIcon';

const SocialLinks = () => {
  return (
    <Box className="fixed bottom-4 left-4 flex items-center gap-2 z-50">
      <div className="w-[2px] h-40 bg-neutral-400" />

      <div className="flex flex-col gap-2">
        <Tooltip title="GitHub" placement="right">
          <IconButton
            href="https://github.com/jzampieri"
            target="_blank"
            size="small"
            sx={{
              color: '#a1a1a1',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#181717',
              },
            }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn" placement="right">
          <IconButton
            href="https://www.linkedin.com/in/julio-cesar-zampieri-3257b6267/"
            target="_blank"
            size="small"
            sx={{
              color: '#a1a1a1',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#0077B5',
              },
            }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Hugging Face" placement="right">
          <IconButton
            href="https://huggingface.co/jzampieri"
            target="_blank"
            size="small"
            sx={{
              color: '#a1a1a1',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#FFCC00',
              },
            }}
          >
            <HuggingFaceIcon size={20} />
          </IconButton>
        </Tooltip>
      </div>
    </Box>
  );
};

export default SocialLinks;
