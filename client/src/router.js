import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/user/homePage';
import { ROUTERS} from "./utils/router"
import MasterLayout from './pages/user/theme/masterLayout';
import ProFilePage from './pages/user/proFilePage';
// import Register from './pages/user/Login/Login';
import Login from './pages/user/Login/Login';

const renderUserRouter = () => {
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
    ];

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

const RouterCustom = () => {
    return renderUserRouter();
}
export default RouterCustom;