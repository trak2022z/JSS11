let div1 = document.querySelector('#content1');
for (let cssClass of div1.classList) {
    console.log(cssClass);
}
let div2 = document.querySelector('#content2');
for (let cssClass of div2.classList) {
    console.log(cssClass);
}
let div3 = document.querySelector('#content3');
for (let cssClass of div3.classList) {
    console.log(cssClass);
}
console.log("Modify classes...")

//Add class visible on div1
div1.classList.add('visible');
//Remove class three on div2
div2.classList.remove('three');
//Replace class six on div3
div3.classList.replace('six','warning');

for (let cssClass of div1.classList) {
    console.log(cssClass);
}
for (let cssClass of div2.classList) {
    console.log(cssClass);
}
for (let cssClass of div3.classList) {
    console.log(cssClass);
}