import React, { createContext, useState, useEffect, useContext } from 'react';
import {useNavigate} from "react-router-dom";
const API_BASE_URL = 'http://localhost:8000';
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

useEffect(() => {
  if (!isLoading && user) {
    // Если пользователь авторизован и пытается попасть на /login - редирект
    if (window.location.pathname === '/login') {
      navigate('/dashboard');
    }
  }
}, [user, isLoading, navigate]);
  // Проверяем токен при загрузке приложения
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch(`${API_BASE_URL}/v1/auth/me`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          }
        } catch (error) {
          console.error('Auth error:', error);
        }
      }
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        setUser(data.user);
        return true;
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



export const useAuth = () => useContext(AuthContext);