import React, { createContext, useState, useEffect } from 'react';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        setUser({
            id: '7393ryuie89e3id3oy4343r3iwui',
            name: 'Patrick',
            email: 'patrickkoros0@gmail.com',
            roles: ["USER", "ADMIN"]
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
