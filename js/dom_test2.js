function myFunction() {
    let header = document.getElementsByTagName("h1")[0];
    let body = document.getElementsByTagName("h1")[1];
    header.setAttribute("class", "header-text");
    body.setAttribute("class", "body-text");
}

var root = document.getElementsByTagName('ol')[0]; //root는 살아있는 객체
var li = document.createElement('li');		// <li></li>
var content = document.createTextNode('게임');      //  ‘게임’
li.id = 'newLi';			
li.className = 'festival';		      //<li class=“festival”><li>	
li.appendChild(content);		      //<li class=“festival”>게임<li>	
root.appendChild(li);

li = document.createElement('li');
content = document.createTextNode('휴강');
li.appendChild(content);
root.insertBefore(li, root.firstElementChild.nextElementSibling);

var jujum = document.getElementsByTagName('li')[2];
jujum.remove();