import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Divider,
    Link as MuiLink,
} from "@mui/material";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                mt: 8,
                backgroundColor: "#111827",
                color: "#ffffff",
            }}
        >
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Grid container spacing={5}>

                    {/* Brand */}
                    <Grid item xs={12} md={5}>
                        <Box
                            component={Link}
                            to="/"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                textDecoration: "none",
                                color: "#ffffff",
                                mb: 2,
                            }}
                        >
                            <WorkOutlineIcon
                                sx={{
                                    fontSize: 32,
                                    color: "#60a5fa",
                                }}
                            />

                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                }}
                            >
                                JobPortal
                            </Typography>
                        </Box>

                        <Typography
                            variant="body2"
                            sx={{
                                maxWidth: 420,
                                color: "#9ca3af",
                                lineHeight: 1.8,
                            }}
                        >
                            Discover exciting career opportunities and connect
                            with jobs that match your skills, experience, and goals.
                        </Typography>

                        {/* Social icons */}
                        <Box
                            sx={{
                                display: "flex",
                                gap: 1,
                                mt: 3,
                            }}
                        >
                            <GitHubIcon
                                sx={{
                                    color: "#9ca3af",
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: "#ffffff",
                                    },
                                }}
                            />

                            <LinkedInIcon
                                sx={{
                                    color: "#9ca3af",
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: "#60a5fa",
                                    },
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Navigation */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                            }}
                        >
                            Navigation
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1.2,
                            }}
                        >
                            <MuiLink
                                component={Link}
                                to="/"
                                underline="none"
                                sx={{
                                    color: "#9ca3af",
                                    "&:hover": {
                                        color: "#ffffff",
                                    },
                                }}
                            >
                                Home
                            </MuiLink>

                            <MuiLink
                                component={Link}
                                to="/add"
                                underline="none"
                                sx={{
                                    color: "#9ca3af",
                                    "&:hover": {
                                        color: "#ffffff",
                                    },
                                }}
                            >
                                Post a Job
                            </MuiLink>

                            <MuiLink
                                component={Link}
                                to="/contact"
                                underline="none"
                                sx={{
                                    color: "#9ca3af",
                                    "&:hover": {
                                        color: "#ffffff",
                                    },
                                }}
                            >
                                Contact
                            </MuiLink>
                        </Box>
                    </Grid>

                    {/* Information */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                            }}
                        >
                            Why JobPortal?
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                color: "#9ca3af",
                                lineHeight: 1.8,
                            }}
                        >
                            A simple and modern platform designed to make job
                            discovery easier and help employers find suitable talent.
                        </Typography>
                    </Grid>
                </Grid>

                <Divider
                    sx={{
                        my: 4,
                        borderColor: "#374151",
                    }}
                />

                {/* Bottom */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2,
                        flexWrap: "wrap",
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#6b7280",
                        }}
                    >
                        © {new Date().getFullYear()} JobPortal. All rights reserved.
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: "#6b7280",
                        }}
                    >
                        Built with React & Spring Boot
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;