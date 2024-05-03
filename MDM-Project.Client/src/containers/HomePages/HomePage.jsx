import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import './HomePage.scss'
import Header from '../HomePages/Header';

import dropdown from '/img/caret-down.svg';

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
          setDSChuyenXe(1);
      }
      
      const dienthongtin = () => {
        navigate('/thong-tin-ve')
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

    const [startDate, setStartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    
    const [DSChuyenXe, setDSChuyenXe] = useState(0);

    const FilterGioDi = (FromH, ToH) => {
        
    }
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
                                            item != DiemDen ?(
                                                <li><a class="dropdown-item" onClick={() => {setDiemDi(item)}}>{item}</a></li>
                                            ) : (<></>)
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
                                        item != DiemDi ?(
                                            <li><a class="dropdown-item" onClick={() => {setDiemDen(item)}}>{item}</a></li>
                                            ) : (<></>)
                                        ))}
                                    </ul>
                                </div>
                                {LoaiVe == 'MotChieu' ? (
                                    <>
                                        <div class="col-3">
                                            <p>Ngày đi</p>
                                            <DatePicker className='NgayDi'selected={startDate} onChange={(date) => setStartDate(date)} />

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
                                            <DatePicker className='NgayDi'selected={startDate} onChange={(date) => setStartDate(date)} />

                                        </div>

                                        <div class="dropdown col-2">
                                            <p>Ngày về</p>
                                            <DatePicker className='NgayDi'selected={returnDate} onChange={(date) => setReturnDate(date)} />
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
                    {DSChuyenXe == 0 ? (
                        <></>
                    ) :(
                    <div class="DSContainer row">
                        <div class="Filter col-3">
                            <h2>Bộ lọc tìm kiếm</h2>
                            <div>
                                <h3>Giờ đi</h3>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="FilterGioDi1" />
                                    <label class="form-check-label" for="FilterGioDi1">
                                        Sáng sớm 00:00 - 06:00 (0)
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="FilterGioDi2"/>
                                    <label class="form-check-label" for="FilterGioDi2">
                                        Buổi sáng 06:00 - 12:00 (0)
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="FilterGioDi3"/>
                                    <label class="form-check-label" for="FilterGioDi3">
                                        Buổi chiều 12:00 - 18:00 (21)
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="FilterGioDi4"/>
                                    <label class="form-check-label" for="FilterGioDi4">
                                        Buổi tối 18:00 - 24:00 (38)
                                    </label>
                                </div>
                            </div>

                            <hr />

                            <div class='row'>
                                <h3>Loại xe</h3>

                                <div class="col-2 form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="FilterLoaiXe1" />
                                    <label class="form-check-label" for="FilterLoaiXe1">
                                        Ghế
                                    </label>
                                </div>

                                <div class="col-2 form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="FilterLoaiXe2"/>
                                    <label class="form-check-label" for="FilterLoaiXe2">
                                        Giường
                                    </label>
                                </div>

                                <div class="col-2 form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="FilterLoaiXe3"/>
                                    <label class="form-check-label" for="FilterLoaiXe3">
                                        Limousine
                                    </label>
                                </div>

                            </div>
                        </div>
                        
                        <div class="col">
                            <div class="FastFilter row">
                                <input class="form-check-input" type="checkbox" value="" id="FastFilter1" />
                                <label class="icon col-2 row form-check-label" for="FastFilter1">
                                    <img class='col-2' src={'https://futabus.vn/images/icons/save_money.svg'}/>
                                    <div class="col">
                                        Giá rẻ bất ngờ
                                    </div>
                                </label>

                                <input class="form-check-input" type="checkbox" value="" id="FastFilter2" />
                                <label class="icon row form-check-label" for="FastFilter2">
                                    <img class='col-2' src={'https://futabus.vn/images/icons/clock.svg'}/>
                                    <div class="col">
                                        Giờ khởi hành
                                    </div>
                                </label>

                                <input class="form-check-input" type="checkbox" value="" id="FastFilter3" />
                                <label class="icon row col-2 form-check-label" for="FastFilter3">
                                    <img class='col-2' src={'https://futabus.vn/images/icons/seat.svg'}/>
                                    <div class="col">
                                        Ghế trống
                                    </div>
                                </label>

                            </div>

                            <div class="DanhSach">

                                <div class="ChuyenXe row" onClick={dienthongtin}>
                                    <div class="TGDi col-1">
                                        <h1> 16:30 </h1>
                                        <p> Bến xe Rạch Sỏi</p>
                                    </div>

                                    <div class="DiChuyen col-1">
                                        <img src={'https://futabus.vn/images/icons/pickup.svg'}/>
                                        <p>----------</p>
                                        <p>4 giờ</p>
                                        <p>----------</p>
                                        <img src={'https://futabus.vn/images/icons/station.svg'}/>
                                    </div>

                                    <div class="TGDi col-1">
                                        <h1> 19:30 </h1>
                                        <p> Bến xe Miền Tây</p>
                                    </div>

                                    <div class="col-1">
                                        Limosine
                                    </div>

                                    <div class="col-1">
                                        16 chỗ trống <br />
                                        <p class="Gia">190.000đ</p>
                                    </div>
                                </div>
                                
                                <div class="ChuyenXe row" onClick={dienthongtin}>
                                    <div class="TGDi col-1">
                                        <h1> 16:30 </h1>
                                        <p> Bến xe Rạch Sỏi</p>
                                    </div>

                                    <div class="DiChuyen col-1">
                                        <img src={'https://futabus.vn/images/icons/pickup.svg'}/>
                                        <p>----------</p>
                                        <p>4 giờ</p>
                                        <p>----------</p>
                                        <img src={'https://futabus.vn/images/icons/station.svg'}/>
                                    </div>

                                    <div class="TGDi col-1">
                                        <h1> 19:30 </h1>
                                        <p> Bến xe Miền Tây</p>
                                    </div>

                                    <div class="col-1">
                                        Limosine
                                    </div>

                                    <div class="col-1">
                                        16 chỗ trống <br />
                                        <p class="Gia">190.000đ</p>
                                    </div>
                                </div>


                                
                                
                            </div>
                        </div>
                    </div>
                    )}
                </section>
            </main>
        </React.Fragment>
    )
}


export default HomePage