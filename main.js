let a = document.getElementById('add');
let b = document.getElementById('do1');
let c = document.getElementById('field');
a.addEventListener('click', function(){
    var p = document.createElement('p');
    p.classList.add('para');
    p.innerText = c.value;
    b.appendChild(p);
    c.value = "";
    p.addEventListener('click', function(){
        p.style.textDecoration = "line-through";
    })
    p.addEventListener('dblclick', function(){
        b.removeChild(p);
    })
})