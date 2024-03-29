import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

import Header from '../../HomePages/Header';

const Login = () => {


    return (
        <div>
            <Header />
            <main className='login-frame'>
                <div className='login-layout'>
                    <div className='login-section'>
                        <div className='login-banner'>
                            <div className='slogan'>
                                <div className='slogan-img'>
                                    <img src='https://storage.googleapis.com/futa-busline-cms-dev/logo_Text_fd1a850bb9/logo_Text_fd1a850bb9.svg'/>
                                </div>
                            </div>
                            <div className='banner-content'>
                                <div className='banner-img'>
                                    <img src='https://storage.googleapis.com/futa-busline-cms-dev/TVC_00aa29ba5b/TVC_00aa29ba5b.svg'/>
                                </div>
                            </div>
                        </div>

                        <div className='login-input'>
                            <div className='login-form'>
                                <div className='login-form-title'>Đăng nhập tài khoản</div>
                                <div className='login-form-content'>
                                    <form>
                                        <div className='login-input-content'>
                                            <img src='https://futabus.vn/images/login/phone.svg'/>
                                            <input type='text' 
                                                className='form-control' 
                                                placeholder='Nhập số điện thoại'
                                            />
                                        </div>
                                        <div className='login-input-content'>
                                            <img src='https://futabus.vn/images/login/password.svg'/>
                                            <input type='password' 
                                                className='form-control' 
                                                placeholder='Nhập mật khẩu'
                                            />
                                        </div>
                                        <button className='btn-login'>
                                            <span>Đăng nhập</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login