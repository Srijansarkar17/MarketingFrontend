import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {  PublicRoute } from './components/ProtectedRoute';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        {/* LANDING PAGE - Public route */}
        <Route 
          path="/" 
          element={<Home />} 
        />

        {/* PUBLIC ROUTES - Redirect to /command-center if already logged in */}
        <Route 
          path="/login" 
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          } 
        />
        
        <Route 
          path="/sign-up" 
          element={
            <PublicRoute>
              <SignUpPage />
            </PublicRoute>
          } 
        />


        {/* PROTECTED ROUTES - Require authentication */}
      

        {/* Add more protected routes here as needed */}
        {/* 
        <Route 
          path="/performance" 
          element={
            <ProtectedRoute>
              <Performance />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/audience" 
          element={
            <ProtectedRoute>
              <Audience />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/market" 
          element={
            <ProtectedRoute>
              <Market />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/quick-launch" 
          element={
            <ProtectedRoute>
              <QuickLaunch />
            </ProtectedRoute>
          } 
        />
        */}

        {/* FALLBACK - Redirect unknown routes to landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;