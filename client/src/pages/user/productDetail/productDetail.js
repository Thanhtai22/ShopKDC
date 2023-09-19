import { memo } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Product.scss'
import { InputNumber } from 'antd';
import { Link } from 'react-router-dom';




const productDetail = () => {
    const onChange = () => {

    }
    const listproduct=['ten','price','quanlity','payment'];
    const listcart=[];

    for (let i = 0; i < listproduct.length; i++) {
        listcart.push(<li key={i}>{listproduct[i]}</li>);
      }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-8'>
                    <div className='row'>
                        <div className='col-6'>
                            <img src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" class="d-block w-100" style={{ height: '300px', width: '100%' }} />
                            <br></br>
                            <div className='row'>

                                <img src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" class="d-block w-30" style={{ height: '80px', width: '30%' }} />
                                <img src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" class="d-block w-30" style={{ height: '80px', width: '30%' }} />
                                <img src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" class="d-block w-30" style={{ height: '80px', width: '30%' }} />

                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='row'>

                                <h5>Laptop ASUS ROG Strix G G513RC-HN038W (Ryzen 7 6800HS/RAM 8GB/512GB SSD/ Windows 11)</h5>
                                <p>Thương hiệu: ASUS | SKU: 220300268 | Mã vạch:  603122</p>

                            </div>

                            <div className='row'>
                                <span style={{ color: 'red' }}>Giá: 16.900.000đ</span>
                            </div>
                            <hr></hr>
                            <div className='row'>
                                <span>Số lượng:</span>
                                <div>
                                    <InputNumber defaultValue={1} onChange={onChange} size='small' />
                                </div>

                                <div>
                                    <button className='btn-product-detail1'>Xác nhận mua</button>
                                    <button className='btn-product-detail2'>Xác nhận hủy</button>
                                </div>
                            </div>
                            {/* <hr></hr> */}
                        </div>
                    </div>
                    <hr></hr>
                    <h3>Thông tin chi tiết:</h3>
                    <div className='row row-productdetail'>
                        <div className='col-4'>Thương hiệu:</div>
                        <div className='col-8'>ASUS</div>
                    </div>
                    <div className='row row-productdetail'>
                        <div className='col-4'>Bảo hành:</div>
                        <div className='col-8'>24 Tháng</div><hr></hr>
                    </div>

                    <span>Thông tin chung:</span>


                    <div className='row row-productdetail'>
                        <div className='col-4'>Series laptop:</div>
                        <div className='col-8'>ROG</div>
                    </div>
                    <div className='row row-productdetail'>
                        <div className='col-4'>Màu sắc:</div>
                        <div className='col-8'>Xám</div><hr></hr>
                    </div>
                    <span>Cấu hình chi tiết:</span>
                    <br></br>
                    <div className='row row-productdetail'>
                        <div className='col-4'>CPU:</div>
                        <div className='col-8'>AMD Ryzen 7 6800HS ( 3.2 GHz - 4.7 GHz / 16MB / 8 nhân, 16 luồng )</div>
                    </div>
                    <div className='row row-productdetail'>
                        <div className='col-4'>Chip đồ họa:</div>
                        <div className='col-8'>RTX 3050 4GB GDDR6 / AMD Radeon 680M</div>
                    </div>
                    <div className='row row-productdetail'>
                        <div className='col-4'>RAM:</div>
                        <div className='col-8'>1 x 8GB DDR5 4800MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )</div>
                    </div>

                    <div className='row row-productdetail'>
                        <div className='col-4'>Lưu trữ:</div>
                        <div className='col-8'> 512GB SSD M.2 NVMe </div>
                    </div>
                    <div className='row row-productdetail'>
                        <div className='col-4'>Khối lượng:</div>
                        <div className='col-8'>2.1kg</div>
                    </div>
                    <br></br>
                    <h4>Sản phẩm tương tự: </h4>
                    <div className='row'>
                        <div className='col-3'>
                            <div class="card" style={{ width: "10rem" }}>
                                <Link to="/product"><img class="card-img-top" src="https://cdn.tgdd.vn/Products/Images/44/312870/hp-zbook-firefly-16-g10-i7-740j1av-190823-025658-600x600.jpg" style={{ width: '100%', height: '100px' }} alt="Card image cap" /></Link>

                                <div class="card-body">
                                    <h6 class="card-title" style={{ color: 'red' }}>Giá: 4900k</h6>
                                    <p>Đánh giá: 4,1 <i class="fa-solid fa-star " style={{ color: '#FFD700' }} ></i></p>

                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div class="card" style={{ width: "10rem" }}>
                                <Link to="/product"><img class="card-img-top" src="https://cdn.tgdd.vn/Products/Images/44/312870/hp-zbook-firefly-16-g10-i7-740j1av-190823-025658-600x600.jpg" style={{ width: '100%', height: '100px' }} alt="Card image cap" /></Link>

                                <div class="card-body">
                                    <h6 class="card-title" style={{ color: 'red' }}>Giá: 4900k</h6>
                                    <p>Đánh giá: 4,1 <i class="fa-solid fa-star " style={{ color: '#FFD700' }} ></i></p>

                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div class="card" style={{ width: "10rem" }}>
                                <Link to="/product"><img class="card-img-top" src="https://cdn.tgdd.vn/Products/Images/44/312870/hp-zbook-firefly-16-g10-i7-740j1av-190823-025658-600x600.jpg" style={{ width: '100%', height: '100px' }} alt="Card image cap" /></Link>

                                <div class="card-body">
                                    <h6 class="card-title" style={{ color: 'red' }}>Giá: 4900k</h6>
                                    <p>Đánh giá: 4,1 <i class="fa-solid fa-star " style={{ color: '#FFD700' }} ></i></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-1'></div>
            </div>
        </div>
    )
}


export default memo(productDetail);