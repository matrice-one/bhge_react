import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useForm } from '@formspree/react';
import { useTranslation } from "react-i18next";

function FormModal({ buttonText }) {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Assuming the useForm hook and state are for a different form or functionality
  const [state, handleSubmit] = useForm("yourFormIdHere"); // Ensure this matches your Formspree form ID

  const body = (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%', 
        maxWidth: '600px', 
        minHeight: '80vh', 
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 1, 
        overflow: 'auto',
        borderRadius: '5px',
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
      }}
    >
      {state.succeeded ? (
        <Typography color={'tertiary'} variant='h5'>
          {t("FormModal.successMessage")}
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <div dangerouslySetInnerHTML={{ __html: `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeWDNy5I-B_juNFQEbNyqMqJkR6HpJY4TYPpLruDv0-t3bitA/viewform?embedded=true" width="100%" height="100%" style="border: none; min-height: 500px;" frameborder="0" marginheight="0" marginwidth="0" marginbottom="2px">Loading…</iframe>` }} />
          <Button type="button" variant="contained" color="primary" 
              onClick={handleClose} 
              sx={{
                display: 'block', // Make the button a block element
                margin: '20px auto auto', 
                borderRadius: '5px',
                fontFamily: "body1.fontFamily",
                '&:hover': { backgroundColor: "secondary.main" },
              }}>
              Close the form
            </Button>
        </form>
        
      )}
    </Box>
  );

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        {buttonText}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

FormModal.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default FormModal;
