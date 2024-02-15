const timeDiv = document.getElementById('time');
const dateDiv = document.getElementById('date');

// Current Time
function updateTime() {
  const currentTime = new Date();
  let hour = currentTime.getHours();
  let meridiem; // AM or PM
  if (hour > 12) {
    hour -= 12;
    meridiem = 'PM';
  } else if (hour === 0) {
    hour = 12;
    meridiem = 'AM';
  } else {
    meridiem = 'AM';
  }

  const rawMinutes = currentTime.getMinutes();
  let minutes;
  if (rawMinutes < 10) {
    minutes = '0' + rawMinutes.toString();
  } else {
    minutes = rawMinutes;
  }

  const rawSeconds = currentTime.getSeconds();
  let seconds;
  if (rawSeconds < 10) {
    seconds = '0' + rawSeconds.toString();
  } else {
    seconds = rawSeconds;
  }

  const time = `${hour}:${minutes}:${seconds} ${meridiem}`;
  timeDiv.innerText = time;
}

setInterval(() => {
  updateTime();
}, 0);

// Current Day
const currentDay = new Date();
const date = currentDay.getDate();
const month = currentDay.getMonth() + 1; // add 1 because index starts at 0
const year = currentDay.getFullYear();

const dayOfWeek = currentDay.getDay();
let day;
switch (dayOfWeek) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break
  case 6:
    day = 'Saturday';
    break;
}

const dateDisplay = `Today is ${day}, ${date}/${month}/${year}`;
dateDiv.innerText = dateDisplay;

// Search Function
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

function handleSearch() {
  const rawInput = searchInput.value;
  const cleanInput = rawInput.replaceAll(' ', '+');
  window.location.href = `https://google.com/search?q=${cleanInput}`;
}

searchBtn.addEventListener('click', () => {
  handleSearch();
})

//console.log(navigator.userAgent);
