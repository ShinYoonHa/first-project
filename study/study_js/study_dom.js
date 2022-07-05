var cnt=0;
function addText() {
    let x = document.getElementsByTagName("li");
    document.getElementById("demo").innerHTML = x[cnt].innerHTML
    cnt++;
    if(cnt>2) cnt=0;    
}

function menuTemp() {
    let iceMenus = document.getElementsByClassName("ice-menu");
    console.log(iceMenus);
    for (let i in [...iceMenus]) {
        iceMenus[i].style.color = "blue";
    }
    let hotMenus = document.getElementsByClassName("hot-menu");
    let hotArr = [...hotMenus]
    console.log(hotMenus);
    hotArr.forEach(x=>x.style.color="red")
}

function menuTempClear() {
    let menus = document.querySelectorAll("li");
    menus.forEach(x=>x.style.color="black")
}

function hideMenu() {
    let demo = document.querySelector("#demo");
    demo.innerHTML = ""
}

function fontSizeUp() {
    let list = document.querySelectorAll("#menu-ul");
    list.forEach(x=>x.style.fontSize="30px");
}

function write1(menu) {
    let txt = document.getElementsByClassName("select")[0];
    txt.value = menu;
}
function popupSelected() {
     let demo = document.getElementsByClassName("select")[0];
     let selectedNum = demo.value;
     console.log(selectedNum);
     alert(selectedNum);
}

var button = document.getElementById('button');
var anchor = document.getElementById('anchor');
var para = document.getElementById('para');

/*button.title = 'inputTitle';
anchor.href = 'http://se.kumoh.ac.kr';
para.style.fontSize = '32px';
para.style.textAlign = 'right';*/

anchor.setAttribute("href", 'http://cs.kumoh.ac.kr/cs/index.do');
para.setAttribute('style', 'font-size:48px; text-align:center;\
border:1px solid blue')

function myFunction() {
    document.getElementsByTagName("h1")[0].setAttribute("class", "header-text");
    document.getElementsByTagName("h1")[1].setAttribute("class", "body-text")
    //tagName이 h1인 것 중에 0번째와 1번째에 각 "header-text", "body-text"라는
    //클래스 속성을 부여함
    var classModi = document.getElementById('classModi');
    classModi.className = classModi.className+' second';

    document.getElementsByClassName("first second")[0].setAttribute("class", "middle");
}