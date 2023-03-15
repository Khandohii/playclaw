$(function(){
	if ( !supportsCssVars() ) {
		$('body').addClass('lock')
		$('.supports_error').addClass('show')
	}


	setTimeout(function(){
		observer = lozad('.lozad', {
			rootMargin: '200px 0px',
			threshold: 0,
			loaded: function(el) {
				el.classList.add('loaded')
			}
		})

		observer.observe()
	}, 200)


	$(':root').css('--scroll_width', widthScroll() +'px')


	$('body').on('click', '.mob_menu_link', function(e) {
    	e.preventDefault()

		if( $(this).hasClass('active') ) {
			$('.mob_menu_link').removeClass('active')

			$('header .wrap_menu').removeClass('visible')
			$('body').removeClass('lock')
			$('.overlay').fadeOut(300)
		} else {
			$('.mob_menu_link').addClass('active')

			$('header .wrap_menu').addClass('visible')
			$('body').addClass('lock')
			$('.overlay').fadeIn(300)
		}
    })

	$('body').on('click', '.mini-modals .close, .overlay', function(e) {
    	e.preventDefault()

		$('body').removeClass('lock')
		$('.mob_menu_link').removeClass('active')
		$('header .wrap_menu').removeClass('visible')
		$('.overlay').fadeOut(300)
		
    })

	$('select').niceSelect()


	var locationHash = window.location.hash

	$('body').on('click', '.tabs button', function(e) {
		e.preventDefault()

	    if( !$(this).hasClass('active') ) {
	    	let parent = $(this).closest('.tabs_container')
		    let activeTab = $(this).data('content')
        	let level = $(this).data('level')

		    parent.find('.tabs:first').find('button').removeClass('active')
		    parent.find('.tab_content.' + level).removeClass('active')

		    $(this).addClass('active')
		    $(activeTab).addClass('active')
	    }
	})

	if( locationHash && $('.tabs_container').length ) {
		let activeTab = $('.tabs button[data-content='+ locationHash +']')
		let parent = activeTab.closest('.tabs_container')
    	let level = activeTab.data('level')

		parent.find('.tabs:first').find('button').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		$(locationHash).addClass('active')

		$('html, body').stop().animate({
		   	scrollTop: $(locationHash).offset().top
		}, 1000)
	}

    $('.tabs_select select').change(function(e) {
    	let parent = $(this).closest('.tabs_container')
	    let activeTab = $(this).find( "option:selected" ).data('href');
    	let level = $(this).find( "option:selected" ).data('level')

	    parent.find('.tabs:first').find('button').removeClass('active')
	    parent.find('.tab_content.' + level).removeClass('active')

	    parent.find('.tabs [data-content =' + activeTab + ']').addClass('active')
	    $(activeTab).addClass('active')

    })
})


function widthScroll() {
    let div = document.createElement('div')
    div.style.overflowY = 'scroll'
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.visibility = 'hidden'
    document.body.appendChild(div)

    let scrollWidth = div.offsetWidth - div.clientWidth
    document.body.removeChild(div)

    return scrollWidth
}


var supportsCssVars = function() {
    var s = document.createElement('style'),
        support

    s.innerHTML = ":root { --tmp-var: bold; }"
    document.head.appendChild(s)
    support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'))
    s.parentNode.removeChild(s)

    return support
}


function setHeight(className){
    let maxheight = 0

    className.each(function() {
    	let elHeight = $(this).outerHeight()

        if( elHeight > maxheight ) {
        	maxheight = elHeight
        }
    })

    className.outerHeight( maxheight )
}