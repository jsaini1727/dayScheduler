

var currentDayjsDay = document.querySelector("#currentDay").textContent = dayjs().format('MM-DD-YYYY');
var currentDayjsHour = document.querySelector("#currentTime").textContent = dayjs().format('hh A');

// The following function interacts with every 'time-block' element of the HTML and indicates the relation of the time block relative to current time.

$(function () {
  var timeBlocks = $('.time-block');
  timeBlocks.each(function () {
    var timeBlock = $(this);
    var blockHour = timeBlock.attr('id').split('-')[1];
    var hour = parseInt(blockHour);
    if (dayjs().hour() < hour) {
      timeBlock.addClass('future');
    } else if (dayjs().hour() > hour) {
      timeBlock.addClass('past');
    } else {
      timeBlock.addClass('present');
    }
  });



  var btns =$('.time-block button');

  function storeInfo(){
    var btn =$(this);
  
    var textarea=btn.prev();
    var parentDiv= btn.parent();
    var id = parentDiv.attr('id');
    var textValue=textarea.val();
    var toDoList=localStorage.getItem('toDoTask');
    var toDoList=JSON.parse(localStorage.getItem('toDoTask')) || [];
    toDoList.push ({
      hour: id,
      storeList: textValue
    })
localStorage.setItem('toDoTask', JSON.stringify(toDoTask));

  }
  btns.click(storeInfo);
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

})
// saveBtn.addEventListener('click', saveInfo)

