import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Chip,
    Container,
    IconButton,
    Paper,
    TextField,
    Typography,
    Alert,
    CircularProgress,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const EditJob = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const postId = location.state?.id;

    const [job, setJob] = useState({
        postProfile: "",
        postDesc: "",
        reqExperience: "",
        postTechStack: [],
    });

    const [skill, setSkill] = useState("");
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // Get existing job
    useEffect(() => {
        const fetchJob = async () => {
            if (!postId) {
                setError("No job selected for editing.");
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(
                    `http://localhost:8080/jobPost/${postId}`
                );

                const data = response.data;

                setJob({
                    postProfile: data.postProfile || "",
                    postDesc: data.postDesc || "",
                    reqExperience: data.reqExperience ?? "",
                    postTechStack: data.postTechStack || [],
                });
            } catch (err) {
                console.error("Error fetching job:", err);
                setError("Unable to load the job.");
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [postId]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setJob((previousJob) => ({
            ...previousJob,
            [name]: value,
        }));
    };

    const addSkill = () => {
        const trimmedSkill = skill.trim();

        if (!trimmedSkill) {
            return;
        }

        if (job.postTechStack.includes(trimmedSkill)) {
            return;
        }

        setJob((previousJob) => ({
            ...previousJob,
            postTechStack: [
                ...previousJob.postTechStack,
                trimmedSkill,
            ],
        }));

        setSkill("");
    };

    const removeSkill = (skillToRemove) => {
        setJob((previousJob) => ({
            ...previousJob,
            postTechStack: previousJob.postTechStack.filter(
                (item) => item !== skillToRemove
            ),
        }));
    };

    const handleSkillKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            addSkill();
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setMessage("");
        setError("");

        if (!job.postProfile.trim()) {
            setError("Please enter a job profile.");
            return;
        }

        if (!job.postDesc.trim()) {
            setError("Please enter a job description.");
            return;
        }

        if (job.reqExperience === "") {
            setError("Please enter required experience.");
            return;
        }

        if (job.postTechStack.length === 0) {
            setError("Please add at least one skill.");
            return;
        }

        try {
            const updatedJob = {
                postProfile: job.postProfile,
                postDesc: job.postDesc,
                reqExperience: Number(job.reqExperience),
                postTechStack: job.postTechStack,
            };

            await axios.put(
                `http://localhost:8080/jobPost/${postId}`,
                updatedJob
            );

            setMessage("Job updated successfully!");

            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (err) {
            console.error("Error updating job:", err);
            setError("Unable to update the job. Please try again.");
        }
    };

    if (loading) {
        return (
            <Box
                sx={{
                    minHeight: "80vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#f8fafc",
                py: 6,
            }}
        >
            <Container maxWidth="md">
                {/* Header */}
                <Box
                    sx={{
                        textAlign: "center",
                        mb: 5,
                    }}
                >
                    <Box
                        sx={{
                            width: 64,
                            height: 64,
                            mx: "auto",
                            mb: 2,
                            borderRadius: 4,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#eff6ff",
                            color: "#2563eb",
                        }}
                    >
                        <EditOutlinedIcon sx={{ fontSize: 32 }} />
                    </Box>

                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            color: "#111827",
                            mb: 1,
                        }}
                    >
                        Edit Job
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: "#6b7280",
                        }}
                    >
                        Update the job details and keep the opportunity current.
                    </Typography>
                </Box>

                {/* Form */}
                <Paper
                    elevation={0}
                    sx={{
                        p: {
                            xs: 3,
                            sm: 5,
                        },
                        borderRadius: 4,
                        border: "1px solid #e5e7eb",
                        backgroundColor: "#ffffff",
                    }}
                >
                    {message && (
                        <Alert
                            severity="success"
                            sx={{
                                mb: 3,
                                borderRadius: 2,
                            }}
                        >
                            {message}
                        </Alert>
                    )}

                    {error && (
                        <Alert
                            severity="error"
                            sx={{
                                mb: 3,
                                borderRadius: 2,
                            }}
                        >
                            {error}
                        </Alert>
                    )}

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                        }}
                    >
                        {/* Job profile */}
                        <TextField
                            label="Job Profile"
                            name="postProfile"
                            value={job.postProfile}
                            onChange={handleChange}
                            fullWidth
                            required
                        />

                        {/* Description */}
                        <TextField
                            label="Job Description"
                            name="postDesc"
                            value={job.postDesc}
                            onChange={handleChange}
                            fullWidth
                            required
                            multiline
                            rows={5}
                        />

                        {/* Experience */}
                        <TextField
                            label="Required Experience"
                            name="reqExperience"
                            value={job.reqExperience}
                            onChange={handleChange}
                            type="number"
                            inputProps={{
                                min: 0,
                            }}
                            fullWidth
                            required
                        />

                        {/* Skills */}
                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    color: "#374151",
                                    mb: 1,
                                }}
                            >
                                Skills
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 1,
                                }}
                            >
                                <TextField
                                    value={skill}
                                    onChange={(event) => setSkill(event.target.value)}
                                    onKeyDown={handleSkillKeyDown}
                                    placeholder="Add a skill"
                                    fullWidth
                                />

                                <IconButton
                                    onClick={addSkill}
                                    sx={{
                                        width: 56,
                                        borderRadius: 2,
                                        backgroundColor: "#2563eb",
                                        color: "#ffffff",
                                        "&:hover": {
                                            backgroundColor: "#1d4ed8",
                                        },
                                    }}
                                >
                                    <AddIcon />
                                </IconButton>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 1,
                                    mt: 2,
                                }}
                            >
                                {job.postTechStack.map((item) => (
                                    <Chip
                                        key={item}
                                        label={item}
                                        onDelete={() => removeSkill(item)}
                                        deleteIcon={<DeleteOutlineIcon />}
                                        sx={{
                                            backgroundColor: "#eff6ff",
                                            color: "#1d4ed8",
                                            fontWeight: 500,
                                            borderRadius: 2,
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>

                        {/* Buttons */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: 2,
                                mt: 2,
                            }}
                        >
                            <Button
                                variant="outlined"
                                onClick={() => navigate("/")}
                                sx={{
                                    px: 3,
                                    py: 1.3,
                                    borderRadius: 2,
                                    textTransform: "none",
                                    fontWeight: 600,
                                }}
                            >
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    px: 4,
                                    py: 1.3,
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
                                Update Job
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default EditJob;