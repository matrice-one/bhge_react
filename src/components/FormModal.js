import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useForm, ValidationError } from '@formspree/react';

function FormModal({ buttonText }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [state, handleSubmit] = useForm("moqoqnpz");

  const body = (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        maxWidth: '400px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: '5px',
      }}
    >
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Membership Request Form
      </Typography>
      <Typography id="modal-modal-description" variant="body1" component="p" gutterBottom>
        Enter your details so we can contact you for the next steps.
      </Typography>
      {state.succeeded ? (
        <Typography color={'tertiary'} variant='h5'>
          Thanks for your request. We will get in touch soon!
        </Typography>
      ) : (
      <form onSubmit={handleSubmit}>
        <TextField id="first-name" name="firstname" label="First Name" variant="outlined" fullWidth 
          sx={{ mb: 2, borderRadius: '5px', fontFamily: "body1.fontFamily" }} />
        <TextField id="last-name" name="lasttname" label="Last Name" variant="outlined" fullWidth 
          sx={{ mb: 2, borderRadius: '5px', fontFamily:  "body1.fontFamily" }} />
        <TextField id="email" name="email" type="email" label="Email Address" variant="outlined" fullWidth 
          sx={{ mb: 2, borderRadius: '5px', fontFamily:  "body1.fontFamily" }} />
        <TextField id="whatsapp" name="whatsapp" label="WhatsApp Number (if you'd like to join the group)" variant="outlined" fullWidth 
          sx={{ mb: 2, borderRadius: '5px', fontFamily:  "body1.fontFamily" }} />
        <TextField id="message" name="message"  label="Message" variant="outlined" multiline rows={4} fullWidth 
            sx={{ mb: 2, borderRadius: '5px', fontFamily: "body1.fontFamily" }} />
    <ValidationError prefix="Email" field="email" errors={state.errors} />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <Button type="submit" disabled={state.submitting} variant="contained" color="primary" 
            sx={{ mt: 2, borderRadius: '5px', fontFamily:  "body1.fontFamily", '&:hover': { backgroundColor: "secondary.main" } }}>
            Submit
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