import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Information.scss';

import Header from '../../HomePages/Header';
import MenuGroup from '../MenuGroup';

import axios from 'axios';

const Information = () => {

    const customerId = localStorage.getItem('customerId');

    const [userData, setUserData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/customers/${customerId}`);
                if (response.status === 200) {
                    setUserData(response.data);
                    console.log(response.data);
                } else {
                    console.error("Error fetching user data");
                }
            } catch (error) {
                console.error("Error during API request:", error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(userData);
        try {
            const response = await axios.put(`http://localhost:8080/api/customers/${customerId}`, userData);
            console.log('Response:', response.data);
            if (response.status === 200) {
                alert('Cập nhật thông tin thành công');
            } else {
                const message = response.data.message || 'An error occurred while login';
                alert(message);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
                setErrorMessage(error.response.data);
                console.error('Axios error:', error.response );
            } 
        }
    };

    return (
        <div>
            <Header />
            <div className='card overflow-hidden main-content-section'>
                <div className='row no-gutters row-bordered row-border-light'>
                    <MenuGroup />
                    <div className='col-md-9'>
                        <div className='information-section'>
                            <div className='header-title'>
                                <div className='header-main-title'>Thông tin tài khoản</div>
                                <div className='header-main-subtitle'>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
                            </div>
                            <form action="#" onSubmit={(e) => handleSubmit(e)} className="card-body information-frame">
                                <div className="form-group">
                                    <label className="form-label">Họ và tên:</label>
                                    <input type="text" name='name' className="form-control mb-1" 
                                           value={userData.name} 
                                           onChange={handleChange}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Số điện thoại</label>
                                    <input type="text" name='phone' className="form-control" 
                                           value={userData.phone} 
                                           onChange={handleChange}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">E-mail</label>
                                    <input type="email" name='email' className="form-control mb-1" 
                                           value={userData.email} 
                                           onChange={handleChange}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Giới tính</label>
                                    <select className='select-form-custom' name='gender' 
                                            value={userData.gender} 
                                            onChange={handleChange}>
                                        <option value="MALE">Nam</option>
                                        <option value="FEMALE">Nữ</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Ngày sinh</label>
                                    <input type="date" className="form-control" value="2001-01-01" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Địa chỉ:</label>
                                    <input type="text" name='address' className="form-control mb-1" 
                                           value={userData.address} 
                                           onChange={handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Nghề nghiệp:</label>
                                    <input type="text" name='job' className="form-control mb-1" 
                                           value={userData.job} 
                                           onChange={handleChange}/>
                                </div>
                                <div className='btn-update-frame'>
                                    <button className='btn-update-information'>
                                        Cập nhật
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information