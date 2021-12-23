'use strict';

let htmlElem = document.querySelector('html');
let videoCon = document.querySelector('.video_content');
let videoTxt = videoCon.querySelectorAll('.text');
let slideBtn = document.querySelector('.swiper-button-next');
let firstBeans = document.querySelector('#firstbeans');

let firstQuiz = document.querySelector('.quiz01');
let secondQuiz = document.querySelector('.quiz02');
let thirdQuiz = document.querySelector('.quiz03');

let rightBtn = document.querySelectorAll('.right_btn');
let wrongBtn = document.querySelectorAll('.wrong_btn');
let resultAnswerBtn = document.querySelectorAll('.answer');
let resultWrongBtn = document.querySelectorAll('.wrong');

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
rightBtn.addEventListener('click', rightBtnWork)

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

//quiz
for(let j = 0; j<rightBtn.length; j++) {
    if(rightBtn[0].addEventListener('click', (e)=>{
        rightBtn[0].classList.add('active')
        wrongWork();
    }));
    if(rightBtn[1].addEventListener('click', (e)=>{
        wrongWork();
    }));
    if(rightBtn[2].addEventListener('click', (e)=>{
        rightWork();
    }));
}


for(let k = 0; k<wrongBtn.length; k++) {
    wrongBtn[0].addEventListener('click', (e)=>{
        wrongBtn[0].classList.add('active');
        rightWork();
        firstQuizRef.classList.add('on');
    })
    if(wrongBtn[1].addEventListener('click', (e)=>{
        rightWork();
    }));
    if(wrongBtn[2].addEventListener('click', (e)=>{
        wrongWork();
    }));
}


function rightWork() {
    for(let h = 0; h<resultAnswerBtn.length; h++) {
        resultAnswerBtn[h].classList.add('on');
        resultAnswerBtn[h].addEventListener('click', function(){
            firstQuiz.classList.remove('is-active');
            resultAnswerBtn[h].classList.remove('on');
            secondQuiz.classList.add('is-active');
        })
    }
}
function wrongWork() {
    for(let z=0; z<resultWrongBtn.length; z++) {
        resultWrongBtn[z].classList.add('on')
        resultWrongBtn[z].addEventListener('click', function(){
            resultWrongBtn[z].classList.remove('on');
            rightBtn[0].classList.remove('active')
        })
    }
}
