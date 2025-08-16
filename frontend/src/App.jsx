// import React , {useState }from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from './context/ThemeContext';
// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from "./routes/ProtectedRoute";

// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';

// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import UserDashboard from "./pages/UserDashboard";
// import RecruiterDashboard from "./pages/RecruiterDashboard";
// import "./styles/AppLayout.css";

// import ResumeBuilder from "./pages/ResumeBuilder";



// const App = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);


//   return (
//     <AuthProvider>
//       <ThemeProvider>
//         <div className="app-layout">
//             <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//             <div className="app-body">
//               <Sidebar isOpen={isSidebarOpen} />
//               <main className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/login" element={<Login />} />
//                   <Route path="/signup" element={<Signup />} />

//                    <Route path="/resume" element={<ResumeBuilder />} />

//                   {/* Protected Routes */}
//                   <Route
//                     path="/user-dashboard"
//                     element={
//                       <ProtectedRoute allowedRoles={["user"]}>
//                         <UserDashboard />
//                       </ProtectedRoute>
//                     }
//                   />
//                   <Route
//                     path="/recruiter-dashboard"
//                     element={
//                       <ProtectedRoute allowedRoles={["recruiter"]}>
//                         <RecruiterDashboard />
//                       </ProtectedRoute>
//                     }
//                   />
//                 </Routes>
//               </main>
//             </div>
//         </div>
//       </ThemeProvider>
//     </AuthProvider>
//   );
// };

// export default App;


import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AuthModal from "./components/auth/AuthModal";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProtectedRoute from "./routes/ProtectedRoute";

import ResumeBuilder from "./pages/ResumeBuilder";


import "./styles/AppLayout.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const openAuthModal = () => setShowAuthModal(true);
  const closeAuthModal = () => setShowAuthModal(false);

  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="app-layout">
          {/* Navbar */}
          <Navbar
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            openAuthModal={openAuthModal}
          />

          {/* Body */}
          <div className="app-body">
            <Sidebar isOpen={isSidebarOpen} openAuthModal={openAuthModal} />

            <main className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
              <Routes>
                <Route
                  path="/"
                  element={<Home openAuthModal={openAuthModal} />}
                />

                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                
                <Route
                  path="/resume"
                  element={<ResumeBuilder />}
                />
                {/* Additional pages like UploadResume, ATS Score, Templates, Search will be added later */}
              </Routes>
            </main>
          </div>
        </div>

        {/* Auth Modal */}
        {showAuthModal && <AuthModal onClose={closeAuthModal} />}
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;

