import React from 'react';
import { RingLoader } from 'react-spinners';
import './style.css';

/*
    props.isTripMenu : 투어 메뉴 접근시 true, 그 외 메뉴 접근 시 false (css 분기 처리를 위함)
*/
function Loading(props: any) {
    // console.log('props', props);

    return (
        <>
            <div className={`${props.isCalendarView ? 'loading-container-in-calendarView' : 'loading-container'}`}>
                <RingLoader
                    color={'#3c5c23'}
                    loading={true}
                    size={70}
                    // speedMultiplier={0.4}
                />
                {/* 예약관리 > 재배정 작업시 안내 문구 start*/}
                {props.isAttaching && <div className="loading-message">재배정 중 입니다. 잠시만 기다려주세요.</div>}
                {/* 예약관리 > 재배정 작업시 안내 문구 end*/}
            </div>
        </>
    );
}

export default Loading;
