$('.govuk-filter-group__container').on('click', function (event) {

	const $this = $(this);
	const $submenu = $this.children('ul.govuk-filter-group__submenu');
	if($submenu[0].tagName === 'UL' && $(event.target).hasClass('govuk-filter-group__submenu__menu-item')){
		event.cancelBubble = true;
		const newSubtitle = $(event.target).text();
		$this.children('.govuk-filter-group__container__subtitle').text(newSubtitle)
	}
	$submenu.toggleClass('hidden')
})
