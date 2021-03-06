$(function () {
  let startDate, endDate;
  let $multiSelect = $('.multipleSelect');
  let filtersObj = {};
  let $filterTotal = $('#filterTotal');
  let $container = $('#transaction-table-v2').isotope({
    itemSelector: '.tb-data-single',
    layoutMode: 'vertical',
    transitionDuration: 0,
  });
  $('#transaction-table-v2').attr('style', '');
  $('.tb-data-single').css({'position': '', 'left':'', 'top':''});
  $multiSelect.fastselect();
  
  updateTotals();

  function updateFilters() {
    let filterValue = '';
    function escapeRegExp(string) {
      return string.replace(/[*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    // set filter for Isotope

    $container.isotope({
        filter: function () {
          
          let isMatched = true;
          let $this = $(this);

          let dateResults = function () {
            if (startDate !== undefined && endDate !== undefined) {
              // _this_ is the item element. Get text of element's .number
              let dateVal = new Date($this.data('transactionDate'));
              // return true to show, false to hide
              return dateVal >= startDate && dateVal <= endDate;
            } else {
              return true;
            }
          };

          // loop through types of filter
          for (let prop in filtersObj) {

            // check if any filters selected for the type
            if (filtersObj[prop].length > 0) {

              // apply filters
              let filterValues = filtersObj[prop];
              isMatched = isMatched && filterValues.includes($this.find('.' + prop).text().trim());
            }

            // break if not matched
            if (!isMatched) {
              break;
            }
          }

          return isMatched && dateResults($(this));
        }
      }
    );

    updateTotals();
    $('#transaction-table-v2').attr('style', '');
    $('.tb-data-single').css({'position': '', 'left':'', 'top':''});

  }

  function updateTotals(){
    if($filterTotal.length){
      let totalValue = 0;
      let itemElems = $container.isotope('getFilteredItemElements');
      $(itemElems).each(function(){
        let elId = $(this)[0];
        let $amount = $(elId).children('td.transactionAmount').text()
        let transactionAmount = Number($amount.replace(/[^0-9.-]+/g,""));
        totalValue = parseFloat(transactionAmount) + totalValue;
      });
      // Create our number formatter.
      var formatter = new Intl.NumberFormat('en-UK', {
        style: 'currency',
        currency: 'GBP',
      });

      totalValue = formatter.format(totalValue);
      $filterTotal.text(`${totalValue}`)
    }
  }

  function convertDate(dateString) {
    return new Date(dateString);
  }

  $('#filters').on('submit', function(e){
    e.preventDefault();
    const $this = $(this);
    let formData = $this.serializeArray();
    let formDateObject = {};
    $(formData).each(function (index, obj) {
      formDateObject[obj.name] = obj.value;
    });

    let startDateString = `${formDateObject['start-date-month']}/${formDateObject['start-date-day']}/${formDateObject['start-date-year']}`;
    let endDateString = `${formDateObject['end-date-month']}/${formDateObject['end-date-day']}/${formDateObject['end-date-year']}`;
    startDate = convertDate(startDateString);
    endDate = convertDate(endDateString);
    todayDate = new Date();
    if (endDate > todayDate)
    {
      $(".daterange").addClass("govuk-form-group--error");
      $(".dateinput").addClass("govuk-input--error");
      $('#future-date-error').css('display','block');
    }
    if (endDate < todayDate)
    {
      $(".daterange").removeClass("govuk-form-group--error");
      $(".dateinput").removeClass("govuk-input--error");
      $('#future-date-error').css('display','none');
    }

    

    $multiSelect.each(function () {
      const filterGroup = $(this).data('filter-group');
      const selectedFilters = $(this).data('fastselect').optionsCollection.selectedValues;
      let filtersArray = [];
      for (const filter in selectedFilters) {
        filtersArray.push(filter);
      }
      filtersObj[filterGroup] = filtersArray;
    });

    updateFilters();
    console.log('done')
    saveToLocalStorage(filtersObj);
    return false;
  })
  

  .on('reset', function (e) {
    $('.fstChoiceRemove').each(function(){
      $(this).trigger('click');
    });
    $(this).submit();
    $(".daterange").removeClass("govuk-form-group--error");
    $(".dateinput").removeClass("govuk-input--error");
    $('#future-date-error').css('display','none');
  })

  $('.resetbutton').click(function(e){
    e.preventDefault();
    $('form')[0].reset();
    $(this).submit();
    $(".daterange").removeClass("govuk-form-group--error");
    $(".dateinput").removeClass("govuk-input--error");
    $('#future-date-error').css('display','none');
});

  if (localStorage.postFilters) {
    $container.isotope({
      filtersObj: localStorage.postFilters
    });
    $('.multipleSelect').val(filtersObj);
    $('.multipleSelect').fastselect();
    updateFilters();
    console.log('hello' + localStorage.postFilters)
  
}

  function saveToLocalStorage(filtersObj) {
    // save filters
    localStorage.postFilters = JSON.stringify(filtersObj);
}


});


