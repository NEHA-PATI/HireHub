import React , {useState }from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from "./routes/ProtectedRoute";

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from "./pages/UserDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import "./styles/AppLayout.css";


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="app-layout">
            <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className="app-body">
              <Sidebar isOpen={isSidebarOpen} />
              <main className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />

                  {/* Protected Routes */}
                  <Route
                    path="/user-dashboard"
                    element={
                      <ProtectedRoute allowedRoles={["user"]}>
                        <UserDashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/recruiter-dashboard"
                    element={
                      <ProtectedRoute allowedRoles={["recruiter"]}>
                        <RecruiterDashboard />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </main>
            </div>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
