var currentHour = dayjs().hour()

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
 

  // TODO: Add code to apply the past, present, or future class to each time
  if (currentHour < 9) {
    $('#hour-9').addClass("future");
    $('#hour-9').removeClass("present");
    $('#hour-9').removeClass("past");
  } else if (currentHour === 9) {
    $('#hour-9').addClass("present");
    $('#hour-9').removeClass("past");
    $('#hour-9').removeClass("future");
  } else if (currentHour > 9) {
    $('#hour-9').addClass("past");
    $('#hour-9').removeClass("present");
    $('#hour-9').removeClass("future");
  }

  if (currentHour < 10) {
    $('#hour-10').addClass("future");
    $('#hour-10').removeClass("present");
    $('#hour-10').removeClass("past");
  } else if (currentHour === 10) {
    $('#hour-10').addClass("present");
    $('#hour-10').removeClass("past");
    $('#hour-10').removeClass("future");
  } else if (currentHour > 10) {
    $('#hour-10').addClass("past");
    $('#hour-10').removeClass("present");
    $('#hour-10').removeClass("future");
  }

  if (currentHour < 11) {
    $('#hour-11').addClass("future");
    $('#hour-11').removeClass("present");
    $('#hour-11').removeClass("past");
  } else if (currentHour === 11) {
    $('#hour-11').addClass("present");
    $('#hour-11').removeClass("past");
    $('#hour-11').removeClass("future");
  } else if (currentHour > 11) {
    $('#hour-11').addClass("past");
    $('#hour-11').removeClass("present");
    $('#hour-11').removeClass("future");
  }

  if (currentHour < 12) {
    $('#hour-12').addClass("future");
    $('#hour-12').removeClass("present");
    $('#hour-12').removeClass("past");
  } else if (currentHour === 12) {
    $('#hour-12').addClass("present");
    $('#hour-12').removeClass("past");
    $('#hour-12').removeClass("future");
  } else if (currentHour > 12) {
    $('#hour-12').addClass("past");
    $('#hour-12').removeClass("present");
    $('#hour-12').removeClass("future");
  }

  if (currentHour < 13) {
    $('#hour-13').addClass("future");
    $('#hour-13').removeClass("present");
    $('#hour-13').removeClass("past");
  } else if (currentHour === 13) {
    $('#hour-13').addClass("present");
    $('#hour-13').removeClass("past");
    $('#hour-13').removeClass("future");
  } else if (currentHour > 13) {
    $('#hour-13').addClass("past");
    $('#hour-13').removeClass("present");
    $('#hour-13').removeClass("future");
  }

  if (currentHour < 14) {
    $('#hour-14').addClass("future");
    $('#hour-14').removeClass("present");
    $('#hour-14').removeClass("past");
  } else if (currentHour === 14) {
    $('#hour-14').addClass("present");
    $('#hour-14').removeClass("past");
    $('#hour-14').removeClass("future");
  } else if (currentHour >14) {
    $('#hour-14').addClass("past");
    $('#hour-14').removeClass("present");
    $('#hour-14').removeClass("future");
  }

  if (currentHour < 15) {
    $('#hour-15').addClass("future");
    $('#hour-15').removeClass("present");
    $('#hour-15').removeClass("past");
  } else if (currentHour === 15) {
    $('#hour-15').addClass("present");
    $('#hour-15').removeClass("past");
    $('#hour-15').removeClass("future");
  } else if (currentHour >15) {
    $('#hour-15').addClass("past");
    $('#hour-15').removeClass("present");
    $('#hour-15').removeClass("future");
  }

  if (currentHour < 16) {
    $('#hour-16').addClass("future");
    $('#hour-16').removeClass("present");
    $('#hour-16').removeClass("past");
  } else if (currentHour === 16) {
    $('#hour-16').addClass("present");
    $('#hour-16').removeClass("past");
    $('#hour-16').removeClass("future");
  } else if (currentHour >16) {
    $('#hour-16').addClass("past");
    $('#hour-16').removeClass("present");
    $('#hour-16').removeClass("future");
  }

  if (currentHour < 17) {
    $('#hour-17').addClass("future");
    $('#hour-17').removeClass("present");
    $('#hour-17').removeClass("past");
  } else if (currentHour === 17) {
    $('#hour-17').addClass("present");
    $('#hour-17').removeClass("past");
    $('#hour-17').removeClass("future");
  } else if (currentHour > 17) {
    $('#hour-17').addClass("past");
    $('#hour-17').removeClass("present");
    $('#hour-17').removeClass("future");
  }
 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM DD'));


 
  
 

