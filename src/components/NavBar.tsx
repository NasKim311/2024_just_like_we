import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import PageUtil from 'util/Page.util';
import SideBar from './SideBar';

class Params {
    error: any = null;
    isLoaded: boolean = false;
    isShowSidebar: boolean = false;
}

function NavBar() {
    const navigate = useNavigate();
    const [params, setParams] = useState(new Params());

    /* ***************************************************************************************** */
    /* ************************************* STATE ********************************************* */
    /* ***************************************************************************************** */
    //onMount
    useEffect(() => {}, []);

    /* ***************************************************************************************** */
    /* ************************************** PAGE ********************************************* */
    /* ***************************************************************************************** */
    function onToggleSidebar() {
        const curParams = PageUtil.deepCopy(params) as Params;
        curParams.isShowSidebar = !curParams.isShowSidebar;

        setParams(curParams);
    }

    /* ***************************************************************************************** */
    /* ************************************* BASIC ********************************************* */
    /* ***************************************************************************************** */

    /* ***************************************************************************************** */
    /* ************************************** VAC ********************************************** */
    /* ***************************************************************************************** */
    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <div className="logo-box">
                        <NavLink to="/">
                            <b>JustLikeWe</b>
                        </NavLink>
                    </div>
                </div>
                <div className="navbar-right">
                    <div className="menu-btn">
                        <div className="ani-btn">
                            <NavLink to="#" onClick={onToggleSidebar}>
                                {!params.isShowSidebar && (
                                    <div className="open">
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/menu-button.png`} style={{ width: '75%', display: 'block', margin: 'auto' }} />
                                    </div>
                                )}
                                {params.isShowSidebar && (
                                    <div className="close" style={{ color: 'black' }}>
                                        x
                                    </div>
                                )}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {params.isShowSidebar && <SideBar />}
        </>
    );
}

export default NavBar;
