function addText() {
    let li = document.getElementsByTagName("LI")[1];
    document.getElementById("demo").innerHTML = li.innerHTML;
}

function menuTemp() {
    let ices = document.getElementsByClassName("ice-menu");
    for(let i in [...ices]) {
        ices[i].style.color = "blue";
    }
    let hots = document.getElementsByClassName("hot-menu");
    for(let i in [...hots]) {
        hots[i].style.color = "red";
    }
}

function menuTempClear() {
    let ices = document.getElementsByClassName("ice-menu");
    for(let i in [...ices]) {
        ices[i].style.color = "black";
    }

    let hots = document.getElementsByClassName("hot-menu");
    let toArr = [...hots];
    toArr.forEach(x=>x.style.color="black");

    //let lis = document.querySelectorAll(".menu-box li");
    //lis.forEach(x=>x.style.color="black");
}

function removeMenu() {
    let remov = document.querySelector("#demo");
    remov.innerHTML = "";
}

function fontSizeUp() {
    let lis = document.querySelectorAll("#meun-ul li");
    lis.forEach((x) => (x.style.fontSize = "30px"));
}

function popupSelected() {
    let demo = document.getElementsByClassName("select-textbox")[0];
    let selectedNum = demo.value;
    console.log(selectedNum);
    alert(getMenuName(selectedNum));
}

function getMenuName(pos) {
    if (pos <= 0 || pos >= 4) {
        alert("입력이 올바르지 않습니다.");
        return;
    }
    let menuUL = document.getElementById("meun-ul");
    let str = null;
    if (pos == 1) {
        str = menuUL.firstElementChild.innerHTML;
    } else if (pos == 2) {
        str = menuUL.firstElementChild.nextElementSibling.innerHTML;
    }
    else {
        str = menuUL.lastElementChild.innerHTML;
    }
    return str;
}

var button = document.getElementById('button');
var anchor = document.getElementById('anchor');

console.log(button.href);
console.log(anchor.href);
console.log(button.onclick);
console.log(anchor.onclick);
