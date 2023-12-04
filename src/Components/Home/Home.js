import { Container, Typography } from "@mui/material";
import React from "react";
import Content from "../Content/Content";

const Home = () => {
  return (
    <Container
      sx={{
        p: { lg: 10, md: 10, sm: 8, xs: 2 },
        mt: { lg: 0, md: 0, sm: 0, xs: 10 }
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        CALENDER EVENTS APP
      </Typography>
      <Content />
    </Container>
  );
};

export default Home;
