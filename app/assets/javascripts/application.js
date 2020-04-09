/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  $('.govuk-back-link').on('click', function (e) {
    e.preventDefault();
    window.history.back();
  });

})
function switchtable() {
  var transactiontable1 = document.getElementById("transactiontable1");
  var transactiontable2 = document.getElementById("transactiontable2");
  var transactiontable3 = document.getElementById("transactiontable3");

  if (transactiontable1.classList.contains('govuk-visually-hidden')) {
    transactiontable1.classList.remove("govuk-visually-hidden");
    transactiontable2.classList.add("govuk-visually-hidden");
    transactiontable3.classList.add("govuk-visually-hidden");
  }
  else {
    transactiontable1.classList.add("govuk-visually-hidden");
  }

  if (transactiontable2.classList.contains('govuk-visually-hidden')||(transactiontable3.classList.contains('govuk-visually-hidden')))
  {
    transactiontable1.classList.remove("govuk-visually-hidden");
  }
  
}
function switchtable2() {
  var transactiontable1 = document.getElementById("transactiontable1");
  var transactiontable2 = document.getElementById("transactiontable2");
  var transactiontable3 = document.getElementById("transactiontable3");

  if (transactiontable2.classList.contains('govuk-visually-hidden')) {
    transactiontable2.classList.remove("govuk-visually-hidden");
    transactiontable1.classList.add("govuk-visually-hidden");
    transactiontable3.classList.add("govuk-visually-hidden");
  }
  else {
    transactiontable2.classList.add("govuk-visually-hidden");
  }
  if (transactiontable1.classList.contains('govuk-visually-hidden')||(transactiontable3.classList.contains('govuk-visually-hidden')))
  {
    transactiontable2.classList.remove("govuk-visually-hidden");
  }
  
}
function switchtable3() {
  var transactiontable1 = document.getElementById("transactiontable1");
  var transactiontable2 = document.getElementById("transactiontable2");
  var transactiontable3 = document.getElementById("transactiontable3");

  if (transactiontable3.classList.contains('govuk-visually-hidden')) {
    transactiontable3.classList.remove("govuk-visually-hidden");
    transactiontable2.classList.add("govuk-visually-hidden");
    transactiontable1.classList.add("govuk-visually-hidden");
  }
  else {
    transactiontable3.classList.add("govuk-visually-hidden");
  }

  if (transactiontable1.classList.contains('govuk-visually-hidden')||(transactiontable2.classList.contains('govuk-visually-hidden')))
  {
    transactiontable3.classList.remove("govuk-visually-hidden");
  }
  
}