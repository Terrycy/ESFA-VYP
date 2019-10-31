$('.govuk-filter-group__submenu__menu-item').on('click', function (e) {
	e.preventDefault();
	const $this = $(this);

	const newSubtitle = $this.text();
	$this.closest('.govuk-filter-group__container__subtitle').text(newSubtitle)

})
