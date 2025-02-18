import styled from "styled-components";
import "./App.css";
import Sidebar from "./features/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  flex-grow: 1; /* Allows the content to fill the remaining space */
  padding: 1em;
`;

const queryClinet = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClinet}>
        <Sidebar />
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
