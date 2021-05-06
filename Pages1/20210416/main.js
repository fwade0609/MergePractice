// function countLetters(){
//     document.onclick = function(e){
//         alert(e.target.innerHTML + "有" + e.target.innerHTML.length + "個字元");
//     }
// }
// window.onload = countLetters();


/*
// window.onload:保險機制;funtion:沒有名子的函數
    // function裡面呼叫e
window.onload = function(){
    // 當有人在這個文件點即時觸發
    document.onclick = function(e){
        console.log(e);
        // target:滑鼠點擊;innerHTML:索取內容
        alert(e.target.innerHTML + "有" + e.target.innerHTML.length + "個字元");
    }
};
*/

/*
let confirmAnswer = confirm("你想要取消這個服務嗎?")
// console.log 顯示程式碼，常用來dbug
console.log(confirmAnswer);
// 把h1內容替換掉
let thisH1 = document.getElementsByTagName("h1")[1];
if(confirmAnswer){
    thisH1.innerHTML = "服務已取消";
}else{
    thisH1.innerHTML = "繼續使用本服務";
}
*/

/*
let promptAnswer = prompt("小明家有三個小孩，他兩個哥哥叫張一、張二，第三個小孩叫什麼?");
let thisH1 = document.getElementById("Response");

switch(promptAnswer){
    case"張三":
        thisH1.innerHTML = "那小明是誰?";
        break;
    case"小明":
        thisH1.innerHTML = "聰明";
        break;
    default:
        thisH1.innerHTML = "你想多了"
}
*/


function showAlert(){
    thisH1.innerHTML = "Hello!";
}
// 記得在字串後面加陣列[];此處為全域;document:可直接連接文件
let thisButton = document.getElementsByTagName("button")[0]; //button標籤沒有大小寫之分
let thisH1 = document.getElementsByTagName("h1")[0];


thisButton.addEventListener("click",showAlert);
// showAlert如果+()會直接顯示結果
//@寫法1
// thisButton.onclick = showAlert;
//@寫法2
// thisButton.onclick = function(){ //沒有名子的function不會馬上執行，等到thisbutton執行才會往下
//     showAlert();
// }


//for迴圈
// thisButton.onclick = function(){
// 
//     for(let i=0;i<10;i++){
//         if(i==3){
//             continue;
//         }
//         console.log(i);
//     }
// 

//     let person = {
//         firstName:"Ryan",
//         lastName:"Chung",
//         height:178
//     };
//     
//     for(x in window){
//         console.log(x + ":" + window[x]);
//     }
//     
// };
