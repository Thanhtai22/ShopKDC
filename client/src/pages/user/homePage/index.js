import {memo} from 'react';
import './style.scss'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Link } from 'react-router-dom';

const HomePage  = () => {
 
    return( 
          <div className='container'>
           
            <div className='row d-flex'>
                  <div className='col-3 body-left'>
                  <form className='form-boy-left kind' method='' action=''>
                  <ul style={{listStyle:"none"}}>
                      <li><label class="cyberpunk-checkbox-label">
                            <input type="checkbox" class="cyberpunk-checkbox"/>
                              <i>MSI</i>
                          </label>
                      </li>
                      <li><label class="cyberpunk-checkbox-label">
                            <input type="checkbox" class="cyberpunk-checkbox"/>
                              <i>ASUS</i>
                          </label>
                      </li>
                      <li><label class="cyberpunk-checkbox-label">
                            <input type="checkbox" class="cyberpunk-checkbox"/>
                              
                          </label><i>HP</i>
                      </li>
                      <li><label class="cyberpunk-checkbox-label">
                            <input type="checkbox" class="cyberpunk-checkbox"/>
                              <i>DELL</i>
                          </label>
                      </li>
                      
                    </ul>
                  </form>

                  </div>

           
                
                  <div className='col-6 body-mid'>
              
                  </div>
           

                  <div className='col-3 body-right'>
                      c
                  </div>
               </div>
            </div>
          
    );
};

export default memo(HomePage);