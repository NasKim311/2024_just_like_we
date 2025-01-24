import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function deepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
}

function pageChanged(page: number, search: any, setParams: Function, setSearch: Function): void {
    let curSearch = deepCopy(search);
    curSearch.page = page;

    setParams((params) => ({
        ...params,
        search: curSearch,
    }));

    setSearch(true);
}

function handleChange(e: any, name: string, setParams: Function, params: any): void {
    // console.log('handleChange', e, name);

    // string , number 등 primitive 인 경우
    if (!e.target) {
        applyParams(e, name, setParams, params);

        // 체크박스 인 경우
    } else if (e.target.type == 'checkbox') {
        setParams(() => ({
            ...params,
            [name]: e.target.checked,
        }));

        // event 객체인 경우
    } else {
        applyParams(e.target.value, name, setParams, params);
    }
}

function applyParams(val: any, name: string, setParams: Function, params: any): any {
    const depth = name.split('.').length;

    if (depth == 4) {
        let parentContainer = name.split('.')[0];
        let container = name.split('.')[1];
        let group = name.split('.')[2];
        let key = name.split('.')[3];

        let newParentContainer = params[parentContainer];

        let newContainer = newParentContainer[container];

        let newObj = newContainer[group];

        newObj[key] = val;

        setParams(() => ({
            ...params,
            [parentContainer]: newParentContainer,
        }));
    } else if (depth == 3) {
        let container = name.split('.')[0];
        let group = name.split('.')[1];
        let key = name.split('.')[2];

        let newContainer = params[container];

        let newObj = newContainer[group];

        newObj[key] = val;

        setParams(() => ({
            ...params,
            [container]: newContainer,
        }));
    } else if (depth == 2) {
        let group = name.split('.')[0];

        console.log('group', group);
        let key = name.split('.')[1];

        let newObj = params[group];
        newObj[key] = val;

        setParams(() => ({
            ...params,
            [group]: newObj,
        }));
    } else {
        setParams(() => ({
            ...params,
            [name]: val,
        }));
    }
}

function handleApiError(e: any): void {
    if (e.code == 'ERR_CANCELED' /*사용자 요청 취소*/) {
        return;
    }

    if (e.code == 'ERR_BAD_REQUEST' /*401*/ && e.response.status == 401 && !e.response.data.message) {
        return;
    }

    console.log(e, e.code);

    if (e.response && e.response?.data && e.response?.data?.message) {
        alert(e.response.data.message);
    } else {
        alert(e.response.data.error);
    }
}

async function htmlToPdf(selector: string, filename: string = 'FMS') {
    //1.html을 들고와서 canvas화
    const canvas = await html2canvas(document.querySelector(selector)!);
    //2.이미지화
    const imageFile = canvas.toDataURL('image/png');
    //3.pdf준비

    //const doc = new jsPDF('p', 'mm', 'a4');
    const doc = new jsPDF({ unit: 'mm', format: 'a5', orientation: 'l' });
    //pdf 가로 세로 사이즈
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    //이미지의 길이와 pdf의 가로길이가 다르므로 이미지 길이를 기준으로 비율을 구함
    const widthRatio = pageWidth / canvas.width;
    //비율에 따른 이미지 높이
    const customHeight = canvas.height * widthRatio;
    //pdf에 1장에 대한 이미지 추가
    doc.addImage(imageFile, 'png', 0, 0, pageWidth, customHeight);
    //doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    //감소하면서 남은 길이 변수
    let heightLeft = customHeight;
    //증가하면서 이미지 자를 위치 변수
    let heightAdd = -pageHeight;

    // 한 페이지 이상일 경우
    while (heightLeft >= pageHeight) {
        //pdf페이지 추가
        doc.addPage();
        //남은 이미지를 추가
        doc.addImage(imageFile, 'png', 0, heightAdd, pageWidth, customHeight);
        //남은길이
        heightLeft -= pageHeight;
        //남은높이
        heightAdd -= pageHeight;
    }
    //문서저장
    doc.save(`${filename}_${new Date().getTime()}.pdf`);
}

// 정규 표현식을 사용하여 이메일 주소를 검증
function isValidEmail(emailString: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(emailString);
}

// 정규 표현식을 사용하여 숫자를 검증
function isValidNumber(numberString: string): boolean {
    const numberRegex = /^\d*$/;

    return numberRegex.test(numberString);
}

// 정규 표현식을 사용하여 문자열에 공백이 포함되었는지 검증
function isValidBlank(keyword: string): boolean {
    const numberRegex = /\s/;

    return numberRegex.test(keyword);
}

// 정규 표현식을 사용하여 yyyy-mm-dd 형식인지 확인
function isValidBirthday(dateString: string) {
    var regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(dateString)) {
        return false;
    }

    return true;
}

// 원화 단위로 표시하는 함수
function formatToKRW(amount) {
    return new Intl.NumberFormat('ko-KR').format(amount);
}

export default {
    pageChanged,
    handleChange,
    handleApiError,
    deepCopy,
    htmlToPdf,
    isValidEmail,
    isValidNumber,
    isValidBlank,
    isValidBirthday,
    formatToKRW,
};
