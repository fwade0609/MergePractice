let thisH1 = document.getElementsByTagName("h1")[0];
let thisP = document.getElementsByTagName("p")[0];
let thisDiv = document.getElementsByTagName("div")[0];
// 定義方法
function mouseIn(){
    thisH1.innerHTML = "小夫我要進來了";
}
function mouseOut(){
    thisH1.innerHTML = "你出去了";
    thisP.innerHTML = "";
}
// 移動時的XY軸；e為變數名稱
function mouseMove(e){
    thisP.innerHTML = "你在裡面走來走去。位置:"+e.clientX+","+e.clientY;
}
// 執行方法，thisDiv.addEventListener("方法",對應呼叫的函數)
thisDiv.addEventListener("mouseover",mouseIn);
thisDiv.addEventListener("mouseout",mouseOut);
thisDiv.addEventListener("mousemove",mouseMove);

