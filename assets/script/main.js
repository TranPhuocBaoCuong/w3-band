$(document).ready(function() {
    $('.slider').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
	})

	const header = $('.header')
	const headerHeight = header.height()

	$('.toggle-bars').click(function() {
		const isOpen = header.height() !== headerHeight

		if (isOpen)
			header.css('height', 'null')
		else
			header.css('height', 'auto')
	})

	$('.navbar__link').click(function(e) {
		const hasSubnav = this.nextElementSibling &&
						this.nextElementSibling.classList.contains('subnav')

		if (hasSubnav)
			e.preventDefault()
		else
			header.css('height', 'null')
	})

	const modal = $('.modal')

	$('.js-buy-btn').click(function() {
		modal.addClass('open')
	})

	$('.js-modal-close').click(function() {
		modal.removeClass('open')
	})

	$('.js-modal-footer-btn-close').click(function() {
		modal.removeClass('open')
	})

	modal.click(function() {
		modal.removeClass('open')
	})

	$('.js-modal-body').click(function(e) {
		e.stopPropagation()
	})
})
