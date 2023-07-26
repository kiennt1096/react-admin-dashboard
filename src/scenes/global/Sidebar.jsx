import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// const Item = ({ title, to, icon, selected, setSelected }) => {
//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);
//     return (
//         <MenuItem active
//     )
// };

const SidebarX = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                background: colors.primary[400],
                // "& .pro-sidebar-inner": {
                //     background: `${colors.primary[400]} !important`,
                // },
                // "& .pro-icon-wrapper": {
                //     backgroundColor: "transparent !important",
                // },
                // "& .pro-inner-item": {
                //     padding: "5px 35px 5px 20px !important",
                // },
                // "& .pro-inner-item:hover": {
                //     color: "#868dfb !important",
                // },
                // "& .pro-menu-item.active": {
                //     color: "#6870fa !important",
                // },
            }}
        >
            <Sidebar
                collapsed={isCollapsed}
                rootStyles={{
                    borderRightStyle: "none",
                }}
            >
                <Menu
                    iconShape="square"
                    style={{
                        background: colors.primary[400],
                    }}
                >
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        rootStyles={{
                            margin: "0px 0 0px 0",
                            color: colors.gray[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography
                                    variant="h3"
                                    color={colors.gray[100]}
                                >
                                    Sjn chào
                                </Typography>
                                <IconButton
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                >
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box p="20px 0 25px 0">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/user.png`}
                                    style={{
                                        cursor: "pointer",
                                        borderRadius: "50%",
                                    }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.gray[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Trung Ciên
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.greenAccent[500]}
                                >
                                    Bảo vệ
                                </Typography>
                            </Box>
                        </Box>
                    )}
                    {/* <Box paddingLeft={isCollapsed ? undefined : "10%"}></Box> */}
                </Menu>
            </Sidebar>
        </Box>
    );
};

export default SidebarX;
