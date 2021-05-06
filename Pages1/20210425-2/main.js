$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    var topicCount = topic.length;
    // 毫秒
    var millisecsPerDay = 24*60*60*1000;
    for(var x=0;x<topicCount;x++){
        
        
    if((x+1)%2==0){
        $("#courseTable").append("<tr>");
        // --------------------------
        // 方法一
        // $("#courseTable").append("<td>"+(x+1)+"</td>");
        // 方法二
        $("#courseTable").append(`<td class="odd">${x+1}</td>`);
        // newDate現在 startdate取第一天 toLocaleDateString顯示年月日  toLocaleString 多顯示上午下午跟幾點幾分
        $("#courseTable").append(`<td class="odd">${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
        // topic裡面的[]內容
        $("#courseTable").append(`<td class="odd">${topic[x]}</td>`);

        // --------------------------
        $("#courseTable").append("</tr>");
    }else{
        $("#courseTable").append("<tr>");
        
        $("#courseTable").append(`<td>${x+1}</td>`);
        $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
        $("#courseTable").append(`<td>${topic[x]}</td>`);

        $("#courseTable").append("</tr>");

    }
        

        
    }

});

