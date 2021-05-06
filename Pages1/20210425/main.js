// $:找到
// 建立一個空function
$(function(){
    // 找到input按鈕，用click的方法
    $("input").on("click",function(){
        // -----------------------------
        // 最終顯示Hi
        // alert("Hi");
        // 找到第一(first)或最後(last)或指定.eq(?)
        // -----------------------------
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        // 找到img元件
        // 設定img元件src屬性 -> 對應元件的title值        
        // $("img").attr("src","https://italentwebimg.azurewebsites.net/seina/goshopping8-1-520001/pica-l/34666916-810e-410f-a91a-478beb6b26ae.png");
        // -----------------------------
        // attr=attribute屬性
        // $抓img 設定src屬性,設定value
        $("img").attr("src",$("li").eq(randomChildNumber).attr("title"));
        
    });
});