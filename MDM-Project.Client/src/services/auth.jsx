import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        // Kiểm tra xem có giá trị isLoggedIn đã được lưu trong localStorage không
        const storedLoggedIn = localStorage.getItem('isLoggedIn');
        return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
    });


    const login = () => {
        // Thực hiện các bước đăng nhập thành công
        setIsLoggedIn(true);
    };

    const logout = () => {
        // Thực hiện các bước đăng xuất
        setIsLoggedIn(false);
    };

    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);


    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};