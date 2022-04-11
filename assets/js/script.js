var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text(todayDate);


$(function() {

    //when save button is clicked, find value of text area and time block and save in localStorage
    $(".saveBtn").on("click", function() {
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, task);
        console.log(task);
        console.log(time);
    })

    var hourCheck = function() {
        var currentHour = moment().hour();
        console.log(currentHour);

        $(".time-block").each(function () {
            var hourBlock = parseInt($(this).attr("id"));
            console.log(hourBlock);
            if (hourBlock < currentHour) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");

            } else if (hourBlock === currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");

            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });

        
    };
    
    hourCheck();
});
