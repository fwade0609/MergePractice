var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];
// 建立時間
var startDate = new Date();

function setMonthAndDay(startMonth, starDay){
    // 把社長說的那個日期變成JavaScript需要的日期時間格式
    startDate.setMonth(startMonth-1, starDay);//Month(11,0)
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(date);