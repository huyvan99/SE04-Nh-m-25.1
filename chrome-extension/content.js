console.log("Content is running");
function scrollDown() {
    window.scrollBy(0, 10000);
}
function getPost() {
    console.log("getPost running")
    postContent = document.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q");
    console.log(postContent.length, " bài post lấy được");
    for (let post of postContent) {
        console.log(post.textContent);
    }
}
function getComment() {
    console.log("getComment running")
    comments = document.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql");
    console.log(comments.length, " số comment");
    for (var i = 0; i < comments.length; i++) {
        // Only if there is only single class
        if (comments[i].className == 'kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql') {
            // Do something with the element e[i]
            console.log(comments[i].textContent)
        }
    }
    // for (let comment of commentContent) {
    //     console.log(comment.textContent);
    // }
}
window.setTimeout(getPost, 10000);
window.setTimeout(getComment, 15000);
console.log("kiin")
// Bắt comment

