//좌측 open 탭
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.getElementById("openBtn").addEventListener("click", openNav);
document.getElementById("closeBtn").addEventListener("click", closeNav);


//이미지 돌아감
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}

document.getElementById("prevBtn").addEventListener("click", function(){plusSlides(-1)});
document.getElementById("nextBtn").addEventListener("click", ()=>{plusSlides(1)});


//쇼핑 상세정보
var acc = document.getElementsByClassName("accordion");
var i;
var panel;
for (i = 0; i < acc.length; i++) { //아코디언 모든 요소에 이벤트 설정
  acc[i].addEventListener("click", function() {
    panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        hideAll(); //닫힌 panel을 열때 다른 모든 panel을 닫는다
        panel.style.display = "block";
    }
    this.classList.toggle("active"); //선택된 panel에 toggle
  });
}

function hideAll() {
    for(var i=0; i<acc.length; i++) {
        acc[i].setAttribute('class', 'accordion');
        //toggle(active)로 class명이 accordion active인 요소들이 있기에
        //acc의 모든 요소의 class명을 원상태인 accordion으로 변경한다
        acc[i].nextElementSibling.style.display = "none";
        //accordion 요소의 다음 형제요소(panel)를 다 가림
    }
}

function makeBtnP() {
    var btn = document.createElement('button');
    btn.id='btnPlus';
    btn.textContent='\u00A0+\u00A0';
    return btn;
}
function makeBtnM() {
    var btn = document.createElement('button');
    btn.id='btnMinus';
    btn.textContent='\u00A0-\u00A0';
    return btn;
}
function makeBtnX() {
    var btn = document.createElement('button');
    btn.id='btnRemove';
    btn.textContent='\u00A0x\u00A0';
    return btn;
}

//주문 정보

var txt; //상품 수량보여줄 text input
var total=0; //총 가격
var to = document.getElementById('total'); //총 가격을 보여줄 div의 id
to.textContent = "총 상품금액 " + total +'원'; //최초 1회 보여줄 초기 총 가격

let select = document.getElementById('select');
select.addEventListener("change", ()=> {
    const item = new Object();
    var selectValue = select.options[select.selectedIndex].value;
    if (select.selectedIndex=='1') { //A텐트
        item.worth = 39800;
    } else if (select.selectedIndex=='2') { //B텐트
        item.worth = 49800;
    } else {    //C텐트
        item.worth = 59800;
    }
    var root = document.getElementById('itemList');
    item.li = document.createElement('li');
    item.price = document.createElement('a'); //각 상품 금액 보여줄 a태그
    
    var count=1; //각 수량

    total += item.worth;
    to.textContent = "총 상품금액 " + total +'원';

    item.txt = document.createElement('input');
    item.txt.type='text';
    item.txt.size=5;
    item.txt.value=1;

    item.btnP = makeBtnP();
    item.btnP.addEventListener('click',()=>{
        count+=1;
        item.txt.value=count;
        total += item.worth;
        to.textContent = "총 상품금액 " + total +'원';
    });
    item.btnM = makeBtnM();
    item.btnM.addEventListener('click',()=>{
        if(item.txt.value==1) {}
        else {count-=1;
            item.txt.value=count;
        }
        total -=item.worth;
        to.textContent = "총 상품금액 " + total +'원';
    });
    item.btnX = makeBtnX();
    item.btnX.addEventListener('click',()=>{
        root.removeChild(item.li);
        total -= count*item.worth;
        to.textContent = "총 상품금액 " + total +'원';
    });

    if(select.selectedIndex==1) {
        item.price.textContent=' 39,800원';
    } else if(select.selectedIndex==2) {
        item.price.textContent=' 49,800원';
    } else {
        item.price.textContent=' 59,800원';
    }
    
    item.li.textContent=selectValue;
    item.li.appendChild(item.txt);
    item.li.appendChild(item.btnP);
    item.li.appendChild(item.btnM);
    item.li.appendChild(item.btnX);
    item.li.appendChild(item.price);
    root.appendChild(item.li);
});