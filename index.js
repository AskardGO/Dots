const inputField = document.querySelector(".input__box-field");
const resultField = document.querySelector(".result");
const buttonArrow = document.querySelector(".arrow");
let load = 0;
let mySet = new Set();


buttonArrow.onclick = () => {startCalculate()}
    function startCalculate() {
    let inputVal = inputField.value;
    mySet = new Set();
    if (inputVal !== "") {
        mySet.add(allDots(inputVal));
        for(let item of mySet.values()) {
            if(dotFounder(item).length === 0){
                console.log("break");
                break;
            }
            variantPusher(item);
        }
        outPutResult(mySet);
    } else {
        let arrowBlock = document.querySelector(".arrow-block");
        arrowBlock.style.zIndex = "1";
        inputField.value = "Input is empty";
        setTimeout(() => {
            inputField.value = ""; arrowBlock.style.zIndex = "0";
        }, 2000);
    }
}


///Добавление всех возможных точек
function allDots(str) {
    str = str.replace(/\s/g, '');
    str = str.replace(/[0-9]/g, '');
    let allDot = "";
    for (let i = 0; i < str.length; i++) {
        allDot += str[i];
        if (i !== (str.length - 1)) {allDot += "."}
    } return allDot }

///Поиск индексов всех точек в варианте
function dotFounder(str) {
    let dotIndexes = [];
    let match = /\./.exec(str);
    let re = /\./g
    while ((match = re.exec(str)) != null) {
        dotIndexes.push(match.index);}
    return dotIndexes;
}

///Удаление точки по индексу
function dotDeleter(str, number) {
    if(str[number] === "."){
        let strMas = str.split("");
        strMas.splice(number, 1);
        str = strMas.join("");
        return str;
    } else {
        return str;
    }
}


function variantPusher(str) {
    let indexes = dotFounder(str);
    for(let i = 0; i < mySet.size; i++) {
        mySet.add(dotDeleter(str, indexes[i]));
    }
}

function outPutResult(array) {
    resultField.innerHTML = "<ul class='result__list'></ul>";
    let list = "";
    let i = 1;
    array.forEach((value)=> {
        list += "<li>"+ i +")    "+ value + "</li>";
        i++;
    });
    document.querySelector(".result__list").innerHTML = list;
}

inputField.addEventListener("keydown", (e)=> {
    if (e.keyCode === 13) {
        startCalculate();
    }
})