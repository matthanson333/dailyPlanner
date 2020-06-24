$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    window.localStorage.setItem(time, value);
  });

  function hourUpdate() {
    var currentHour = moment().hour();
    console.log(currentHour);
    $(".time-block").each(function () {
      console.log($(this).attr("id").split("-")[1]);
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        console.log("PAS");
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        console.log("prsent");
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdate();
  //INITIAL FUNCTIONS
  console.log(window.localStorage.getItem("hour-9"));
  $("#hour-9 .description").val(window.localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(window.localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(window.localStorage.getItem("hour-11"));

  $("#hour-12 .description").val(window.localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(window.localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(window.localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(window.localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(window.localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(window.localStorage.getItem("hour-17"));
});
//initial functions
// get any items in localstorage that exists (.getItem)
//if exists render to browser

// on click for save btn
// - grab value (desciption)
// - grab id of timeblock (time)
//  - save to localstorage
// example = .setItem(time, value(desciptiom))

//hour updater
// checks to see if time block has passsed , coming up in the future or is the prsent time
// moment.js moment().hours();
//.addClass
//.removeClass
