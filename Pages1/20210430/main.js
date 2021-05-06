// 全域宣告變數
let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
// mapArray - 決定地圖中每個格子的元素
// ctx - HTML5 Canvas用
// currentImgMain - 決定主角所在座標
// imgMountain, imgMain, imgEnemg - 障礙物, 主角, 敵人的圖片物件
const gridLength = 200;
// 網頁載入完成後初始化動作
// jQuery語法$(...
$(function(){
    mapArray = [ //0-可走,1-障礙,2-終點,3-敵人
        [0,1,1],
        [0,0,0],
        [3,1,2]
    ];
    ctx = $("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    // imgMain.src = "images/spriteSheet.png";
    imgMain.src = "images/T1.png";

    currentImgMain = {
        "x":0,
        "y":0
    };
    // 當imgMain載進來之後執行
    imgMain.onload = function(){
        //從原本的圖的(0,0)剪下寬80高130的區域，貼至目前只定位只，並且縮放成指定寬度與高度
        ctx.drawImage(imgMain,0,0,80,100,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
        // ctx.drawImage(imgMain,0,0);
        // ctx.drawImage(imgMain,0,0,300,300);
    }
    imgMountain = new Image();
    imgMountain.src = "images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "images/Enemy.png";
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for(var x in mapArray){
                for(var y in mapArray){
                    // 對應的位址
                    if(mapArray[x][y]==1){
                        ctx.drawImage(imgMountain,32,65,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
                    }else if(mapArray[x][y]==3){
                        ctx.drawImage(imgEnemy,7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
                    }
                }
            }
        }
    }

   


});
// 處裡使用者按下按鍵
$(document).on("keydown",function(event){
    let targetImg, targetBlock, cutImagePositionX;
    // cutImagePositionX - 決定主角臉朝向哪個方向
    targetImg = { //主角的目標座標
        "x":-1,
        "y":-1
    };
    targetBlock = { //主角的目標(對應2維陣列)
        "x":-1,
        "y":-1
    }
    event.preventDefault();
    // 避免鍵盤預設行為發生，如捲動/放大/換頁...
    // 判斷使用者按下什麼並推算目標座標
    // console.log(event);
    switch(event.code){
        case"ArrowLeft":
            targetImg.x = currentImgMain.x - gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 87;//臉朝左
            break;
        case"ArrowUp":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y - gridLength;
            cutImagePositionX = 174;//臉朝上
            break;
        case"ArrowRight":
            targetImg.x = currentImgMain.x + gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 261;//臉朝右
            break;
        
        case"ArrowDown":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y+ gridLength;
            cutImagePositionX = 0;//臉朝下
            break;
        default://其他按鍵不處理
            return;
    }
    if(targetImg.x<=400 && targetImg.x>=0 && targetImg.y<=400 && targetImg.y>=0){
        targetBlock.x = targetImg.y / gridLength;
        targetBlock.y = targetImg.x / gridLength;
    }else{
        targetBlock.x = -1;
        targetBlock.y = -1;
    }
    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);

    if(targetBlock.x!=-1 && targetBlock.y!=-1){
        switch(mapArray[targetBlock.x][targetBlock.y]){
            case 0: //一般道路(可移動)
                $("#talkBox").text("");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 1: //有障礙物(不可移動)
                $("#talkBox").text("有山");
                break;
            case 2: //終點(可移動)
                $("#talkBox").text("抵達終點");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 3: //敵人(不可移動)
                $("#talkBox").text("哈囉");
                break;
        }
    }else{
        $("#talkBox").text("邊界");
    }
    //重新繪製主角
    ctx.drawImage(imgMain, cutImagePositionX,0,80,100,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
});