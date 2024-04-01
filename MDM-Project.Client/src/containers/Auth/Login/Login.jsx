import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

import Header from '../../HomePages/Header';
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        phoneNumber: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', formData);
            if (response.status === 200) {
                // Save accessToken, customerId, and isLoggedIn to localStorage
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('customerId', response.data.customerId);
                localStorage.setItem('isLoggedIn', true);
                navigate('/');
            } else {
                const message = response.data.message || 'An error occurred while login';
                alert(message);
            }
        } catch (error) {
            const message = error.response?.data?.message || 'An error occurred while login';
            alert(message)

        }
    };

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
                                    <form onSubmit={handleSubmit}>
                                        <div className='login-input-content'>
                                            <img src='https://futabus.vn/images/login/phone.svg'/>
                                            <input type='text'
                                                   name='phoneNumber'
                                                className='form-control' 
                                                placeholder='Nhập số điện thoại'
                                                   value={formData.phoneNumber}
                                                   onChange={handleChange}
                                            />
                                        </div>
                                        <div className='login-input-content'>
                                            <img src='https://futabus.vn/images/login/password.svg'/>
                                            <input type='password'
                                                   name='password'
                                                className='form-control' 
                                                placeholder='Nhập mật khẩu'
                                                   value={formData.password}
                                                   onChange={handleChange}
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