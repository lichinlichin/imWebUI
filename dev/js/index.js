;$(function() {
	var router = new Router({
		container: '.container',
		enterTimeout: 250,
		leaveTimeout: 250
	});

	var home = {
		url: '/',
		className: 'home',
		render: function() {
			return $('#tpl_home').html();
		}
	};


	var article_list = {
		url: '/article/list',
		className: 'article_list',
		render: function() {
			return $('#tpl_article_list').html();
		}
	};

	var audio = {
		url: '/audio',
		className: 'audio',
		render: function() {
			return $('#tpl_audio').html();
		},
		bind: function() {

		}
	};
	var interlocution = {
		url: '/interlocution',
		className: 'interlocution',
		render: function() {
			return $('#tpl_interlocution').html()
		},
		bind: function() {}
	};

	var navbar = {
		url: '/navbar',
		className: 'navbar',
		render: function() {
			return $('#tpl_navbar').html();
		},
		bind: function() {
			$('.m_navbar .m_navbar_item').click(function() {
				$(this).addClass('active').siblings().removeClass('active');
			});
		}
	};
	var font = {};
	var color = {};
	var dialog = {};
	var tab = {};
	var comment = {
		url: '/comment',
		className: 'comment',
		render: function() {
			return $('#tpl_comment').html();
		}
	};
	var downloadtip = {
		url: '/downloadtip',
		className: 'downloadtip',
		render: function() {
			return $('#tpl_downloadtip').html();
		}
	};
	router.push(home)
				.push(article_list)
				.push(comment)
				.push(downloadtip)
				.push(audio)
				.push(interlocution)
        // .push(button)
        // .push(cell)
        // .push(toast)
        // .push(dialog)
        // .push(progress)
        // .push(msg)
        // .push(article)
        // .push(actionsheet)
        // .push(icons)
        // .push(panel)
        // .push(tab)
        .push(navbar)
        // .push(tabbar)
        // .push(searchbar)
        .setDefault('/')
        .init();
});