import React, { useState } from "react";
import axios from "axios";
import {
    Typography,
    TextField,
    Button,
    Paper,
    Box,
    Alert,
    Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const initial = {
    postId: "",
    postProfile: "",
    reqExperience: 0,
    postTechStack: [],
    postDesc: "",
};

const Create = () => {
    const skillSet = [
        { name: "Javascript" },
        { name: "Java" },
        { name: "Python" },
        { name: "Django" },
        { name: "Rust" },
    ];

    const navigate = useNavigate();

    const [form, setForm] = useState(initial);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // Basic validation
        if (!form.postId) {
            setError("Please enter a Post ID.");
            return;
        }

        if (!form.postProfile.trim()) {
            setError("Please enter a Job Profile.");
            return;
        }

        if (!form.postDesc.trim()) {
            setError("Please enter a Job Description.");
            return;
        }

        try {
            const job = {
                postId: Number(form.postId),
                postProfile: form.postProfile.trim(),
                reqExperience: Number(form.reqExperience),
                postTechStack: form.postTechStack,
                postDesc: form.postDesc.trim(),
            };

            const response = await axios.post(
                "http://localhost:8080/jobPost",
                job
            );

            console.log("Job created:", response.data);

            // Navigate only after successful POST
            navigate("/");
        } catch (error) {
            console.error("Error creating job:", error);

            if (error.response) {
                console.log("Backend response:", error.response.data);
                console.log("Status:", error.response.status);
            }

            setError(
                "Unable to create job. Make sure the Post ID is unique and the backend is running."
            );
        }
    };

    const handleSkillChange = (e) => {
        const { value, checked } = e.target;

        setForm((previousForm) => ({
            ...previousForm,
            postTechStack: checked
                ? [...previousForm.postTechStack, value]
                : previousForm.postTechStack.filter(
                    (skill) => skill !== value
                ),
        }));
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#f8fafc",
                py: 6,
            }}
        >
            <Container maxWidth="md">
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
                    <Typography
                        align="center"
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            color: "#111827",
                            mb: 4,
                        }}
                    >
                        Create New Job
                    </Typography>

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
                        autoComplete="off"
                        onSubmit={handleSubmit}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                        }}
                    >
                        {/* Post ID */}
                        <TextField
                            type="number"
                            required
                            label="Post ID"
                            value={form.postId}
                            inputProps={{
                                min: 1,
                            }}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    postId: e.target.value,
                                })
                            }
                            fullWidth
                        />

                        {/* Job Profile */}
                        <TextField
                            required
                            label="Job Profile"
                            placeholder="e.g. Java Developer"
                            value={form.postProfile}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    postProfile: e.target.value,
                                })
                            }
                            fullWidth
                        />

                        {/* Experience */}
                        <TextField
                            type="number"
                            required
                            label="Years of Experience"
                            value={form.reqExperience}
                            inputProps={{
                                min: 0,
                            }}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    reqExperience: e.target.value,
                                })
                            }
                            fullWidth
                        />

                        {/* Description */}
                        <TextField
                            required
                            multiline
                            rows={5}
                            label="Job Description"
                            placeholder="Describe the job..."
                            value={form.postDesc}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    postDesc: e.target.value,
                                })
                            }
                            fullWidth
                        />

                        {/* Skills */}
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                }}
                            >
                                Required Skills
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 2,
                                }}
                            >
                                {skillSet.map(({ name }) => (
                                    <Box
                                        key={name}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            id={name}
                                            name={name}
                                            value={name}
                                            checked={form.postTechStack.includes(name)}
                                            onChange={handleSkillChange}
                                        />

                                        <label htmlFor={name}>
                                            {name}
                                        </label>
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                        {/* Submit */}
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{
                                mt: 1,
                                py: 1.5,
                                borderRadius: 2,
                                fontWeight: 600,
                                textTransform: "none",
                                backgroundColor: "#2563eb",
                                boxShadow: "none",
                                "&:hover": {
                                    backgroundColor: "#1d4ed8",
                                    boxShadow: "none",
                                },
                            }}
                        >
                            Create Job
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default Create;