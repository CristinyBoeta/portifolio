import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Stack } from '@mui/material';
import { default as MuiAlert } from '@mui/material/Alert';

const Alert = ({
  isEnableAlert,
  hasSuccess,
  setHasSendEmail,
}: {
  isEnableAlert: boolean;
  hasSuccess: boolean;
  setHasSendEmail: React.Dispatch<
    React.SetStateAction<{
      enableAlert: boolean;
      hasSuccess: boolean;
    }>
  >;
}) => {
  return (
    <Stack
      sx={{
        width: '100%',
        minWidth: '6.25rem',
        maxWidth: '37.5rem',
        position: 'absolute',
        top: '4%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {isEnableAlert && hasSuccess && (
        <MuiAlert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setHasSendEmail({ enableAlert: false, hasSuccess: false })}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Mensagem enviada com sucesso!
        </MuiAlert>
      )}
      {isEnableAlert && !hasSuccess && (
        <MuiAlert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setHasSendEmail({ enableAlert: false, hasSuccess: false })}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Erro ao enviar mensagem!
        </MuiAlert>
      )}
    </Stack>
  );
};

export default Alert;
