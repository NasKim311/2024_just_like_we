import React from 'react';
import Loading from 'components/_common/loading/Loading';

const MainV = ({ params }) => (
    <>
        {params.isLoaded && params.error == null ? (
            <>
                <main className="main-cover"></main>
            </>
        ) : (
            <Loading />
        )}
    </>
);

export default MainV;
