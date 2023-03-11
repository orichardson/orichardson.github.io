$(function() {
	$("#blog-navigation li > a").click(function(event){
		event.preventDefault();
		var ref = $(this).attr('href');
		var halfpath = ref.substring(ref.indexOf('/')+1);

		if(ref.startsWith('blog-posts')) {
			var totalref = window.location.origin+'/'+ref;

			$('.treeview li>a.active').removeClass('active');
			$(this).addClass('active');

			$.get(totalref, function(data) {
				$("#blog-content").html(data);
				window.history.pushState({page: 'blog', subpage_url:totalref}, "", '/blog/'+halfpath);
			}).fail(function(){
				$("#blog-content").html("<h2>Sorry, entry could not be found</h2><pre>Error Event:"+JSON.stringify(arguments, null, 4)+"</pre>");
			});
		}
	});

	$(window).on('popstate', function(evt) {
		if(history.state && history.state.page == 'blog' && history.state.subpage_url) {
			$.get(history.state.subpage_url, function(data) {
				$("#blog-content").html(data);
			});
		}
	});

	function responsiveSticky() {
		if($(window).width() <= 992) {
			$('#side-sticky-part').data('unstick')();
		} else {
			stickify(0, $('#side-sticky-part')[0]);
		}
	}

	$(window).on('resize', responsiveSticky )
	responsiveSticky();

	var scrollfun = function() {
		var sbt = $('.sidebar').position().top;

		var prc =  Math.max($(".parallax").scrollTop() -sbt , 0) / ($(".parallax")[0].scrollHeight - $(window).height() - sbt);
		$('.sidebar').css({'background-color':blendColors(TAB_INFO.blog.colors.bg, '#340534', prc)});
	}

	$('.parallax').scroll(scrollfun);
	$('.sidebar').on('remove', function(){
		$('.parallax').off('scroll', scrollfun);
	})
});
