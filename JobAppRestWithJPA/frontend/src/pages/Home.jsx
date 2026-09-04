import React, { useEffect, useState } from "react";
import { Box, Container, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import JobGrid from "../components/JobGrid";

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    // Get all jobs
    const fetchJobs = async () => {
        try {
            setLoading(true);

            const response = await axios.get(
                "http://localhost:8080/jobPosts"
            );

            setJobs(response.data);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        } finally {
            setLoading(false);
        }
    };

    // Search jobs
    const handleSearch = async (query) => {
        try {
            setLoading(true);

            if (!query.trim()) {
                await fetchJobs();
                return;
            }

            const response = await axios.get(
                `http://localhost:8080/jobPosts/keyword/${encodeURIComponent(query)}`
            );

            setJobs(response.data);
        } catch (error) {
            console.error("Error searching jobs:", error);
            setJobs([]);
        } finally {
            setLoading(false);
        }
    };

    // Delete job
    const handleDelete = async (id) => {
        try {
            await axios.delete(
                `http://localhost:8080/jobPost/${id}`
            );

            setJobs((previousJobs) =>
                previousJobs.filter((job) => job.postId !== id)
            );
        } catch (error) {
            console.error("Error deleting job:", error);
        }
    };

    // Edit job
    const handleEdit = (id) => {
        navigate("/edit", {
            state: { id },
        });
    };

    // Load jobs when page opens
    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#f8fafc",
            }}
        >
            {/* Hero */}
            <Hero />

            {/* Search + Jobs */}
            <Container
                maxWidth="lg"
                sx={{
                    py: 6,
                }}
            >
                {/* Search */}
                <Box
                    sx={{
                        mt: -6,
                        position: "relative",
                        zIndex: 2,
                    }}
                >
                    <SearchBar onSearch={handleSearch} />
                </Box>

                {/* Jobs */}
                <Box
                    id="jobs-section"
                    sx={{
                        mt: 8,
                    }}
                >
                    {loading ? (
                        <Box
                            sx={{
                                minHeight: 300,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    ) : (
                        <JobGrid
                            jobs={jobs}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    )}
                </Box>

                {/* Bottom message */}
                {!loading && jobs.length > 0 && (
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: "center",
                            color: "#9ca3af",
                            mt: 6,
                        }}
                    >
                        Showing available job opportunities
                    </Typography>
                )}
            </Container>
        </Box>
    );
};

export default Home;