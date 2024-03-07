import React, { createContext, useContext, useState } from 'react';

// Create a context for managing authentication state
const AuthContext = createContext();

// Create a provider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle login status
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication state and methods
export const useAuth = () => {
  return useContext(AuthContext);
};

// Auth component to wrap around components that require authentication
const Auth = ({ children }) => {
  const { isLoggedIn } = useAuth();

  // If user is not logged in, display login screen
  if (!isLoggedIn) {
    return (
      <div>
        <h2>Please log in to access the meals management system</h2>
        {/* You can add your login form component here */}
      </div>
    );
  }

  // If user is logged in, display children components
  return children;
};

export default Auth;
