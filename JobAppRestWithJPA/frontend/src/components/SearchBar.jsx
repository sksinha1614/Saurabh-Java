import React, { useState, useEffect, useRef } from "react";
import {
    Box,
    Button,
    InputAdornment,
    TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const debounceRef = useRef(null);

    useEffect(() => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            onSearch(query);
        }, 400);

        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
            onSearch(query);
        }
    };

    const handleSearchClick = () => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }
        onSearch(query);
    };

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "850px",
                mx: "auto",
                mt: 4,
                p: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: 3,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
            }}
        >
            <TextField
                fullWidth
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search by job title, skill or keyword..."
                variant="outlined"
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "& fieldset": {
                            border: "none",
                        },
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{ color: "#6b7280" }} />
                        </InputAdornment>
                    ),
                }}
            />

            <Button
                variant="contained"
                onClick={handleSearchClick}
                sx={{
                    minWidth: "120px",
                    height: "52px",
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 600,
                    backgroundColor: "#2563eb",
                    boxShadow: "none",
                    "&:hover": {
                        backgroundColor: "#1d4ed8",
                        boxShadow: "none",
                    },
                }}
            >
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;