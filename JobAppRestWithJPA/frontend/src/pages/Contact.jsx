import React from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SendOutlinedIcon from "@mui/icons-material/Send";

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        // UI only for now
        alert("Message sent successfully!");
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#f8fafc",
                py: 7,
            }}
        >
            <Container maxWidth="lg">

                {/* Header */}
                <Box
                    sx={{
                        textAlign: "center",
                        mb: 6,
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            color: "#111827",
                            mb: 1,
                        }}
                    >
                        Get in Touch
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: "#6b7280",
                            maxWidth: 600,
                            mx: "auto",
                            lineHeight: 1.8,
                        }}
                    >
                        Have a question, feedback, or need help? Send us a message
                        and we'll get back to you.
                    </Typography>
                </Box>

                <Grid container spacing={4}>

                    {/* Contact information */}
                    <Grid item xs={12} md={5}>
                        <Paper
                            elevation={0}
                            sx={{
                                height: "100%",
                                p: 4,
                                borderRadius: 4,
                                border: "1px solid #e5e7eb",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    color: "#111827",
                                    mb: 3,
                                }}
                            >
                                Contact Information
                            </Typography>

                            {/* Email */}
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 2,
                                    mb: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        minWidth: 48,
                                        height: 48,
                                        borderRadius: 3,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#eff6ff",
                                        color: "#2563eb",
                                    }}
                                >
                                    <EmailOutlinedIcon />
                                </Box>

                                <Box>
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            color: "#374151",
                                        }}
                                    >
                                        Email
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#6b7280",
                                            mt: 0.5,
                                        }}
                                    >
                                        support@jobportal.com
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Phone */}
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 2,
                                    mb: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        minWidth: 48,
                                        height: 48,
                                        borderRadius: 3,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#eff6ff",
                                        color: "#2563eb",
                                    }}
                                >
                                    <PhoneOutlinedIcon />
                                </Box>

                                <Box>
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            color: "#374151",
                                        }}
                                    >
                                        Phone
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#6b7280",
                                            mt: 0.5,
                                        }}
                                    >
                                        +91 98765 43210
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Location */}
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        minWidth: 48,
                                        height: 48,
                                        borderRadius: 3,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#eff6ff",
                                        color: "#2563eb",
                                    }}
                                >
                                    <LocationOnOutlinedIcon />
                                </Box>

                                <Box>
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            color: "#374151",
                                        }}
                                    >
                                        Office
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#6b7280",
                                            mt: 0.5,
                                        }}
                                    >
                                        New Delhi, India
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Contact form */}
                    <Grid item xs={12} md={7}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                borderRadius: 4,
                                border: "1px solid #e5e7eb",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    color: "#111827",
                                    mb: 3,
                                }}
                            >
                                Send us a message
                            </Typography>

                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2.5,
                                }}
                            >
                                <TextField
                                    label="Your Name"
                                    placeholder="Enter your name"
                                    fullWidth
                                    required
                                />

                                <TextField
                                    label="Email Address"
                                    type="email"
                                    placeholder="Enter your email"
                                    fullWidth
                                    required
                                />

                                <TextField
                                    label="Subject"
                                    placeholder="How can we help?"
                                    fullWidth
                                    required
                                />

                                <TextField
                                    label="Message"
                                    placeholder="Write your message..."
                                    multiline
                                    rows={5}
                                    fullWidth
                                    required
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    startIcon={<SendOutlinedIcon />}
                                    sx={{
                                        alignSelf: "flex-start",
                                        px: 4,
                                        py: 1.4,
                                        borderRadius: 2,
                                        textTransform: "none",
                                        fontWeight: 600,
                                        backgroundColor: "#2563eb",
                                        boxShadow: "none",
                                        "&:hover": {
                                            backgroundColor: "#1d4ed8",
                                            boxShadow: "none",
                                        },
                                    }}
                                >
                                    Send Message
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;