import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/user/homePage';
import { ROUTERS} from "./utils/router"
import MasterLayout from './pages/user/theme/masterLayout';
import ProFilePage from './pages/user/proFilePage';

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