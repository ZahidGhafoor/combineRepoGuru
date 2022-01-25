import React, { useState } from 'react'
import "./Settings.css"
import SettingsScreen1 from "./components/SettingsScreen1/SettingsScreen"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsBox6 from './components/SettingsBox6/SettingsBox6';
import SettingsBox1 from './components/SettingsBox1/SettingsBox1';
import SettingsBox2 from './components/SettingsBox2/SettingsBox2';
import SettingsBox4 from './components/SettingsBox4/SettingsBox4';
import SettingsBox5 from './components/SettingsBox5/SettingsBox5';
import { ReactComponent as ChangeLanguage } from "../../../../assets/icons/change-language.svg"
import { ReactComponent as OfflineMode } from "../../../../assets/icons/offline-mode.svg"
import { ReactComponent as ResetLearning } from "../../../../assets/icons/reset-learning.svg"
import { ReactComponent as ChangePassword } from "../../../../assets/icons/change-password.svg"
import { ReactComponent as Updates } from "../../../../assets/icons/update.svg"


const Settings = () => {
    const [screen, setScreen] = useState(1);
    return (
        <>
            <div className="settings__wrapper">
                <div className="topbar__placeholder"></div>
                {screen === 1 && <SettingsScreen1 />}
            </div>

            {/* fot mobile screen */}
            <div className="settings__wrapper_mobile">
                <div className="topbar__placeholder"></div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ display: "flex", alignItems: "center" }}><ChangeLanguage fill="#979797" /> <span className="accordion__item_text">Change Language</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SettingsBox1 />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ display: "flex", alignItems: "center" }}><OfflineMode fill="#979797" /> <span className="accordion__item_text">Offline Mode</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SettingsBox2 />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ display: "flex", alignItems: "center" }}><OfflineMode fill="#979797" /> <span className="accordion__item_text">Lisence Class</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SettingsBox2 />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ display: "flex", alignItems: "center" }}><ResetLearning fill="#979797" /> <span className="accordion__item_text">Reset Learning</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SettingsBox4 />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ display: "flex", alignItems: "center" }}><ChangePassword fill="#979797" /> <span className="accordion__item_text">Change Password</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SettingsBox5 />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ display: "flex", alignItems: "center" }}><Updates fill="#979797" /> <span className="accordion__item_text">Updates</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SettingsBox6 />
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}

export default Settings
