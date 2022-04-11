// Get current date from Moment.js as a string
var todayDate = moment().format('dddd, MMM Do YYYY');
//display current date on HTML page
$("#currentDay").text(todayDate);

//updates time on page every second
setInterval(function() {
    $("#currentTime").text(moment().format('hh : mm'));
}, 1000);



$(function() {

    //when save button is clicked, find value of text area and time block and save in localStorage
    $(".saveBtn").on("click", function() {
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, task);
        console.log(task);
        console.log(time);
    })


    // checks current hour and changes time blocks color based on "past, present, future" basis
    var hourCheck = function() {
        // gets current hour from Moment,js as a string
        var currentHour = moment().hour();
        
        //for each time block, compare hour block with current hour
        $(".time-block").each(function () {
            var hourBlock = parseInt($(this).attr("id"));
            
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
    
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    


    hourCheck();
})
