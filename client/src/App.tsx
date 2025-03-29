import Sidebar from "./features/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Container, Site, SiteWrapper, ToggleButton } from "./App.styles";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import NotFound from "./pages/notFound/NotFound";
import Profile from "./pages/profile/Profile";
import ReportPage from "./pages/report/ReportPage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { fetchFreshUserData } from "./redux/userSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import PublicRoute from "./components/publicRoute/PublicRoute";

const queryClinet = new QueryClient();

function App() {
  const [isOpen, setIsOpen] = useState(false); // Control sidebar visibility

  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, any>>();
  const token = localStorage.getItem("token");

  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState); // Toggle sidebar
  };

  /**
   * Refresh thse user data if VALID! token is available
   */
  useEffect(() => {
    if (token) {
      dispatch(fetchFreshUserData(token));
    }
  }, [token, dispatch]); // Depend on token and dispatch
  return (
    <>
      <QueryClientProvider client={queryClinet}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <Site>
            <SiteWrapper>
              <ToggleButton onClick={handleToggle}>
                {isOpen ? "×" : "☰"} {/* "×" is close, "☰" is hamburger icon */}
              </ToggleButton>
              <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
              <Container>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route element={<PublicRoute />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                  </Route>

                  <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/report" element={<ReportPage />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Container>
            </SiteWrapper>
          </Site>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
