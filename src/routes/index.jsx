import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { DashboardPage } from "../pages/dashboard";
import { NotFound } from "../pages/notFound";

export const RoutesComponent = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard/:name" element={<DashboardPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
