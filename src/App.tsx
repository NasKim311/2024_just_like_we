import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicRoute } from 'core/route.public';

import Loading from 'components/_common/loading/Loading';
import NoPage from 'components/NoPage';
import Layout from 'Layout';

const Swagger = lazy(() => import(/* webpackChunkName: "ReportComponent" */ 'components/Swagger'));

// const Login = lazy(() => {
//     return Promise.all([
//         import(/* webpackChunkName: "LoginComponent" */ './components/login/Login'),
//         new Promise((resolve) => setTimeout(resolve, 300)), // lazy test
//     ]).then(([moduleExports]) => moduleExports);
// });

class App extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Routes>
                <Route
                    path="/swagger"
                    element={
                        <React.Suspense fallback={<Loading />}>
                            <Swagger />
                        </React.Suspense>
                    }
                ></Route>

                <Route path="/404" element={<NoPage />}></Route>

                {/* <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <React.Suspense fallback={<Loading />}>
                                <Login />
                            </React.Suspense>
                        </PublicRoute>
                    }
                ></Route> */}

                <Route path="*" element={<Layout />} />
            </Routes>
        );
    }
}

export default App;
