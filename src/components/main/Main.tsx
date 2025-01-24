import React, { useEffect, useState } from 'react';
import { withRouter } from 'core/withRouter';
import MainV from './Main.v';
import PageUtil from 'util/Page.util';

class Params {
    error: any = null;
    isLoaded: boolean = true;
}

function Main(props: any) {
    const [params, setParams] = useState(new Params());

    /****************************************************************************************** */
    /************************************** STATE ********************************************* */
    /****************************************************************************************** */
    //onMount
    useEffect(() => {}, []);

    /****************************************************************************************** */
    /************************************** PAGE ********************************************* */
    /****************************************************************************************** */

    /****************************************************************************************** */
    /************************************** BASIC ********************************************* */
    /****************************************************************************************** */

    /****************************************************************************************** */
    /**************************************** VAC ********************************************* */
    /****************************************************************************************** */
    const args = {
        params: params,
    };

    return <MainV {...args} />;
}
export default withRouter(Main);
