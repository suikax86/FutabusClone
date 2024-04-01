import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Information.scss';

import Header from '../../HomePages/Header';
import MenuGroup from '../MenuGroup';

const Information = () => {

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
                            <div className="card-body information-frame">
                                <div className="form-group">
                                    <label className="form-label">Họ và tên:</label>
                                    <input type="text" className="form-control mb-1" value="nmaxwell" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Số điện thoại</label>
                                    <input type="text" className="form-control" value="Nelle Maxwell" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">E-mail</label>
                                    <input type="email" className="form-control mb-1" value="nmaxwell@mail.com" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Giới tính</label>
                                    <select className='select-form-custom' defaultValue="Nam">
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Ngày sinh</label>
                                    <input type="date" className="form-control" value="01/01/2001" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Địa chỉ:</label>
                                    <input type="text" className="form-control mb-1" value="nmaxwell" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Nghề nghiệp:</label>
                                    <input type="text" className="form-control mb-1" value="nmaxwell" />
                                </div>
                                <div className='btn-update-frame'>
                                    <button type='button' className='btn-update-information'>
                                        Cập nhật
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information