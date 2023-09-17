import {memo} from 'react';
import './header.scss'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div className='header-top-color'>
            <div className='container'>
                <div className='row'>
                    <div className='col-3 namepage'>
                        <h3>Cửa hàng KDC</h3>
                    </div>
                    <div className='col-5'>
                    <nav class="navbar ">
                        <form class="form-inline d-flex w-100">
                            <div className='d-flex w-100'>
                            <input class="form-control mr-sm-2 boder-header" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn btn-outline-success my-2 my-sm-0 boder-header" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                            
                        </form>
                    </nav>
                    </div>
                        <div className='col-2 header-top-right d-flex  '>
                            
                            <Link style={{textDecoration:"none"}} to="">
                                <u><i class="fa-solid fa-user fa-shake"></i></u>
                                
                                <i>  Đăng nhập</i>
                            </Link>
                            
                           
                            
                            
       
                        </div>
                        <div className='col-2 Cart-btn  '>
                        <Link style={{textDecoration:"none"}} to="">
                                <i class="fa-solid fa-cart-shopping fa-bounce fa-2xl" ></i>
                                
                               <i>Giỏ hàng</i>
                                
                        </Link>
                           
                        </div>

                        
                    
                    </div> 
            </div>  
            
        </div>
    
    )
};

export default memo(Header);