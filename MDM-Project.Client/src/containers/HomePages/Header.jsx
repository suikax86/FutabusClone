import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useAuth } from '../../services/auth';

import './Header.scss';

const Header = () => {
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