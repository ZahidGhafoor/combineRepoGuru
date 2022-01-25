import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DesktopNav from '../DesktopNav/DesktopNav';
import "./Drawer.css"
import { ReactComponent as ProfileOutline } from "../../../../assets/icons/profile-outline.svg"
import ProfileImage from "../../../../assets/images/profile2.png"
import { ReactComponent as Logo } from "../../../../assets/icons/LogoBlack.svg"
import { ReactComponent as QuestionTable } from "../../../../assets/icons/question.svg"
import { ReactComponent as Logout } from "../../../../assets/icons/Logout.svg"
import { ReactComponent as Settings } from "../../../../assets/icons/setting.svg"
import { ReactComponent as SuperQuestion } from "../../../../assets/icons/superquestion.svg"
import { ReactComponent as MockTest } from "../../../../assets/icons/mocktest.svg"
import { ReactComponent as Overview } from "../../../../assets/icons/home.svg"
import { ReactComponent as Chapters } from "../../../../assets/icons/chapter.svg"
import { ReactComponent as PracticeSheet } from "../../../../assets/icons/practicesheet.svg"
import { ReactComponent as ActiveMark } from "../../../../assets/icons/activemark.svg"
import { useHistory } from "react-router-dom"
import { ReactComponent as Notification } from "../../../../assets/icons/notification.svg"

// Active Color = #027368
// Normal Color = #979797

const drawerWidth = 240;


function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [active, setActive] = React.useState(0);
    const history = useHistory();
    const routes = [
        "/student/dashboard/overview",
        "/student/dashboard/chapters",
        "/student/dashboard/question-table",
        "/student/dashboard/practice-sheets",
        "/student/dashboard/mock-test",
        "/student/dashboard/super-questions",
        "/student/dashboard/settings",
    ]

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);

    };
    const icons = [
        <Overview stroke={active === 0 ? "#027368" : "#979797"} />,
        <Chapters stroke={active === 1 ? "#027368" : "#979797"} />,
        <QuestionTable stroke={active === 2 ? "#027368" : "#979797"} />,
        <PracticeSheet stroke={active === 3 ? "#027368" : "#979797"} />,
        <MockTest stroke={active === 4 ? "#027368" : "#979797"} />,
        <SuperQuestion stroke={active === 5 ? "#027368" : "#979797"} />,
        <Settings stroke={active === 6 ? "#027368" : "#979797"} />,
    ]
    const handleClick = (id) => {
        setActive(id)
        history.push(routes[id]);
    }
    useEffect(() => {
        setActive(routes.indexOf(history.location.pathname))
    }, [history.location.pathname])

    const drawer = (
        <div>
            <div className="drawer__logo">
                <Logo />
            </div>
            {/* <Toolbar /> */}



            <List>
                {['Overview', 'Chapter', 'Question Table', 'Practice Sheets', "Mock Test", "Super Questions", "Settings"].map((text, index) => (
                    <ListItem button key={text} sx={{ paddingLeft: "45px", justifyContent: "center", height: "60px" }} onClick={() => handleClick(index)}>
                        {active === index && <span className="active__mark"> <ActiveMark /></span>}
                        <ListItemIcon sx={{ marginright: "0px" }}>
                            {icons[index]}
                        </ListItemIcon>
                        <ListItemText primary={text} n sx={{ marginLeft: "-20px", color: active === index && "#027368" }} />
                    </ListItem>
                ))}
            </List>

            <div className="logout__btn"><Logout /><span>Logout</span></div>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    background: "white",
                    boxShadow: "none"
                }}
            >

                {<Toolbar sx={{ display: { sm: 'none', lg: "none", xl: "none", xs: "flex" }, justifyContent: "space-between", width: "100%", maxWidth: "370px" }}>
                    <span className="drawer__topbar__left">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' }, marginRight: "0" }}
                        >
                            <MenuIcon sx={{ color: "black", marginRight: "0", paddingRight: "0" }} />


                        </IconButton>
                        <Logo fill="#000000" sx={{ color: "black", transform: "translateX(-25px)" }} />
                    </span>
                    <div className="drawer__appbar_2">
                        <Notification />
                        <div className="rb__profile_imagebox" > <ProfileOutline className="rb__profile_imageoutline" /> <img className="rightbar__user_profile" src={ProfileImage} /></div>
                    </div>
                </Toolbar>
                }



                {active !== 0 &&
                    <DesktopNav />
                }

            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >

                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, padding: "0", margin: "0" }}
            >
                {props.children}
            </Box>
        </Box>
    );
}



export default ResponsiveDrawer;