import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss';

import Header from '../../HomePages/Header';

const Register = () => {
    return (
        <div>
            <Header />
            <main className='register-frame'>
                <div className='register-layout'>
                    <div className='register-section'>
                        <div className='register-banner'>
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

                        <div className='register-input'>
                            <div className='register-form'>
                                <div className='register-form-title'>Đăng ký tài khoản</div>
                                <div className='register-form-content'>
                                    <form>
                                        <div className='register-input-content'>
                                            <img src='https://futabus.vn/images/login/phone.svg'/>
                                            <input type='text' 
                                                className='form-control' 
                                                placeholder='Nhập số điện thoại'
                                            />
                                        </div>
                                        <div className='register-input-content'>
                                            <img src='https://futabus.vn/images/icons/mail_send.svg' style={{width: '48px', height: '37.6px'}}/>
                                            <input type='email' 
                                                className='form-control' 
                                                placeholder='Nhập Email'
                                            />
                                        </div>
                                        <div className='register-input-content'>
                                            <img src='https://www.shareicon.net/data/128x128/2016/05/24/770136_man_512x512.png' style={{width: '48px', height: '37.6px'}}/>
                                            <input type='text' 
                                                className='form-control' 
                                                placeholder='Nhập họ tên'
                                            />
                                        </div>
                                        <div className='register-input-content'>
                                            <img src='https://futabus.vn/images/login/password.svg'/>
                                            <input type='password' 
                                                className='form-control' 
                                                placeholder='Nhập mật khẩu'
                                            />
                                        </div>
                                        <button className='btn-register'>
                                            <span>Đăng ký</span>
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

export default Register