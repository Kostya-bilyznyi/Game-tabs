;(function() {
	"use strict";

	const links = $('.ba-farcry-tabs__links');

	links.on('click', function () {

		$('.ba-farcry-tabs__links.active').removeClass('active');
		$(this).addClass('active');
		$(this).closest('div.ba-farcry-tabs').find('div.ba-farcry-tabs__content').removeClass('active').eq($(this).index()).addClass('active');

	})
})();