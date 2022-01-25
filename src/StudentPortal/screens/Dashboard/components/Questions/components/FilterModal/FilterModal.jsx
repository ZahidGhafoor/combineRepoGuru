
import React, { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./FilterModal.css"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "70%",
    maxWidth: "950px",
    bgcolor: 'background.paper',
    borderRadius: "10px",
    boxShadow: 24,
    outline: "none",
    p: 4,
};

const FilterModal = ({ filterModal, setFilterModal }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setFilterModal(true)
    };
    const handleClose = () => {
        setFilterModal(false)
    };
    useEffect(() => {
        setOpen(filterModal)
    }, [filterModal])
    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className="filter__modal_heading1">Filter</div>
                        <div className="filter__modal_section">
                            <div className="filter__section_heading">Question Standing</div>
                            <div className="filter__section_body">
                                <div className="filter__section_item">Unanswered Questions</div>
                                <div className="filter__section_item">1X Wrong Answered Questions</div>
                                <div className="filter__section_item">Exam Ready Questions</div>
                                <div className="filter__section_item">2X Wrong Answered Questions</div>
                                <div className="filter__section_item">3X Wrong Answered Questions</div>
                            </div>
                        </div>
                        <div className="filter__modal_section">
                            <div className="filter__section_heading">Question Type</div>
                            <div className="filter__section_body">
                                <div className="filter__section_item">Video Questions</div>
                                <div className="filter__section_item">Image Questions</div>
                                <div className="filter__section_item">Number Questions</div>
                                <div className="filter__section_item">Traffic Signal Questions</div>

                            </div>
                        </div>
                        <div className="filter__modal_bottom">
                            <div className="filter__modal_item">
                                <div className="filter__section_bottomheading">Driving Lisence</div>
                                <div className="filter__section_bottomitem">B</div>
                            </div>
                            <div className="filter__modal_item">
                                <div className="filter__section_bottomheading">Special Filter</div>
                                <div className="filter__section_bottomitem">Marked</div>
                            </div>
                            <div className="filter__modal_item">
                                <div className="filter__section_bottomheading">Chapters</div>
                                <div className="filter__section_bottomitem">Marked</div>
                            </div>
                        </div>
                        <div className="filter__modal_btnwrap">
                            <div className="filter__modal_btnbox">Apply the Filters</div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default FilterModal;










