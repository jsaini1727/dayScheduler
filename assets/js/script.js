

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

  // The following function saves the user text in the time slot and saves it to the local storage.

  var btns = $('.time-block button');

  function storeInfo() {
    var btn = $(this);

    var textarea = btn.prev();
    var parentDiv = btn.parent();
    var id = parentDiv.attr('id');
    var textValue = textarea.val();
    var taskList = {
      hour: id,
      storeList: textValue
    };
    var toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];
    toDoList.push({
      hour: id,
      storeList: textValue
    })
    localStorage.setItem('toDoList', JSON.stringify(toDoList));

  }
  storeInfo()
  btns.click(storeInfo);

});

// The following function populates the text area with the values stored in the local area by the user.
function populate() {
  var storedData = JSON.parse(localStorage.getItem('toDoList')) || [];
  storedData.forEach(function (item) {
    var hour = item.hour;
    var storeList = item.storeList;
    $('#' + hour).find('textarea').val(storeList);
  });

}
populate();