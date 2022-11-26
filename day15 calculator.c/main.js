let output =document.getElementById("displaybox")
let one = document.getElementById("one")
one.addEventListener("keyup" ,function(){
        output.value +=1
})
let two = document.getElementById("two")
two.addEventListener("keyup" ,function(){
     output.value +=2
})
let three = document.getElementById("three")
three.addEventListener("keyup" ,function(){
        output.value +=3
})
let four = document.getElementById("four")
four.addEventListener("keyup" ,function(){
     output.value +=4
})
let five = document.getElementById("five")
five.addEventListener("keyup" ,function(){
        output.value +=5
})
let six = document.getElementById("six")
six.addEventListener("keyup" ,function(){
        output.value +=6
})
let seven = document.getElementById("seven")
seven.addEventListener("keyup" ,function(){
     output.value +=7
})
let eight = document.getElementById("eight")
eight.addEventListener("keyup" ,function(){
        output.value +=8
})
let nine = document.getElementById("nine")
nine.addEventListener("keyup" ,function(){
        output.value +=9
})
let zero = document.getElementById("zero")
zero.addEventListener("keyup" ,function(){
        output.value +=0
})

function display(num){
    output.value +=num;
}
function cl(){
    output.value=""
}
function calculate(){
        try{
            output.value=eval(output.value)
        }
        catch(error){
            alert("Invalid Key Press")
        }
}
let a =document.getElementById("displaybox")
a.addEventListener('keyup',function(e){
console.log("hi")
})
