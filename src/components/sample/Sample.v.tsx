import React from 'react';
import Loading from 'components/_common/loading/Loading';

const SampleV = ({ params }) => (
    <>
        {params.isLoaded && params.error == null ? (
            <>
                <div>Sample 페이지 입니다.</div>
            </>
        ) : (
            <Loading />
        )}
    </>
);

export default SampleV;
