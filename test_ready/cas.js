window.onload = () => {
    var divs = document.querySelectorAll("div");
    divs.forEach((div) => div.addEventListener("click", logEvent));
};
function logEvent(event) {
    console.log(event.currentTarget.className);
}
