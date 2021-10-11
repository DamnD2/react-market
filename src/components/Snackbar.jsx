import { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { snackbarContext } from '../core/contexts';

const SimpleSnackbar = () => {
  const { snackbar, setSnackbar } = useContext(snackbarContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar({ isOpen: false, message: '' });
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={snackbar.isOpen}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert severity='success' variant='filled'>{snackbar.message}</Alert>
    </Snackbar>
  );
};

export default SimpleSnackbar;
