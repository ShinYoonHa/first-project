window.onload = () => {
    //let lis = document.querySelectorAll("li");
    //lis.forEach((li) => li.addEventListener("click", toggleList));
    
    let ul = document.querySelector("sampleList");
    ul.addEventListener("click", toggleList);

    let btn = document.getElementById("addBtn");
    btn.addEventListener("click", addList);
};

function addList() {
    let ul = document.getElementById("sampleList");
    let newLi = document.createElement('li');
    let liNum = ul.children.length;
    let newId =  "list"+(liNum+1);
    newLi.setAttribute("id", newId);
    newLi.appendChild(document.createTextNode("기존 리스트"+(liNum+1)));
    ul.addappendChild(newLi);
}


function toggleList(event) {
    let clikedLi = document.getElementById(event.target.id);
    clikedLi.classList.toggle("remove");
}