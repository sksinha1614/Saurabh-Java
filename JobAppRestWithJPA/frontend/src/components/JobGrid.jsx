import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import JobCard from "./JobCard";

const JobGrid = ({ jobs, onDelete, onEdit }) => {
    return (
        <Box sx={{ width: "100%" }}>

            {/* Section heading */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Box>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            color: "#111827",
                            mb: 0.5,
                        }}
                    >
                        Latest Jobs
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: "#6b7280",
                        }}
                    >
                        Explore opportunities that match your skills
                    </Typography>
                </Box>

                <Typography
                    variant="body2"
                    sx={{
                        color: "#6b7280",
                        fontWeight: 600,
                    }}
                >
                    {jobs?.length || 0} jobs
                </Typography>
            </Box>

            {/* Jobs */}
            {jobs && jobs.length > 0 ? (
                <Grid container spacing={3}>
                    {jobs.map((job) => (
                        <Grid
                            item
                            key={job.postId}
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <JobCard
                                job={job}
                                onDelete={onDelete}
                                onEdit={onEdit}
                            />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Box
                    sx={{
                        textAlign: "center",
                        py: 8,
                        px: 3,
                        borderRadius: 4,
                        border: "1px dashed #d1d5db",
                        backgroundColor: "#f9fafb",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: "#374151",
                            mb: 1,
                        }}
                    >
                        No jobs found
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: "#6b7280",
                        }}
                    >
                        Try searching with another keyword.
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default JobGrid;