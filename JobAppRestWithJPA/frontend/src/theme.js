import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2563eb",
            dark: "#1d4ed8",
            light: "#eff6ff",
        },

        background: {
            default: "#f8fafc",
            paper: "#ffffff",
        },

        text: {
            primary: "#111827",
            secondary: "#6b7280",
        },
    },

    typography: {
        fontFamily: [
            "Inter",
            "Roboto",
            "Arial",
            "sans-serif",
        ].join(","),

        h1: {
            fontWeight: 800,
        },

        h2: {
            fontWeight: 800,
        },

        h3: {
            fontWeight: 800,
        },

        h4: {
            fontWeight: 800,
        },

        h5: {
            fontWeight: 700,
        },

        h6: {
            fontWeight: 700,
        },
    },

    shape: {
        borderRadius: 12,
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },

            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: 10,
                },
            },
        },

        MuiTextField: {
            defaultProps: {
                variant: "outlined",
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                },
            },
        },
    },
});

export default theme;