import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    IconButton,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Divider,
} from "@mui/material";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen((previous) => !previous);
    };

    const closeDrawer = () => {
        setMobileOpen(false);
    };

    const navItems = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Add Job",
            path: "/add",
        },
        {
            label: "Contact",
            path: "/contact",
        },
    ];

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    borderBottom: "1px solid #e5e7eb",
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{
                            minHeight: "72px",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* Logo */}
                        <Box
                            component={Link}
                            to="/"
                            onClick={closeDrawer}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                textDecoration: "none",
                                color: "#111827",
                            }}
                        >
                            <WorkOutlineIcon
                                sx={{
                                    fontSize: 32,
                                    color: "primary.main",
                                }}
                            />

                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    letterSpacing: "-0.5px",
                                }}
                            >
                                JobPortal
                            </Typography>
                        </Box>

                        {/* Desktop navigation */}
                        <Box
                            sx={{
                                display: {
                                    xs: "none",
                                    md: "flex",
                                },
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.path;

                                return (
                                    <Button
                                        key={item.path}
                                        component={Link}
                                        to={item.path}
                                        sx={{
                                            color: isActive ? "primary.main" : "#374151",
                                            fontWeight: 600,
                                            textTransform: "none",
                                            borderRadius: 2,
                                            backgroundColor: isActive
                                                ? "#eff6ff"
                                                : "transparent",
                                            "&:hover": {
                                                color: "primary.main",
                                                backgroundColor: "#eff6ff",
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                );
                            })}

                            <Button
                                component={Link}
                                to="/add"
                                variant="contained"
                                sx={{
                                    ml: 1,
                                    px: 2.5,
                                    borderRadius: 2,
                                }}
                            >
                                Post a Job
                            </Button>
                        </Box>

                        {/* Mobile menu */}
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{
                                display: {
                                    xs: "flex",
                                    md: "none",
                                },
                                color: "#111827",
                            }}
                        >
                            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={closeDrawer}
            >
                <Box
                    sx={{
                        width: 280,
                        pt: 2,
                    }}
                    role="presentation"
                >
                    <Box
                        sx={{
                            px: 2,
                            pb: 2,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <WorkOutlineIcon
                            sx={{
                                color: "primary.main",
                            }}
                        />

                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                            }}
                        >
                            JobPortal
                        </Typography>
                    </Box>

                    <Divider />

                    <List sx={{ px: 1, pt: 1 }}>
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;

                            return (
                                <ListItemButton
                                    key={item.path}
                                    component={Link}
                                    to={item.path}
                                    onClick={closeDrawer}
                                    selected={isActive}
                                    sx={{
                                        borderRadius: 2,
                                        mb: 0.5,
                                        "&.Mui-selected": {
                                            backgroundColor: "#eff6ff",
                                            color: "primary.main",
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontWeight: 600,
                                        }}
                                    />
                                </ListItemButton>
                            );
                        })}
                    </List>

                    <Box sx={{ px: 2, mt: 1 }}>
                        <Button
                            component={Link}
                            to="/add"
                            onClick={closeDrawer}
                            variant="contained"
                            fullWidth
                            sx={{
                                py: 1.2,
                            }}
                        >
                            Post a Job
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;