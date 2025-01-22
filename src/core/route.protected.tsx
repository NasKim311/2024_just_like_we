import React from 'react';
import { Route, Navigate } from 'react-router-dom';
// import authService from 'services/auth.service';

export const ProtectedRoute = ({ children }) => {
    /*
    let search = window.location.search;
    let pathname: string = window.location.pathname;
    let roles: Array<string> = authService.getToken().roles;
    let userId: string = authService.getUserId();
    // console.log('pathname', pathname)
    // console.log('decodeURIComponent(pathname)', decodeURIComponent(pathname))
    // console.log('userId', userId)
    // console.log('decodeURIComponent(userId)', decodeURIComponent(userId))

    if (
        !localStorage.getItem('token') ||
        (pathname.startsWith('/admin') && !roles.includes('MASTER')) ||
        (pathname.startsWith('/package') && !roles.includes('MASTER') && !roles.includes('ADMIN_PACKAGE')) ||
        (pathname.startsWith('/pickup') && !roles.includes('MASTER') && !roles.includes('ADMIN_PICKUP')) ||
        (pathname.startsWith('/order') && !roles.includes('MASTER') && !roles.includes('ADMIN_ORDER')) ||
        (pathname.startsWith('/vehicle') && !roles.includes('MASTER') && !roles.includes('ADMIN_VEHICLE')) ||
        (pathname.startsWith('/trip') && !roles.includes('MASTER') && !roles.includes('ADMIN_TRIP')) ||
        (pathname.startsWith('/guide') && !roles.includes('MASTER') && !roles.includes('ADMIN_GUIDE')) ||
        (pathname.startsWith('/ew') && !roles.includes('MASTER') && !roles.includes('ADMIN_WORK_ADMIN') && !roles.includes('ADMIN_WORK_NORMAL')) ||
        (pathname.startsWith('/guide-schedule') && !roles.includes('MASTER') && !roles.includes('ADMIN_GUIDE_SCHEDULE')) ||
        (pathname.startsWith('/accounting') && !roles.includes('MASTER') && !roles.includes('ADMIN_CALCULATE')) ||
        (pathname.startsWith('/guide-accounting') && !roles.includes('MASTER') && !roles.includes('ADMIN_CALCULATE'))
    ) {
        // 본인계정 상세 페이지는 접근 가능
        if (decodeURIComponent(pathname) == `/admin/update/${userId}`) return children;

        const path = { pathname: '/login', search: search };
        return <Navigate to={path} />;
    }
        */
    return children;
};
