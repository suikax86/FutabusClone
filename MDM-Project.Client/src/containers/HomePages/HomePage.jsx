import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Form, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './HomePage.scss';

import swap from '/img/two-opposite-arrows.svg' ;
import dropdown from '/img/caret-down.svg';

import Header from "./Header";

const HomePage = () => {

    const [item, setItem] = useState({ kindOfStand: "", another: "another" });
    const { kindOfStand } = item;

    const today = new Date(); // Lấy ngày hôm nay
    const [selectedDate, setSelectedDate] = useState(today);

    const handleChange = e => {
        e.persist();
        console.log(e.target.value);
    
        setItem(prevState => ({
          ...prevState,
          kindOfStand: e.target.value
        }));
      };
    

      const navigate = useNavigate();

      const huongdan = () => {
          navigate('/huongdan');
      }
  
      const timchuyen = () => {
          navigate('/tra-cuu-ve')
      }
  
      const [DiemDi, setDiemDi] = useState('');
      const [DiemDen, setDiemDen] = useState('');
      const [SoVe, setSoVe] = useState(1);
      
      const swapDiaDiem = () => {
        const temp = DiemDi;
        setDiemDi(DiemDen);
        setDiemDen(temp);
      }

      // const handleDiemDiChange = (event) => {
      //     const newValue = event.target.value;
      //     console.log(DiemDi);
      //     setDiemDi(newValue);
      // };
  
      // const handleDiemDenChange = (event) => {
      //     const newValue = event.target.value;
      //     setDiemDen(newValue);
      // };

    //TODO: tạo hàm gọi API trả về 
    const [DSDiemDi, setDSDiemDi] = useState(['Kiên Giang','Hồ Chí Minh','Đồng Nai','Long An','Tây Ninh','Cà Mau']);
    const [DSDiemDen, setDSDiemDen] = useState(['Kiên Giang','Hồ Chí Minh','Đồng Nai','Long An','Tây Ninh','Cà Mau']);
  
      const [LoaiVe, setLoaiVe] = useState('MotChieu');
    return (
        <React.Fragment>
            <Header />
            <main>
                <section className='main-layout'>
                    <div className='banner-search'>
                        <div className='homepage-banner'>
                            <img src='https://storage.googleapis.com/futa-busline-web-cms-prod/Artboard_2_8_c5af86ae89/Artboard_2_8_c5af86ae89.png'/>
                        </div>

                        <form className="Home">
                            <div className="LoaiVe row">
                                <div className="col-2 form-check">
                                    <input className="form-check-input" type="radio" id="MotChieu" onClick={() => setLoaiVe('MotChieu')} checked={LoaiVe === 'MotChieu'}/>
                                    <label className="form-check-label" for="MotChieu" onClick={() => setLoaiVe('MotChieu') }>
                                        Một Chiều
                                    </label>
                                </div>
                                
                                <div className="col-2 form-check">
                                    <input className="form-check-input" type="radio" id="KhuHoi" onClick={() => setLoaiVe('KhuHoi')} checked={LoaiVe === 'KhuHoi'} />
                                    <label className="form-check-label" for="KhuHoi" onClick={() => setLoaiVe('KhuHoi')}>
                                        Khứ Hồi
                                    </label>
                                </div>

                                <div className="col Huongdan" align="right">

                                    <p onClick={huongdan}>Hướng dẫn mua vé</p>

                                </div>
                            </div> 
                            
                            <div className="DiaDiem row">
                                <div class="dropdown col-3">
                                    <p>Điểm đi</p>
                                    {/* <input class="DiaDiem-btn dropdown-toggle" 
                                        type="text" 
                                        data-bs-toggle="dropdown"
                                        defaultValue={DiemDi} 
                                        onChange={handleDiemDiChange}

                                    /> */}

                                    <div class="DiaDiem-btn" data-bs-toggle="dropdown">
                                        {DiemDi}
                                    </div>

                                    <ul class="dropdown-menu">
                                        {DSDiemDi.map(item => (
                                            <li><a class="dropdown-item" onClick={() => {setDiemDi(item)}}>{item}</a></li>
                                        ))}
                                    </ul>
                                </div>

                                <img class="col-1" src={'https://futabus.vn/images/icons/switch_location.svg'} onClick={swapDiaDiem}/>

                                <div class="dropdown col-3">

                                    <p>Điểm đến</p>
                                    {/* <input class="DiaDiem-btn dropdown-toggle" 
                                        type="text" 
                                        data-bs-toggle="dropdown" 
                                        defaultValue={DiemDen}
                                        onChange={handleDiemDenChange}

                                    /> */}

                                    <div class="DiaDiem-btn" data-bs-toggle="dropdown">
                                        {DiemDen}
                                    </div>

                                    <ul class="dropdown-menu">
                                        {DSDiemDen.map(item => (
                                        <li><a class="dropdown-item" onClick={() => {setDiemDen(item)}}>{item}</a></li>
                                        ))}
                                    </ul>
                                </div>
                                {LoaiVe == 'MotChieu' ? (
                                    <>
                                        <div class="col-3">
                                            <p>Ngày đi</p>
                                            <input class="NgayDi" 
                                                type="date" 
                                            />

                                        </div>

                                        <div class="dropdown col-2">

                                            <p>Số vé</p>
                                            <button class="SoVe-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <p>{SoVe}</p>
                                                <img src={dropdown} align="right"/>
                                            </button>

                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" onClick={() => {setSoVe(1)}}>1</a></li>
                                                <li><a class="dropdown-item" onClick={() => {setSoVe(2)}}>2</a></li>
                                                <li><a class="dropdown-item" onClick={() => {setSoVe(3)}}>3</a></li>
                                                <li><a class="dropdown-item" onClick={() => {setSoVe(4)}}>4</a></li>
                                                <li><a class="dropdown-item" onClick={() => {setSoVe(5)}}>5</a></li>
                                            </ul>

                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div class="dropdown col-2">
                                            <p>Ngày đi</p>
                                            <input class="NgayDi" 
                                                type="date" 
                                            />

                                        </div>

                                        <div class="dropdown col-2">
                                            <p>Ngày về</p>
                                            <input class="NgayDi" 
                                                type="date" 
                                            />
                                        </div>

                                        <div class="dropdown col-1">

                                            <p>Số vé</p>
                                            <button class="SoVe-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <p>
                                                    {SoVe}
                                                </p>
                                                <img src={dropdown} align="right"/>
                                            </button>

                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" onClick={() => {setSoVe(1)}}>1</a></li>
                                                <li><a class="dropdown-item" onClick={() => {setSoVe(2)}}>2</a></li>
                                                <li><a class="dropdown-item" onClick={() => {setSoVe(3)}}>3</a></li>
                                                <li><a class="dropdown-item" onClick={() => {setSoVe(4)}}>4</a></li>
                                                <li><a class="dropdown-item" onClick={() => {setSoVe(5)}}>5</a></li>
                                            </ul>
                                        </div>
                                    </>
                                )}

                            </div>
                            
                            <div class="TimChuyen-btn" align="center" onClick={timchuyen}>
                                Tìm Chuyến 
                            </div>

                        </form>

                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default HomePage