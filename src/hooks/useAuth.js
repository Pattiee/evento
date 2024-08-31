import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';

const useAuth = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) return Error("Error | problems with authContext");
    return authContext;
}

export { useAuth };
