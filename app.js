var inputAge = document.getElementsByTagName("input") [0];
console.log (inputAge) ;
var result = document.getElementsByTagName("p") [0];
console.log(result) ;


var currentYear = 2023 , birthYear

function convert() {
    if (inputAge.value > 130) {
        result.innerText = " Naadah chin hudlaa. ";
        result.style.color = "red";
    } else if(inputAge.value < 0){
        result.innerText = " Naadah chin hudlaa. ";
        result.style.color = "red";
    } else if(inputAge.value == ""){
        alert("Hooson utga baina.");
    } else {
        birthYear = currentYear - inputAge . value;
        result.innerText = "Tursun on : "+ birthYear;
    }
}

























































// console.log (document);
// var h1 = document.getElementsByTagName("h1") [ 0 ] ;
// console.log (h1)
// h1.innerText = "Sain uu";
// h1.style.color='red';

// var h2 = document.getElementsByTagName("h1") [ 1 ] ;
// console.log (h2)
// h2.innerText = "Hey";
// h2.style.backgroundColor='blue';