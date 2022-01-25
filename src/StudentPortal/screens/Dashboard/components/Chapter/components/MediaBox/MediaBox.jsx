import React from "react";
import "./MediaBox.css";
import { useState } from "react";
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Video from "../../../../../../assets/videos/droneview.mp4"
import ReactPlayer from 'react-player'



const MediaBox = ({ video, image, type, autoplay }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="media__box">
      {video && (
        <>

          {/* <img src={Thumbnail} className="play__screen" onClick={handleOpen} /> */}
          <div className="play__screen">
            <div className="placeholder__box_forvideo" onClick={handleOpen}></div>
            <ReactPlayer url={video} autoplay controls={true} width='100%'
              height='100%' /></div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="video__box">

              <ReactPlayer url={video} controls={true} width='100%'
                height='100%' />

            </div>
          </Modal>
        </>
      )}
      {image && <img src={image} className="mb__image" />}
    </div>
  );
};

export default MediaBox;
