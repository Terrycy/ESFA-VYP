let calendarObj = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
};
let leapYear = function (yearVal) {
  return yearVal % 4 === 0 && yearVal % 100 !== 0 || yearVal % 400 === 0;
};

// these two basically do the exact same thing but one validation for start date and one for end date
// when I have time or for the next person who is unfortunate enough to update this code
// extract out validation to functions and call them on change within the parent form rather than the fieldset
let todaysDate = new Date();
let pastDate = new Date();
pastDate.setDate(pastDate.getDate() - (365 * 3)-1);
const $datePicker = $('.date-picker');

$('#start-date').on('change', function () {
  const $startDay = $(this).find('.govuk-date-input__day'), $startMonth = $(this).find('.govuk-date-input__month'),
    $startYear = $(this).find('.govuk-date-input__year');
  let dayVal = $startDay.val(), monthVal = $startMonth.val(), yearVal = $startYear.val(),
    isLeapYear = leapYear(yearVal), monthRange = monthVal, startDate = new Date(yearVal, monthVal - 1, dayVal);
  if (monthVal > 0 && monthVal < 13) {
      monthRange = (isLeapYear && monthVal == 2) ? 29 : calendarObj[parseInt(monthVal)];
  }

  $startDay.toggleClass('govuk-input--error', !(dayVal > 0 && dayVal <= monthRange) || startDate <= pastDate || startDate > todaysDate);
  $startMonth.toggleClass('govuk-input--error', !(monthVal > 0 && monthVal < 13) || startDate <= pastDate || startDate > todaysDate);
  $startYear.toggleClass('govuk-input--error', startDate <= pastDate || startDate > todaysDate);

  $datePicker.toggleClass("govuk-form-group--error", startDate <= pastDate || startDate > todaysDate);
  $datePicker.toggleClass('three-year-warning', startDate <= pastDate);
  $datePicker.toggleClass('future-date-warning', startDate > todaysDate);

});

$('#end-date').on('change', function () {
  const $endDay = $(this).find('.govuk-date-input__day'), $endMonth = $(this).find('.govuk-date-input__month'),
    $endYear = $(this).find('.govuk-date-input__year');
  let dayVal = $endDay.val(), monthVal = $endMonth.val(), yearVal = $endYear.val(),
    isLeapYear = leapYear(yearVal), monthRange = monthVal, endDate = new Date(yearVal, monthVal - 1, dayVal);

  if (monthVal > 0 && monthVal < 13) {
      monthRange = (isLeapYear && monthVal == 2) ? 29 : calendarObj[parseInt(monthVal)];
  }

  $endDay.toggleClass('govuk-input--error', !(dayVal > 0 && dayVal <= monthRange) || endDate > todaysDate|| endDate <= pastDate);
  $endMonth.toggleClass('govuk-input--error', !(monthVal > 0 && monthVal < 13) || endDate > todaysDate|| endDate <= pastDate);
  $endYear.toggleClass('govuk-input--error', endDate > todaysDate || endDate <= pastDate);


  $datePicker.toggleClass("govuk-form-group--error", endDate <= pastDate || endDate > todaysDate);
  $datePicker.toggleClass('three-year-warning', endDate <= pastDate);
  $datePicker.toggleClass('future-date-warning', endDate > todaysDate);

});
