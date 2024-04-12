import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Navigate, Link } from 'react-router-dom';
import { useAuth } from '../../services/auth';
import axios from 'axios';

import './Header.scss';

const Header = () => {

    const { isLoggedIn, login, logout } = useAuth();
    const customerId = localStorage.getItem('customerId');
    const [userName, setUserName] = useState('');
    
    const [openMenuAccount, setOpenMenuAccount] = useState(false);

    const showMenuAccount = () => {
        setOpenMenuAccount(prevState => !prevState);
    }

    useEffect(() => {
        if (isLoggedIn) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`http://localhost:8080/api/customers/${customerId}`);
                    if (response.status === 200) {
                        setUserName(response.data.name);
                        /* console.log(response.data.name); */
                    } else {
                        console.error("Error fetching user data");
                    }
                } catch (error) {
                    console.error("Error during API request:", error);
                }
            };
            fetchData();
        }
    }, []);


    return (
        <header className='header-home-page'>
            <div className='header-top-nav'>
                <div className='logo-banner-frame'>
                    <NavLink to = '/'>
                        <img src='https://futabus.vn/_next/static/media/logo_new.8a0251b8.svg' className='logo-banner'/>
                    </NavLink>
                </div>
                <div className='header-login-frame'>
                    <div className='header-login-section'>
                        {isLoggedIn ? (
                        <div className='d-flex logged-section' onClick={showMenuAccount}>
                            <img src = 'https://futabus.vn/images/icons/person.svg' className='img-person'/>
                            <span className='account-name'>{userName}</span>
                            <img src='https://futabus.vn/images/icons/icon_form_droplist.svg'/>
                            <div className={`menu-account ${openMenuAccount ? "d-block" : "d-none"}`}>
                                <ul className='menu-account-content'>
                                    <li>
                                        <NavLink to = '/information' className='menu-account-child-content'>
                                            <img src='https://futabus.vn/images/header/profile/Profile.svg'/>
                                            <span className='ms-2'>Thông tin tài khoản</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to = '/ticket-purchase-history' className='menu-account-child-content'>
                                            <img src='https://futabus.vn/images/header/profile/History.svg'/>
                                            <span className='ms-2'>Lịch sử mua vé</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to = '/reset-password' className='menu-account-child-content'>
                                            <img src='https://futabus.vn/images/header/profile/Password.svg'/>
                                            <span className='ms-2'>Đặt lại mật khẩu</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <div className='menu-account-child-content'>
                                            <img src='https://futabus.vn/images/header/profile/Logout.svg'/>
                                            <span className='ms-2'>Đăng xuất</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>) : (
                            <div className='login-register'>
                            <img src = 'https://futabus.vn/images/icons/person.svg' className='img-person'/>
                            <NavLink to = '/login'>
                                <section>Đăng nhập</section>
                            </NavLink>
                            <section>/</section>
                            <NavLink to = '/register'>
                                <section>Đăng ký</section>
                            </NavLink>
                        </div>
                        )}
                    </div>
                </div>
            </div>

            <div className='header-menu'>
                <NavLink to = '/' className='child-content'>
                    Trang chủ
                </NavLink>
                <NavLink to = '/lich-trinh' className='child-content'>
                    Lịch trình
                </NavLink>
                <NavLink to = '/tra-cuu-ve' className='child-content'>
                    Tra cứu vé
                </NavLink>
                <NavLink to = '/hoa-don' className='child-content'>
                    Hóa đơn
                </NavLink>
            </div>
        </header>
    )
}

export default Header;