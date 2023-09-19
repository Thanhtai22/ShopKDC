import { memo } from 'react';
import './style.scss'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';

const HomePage = () => {
  const onChange= () =>{
      
  }
  return (
    <div className='container'>

      <div className='row d-flex'>


        <div className='col-12 body-mid'>

          <div className="slide">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators" style={{ position: 'absolute', bottom: '40px' }}>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://lh3.googleusercontent.com/79pF1qvkAMR3L4Jm1kZdGb3AVvX2_zqj1nSyAnBlQDFi-KNi4F7FQAE-Gk14xb1OyKR0tMgLPmFDQ65n-3d2YKvtlcdnnrB3=w1920-rw" class="d-block w-100" style={{ height: '500px', width: '100%' }} />
                </div>
                <div class="carousel-item">
                  <img src="https://lh3.googleusercontent.com/YSEh7mEEW8a_KbVD42Mut-z-NVGg_x9d8YBLcI8ZHZxX0PPVLz30TqanefsaJITaHRRimZ8W75k2SD6WXoqEogPcpqj4EePL=w1920-rw" class="d-block w-100" style={{ height: '500px' }} />
                </div>
                <div class="carousel-item">
                  <img src="https://lh3.googleusercontent.com/NEyGqAS4HkBmVGWbdLxRCJ7v4n7Xz-Xcfs6ffoxCNZMHBg0txwJk7L0FVyBvjZ9mwdFsV915-uAWlcX_JPHD1yJSq2EYfeV6=w1920-rw" class="d-block w-100" style={{ height: '500px' }} />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

        </div>



      </div>
      <br></br>
      <div className='container'>
        <div className='row'>
        <nav class="navbar navbar-expand-lg navbar-light  nav-header">
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-item nav-link active" href="#">Laptop <span class="sr-only">(current)</span></a>
                                <a class="nav-item nav-link " href="#">Phụ kiện</a>
                            </div>
                        </div>
                    </nav>
          <div className='col'>
            <div class="card" style={{ width: "12rem" }}>
              <Link to="/product"><img class="card-img-top" src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" style={{ width: '100%', height: '140px' }} alt="Card image cap" /></Link>
              
                  <div class="card-body">
                    <h6 class="card-title" style={{color:'red'}}>16.900.000đ</h6>
                    <p>Đánh giá: 4,1<i class="fa-solid fa-star " style={{color: '#FFD700'}} ></i></p>
                    <button href="#" class="btn btn-success">Mua ngay</button>
                  </div>
            </div>
          </div>
          <div className='col'>
            <div class="card" style={{ width: "12rem" }}>
            <Link to="/product"><img class="card-img-top" src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" style={{ width: '100%', height: '140px' }} alt="Card image cap" /></Link>
            
              <div class="card-body">
                <h6 class="card-title" style={{color:'red'}}>16.900.000đ</h6>
                <p>Đánh giá: 4,1<i class="fa-solid fa-star " style={{color: '#FFD700'}} ></i></p>
                <button href="#" class="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class="card" style={{ width: "12rem" }}>
              <Link to="/product"><img class="card-img-top" src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" style={{ width: '100%', height: '140px' }} alt="Card image cap" /></Link>
              
              <div class="card-body">
                <h6 class="card-title" style={{color:'red'}}>16.900.000đ</h6>
                <p>Đánh giá: 4,1<i class="fa-solid fa-star " style={{color: '#FFD700'}} ></i></p>
                <button href="#" class="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class="card" style={{ width: "12rem" }}>
              <Link to="/product"><img class="card-img-top" src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" style={{ width: '100%', height: '140px' }} alt="Card image cap" /></Link>
              
              <div class="card-body">
                <h6 class="card-title" style={{color:'red'}}>16.900.000đ</h6>
                <p>Đánh giá: 4,1<i class="fa-solid fa-star " style={{color: '#FFD700'}} ></i></p>
                <button href="#" class="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class="card" style={{ width: "12rem" }}>
              <Link to="/product"><img class="card-img-top" src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" style={{ width: '100%', height: '140px' }} alt="Card image cap" /></Link>
              
              <div class="card-body">
                <h6 class="card-title" style={{color:'red'}}>16.900.000đ</h6>
                <p>Đánh giá: 4,1<i class="fa-solid fa-star " style={{color: '#FFD700'}} ></i></p>
                <button href="#" class="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
        </div><br></br>
        <div className='row'>
          <div className='col'>
            <div class="card" style={{ width: "12rem" }}>
              <Link to="/product"><img class="card-img-top" src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" style={{ width: '100%', height: '140px' }} alt="Card image cap" /></Link>
              
                  <div class="card-body">
                    <h6 class="card-title" style={{color:'red'}}>16.900.000đ</h6>
                    <p>Đánh giá: 4,1<i class="fa-solid fa-star " style={{color: '#FFD700'}} ></i></p>
                    <button href="#" class="btn btn-success">Mua ngay</button>
                  </div>
            </div>
          </div>
          <div className='col'>
            <div class="card" style={{ width: "12rem" }}>
              <Link to="/product"><img class="card-img-top" src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" style={{ width: '100%', height: '140px' }} alt="Card image cap" /></Link>
              
                  <div class="card-body">
                    <h6 class="card-title" style={{color:'red'}}>16.900.000đ</h6>
                    <p>Đánh giá: 4,1<i class="fa-solid fa-star " style={{color: '#FFD700'}} ></i></p>
                    <button href="#" class="btn btn-success">Mua ngay</button>
                  </div>
            </div>
          </div>
          <div className='col'>
            <div class="card" style={{ width: "12rem" }}>
              <Link to="/product"><img class="card-img-top" src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" style={{ width: '100%', height: '140px' }} alt="Card image cap" /></Link>
              
              <div class="card-body">
                <h6 class="card-title" style={{color:'red'}}>16.900.000đ</h6>
                <p>Đánh giá: 4,1<i class="fa-solid fa-star " style={{color: '#FFD700'}} ></i></p>
                <button href="#" class="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class="card" style={{ width: "12rem" }}>
              <Link to="/product"><img class="card-img-top" src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" style={{ width: '100%', height: '140px' }} alt="Card image cap" /></Link>
              
              <div class="card-body">
                <h6 class="card-title" style={{color:'red'}}>16.900.000đ</h6>
                <p>Đánh giá: 4,1<i class="fa-solid fa-star " style={{color: '#FFD700'}} ></i></p>
                <button href="#" class="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class="card" style={{ width: "12rem" }}>
              <Link to="/product"><img class="card-img-top" src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" style={{ width: '100%', height: '140px' }} alt="Card image cap" /></Link>
              
              <div class="card-body">
                <h6 class="card-title" style={{color:'red'}}>16.900.000đ</h6>
                <p>Đánh giá: 4,1<i class="fa-solid fa-star " style={{color: '#FFD700'}} ></i></p>
                <button href="#" class="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
        </div><br></br>
        <div className='row'>
          <div className='col'>
            <div class="card" style={{ width: "12rem" }}>
              <Link to="/product"><img class="card-img-top" src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" style={{ width: '100%', height: '140px' }} alt="Card image cap" /></Link>
              
                  <div class="card-body">
                    <h6 class="card-title" style={{color:'red'}}>16.900.000đ</h6>
                    <p>Đánh giá: 4,1<i class="fa-solid fa-star " style={{color: '#FFD700'}} ></i></p>
                    <button href="#" class="btn btn-success">Mua ngay</button>
                  </div>
            </div>
          </div>
          <div className='col'>
            <div class="card" style={{ width: "12rem" }}>
              <Link to="/product"><img class="card-img-top" src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" style={{ width: '100%', height: '140px' }} alt="Card image cap" /></Link>
              
                  <div class="card-body">
                    <h6 class="card-title" style={{color:'red'}}>16.900.000đ</h6>
                    <p>Đánh giá: 4,1<i class="fa-solid fa-star " style={{color: '#FFD700'}} ></i></p>
                    <button href="#" class="btn btn-success">Mua ngay</button>
                  </div>
            </div>
          </div>
          <div className='col'>
            <div class="card" style={{ width: "12rem" }}>
              <Link to="/product"><img class="card-img-top" src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" style={{ width: '100%', height: '140px' }} alt="Card image cap" /></Link>
              
              <div class="card-body">
                <h6 class="card-title" style={{color:'red'}}>16.900.000đ</h6>
                <p>Đánh giá: 4,1<i class="fa-solid fa-star " style={{color: '#FFD700'}} ></i></p>
                <button href="#" class="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class="card" style={{ width: "12rem" }}>
              <Link to="/product"><img class="card-img-top" src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" style={{ width: '100%', height: '140px' }} alt="Card image cap" /></Link>
              
              <div class="card-body">
                <h6 class="card-title" style={{color:'red'}}>16.900.000đ</h6>
                <p>Đánh giá: 4,1<i class="fa-solid fa-star " style={{color: '#FFD700'}} ></i></p>
                <button href="#" class="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class="card" style={{ width: "12rem" }}>
              <Link to="/product"><img class="card-img-top" src="https://lh3.googleusercontent.com/lPsRWb6bFndzZQ9EFw-xVJO2WZUBqmpy5NGq2ueVdOSI89r8TFHSaNI_DcGHMyFK3mCj4cU8RoH7sXtcSLk89Tu0kBqkp6N8=w1000-rw" style={{ width: '100%', height: '140px' }} alt="Card image cap" /></Link>
              
              <div class="card-body">
                <h6 class="card-title" style={{color:'red'}}>16.900.000đ</h6>
                <p>Đánh giá: 4,1<i class="fa-solid fa-star " style={{color: '#FFD700'}} ></i></p>
                <button href="#" class="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
        </div><br></br>
      </div>
      <Pagination className='pagination' defaultCurrent={1} total={50} onChange={onChange} />
    </div>


  );
};

export default memo(HomePage);