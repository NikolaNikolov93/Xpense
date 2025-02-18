import styled from "styled-components";
import "./App.css";
import Sidebar from "./features/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  flex-grow: 1; /* Allows the content to fill the remaining space */
  padding: 1em;
`;
const ToggleButton = styled.button`
  display: none; /* Hidden by default */
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 2em;
  background: none;
  border: none;
  color: var(--primary-text-color);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; /* Show only on mobile */
    z-index: 100;
  }
`;

const queryClinet = new QueryClient();

function App() {
  const [isOpen, setIsOpen] = useState(true); // Control sidebar visibility

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState); // Toggle sidebar
  };
  return (
    <>
      <QueryClientProvider client={queryClinet}>
        <ToggleButton onClick={handleToggle}>
          {isOpen ? "×" : "☰"} {/* "×" is close, "☰" is hamburger icon */}
        </ToggleButton>
        <Sidebar isOpen={isOpen} />
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
