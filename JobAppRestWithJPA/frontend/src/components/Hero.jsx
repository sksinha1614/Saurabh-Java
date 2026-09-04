import React from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 55%, #eef2ff 100%)",
                minHeight: "520px",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Decorative circles */}
            <Box
                sx={{
                    position: "absolute",
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    backgroundColor: "#dbeafe",
                    opacity: 0.5,
                    top: -120,
                    right: -80,
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    width: 220,
                    height: 220,
                    borderRadius: "50%",
                    backgroundColor: "#e0e7ff",
                    opacity: 0.6,
                    bottom: -100,
                    left: -80,
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Box
                    sx={{
                        maxWidth: "800px",
                        mx: "auto",
                        textAlign: "center",
                    }}
                >
                    {/* Small badge */}
                    <Chip
                        icon={<WorkOutlineIcon />}
                        label="Find your next opportunity"
                        sx={{
                            mb: 3,
                            px: 1,
                            py: 2.5,
                            borderRadius: 5,
                            backgroundColor: "#dbeafe",
                            color: "#1d4ed8",
                            fontWeight: 600,
                            fontSize: "0.9rem",
                        }}
                    />

                    {/* Main heading */}
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: {
                                xs: "2.8rem",
                                sm: "3.5rem",
                                md: "4.5rem",
                            },
                            fontWeight: 800,
                            lineHeight: 1.1,
                            letterSpacing: "-2px",
                            color: "#111827",
                            mb: 3,
                        }}
                    >
                        Find a job that
                        <Box
                            component="span"
                            sx={{
                                display: "block",
                                color: "#2563eb",
                            }}
                        >
                            moves you forward.
                        </Box>
                    </Typography>

                    {/* Description */}
                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: "650px",
                            mx: "auto",
                            color: "#6b7280",
                            fontSize: {
                                xs: "1rem",
                                md: "1.15rem",
                            },
                            lineHeight: 1.8,
                            mb: 4,
                        }}
                    >
                        Discover exciting opportunities, explore your perfect career path,
                        and connect with jobs that match your skills and experience.
                    </Typography>

                    {/* Buttons */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 2,
                            flexWrap: "wrap",
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<SearchIcon />}
                            onClick={() => {
                                document
                                    .getElementById("jobs-section")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            sx={{
                                px: 4,
                                py: 1.5,
                                borderRadius: 3,
                                textTransform: "none",
                                fontSize: "1rem",
                                fontWeight: 600,
                                backgroundColor: "#2563eb",
                                boxShadow: "0 8px 20px rgba(37, 99, 235, 0.25)",
                                "&:hover": {
                                    backgroundColor: "#1d4ed8",
                                    boxShadow: "0 10px 24px rgba(37, 99, 235, 0.3)",
                                },
                            }}
                        >
                            Browse Jobs
                        </Button>

                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => navigate("/add")}
                            sx={{
                                px: 4,
                                py: 1.5,
                                borderRadius: 3,
                                textTransform: "none",
                                fontSize: "1rem",
                                fontWeight: 600,
                                borderColor: "#bfdbfe",
                                color: "#2563eb",
                                "&:hover": {
                                    borderColor: "#2563eb",
                                    backgroundColor: "#eff6ff",
                                },
                            }}
                        >
                            Post a Job
                        </Button>
                    </Box>

                    {/* Small stats */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: {
                                xs: 3,
                                sm: 6,
                            },
                            mt: 5,
                            flexWrap: "wrap",
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: 800,
                                    fontSize: "1.5rem",
                                    color: "#111827",
                                }}
                            >
                                100+
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#6b7280",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Job Opportunities
                            </Typography>
                        </Box>

                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: 800,
                                    fontSize: "1.5rem",
                                    color: "#111827",
                                }}
                            >
                                50+
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#6b7280",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Companies
                            </Typography>
                        </Box>

                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: 800,
                                    fontSize: "1.5rem",
                                    color: "#111827",
                                }}
                            >
                                24/7
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#6b7280",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Easy Access
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;