// This is the the code that sets the input value of the 9am slot
  let nineTextAreaValue = document.getElementById("nine-value");
  let buttonForNine = document.querySelector(".btn-for-nine");

  let nineOclockLocalValue = localStorage.getItem("nineOclockInput");
  nineTextAreaValue.value = nineOclockLocalValue;

  buttonForNine.addEventListener("click", savenineTextArea);
  
function savenineTextArea() {
    let nineOclockInput = nineTextAreaValue.value;
    localStorage.setItem("nineOclockInput", nineOclockInput);
  }
  // This is the the code that sets the input value of the 9am slot



  // This is the the code that sets the input value of the 10am slot
  let tenTextAreaValue = document.getElementById("ten-value");
  let buttonForTen = document.querySelector(".btn-for-ten");

  let tenOclockLocalValue = localStorage.getItem("tenOclockInput");
  tenTextAreaValue.value = tenOclockLocalValue;

  buttonForTen.addEventListener("click", saveTenTextArea);
  
function saveTenTextArea() {
    let tenOclockInput = tenTextAreaValue.value;
    localStorage.setItem("tenOclockInput", tenOclockInput);
  }
  // This is the the code that sets the input value of the 10am slot



   // This is the the code that sets the input value of the 11am slot 
  let elevenTextAreaValue = document.getElementById("eleven-value");
  let buttonForEleven = document.querySelector(".btn-for-eleven");

  let elevenOclockLocalValue = localStorage.getItem("elevenOclockInput");
  elevenTextAreaValue.value = elevenOclockLocalValue;

  buttonForEleven.addEventListener("click", saveElevenTextArea);
  
function saveElevenTextArea() {
    let elevenOclockInput = elevenTextAreaValue.value;
    localStorage.setItem("elevenOclockInput", elevenOclockInput);
  }
  // This is the the code that sets the input value of the 11am slot


  // This is the the code that sets the input value of the 12 slot
  let twelveTextAreaValue = document.getElementById("twelve-value");
  let buttonForTwelve = document.querySelector(".btn-for-twelve");

  let twelveOclockLocalValue = localStorage.getItem("twelveOclockInput");
  twelveTextAreaValue.value = twelveOclockLocalValue;

  buttonForTwelve.addEventListener("click", saveTwelveTextArea);
  
function saveTwelveTextArea() {
    let twelveOclockInput = twelveTextAreaValue.value;
    localStorage.setItem("twelveOclockInput", twelveOclockInput);
  }
   // This is the the code that sets the input value of the 12 slot



  // This is the the code that sets the input value of the 1pm slot
  let thirteenTextAreaValue = document.getElementById("thirteen-value");
  let buttonForThirteen = document.querySelector(".btn-for-thirteen");

  let thirteenOclockLocalValue = localStorage.getItem("thirteenOclockInput");
  thirteenTextAreaValue.value = thirteenOclockLocalValue;

  buttonForThirteen.addEventListener("click", saveThirteenTextArea);
  
function saveThirteenTextArea() {
    let thirteenOclockInput = thirteenTextAreaValue.value;
    localStorage.setItem("thirteenOclockInput", thirteenOclockInput);
  }
   // This is the the code that sets the input value of the 1pm slot


  // This is the the code that sets the input value of the 2pm slot
  let fourteenTextAreaValue = document.getElementById("fourteen-value");
  let buttonForFourteen = document.querySelector(".btn-for-fourteen");

  let fourteenOclockLocalValue = localStorage.getItem("fourteenOclockInput");
  fourteenTextAreaValue.value = fourteenOclockLocalValue;

  buttonForFourteen.addEventListener("click", saveFourteenTextArea);
  
function saveFourteenTextArea() {
    let fourteenOclockInput = fourteenTextAreaValue.value;
    localStorage.setItem("fourteenOclockInput", fourteenOclockInput);
  }
   // This is the the code that sets the input value of the 2pm slot



  // This is the the code that sets the input value of the 3pm slot
  let fifteenTextAreaValue = document.getElementById("fifteen-value");
  let buttonForFifteen = document.querySelector(".btn-for-fifteen");

  let fifteenOclockLocalValue = localStorage.getItem("fifteenOclockInput");
  fifteenTextAreaValue.value = fifteenOclockLocalValue;

  buttonForFifteen.addEventListener("click", saveFifteenTextArea);
  
function saveFifteenTextArea() {
    let fifteenOclockInput = fifteenTextAreaValue.value;
    localStorage.setItem("fifteenOclockInput", fifteenOclockInput);
  }
   // This is the the code that sets the input value of the 3pm slot





});



// var currentHour = dayjs().hour()
//  let nineTextAreaValue = document.querySelector(".nine-value").value;
// let buttonForNine = document.querySelector(".btn-for-nine");

