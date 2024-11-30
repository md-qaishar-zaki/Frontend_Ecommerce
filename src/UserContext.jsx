import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const apiUrl = import.meta.env.VITE_API_URL;

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userStatus, setUserStatus] = useState(null);
    const [loading, setLoading] = useState(true);

    const getUserId = () => {
        let userId = localStorage.getItem('userId');
        if (!userId) {
            userId = uuidv4();
            localStorage.setItem('userId', userId);
        }
        return userId;
    };

    useEffect(() => {
        const userId = getUserId();
        fetchUserStatus();
    }, []);

    const fetchUserStatus = async () => {
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            try {
                const response = await axios.get(`${apiUrl}/api/user`, {
                    headers: { Authorization: `Bearer ${authToken}` },
                });
                if (response.status === 200) {
                    setUserStatus(response.data.user);
                } else {
                    setUserStatus(null);
                    localStorage.removeItem('authToken');
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                setUserStatus(null);
                localStorage.removeItem('authToken');
            }
        } else {
            setUserStatus(null);
        }
        setLoading(false);
    };

    return (
        <UserContext.Provider value={{ userStatus, setUserStatus, loading, fetchUserStatus }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;