//all h5tags get elements by tag name
const h5Tags = document.getElementsByTagName("h5");
for (tag of h5Tags) {
    tag.style.color = 'blue';
    //console.log(h5Tag);
}

//get element by id
const backpackId = document.getElementById('backpack');
backpackId.style.backgroundColor = 'tomato';
// console.log(backpackId);

//get element by class
const cards = document.getElementsByClassName('card');
for (crd of cards) {
    crd.style.borderRadius = '30px';
}

function cnslLog() {
    console.log("Button Click using onclick");
}
// document.getElementById('click').addEventListener('click', function () {
//     console.log("button click");
// })
const btns = document.getElementsByClassName("buy-now-button")
for (bt of btns) {
    // console.log(btn);
    bt.addEventListener('click', function (event) {
        // event.target.parentNode.removeChild(event.target); // this one also work
        event.target.remove();
    })
}
