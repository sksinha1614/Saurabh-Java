import React from "react";
import {
    Card,
    CardContent,
    Box,
    Typography,
    Chip,
    IconButton,
    Divider,
} from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const JobCard = ({ job, onDelete, onEdit }) => {
    return (
        <Card
            elevation={0}
            sx={{
                height: "100%",
                borderRadius: 4,
                border: "1px solid #e5e7eb",
                backgroundColor: "#ffffff",
                transition: "all 0.3s ease",
                overflow: "hidden",

                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 16px 35px rgba(0, 0, 0, 0.10)",
                    borderColor: "#bfdbfe",
                },
            }}
        >
            <CardContent
                sx={{
                    p: 3,
                    "&:last-child": {
                        pb: 3,
                    },
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                    }}
                >
                    <Box
                        sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 3,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#eff6ff",
                            color: "#2563eb",
                        }}
                    >
                        <WorkOutlineIcon />
                    </Box>

                    <Box>
                        <IconButton
                            onClick={() => onEdit(job.postId)}
                            size="small"
                            sx={{
                                color: "#6b7280",
                                "&:hover": {
                                    color: "#2563eb",
                                    backgroundColor: "#eff6ff",
                                },
                            }}
                        >
                            <EditOutlinedIcon fontSize="small" />
                        </IconButton>

                        <IconButton
                            onClick={() => onDelete(job.postId)}
                            size="small"
                            sx={{
                                color: "#6b7280",
                                "&:hover": {
                                    color: "#dc2626",
                                    backgroundColor: "#fef2f2",
                                },
                            }}
                        >
                            <DeleteOutlineIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>

                {/* Job title */}
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 700,
                        color: "#111827",
                        fontSize: "1.35rem",
                        mb: 1,
                    }}
                >
                    {job.postProfile}
                </Typography>

                {/* Experience */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.7,
                        color: "#6b7280",
                        mb: 2,
                    }}
                >
                    <AccessTimeIcon sx={{ fontSize: 18 }} />

                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 500,
                        }}
                    >
                        {job.reqExperience} years experience
                    </Typography>
                </Box>

                <Divider sx={{ mb: 2 }} />

                {/* Description */}
                <Typography
                    variant="body2"
                    sx={{
                        color: "#6b7280",
                        lineHeight: 1.7,
                        mb: 2.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {job.postDesc}
                </Typography>

                {/* Skills */}
                <Typography
                    variant="subtitle2"
                    sx={{
                        fontWeight: 700,
                        color: "#374151",
                        mb: 1,
                    }}
                >
                    Skills
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                    }}
                >
                    {job.postTechStack?.map((skill, index) => (
                        <Chip
                            key={index}
                            label={skill}
                            size="small"
                            sx={{
                                borderRadius: 2,
                                backgroundColor: "#eff6ff",
                                color: "#1d4ed8",
                                fontWeight: 500,
                                "& .MuiChip-label": {
                                    px: 1.2,
                                },
                            }}
                        />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default JobCard;