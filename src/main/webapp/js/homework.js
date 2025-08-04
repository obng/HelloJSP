// 1번
let strAry = [" Hello, Java         ",
                      "HTML, CSS, JavaScript ",
                      "Java is complier            ",
                      "       Java and JavaScript "]
let filterWorld = 'java'

// 결과
/*
"HELLO, **** "
"HTML, CSS, ****SCRIPT "
"**** IS COMPILER "
"**** AND ****SCRIPT "
*/

for (let i = 0; i < strAry.length; i++) {
    let remove = strAry[i].trim().toUpperCase().replace(/JAVA/g, "****");
    console.log(remove);
}

// 교수님 답안
strAry.forEach(elem => {
    let result = elem.trim().toLowerCase().replace(/java/g, "****").toUpperCase();
    console.log(result);
})


// 2번
let noAry = ["920304-1213421", "990508 2928123", "030702-4323123"];

// 결과
/*
"920304-1213421"은 남자입니다
"990508 2928123"은 여자입니다
"030702-4323123"은 여자입니다
 */









ip_address


// 교수님 답안
noAry.forEach(elem => {
    let gen = elem.slice(-7)[0]; // 성별 구별 문자
    gen = elem.charAt(elem.length - 7);
    let gender = gen
})