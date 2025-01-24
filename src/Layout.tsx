import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from 'core/route.protected';
import { PublicRoute } from 'core/route.public';

import Home from 'components/Home';
import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import NoPage from 'components/NoPage';
import Loading from 'components/_common/loading/Loading';

const Main = lazy(() => import(/* webpackChunkName: "MainComponent" */ './components/main/Main'));

// const Login = lazy(() => {
//     return Promise.all([import(/* webpackChunkName: "LoginComponent" */ './components/login/Login'), new Promise((resolve) => setTimeout(resolve, 1000))]).then(([moduleExports]) => moduleExports);
// });

class Layout extends React.Component {
    constructor(props: any) {
        super(props);

        for (let i = 0; i < document.body.classList.length; i++) {
            document.body.classList.remove(document.body.classList[0]);
        }
        document.body.style.minHeight = null;

        document.body.classList.add('sidebar-mini');
        document.body.classList.add('layout-fixed');
        document.body.classList.add('layout-navbar-fixed');
    }

    public render() {
        return (
            <div className="">
                <NavBar />

                <div className="">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>

                        <Route
                            path="/main"
                            element={
                                <PublicRoute>
                                    <React.Suspense fallback={<Loading />}>
                                        <Main />
                                    </React.Suspense>
                                </PublicRoute>
                            }
                        ></Route>

                        {/* <Route
                            path="/main/*"
                            element={
                                <ProtectedRoute>
                                    <React.Suspense fallback={<Loading />}>
                                        <Main />
                                    </React.Suspense>
                                </ProtectedRoute>
                            }
                        ></Route> */}

                        <Route path="*" element={<NoPage />}></Route>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default Layout;
