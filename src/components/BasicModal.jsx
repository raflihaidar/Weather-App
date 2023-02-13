import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const BasicModal = ({open, onClose, modalContent}) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {modalContent.map((item, index) => (
      <Modal open={open} onClose={onClose} className="z-50 opacity-50">
          <Box sx={style} key={index} className="rounded-xl">
            <Typography id="modal-modal-title" variant="h6" component="h2" className="text-center">
              Details
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <p>Feels Like : {item.main.feels_like.toFixed()}℃</p>
              <p>Humidty : {item.main.humidity}%</p>
              <p>Wind Speed Like : {item.wind.speed.toFixed()} Mph</p>
            </Typography>
          </Box>
      </Modal>
      ))}
    </>
  );
};

export default BasicModal;
