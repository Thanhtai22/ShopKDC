import { memo } from 'react'
import './reg.scss'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';

const Regsister = () => {
    return (
        <div className='container'>
            <div className='row'>
                <form class="form-reg">
                    <p class="title-reg">Đăng ký </p>
                    
                    <div class="flex-reg">
                        <label>
                            <input class="input-reg" type="text" placeholder="" required=""/>
                                <span><h6>Tên:</h6></span>
                        </label>

                        <label>
                            <input class="input-reg" type="text" placeholder="" required=""/>
                                <span><h6>Họ:</h6></span>
                        </label>
                    </div>

                    <label>
                        <input class="input-reg" type="email" placeholder="" required=""/>
                            <span><h6>Tên đăng nhập:</h6></span>
                    </label>

                    <label>
                        <input class="input-reg" type="password" placeholder="" required=""/>
                            <span><h6>Mật khẩu:</h6></span>
                    </label>
                    <label>
                        <input class="input-reg" type="password" placeholder="" required=""/>
                            <span><h6>Nhập lại mật khẩu:</h6></span>
                    </label>
                    <button class="submit">Đăng ký</button>
                    <p class="signin-reg">Bạn chưa có tài khoản? <a href="/login">Đăng nhập</a> </p>
                </form>
            </div>
        </div>
    )
}

export default memo(Regsister);