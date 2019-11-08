$(function () {
  var $container = $('#isotope2').isotope({
    itemSelector: '.tb-data-single',
    layoutMode: 'vertical',
    transitionDuration: 0
    // getSortData: {
    //   transactionDate: function (itemElem) {
    //     var transactionDate = $(itemElem).find('.transactionDate').text()
    //     return Date.parse(transactionDate)
    //   },
    //   contractNumber: '[data-contractNumber]',
    //   fundingGroup: function (itemElem) { // function
    //     var fundingGoup = $(itemElem).find('.fundingGroup').text()
    //     return fundingGoup.replace(' ', '-')
    //   },
    //   description: '[data-description]',
    //   transactionAmount: function (itemElem) { // function
    //     var amountString = $(itemElem).find('.transactionAmount').text()
    //     var amountValue = Number(amountString.replace(/(\£|,)/g, ''))
    //     return amountValue
    //   }
    // }
  })

  let textValueObjs = {}
  let filtersObj = {}

  function updateFilters () {
    var filterValue = ''
    for (var prop in filtersObj) {
      if(filtersObj[prop] !== undefined){
        filterValue += filtersObj[prop]
      }
    }
    // set filter for Isotope


    $container.isotope({
      filter: filterValue
    })
  }
  function dateRangeFilter(startDate, endDate){

    $container.isotope({
      filter: function() {
        // _this_ is the item element. Get text of element's .number
        var dateVal = new Date($(this).find('.transactionDate').text());
        console.log(dateVal >= startDate && dateVal <= dateVal)
        // return true to show, false to hide
        return dateVal >= startDate && dateVal <= dateVal;
      }
    })

  }

  function updateTextValues () {
    $('.toggle-menu-parent').each(function () {
      const $this = $(this)
      const filterGroups = $this.data('filterGroup').split(', ')
      let textValue = []

      filterGroups.forEach(filterGroup => {
        if (textValueObjs[filterGroup] !== undefined) {
          textValue.push(textValueObjs[filterGroup])
          console.log(textValueObjs[filterGroup])
        }
      })
      if (textValue.length) {
        textValue = textValue.join(', ')
        $this.children('.govuk-filter-group__container__subtitle').text(textValue)
      }
    })
  }

  $('.filter-button').on('click', function (e) {
    e.preventDefault()
    const $this = $(this)
    let newSubtitle = $this.text()
    newSubtitle = newSubtitle.trim();
    const filterGroup = $this.data('filter-group')
    console.log(newSubtitle)
    filtersObj[filterGroup] = $this.data('filter')
    textValueObjs[filterGroup] = newSubtitle

    updateFilters()
    updateTextValues()
  })
//https://codepen.io/desandro/pen/Ehgij
  $('.filter-form-select').on('submit', function(e) {
    const $this = $(this)
    const filterGroup = $this.data('filter-group')
    let filtersArray = []
    let textArray = []

    $this.find('input:checked').each(function() {
      const $this = $(this)
      filtersArray.push($this.data('filter'))
      textArray.push($this.parents('label').text().trim())
    })
    filtersObj[filterGroup] = filtersArray
    textValueObjs[filterGroup] = textArray
  
    updateFilters()
    updateTextValues()
    return false
  })
  function convertDate(dateString){
    convertedDate = new Date(dateString);
    return convertedDate;
  }

  $('#byDateRange').on('submit', function(e) {
    e.preventDefault();
    const $this = $(this)
    const filterGroup = $this.data('filter-group')

    const formDataArray = $this.serializeArray();
    formdateObject = {};

    var formdateObject = {};
    $(formDataArray).each(function(index, obj){
      formdateObject[obj.name] = obj.value;
    });
    
    let startDateString = `${formdateObject['start-date-month']}/${formdateObject['start-date-day']}/${formdateObject['start-date-year']}`;
    let endDateString = `${formdateObject['end-date-month']}/${formdateObject['end-date-day']}/${formdateObject['end-date-year']}`;

    const startDate = convertDate(startDateString);
    const endDate = convertDate(endDateString);

    let filtersArray = [startDate, endDate];
    let textArray = []

    filtersArray.push(filterGroup);
    textArray.push(`from ${startDateString} to ${endDateString}`);

    filtersObj[filterGroup] = filtersArray
    textValueObjs[filterGroup] = textArray
  
    dateRangeFilter(startDate, endDate)
    //updateFilters()
    updateTextValues()
    return false
  })

})
