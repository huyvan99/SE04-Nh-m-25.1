console.log("Content is running");
var posts = [];
var comments = [];
var users = [];
var seemores = [];
var loadcomment = [];

function scrollDown() {
    window.scrollBy(0, 10000);
}
function getPost() {
    console.log("getPost running")
    posts = document.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q");
    console.log(posts.length, " bài post lấy được");
    for (let post of postContent) {
        console.log(posts.textContent);
    }
}
function getComment() {
    console.log("getComment running")
    comments = document.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql");
    console.log(comments.length, " số comment");
    for (var i = 0; i < comments.length; i++) {
        if (comments[i].className == 'kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql') {
            console.log(comments[i].textContent);
        }
    }
}
function getUser() {
    console.log("getUser running")
    users = document.getElementsByClassName("pq6dq46d");
    console.log(users.length, " người comment số bài viết của bạn");
    for (var i = 0; i < users.length; i++) {
        if (users[i].className == 'pq6dq46d') {
            console.log(users[i].textContent);
        }
    }
}
function getUserAndComment() {
    console.log("getUserandComment running")
    tmp = document.getElementsByClassName("tw6a2znq sj5x9vvc d1544ag0 cxgpxx05");
    for (var i = 0; i < tmp.length; i++) {
        if (tmp[i].className == "tw6a2znq sj5x9vvc d1544ag0 cxgpxx05") {
            if (tmp[i].children.length > 1)
                console.log(tmp[i].children[0].textContent, ": ", tmp[i].children[1].textContent);
        }
    }
}
function seeMoreComment() {
    loadcomment = document.getElementsByClassName("gtad4xkn");
    for (let load of loadcomment) {
        load.click();
    }
    seemore = document.getElementsByClassName("j83agx80 fv0vnmcu hpfvmrgz");
    for (let btn of seemore) {
        if (btn.click()) {
            btn.click();
        }
    }
}
function main() {
    console.log("enter main")
    window.setTimeout(getPost, 10000);
    window.setTimeout(seeMoreComment, 10000);
    window.setTimeout(getUserAndComment, 15000);
}
function scrollEvent() {
    window.onscroll = function (event) {
        console.log("scrolled");
        main();
    };
}
window.setTimeout(scrollEvent,5000);
// Bắt comment

