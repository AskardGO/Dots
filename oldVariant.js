// const inputField = document.querySelector(".input__box-field");
// const resultField = document.querySelector(".result");
// const buttonArrow = document.querySelector(".arrow");
// let variants = [];
//
// buttonArrow.onclick = function startCalculate() {
//     let inputVal = inputField.value;
//     let resultVal = resultField.value;
//     let str = null;
//     variants = [];
//
//     if (inputVal !== "") {
//
//         variants.push(allDots(inputVal));
//
//         for(let i = 0; i < variants.length; i++){
//             if(dotFounder(variants[i]).length === 0){
//                 console.log("break");
//                 break;
//             }
//             variantPusher(variants[i]);
//         }
//         let result = new Set(variants);
//         console.log(result);
//
//
//         outPutResult(result);
//
//
//
//     } else {
//         let arrowBlock = document.querySelector(".arrow-block");
//         arrowBlock.style.zIndex = "1";
//         inputField.value = "Input is empty";
//         setTimeout(() => {
//             inputField.value = ""; arrowBlock.style.zIndex = "0";
//         }, 2000);
//     }
// }
//
//
// ///Добавление всех возможных точек
// function allDots(str) {
//     str = str.replace(/\s/g, '');
//     str = str.replace(/[0-9]/g, '');
//     let allDot = "";
//     for (let i = 0; i < str.length; i++) {
//         allDot += str[i];
//         if (i !== (str.length - 1)) {allDot += "."}
//     } return allDot }
//
// ///Поиск индексов всех точек в варианте
// function dotFounder(str) {
//     let dotIndexes = [];
//     let match = /\./.exec(str);
//     let re = /\./g
//     while ((match = re.exec(str)) != null) {
//         dotIndexes.push(match.index);
//     }
//     return dotIndexes;
// }
//
// ///Удаление точки по индексу
// function dotDeleter(str, number) {
//
//     if(str[number] === "."){
//         let strMas = str.split("");
//         strMas.splice(number, 1);
//         str = strMas.join("");
//         return str;
//     } else {
//         return str;
//     }
// }
//
//
// function variantPusher(str) {
//     let variant = str;
//     let indexes = dotFounder(str);
//
//     for(let i = 0; i < indexes.length; i++) {
//         variants.push(dotDeleter(str, indexes[i]));
//     }
// }
//
//
// function outPutResult(array) {
//     resultField.innerHTML = "<ul class='result__list'></ul>";
//     let list = "";
//     let i = 1;
//     array.forEach((value)=> {
//         list += "<li>"+ i +")    "+ value + "</li>";
//         i++;
//     });
//     document.querySelector(".result__list").innerHTML = list;
// }