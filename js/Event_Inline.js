window.onload = () => {
    let divs = document.querySelectorAll("div");
    //divs[0] = <div class="one">
    //divs[1] = <div class="two">
    //divs[2] = <div class="three">
    divs.forEach(d => d.addEventListener("click",
    logEvent));
};

function logEvent(event) {
    event.stopPropagation();
    console.log(event.currentTarget.className);
}

/*function handler(event) {
    let div = document.getElementsByTagName("div")[0];
    div.addEventListener("click", function() {
        alert("Clicked Me!");
    })
    event.stopPropagation();
}*/