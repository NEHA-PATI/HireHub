import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Create the context
export const AuthContext = createContext();

// 2. Create the provider component
export const AuthProvider = ({ children }) => {

    // 3. Store user state (like name, token, role, etc.)
    const [user, setUser] = useState(null);

    // 4. Load from localStorage when page refreshes
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('userInfo'));
        if (storedUser) setUser(storedUser);
    }, []);

    // 5. Login function
    const login = (data) => {
        localStorage.setItem('userInfo', JSON.stringify(data));
        setUser(data);
    };

    // 6. Logout function
    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
