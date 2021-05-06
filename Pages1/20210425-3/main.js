$(function(){
    var currentQuiz = null;
    $("#startButton").on("click",function(){
        if(currentQuiz==null){
            // 設定從0開始
            currentQuiz=0;
            // 顯示題目
            $("#question").text(questions[0].question);
            // 將項目區清空
            $("#options").empty();
            // 將逐個加入
            // ex: element=["是的",2] index=0 array= ["是的",2],["不是",3],["不知道",4]
            questions[0].answers.forEach(function(element, index, array) {
                // element[0]="是的","不是","不知道"
                $("#options").append(`<input name='options' type='radio' 
                value='${index}'><label>${element[0]}</label><br><br>`);
            
                
            });
            // 換成Next
            $("#startButton").attr("value","Next");
        }else{
            // 已經開始作答從這邊繼續
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    // 是否走到最後要產生的結果(A~D)
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        // 通往最終結果
                        var finalResult = questions[currentQuiz].answers[i][1];
                        // 顯示最終結果
                        $("#question").text(finalAnswers[finalResult][0]);
                        // 將選項區域清空
                        $("#options").empty();
                        // 顯示最終結果內容
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz = null;
                        $("#startButton").attr("value","重新開始");
                    }else{
                        // 指定下一提，原始資料從1開始，所要要-1
                        currentQuiz = questions[currentQuiz].answers[i][1]-1;
                        // 顯示新的題目
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element,index,array){
                            $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);

                        });

                    }
                    return false;//跳離迴圈方式
                }
            });
        }
    });
});