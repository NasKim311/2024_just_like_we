import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import React from 'react';

const requestInterceptor = (req) => {
    //  req.url = req.url.replace(`${process.env.REACT_APP_API_HOST}`,"")
    if (sessionStorage.getItem('sw_token')) {
        // console.log('token', sessionStorage.getItem('sw_token'));
        req.headers['Authorization'] = `Bearer ${sessionStorage.getItem('sw_token')}`;
    }

    return req;
};

const responseInterceptor = (res) => {
    // console.log('responseInterceptor', res);

    if (res.url.endsWith('/oauth/token')) {
        sessionStorage.setItem('sw_token', res.body.access_token);
    }

    return res;
};

function Swagger(props: any) {
    return <SwaggerUI url="/assets/swagger.yaml" requestInterceptor={requestInterceptor} responseInterceptor={responseInterceptor} />;
}

export default Swagger;
