let thisH1 = document.getElementsByTagName("h1")[0];

// setInterval:不斷呼叫(showTime,1000毫秒=1秒)
let timer = setInterval(showTime,1000);
function showTime(){
    // 呼叫時間
    let currentTime = new Date();
    // 顯示出來
    thisH1.innerHTML = currentTime.toLocaleTimeString();

}