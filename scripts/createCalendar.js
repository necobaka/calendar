const date = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var monthAndYear = document.getElementById("monthAndYear");
let currentMonth = date.getMonth();
var currentYear = date.getFullYear();
monthAndYear.textContent = months[currentMonth] + " " + currentYear;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const daysPerWeek = days.length;
var firstDayOfWeek = 1;

var table = document.getElementById("calendar");
var header = table.createTHead();
var headerRow = header.insertRow(0);

for (let i = 0; i < daysPerWeek; ++i) {
  var cell = headerRow.insertCell(i);
  cell.innerHTML =
    days[
      i + firstDayOfWeek - (i + firstDayOfWeek >= daysPerWeek ? daysPerWeek : 0)
    ];
}

firstDayOfMonth =
  new Date(currentYear, currentMonth, 1).getDay() - firstDayOfWeek;
if (firstDayOfMonth < 0) firstDayOfMonth += daysPerWeek;

lastDayOfMonth =
  new Date(
    currentMonth == months.length - 1 ? currentYear + 1 : currentYear,
    currentMonth + 1 < months.length ? currentMonth + 1 : 0,
    0
  ).getDay() - firstDayOfWeek;

if (lastDayOfMonth < 0) lastDayOfMonth += daysPerWeek;

weeksCount = 0;
var daysInMonth = new Date(
  currentYear,
  currentMonth + 1 < months.length ? currentMonth + 1 : currentMonth,
  0
).getDate();

daysInFullWeeks = daysInMonth;
var weeksCount = 0;
if (firstDayOfMonth != 0) {
  d = daysInMonth - (daysPerWeek - firstDayOfMonth);
  weeksCount++;
}

if (lastDayOfMonth != daysPerWeek - 1) {
  d -= lastDayOfMonth + 1;
  weeksCount++;
}

weeksCount += daysInFullWeeks / daysPerWeek;

currentDate = 1;
for (let i = 0; i < weeksCount; ++i) {
  var row = table.insertRow(i);
  for (let j = 0; j < daysPerWeek; ++j) {
    cell = row.insertCell(j);
    if (
      (i == 0 && j < firstDayOfMonth) ||
      (i == weeksCount - 1 && j > lastDayOfMonth)
    )
      continue;
    cell.innerHTML = currentDate;
    ++currentDate;
  }
}
