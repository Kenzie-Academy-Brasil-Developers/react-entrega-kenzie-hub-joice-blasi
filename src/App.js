import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { DashboardPage } from "./pages/dashboard";
import { NotFound } from "./pages/notFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage user={user} setUser={setUser} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard/:name"
          element={<DashboardPage user={user} setUser={setUser} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
