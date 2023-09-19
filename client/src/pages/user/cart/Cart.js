import { memo } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './cart.scss';
import TypedInputNumber from 'antd/es/input-number';
// import { InputNumber } from 'antd';
// import { Link } from 'react-router-dom';


const Cart = () => {
    const onChange = () =>{

    }
    return (
        <div className='container'>
            <div className='row'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Đơn hàng</th>
                            <th scope="col">Đơn giá</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <th scope="row">Laptop ASUS ROG Strix G G513RC-HN038W</th>
                            <td>16.900.00đ</td>
                            <td><TypedInputNumber defaultValue={1} onChange={onChange} size='small' /></td>
                            <td>16.900.00đ</td>
                        </tr>
                      
                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default memo(Cart);