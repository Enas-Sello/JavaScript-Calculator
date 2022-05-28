let answer = document.getElementById('Answer')

function EnterNumber (num){

    if(this){
        answer.value += num;
    }
console.log(num)

}
function EnterOperator(num){
    if(num){
        answer.value += num;
    }
console.log(num)

}
function EnterClear(){
    if(EnterClear){
        answer.value = "";
    }
console.log("clear")

}

function EnterEqual (){
    if(EnterEqual){
        answer.value = eval(answer.value);
    }
console.log("don")

}
