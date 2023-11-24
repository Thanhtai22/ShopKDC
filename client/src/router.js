import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/user/homePage';
import { ROUTERS} from "./utils/router"
import MasterLayout from './pages/user/theme/masterLayout';
import ProFilePage from './pages/user/proFilePage';
// import Register from './pages/user/Login/Login';
import Login from './pages/user/Login/Login';
import ProductDetail from './pages/user/productDetail/productDetail';
import Cart from './pages/user/cart/Cart';
import Regsister from './pages/user/regsister/Regsister';
import { useEffect } from 'react';
import  axios  from 'axios';


function renderUserRouter  ()  {
    const userRouter = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />,
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProFilePage />,
        },
        {
            path: ROUTERS.USER.LOGIN,
            component: <Login/>,
        },
        {
            path: ROUTERS.USER.PRODUCTDETAIL,
            component: <ProductDetail/>
        },
        {
            path: ROUTERS.USER.CART,
            component: <Cart/>
        },
        {
            path: ROUTERS.USER.REGSISTER,
            component: <Regsister/>
        },
    ];

//     useEffect(() => {
//         fetchApi()

//   },[] )

//   const fetchApi = async () => {
//         const res = await axios.get(`http://localhost:3001/api/product/get-all`)
//         console.log('res', res)
//   }
    return (
        <MasterLayout>       
        <Routes>
            {
                userRouter.map((item, key ) => (
                    <Route key={key} path={item.path} element={item.component} />                                        
                ))
            }
        </Routes>
         </MasterLayout>
    );
}

// const RouterCustom = () => {
//     return renderUserRouter();
// }
export default renderUserRouter