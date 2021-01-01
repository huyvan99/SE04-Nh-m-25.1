console.log("Content is running");
var posts = [];
var comments = [];
var users = [];
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
    users = document.getElementsByClassName("pq6dq46d");
    comments = document.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql");
    console.log(users.length, comments.length);
    // console.log(posts.length);
    let cmt = [];
    let usert = [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].className == 'pq6dq46d') {
            usert.push(users[i]);
        }
    }
    for (var i = 0; i < comments.length; i++) {
        if (comments[i].className == 'kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql') {
            cmt.push(comments[i]);
        }
    }
    console.log(usert.length, cmt.length);
    for (var i = 0; i < usert.length; i++) {
        console.log(usert[i].textContent,": ",cmt[i].textContent);  
    }
}
window.setTimeout(getPost, 10000);
window.setTimeout(getComment, 15000);
window.setTimeout(getUser, 15000);
window.setTimeout(getUserAndComment, 15000);
console.log("kiin")
// Bắt comment

