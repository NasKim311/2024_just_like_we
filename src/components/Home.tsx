import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Home(props: any) {
    const navigate = useNavigate();
    //onMount
    useEffect(() => {
        navigate('/main', { replace: true });
    }, []);

    return <></>;
}
