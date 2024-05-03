import React, { useEffect, useState } from 'react';
import { NavLink, Navigate, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../services/auth';
import './MenuGroup.scss';

const MenuGroup = () => {
    const { isLoggedIn, login, logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('customerId');
        navigate('/');
        logout();
    }

    return (
        <div className='menu-group-frame col-md-3'>
            <div className='menu-group-element-frame'>
                <div className='menu-group-element-layout'>
                    <NavLink to = '/information' className='menu-group-element-content'>
                        <img src='https://futabus.vn/images/header/profile/Profile.svg'/>
                        <span className='ms-3'>Thông tin tài khoản</span>
                    </NavLink>
                </div>
            </div>
            <div className='menu-group-element-frame'>
                <div className='menu-group-element-layout'>
                    <NavLink to = '/ticket-purchase-history' className='menu-group-element-content'>
                        <img src='https://futabus.vn/images/header/profile/History.svg'/>
                        <span className='ms-3'>Lịch sử mua vé</span>
                    </NavLink>
                </div>
            </div>
            <div className='menu-group-element-frame'>
                <div className='menu-group-element-layout'>
                    <NavLink to = '/reset-password' className='menu-group-element-content'>
                        <img src='https://futabus.vn/images/header/profile/Password.svg'/>
                        <span className='ms-3'>Đặt lại mật khẩu</span>
                    </NavLink>
                </div>
            </div>
            <div className='menu-group-element-frame'>
                <div className='menu-group-element-layout'>
                    <div className='menu-group-element-content'>
                        <img src='https://futabus.vn/images/header/profile/Logout.svg'/>
                        <span className='ms-3' onClick={handleLogout}>Đăng xuất</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuGroup