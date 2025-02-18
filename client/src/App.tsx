import Sidebar from "./features/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Container, ToggleButton } from "./App.styles";

const queryClinet = new QueryClient();

function App() {
  const [isOpen, setIsOpen] = useState(false); // Control sidebar visibility

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState); // Toggle sidebar
  };
  return (
    <>
      <QueryClientProvider client={queryClinet}>
        <ToggleButton onClick={handleToggle}>
          {isOpen ? "×" : "☰"} {/* "×" is close, "☰" is hamburger icon */}
        </ToggleButton>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </QueryClientProvider>
    </>
  );
}

export default App;
