let input = document.getElementById('input');
let button = document.querySelectorAll('button');

let string  ="";

let arr = Array.from(button);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            if(string%1 == 0){
                input.value = string;
            }
            else{
                input.value = string.toFixed(2);
            }
           
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;

        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

var str = '45+2';

str = eval(str);
if((str%1))
console.log(str%1);