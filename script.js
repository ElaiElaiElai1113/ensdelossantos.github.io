// -----------------CONVERSION------------------------

var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

input.addEventListener('keyup',myResult);
inputType.addEventListener('change',myResult);
resultType.addEventListener('change',myResult);


inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
function myResult(){

  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;
  



  if(inputTypeValue === "meter" && resultTypeValue === "feet"){
    result.value = Number(input.value) * 3.28084;
  } else if(inputTypeValue === "meter" && resultTypeValue === "meter"){
    result.value = input.value;
  }

  if(inputTypeValue === "feet" && resultTypeValue === "meter"){
    result.value = Number(input.value) / 3.281;
  } else if(inputTypeValue === "feet" && resultTypeValue === "meter"){
    result.value = input.value;
  }

  if(inputTypeValue === "celsius" && resultTypeValue === "fahrenheit"){
    result.value = Number(input.value) * 1.8 + 32;
  } else if(inputTypeValue === "celsius" && resultTypeValue === "celsius"){
    result.value = input.value;
  }

  if(inputTypeValue === "fahrenheit" && resultTypeValue === "celsius"){
    result.value = Number(input.value - 32) * 5/9;
  } else if(inputTypeValue === "fahrenheit" && resultTypeValue === "fahrenheit"){
    result.value = input.value;
  }

}

// -----------------CONVERSION------------------------

// -----------------INCOME TAX------------------------
function convIncome() {
    income = document.getElementById("n1").value*1;
    let taxedIncome;
    
    if (income > 8000000) {
      taxedIncome = (document.getElementById("n1").value-8000000)*(35/100)+2410000;
   } else if (income > 2000000){
    taxedIncome = (document.getElementById("n1").value-2000000)*(32/100)+490000;
   } else if (income > 800000) {
    taxedIncome = (document.getElementById("n1").value-800000)*(30/100)+130000;
   } else if (income > 400000) {  
    taxedIncome = (document.getElementById("n1").value-400000)*(25/100)+30000;
   } else if (income > 250000) {
    taxedIncome = (document.getElementById("n1").value-250000)*(20/100);
   } else  {
    taxedIncome = document.getElementById("n1").value*0;
   }      
    
    

  document.getElementById("answ").value = taxedIncome;
}

// -----------------INCOME TAX------------------------


// -----------------FAC,SUM,AVE------------------------

function factorial() {
  var x, y, z;
  x = 1;
  y = 1;
  z = document.getElementById("facsumav").value;
  
  while(y <= z) {
    x = x * y;
    y++;
  }

document.getElementById("facsumav-result").value = x;
}

function sum() {
var x, y, z;
x = "";
y = document.getElementById("facsumav").value;
z = document.getElementById("facsumav").value;

do {
  ++y
  x = (y*z)/2;

}
while(z > y)

document.getElementById("facsumav-result").value = x;
}

function average() {
  var x, y, z, aver;
x = 0
y = document.getElementById("facsumav").value;
z = 1

for (let i = 1; i <= y; i++){
  x += i;
}

document.getElementById("facsumav-result").value = x/y;
}

// -----------------FAC,SUM,AVE------------------------







