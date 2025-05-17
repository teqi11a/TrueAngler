import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import LoginForm from './components/LoginForm.jsx';
import HomePage from "./components/HomePage.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import DashboardPage from './components/Dashboard.jsx';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Публичные маршруты */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<HomePage />} />

          {/* Защищенные маршруты */}
          <Route
            path="/dashboard"
            element={
               <ProtectedRoute>
                <DashboardPage />
               </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
