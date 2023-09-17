import {memo} from 'react';
import './style.scss'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className='footer-btn'>
            <div class="container ">
            <div class="row row-footer">
                <div class="col-3 footer-col">
                <h4>company</h4>
                <ul>
                    <li><Link to="#">about us/</Link></li>
                    <li><Link to="#">our services/</Link></li>
                    <li><Link to="#">privacy policy/</Link></li>
                    <li><Link to="#">affiliate program/</Link></li>
                </ul>
                </div>
                <div class="col-3 footer-col">
                <h4>get help</h4>
                <ul>
                    <li><Link to="#">FAQ/</Link></li>
                    <li><Link to="#">shipping/</Link></li>
                    <li><Link to="#">returns/</Link></li>
                    <li><Link to="#">order status/</Link></li>
                    <li><Link to="#">payment options/</Link></li>
                </ul>
                </div>
                <div class="col-3 footer-col">
                <h4>online shop</h4>
                <ul>
                    <li><Link to="#">MSI/</Link></li>
                    <li><Link to="#">ASUS/</Link></li>
                    <li><Link to="#">HP/</Link></li>
                    <li><Link to="#">DELL/</Link></li>
                </ul>
                </div>
                <div class="col-3 footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <Link to="#"><i class="fab fa-facebook-f"></i>/</Link>
                    <Link to="#"><i class="fab fa-twitter"></i>/</Link>
                    <Link to="#"><i class="fab fa-instagram"></i>/</Link>
                    <Link to="#"><i class="fab fa-linkedin-in"></i>/</Link>
                </div>
            </div>
        </div>
     </div>
        </div>
        
    );
};

export default memo(Footer);