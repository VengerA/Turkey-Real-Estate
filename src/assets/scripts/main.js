(function($) {
	
    // HEADER LANGUAGE AND CURRENCY
    var headerLAC = {
        init: function(){
            this.cacheDom();
            this.bindEvents();
        },
        cacheDom: function(){
            this.$h_language = $("header#header div.top-header div.header-buttons div.buttons div.placeholder div.current-language");
            this.$h_currency = $("header#header div.top-header div.header-buttons div.buttons div.placeholder span.current-currency");
            this.$placeholder = $("header#header div.top-header div.header-buttons div.buttons div.placeholder");
            this.$ladc_box = $("header#header div.top-header div.header-buttons div.buttons div.landc-box");
            this.$buttons = $("header#header div.top-header div.header-buttons div.lac-buttons");
            
            this.$l_language = this.$buttons.find('div.language-group');
            this.$l_select   = this.$l_language.find('div.select');
            this.$l_choice   = this.$l_select.find('div.choice');

            this.$c_language = this.$buttons.find('div.currency-group');
            this.$c_select   = this.$c_language.find('div.select');
            this.$c_choice   = this.$c_select.find('div.choice');

            this.$button     = $("header#header div.top-header div.header-buttons div.buttons div.landc-box div.form-group button");
        },
        bindEvents: function(){
            this.$l_choice.on('click', this.chooseLanguage.bind(this));
            this.$c_choice.on('click', this.chooseCurrency.bind(this));
            this.$button.on('click', this.setLac.bind(this));
            this.$placeholder.on('click', this.toggleBox.bind(this));
        },
        chooseLanguage: function(e){
            this.$l_select.toggleClass('active');
            var item = $(e.target);
            if (!item.hasClass('choice')){
                var parent = $(e.target).parents('div.choice');
                this.$l_choice.removeClass('active');
                parent.stop().addClass("active");
            } else {
                this.$l_choice.removeClass('active');
                item.addClass('active');
            }
            //var flag = parent.data('flag');
            //this.$h_language.find('img').attr("src", flag);

            /*var item = item.parentNode;
            item.classList.add('active');*/
        },
        chooseCurrency: function(e){
            this.$c_select.toggleClass('active');
            var item = $(e.target);
            if (!item.hasClass('choice')){
                var parent = $(e.target).parents('div.choice');
                this.$c_choice.removeClass('active');
                parent.stop().addClass("active");
            } else {
                this.$c_choice.removeClass('active');
                item.addClass('active');
            }
            //var flag = parent.data('flag');
            //this.$h_language.find('img').attr("src", flag);

            /*var item = item.parentNode;
            item.classList.add('active');*/
        },
        setLac: function(){
            var active_l = $("header#header div.top-header div.header-buttons div.buttons div.landc-box div.form-group.language-group div.select div.active").data('flag');
            var active_c = $("header#header div.top-header div.header-buttons div.buttons div.landc-box div.form-group.currency-group div.select div.active").data('value');

            this.$h_language.find('img').attr("src", active_l);
            this.$h_currency.html(active_c);

            this.$ladc_box.fadeToggle();
            
        },
        toggleBox: function(){
            this.$ladc_box.fadeToggle();
        }
    }

    headerLAC.init();

    // Favorite Button - Heart
    $('.favme').click(function() {
        $(this).toggleClass('active');
    });

    /* when a user clicks, toggle the 'is-animating' class */
    $(".favme").on('click touchstart', function(){
        $(this).toggleClass('is_animating');
    });

    /*when the animation is over, remove the class*/
    $(".favme").on('animationend', function(){
        $(this).toggleClass('is_animating');
    });

    // HERO SLIDER
    var heroPLACEHOLDER = $("div#hero-placeholder"),
        heroSLIDER      = heroPLACEHOLDER.find('div.hero-slider');

        heroSLIDER.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            items: 1
        });

        var options = {

            url: "assets/scripts/datas.json",

            getValue: "name"
        };

        $("main#main div#hero-placeholder div.hero-search div.location div.input input").easyAutocomplete(options);

    $("main#main div#hero-placeholder div.hero-search div.form-box div.form-item").on('click', function(){
        if ($(this).next('div').hasClass('active')){
            $(this).next('div').toggleClass('active');
        } else {
            $("main#main div#hero-placeholder div.hero-search div.form-box div.form-item").next('div').removeClass('active');
            $(this).next('div').toggleClass('active');
        }
    });

    $('main#main div#hero-placeholder div.hero-search div.form-box div.form-opener div.slider input[type="range"].min-range').change(function(){
        var value = $(this).val();
        $(this).next('div.values').find('span.min').html(value);
    });

    $('main#main div#hero-placeholder div.hero-search div.form-box div.form-opener div.slider input[type="range"].max-range').change(function(){
        var value = $(this).val();
        $(this).next('div.values').find('span.max').html(value);
    });

    // FEATURED PROJECTS 1
    var featuredPROJECTS = $("main#main.home div.featured-projects-1 div.featured-project-list-1");
        featuredPROJECTS.owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                565: {
                    items: 2,
                    margin: 15
                },
                992: {
                    items: 3,
                    margin: 30
                }
            }
        });
    
    // FEATURED PROJECTS 2
    var featuredPROJECTS = $("main#main.home div.featured-projects-2 div.featured-project-list-2");
        featuredPROJECTS.owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                565: {
                    items: 2,
                    margin: 15
                },
                992: {
                    items: 3,
                    margin: 30,
                }
            }
        });

        $("main#main.home div.featured-projects-2 div.featured-project-list-2 .owl-nav button.owl-prev").html('<img src="assets/images/icons/arrow-chevron-prev.png" />');
        $("main#main.home div.featured-projects-2 div.featured-project-list-2 .owl-nav button.owl-next").html('<img src="assets/images/icons/arrow-chevron-next.png" />');

    /* TOP GUIDES */
    var topGUIDES = $("main#main div#top-guides div.listing");
        topGUIDES.owlCarousel({
            items:4,
            loop:true,
            margin:30,
            merge:true,
            dots: false,
            nav: true,
            responsive:{
                0: {
                    items: 1,
                    mergeFit: false
                },
                500:{
                    mergeFit:false,
                    items: 2
                },
                992:{
                    mergeFit:true
                }
            }
        });

        $("main#main div#top-guides div.listing .owl-nav button.owl-prev").html('<img src="assets/images/icons/arrow-chevron-prev.png" />');
        $("main#main div#top-guides div.listing .owl-nav button.owl-next").html('<img src="assets/images/icons/arrow-chevron-next.png" />');

    // TO UP
    $("main#main div.help-form div.to-up").on('click', function(){
        $("html, body").animate({

            scrollTop: 0
   
        }, 1000);
        return false;
    });
      
})( jQuery );