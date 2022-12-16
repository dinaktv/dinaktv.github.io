const txtElement = ['Information System Student', 'Web Developer', 'Freelancer'];
let count = 0;
let txtIndex= 0;
let currentTxt ="";
let words ="";

(function ngetik () {

    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent= words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex=0;
    }
    setTimeout(ngetik, 200)

})()

function a() {
    alert("Thank You For Visiting!");
}

function b() {
    alert("Have a Great Day!(:");
}

function main() {
    a();
    b();
}