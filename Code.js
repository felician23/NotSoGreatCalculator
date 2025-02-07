let total = 0;

document.querySelector('#pumpkin').addEventListener('click', Zero)
document.querySelector('#dominosPizza').addEventListener('click', add2)
document.querySelector('#zebra').addEventListener('click', sub3)
document.querySelector('#cantThinkOfAnything').addEventListener('click', add5)
document.querySelector('#davonDaniels').addEventListener('click', sub1)

function Zero() {
    total = 0
    document.querySelector('#placeToPutResult').innerHTML = total 
}
function add2() {
    total = total + 2
    document.querySelector('#placeToPutResult').innerHTML = total 
}
function sub3() {
    total = total - 3
    document.querySelector('#placeToPutResult').innerHTML = total 
}
function add5() {
    total = total + 5
    document.querySelector('#placeToPutResult').innerHTML = total
}
function sub1() {
    total = total - 1
    document.querySelector('#placeToPutResult').innerHTML = total
}