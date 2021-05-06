// 呼叫h1
let thisH1 = document.getElementsByTagName("h1")[0];
// showAlert函數被實作，
thisH1.addEventListener("click",showAlert);

function showAlert(){
    alert(thisH1.innerHTML.split(" ")[1])
}