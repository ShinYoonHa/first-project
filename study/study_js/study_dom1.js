window.onload = () => {
    var divs = document.querySelectorAll('div');
    divs.forEach((div)=>div.addEventListener("click", logEvent));
};
function logEvent(event) {
    event.stopPropagation();
    console.log(event.currentTarget.className);
}


/*  1. 가수의 무대
    2. 주점
    3. 이벤트
    4. 휴강
    5. 게임 */
// 요소 기본 추가(맨 뒤)
var root = document.getElementsByTagName('ol')[0];
var li = document.createElement('li');
var content = document.createTextNode('게임');
li.className = 'festival';
li.appendChild(content);
root.appendChild(li);

//요소 중간 추가
var li2 = document.createElement('li');
var content2 = document.createTextNode('휴강');
li2.appendChild(content2);
root.insertBefore(li2, li);

//요소 삭제
var item = document.getElementsByTagName('li')[2];
item.remove();

//요소 교체
var re = document.createElement('li');
re.textContent='체육대회';
root.replaceChild(re, root.lastElementChild.previousElementSibling);

function myFunc() {
    var title = document.getElementsByTagName('h2')[0];
    title.classList.toggle("myStyle");
}
/*
var list = document.querySelector('#sampleList');
list.addEventListener("click", togleFunc);

let btn = document.querySelector('button'); //버튼 요소를 선택
btn.addEventListener("click", createList);

function togleFunc(event) {
    event.target.classList.toggle("remove");
}

function createList() {
    let newLi = document.createElement('li');
    newLi.setAttribute('id', 'list'+(list.children.length+1))
    let cont = document.createTextNode('추가 리스트 '+(list.children.length+1));
    newLi.appendChild(cont);
    list.appendChild(newLi);
}
*/

//let list = document.querySelectorAll('li');
//list.forEach((x)=>x.addEventListener("click", toggleFunc));
let list = document.querySelector('#sampleList');
list.addEventListener("click", toggleFunc);


let btn = document.getElementById('addBtn');
btn.addEventListener("click", createList);

function toggleFunc(event) {
    event.target.classList.toggle('remove');
}

function createList() {
    let sampleList = document.getElementById('sampleList');
    let newLi = document.createElement('li');
    newLi.setAttribute('id', 'lsit'+(sampleList.children.length+1));
    let cont = document.createTextNode('추가 리스트 ' + (sampleList.children.length+1));
    newLi.appendChild(cont);
    sampleList.appendChild(newLi);
}