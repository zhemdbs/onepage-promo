'use strict';

let htmlElem = document.querySelector('html');
let videoCon = document.querySelector('.video_content');
let videoTxt = videoCon.querySelectorAll('.text');
let slideBtn = document.querySelector('.swiper-button-next');
let firstBeans = document.querySelector('#firstbeans');

let firstQuiz = document.querySelector('.quiz01');
let firstRightBtn = document.querySelector('.quiz01 .right_btn');
let firstWrongBtn = document.querySelector('.quiz01 .wrong_btn');
let firstResultAnswerBtn = document.querySelector('.quiz01 .answer');
let firstResultWrongBtn = document.querySelector('.quiz01 .wrong');

let secondQuiz = document.querySelector('.quiz02');
let secondrightBtn = document.querySelector('.quiz02 .right_btn');
let secondwrongBtn = document.querySelector('.quiz02 .wrong_btn');
let secondresultAnswerBtn = document.querySelector('.quiz02 .answer');
let secondresultWrongBtn = document.querySelector('.quiz02 .wrong');

let thirdQuiz = document.querySelector('.quiz03');
let thirdrightBtn = document.querySelector('.quiz03 .right_btn');
let thirdwrongBtn = document.querySelector('.quiz03 .wrong_btn');
let thirdresultAnswerBtn = document.querySelector('.quiz03 .answer');
let thirdresultWrongBtn = document.querySelector('.quiz03 .wrong');

let firstQuizRef = document.querySelector('.quiz_ref .item01')
let secondQuizRef = document.querySelector('.quiz_ref .item02')
let thirdQuizRef = document.querySelector('.quiz_ref .item03')

let secondBeans = document.querySelector('#secondbeans');

let loginPopup = document.querySelector('.popup_login');
let beansPopup = document.querySelector('.popup_beans');
let closePopup = document.querySelector('.popup_close');
let alreadyPopup = document.querySelector('.popup_already');
let popup_confirm = document.querySelector('.btn_confirm');
let btn_close = document.querySelector('.btn_close');


window.addEventListener('scroll', scrollWork);
slideBtn.addEventListener('click', slideWork);

firstRightBtn.addEventListener('click', firstrightWork);
firstWrongBtn.addEventListener('click', firstwrongWork);

secondrightBtn.addEventListener('click', secondrightWork);
secondwrongBtn.addEventListener('click', secondwrongWork);

thirdrightBtn.addEventListener('click', thirdrightWork);
thirdwrongBtn.addEventListener('click', thirdwrongWork);

popup_confirm.addEventListener('click', closeWork);

//팝업
function closeWork() {
    loginPopup.style.display = 'none';
    beansPopup.style.display = 'none';
    closePopup.style.display = 'none';
    alreadyPopup.style.display = 'none';
}

//스크롤
function scrollWork() {
    let sTop = htmlElem.scrollTop;
    if (sTop > 700) {
        for(let i = 0; i<videoTxt.length; i++) {
            videoTxt[i].classList.add('on');
        }
        // videoTxt.forEach(function(i){
        //     i.classList.add('on')
        // })
        // videoTxt.forEach(i => i.classList.add('on')) 
    }
    console.log(sTop)
}

//슬라이드
function slideWork() {
    if(slideBtn.classList.contains('swiper-button-disabled')) {
        firstBeans.classList.add('on')
    };
}
var swiper = new Swiper(".slide-container", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//quiz01
function firstrightWork() {
    firstRightBtn.classList.add('active');
    firstResultWrongBtn.classList.add('on');
    firstResultWrongBtn.addEventListener('click', function(){
        firstRightBtn.classList.remove('active');
        firstResultWrongBtn.classList.remove('on');
    })
}
function firstwrongWork() {
    firstWrongBtn.classList.add('active');
    firstResultAnswerBtn.classList.add('on');
    firstQuizRef.classList.add('on')
    firstResultAnswerBtn.addEventListener('click', function(){
        firstQuiz.classList.remove('is-active');
        secondQuiz.classList.add('is-active');
    })
}

//quiz02
function secondrightWork() {
    secondrightBtn.classList.add('active');
    secondresultWrongBtn.classList.add('on');
    secondresultWrongBtn.addEventListener('click', function(){
        secondrightBtn.classList.remove('active');
        secondresultWrongBtn.classList.remove('on');
    })
}
function secondwrongWork() {
    secondwrongBtn.classList.add('active');
    secondresultAnswerBtn.classList.add('on');
    secondQuizRef.classList.add('on')
    secondresultAnswerBtn.addEventListener('click', function(){
        secondQuiz.classList.remove('is-active');
        thirdQuiz.classList.add('is-active');
    })
}

//quiz03
function thirdrightWork() {
    thirdrightBtn.classList.add('active');
    thirdresultAnswerBtn.classList.add('on');
    thirdQuizRef.classList.add('on');
    secondBeans.classList.add('on');
    beansPopup.style.display = "block"
}
function thirdwrongWork() {
    thirdwrongBtn.classList.add('active');
    thirdresultWrongBtn.classList.add('on');
    thirdresultWrongBtn.addEventListener('click', function(){
        thirdwrongBtn.classList.remove('active');
        thirdresultWrongBtn.classList.remove('on');
    })
}
