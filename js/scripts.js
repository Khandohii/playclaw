$(function(){
	$('.premium .carousel').owlCarousel({
		loop: true,
		smartSpeed: 750,
		// autoplay: true,
		autoplayTimeout: 5000,
        responsive : {
            // breakpoint from 1024 up
            1024 : {
                margin: 30,
                items: 3,
                nav: true,
				dots: false,
            },
            // breakpoint from 768 up
            768 : {
                margin: 20,
                items: 3,
                nav: false,
				dots: true,
            },
            // breakpoint from 530 up
            530 : {
                margin: 15,
                items: 2,
                nav: true,
				dots: true,
            },
            // breakpoint from 0 up
            0 : {
                margin: 15,
                items: 1,
                nav: true,
				dots: true,
            }
        },
		onInitialized: function(event){
			setHeight( $(event.target).find('.title') )
			setHeight( $(event.target).find('.desc') )
			setHeight( $(event.target).find('.item') )
		},
		onResized: function(event){
			$(event.target).find('.title').height('auto')
			$(event.target).find('.desc').height('auto')
			$(event.target).find('.item').height('auto')

			setHeight( $(event.target).find('.title') )
			setHeight( $(event.target).find('.desc') )
			setHeight( $(event.target).find('.item') )
		}
	})
})