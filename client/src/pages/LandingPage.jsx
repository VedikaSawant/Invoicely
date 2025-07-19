// src/pages/LandingPage.jsx
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const BackgroundBox = styled(Box)({
    backgroundImage: `url('https://plus.unsplash.com/premium_photo-1700739685581-e9bfb2ef5a98?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Business-themed background
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    position: "relative",
    color: "#fff",
});

const Overlay = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
   backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay with opacity for text clarity
    zIndex: 1,
});

const ContentBox = styled(Box)({
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "700px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});

const StyledButton = styled(Button)({
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    marginTop: "20px",
    fontSize: "16px",
    "&:hover": {
        backgroundColor: "#0056b3",
    },
});

const Tagline = styled(Typography)({
    fontSize: "18px",
    color: "#ddd",
    marginTop: "10px",
    textAlign: "center",
    lineHeight: "1.5",
});

const LandingPage = () => {
    return (
        <BackgroundBox>
            <Overlay />
            <ContentBox>
                <Typography variant="h3" style={{ fontWeight: "bold" }}>
                    Welcome to Invoice Manager
                </Typography>
                <Tagline variant="h6">
                    Manage your invoices with ease, expedite payments, and maintain financial awareness.
                </Tagline>
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <StyledButton variant="contained">Go to Dashboard</StyledButton>
                </Link>
            </ContentBox>
        </BackgroundBox>
    );
};

export default LandingPage;
