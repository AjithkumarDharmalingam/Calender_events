import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Box>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
