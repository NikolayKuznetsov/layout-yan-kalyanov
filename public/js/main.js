$(document).ready(function () {

    $('.link-scroll').click(function () { // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 600); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

    function come(elem) {
        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop = $(elem).offset().top,
            elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    // функция, которая по заданному селектору
// найдет соответствующие ему элементы, которые
// при этом попадают в видимую область окна
    function inWindow(s){
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var currentEls = $(s);
        var result = [];
        currentEls.each(function(){
            var el = $(this);
            var offset = el.offset();
            if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
                result.push(this);
        });
        return $(result);
    }

    if (come("#block-1")) {
        $('.menu-container ul.list-menu li').removeClass('active');
        $('.menu-container ul.list-menu li:nth-child(1)').addClass('active');
        console.log('#block-1');
    }

    $(window).scroll(function () {

        var boxesInWindow3 = inWindow("#block-3");
        boxesInWindow3.addClass('animate-bg');

        var boxesInWindow5 = inWindow("#block-5");
        boxesInWindow5.addClass('animate-bg');

        if (come("#block-1")) {
            $('.menu-container ul.list-menu li').removeClass('active');
            $('.menu-container ul.list-menu li:nth-child(1)').addClass('active');
            console.log('#block-1');
        }
        if (come("#block-2")) {
            $('.menu-container ul.list-menu li').removeClass('active');
            $('.menu-container ul.list-menu li:nth-child(2)').addClass('active');
            console.log('#block-2');
        }
        if (come("#block-8")) {
            $('.menu-container ul.list-menu li').removeClass('active');
            $('.menu-container ul.list-menu li:nth-child(5)').addClass('active');
            console.log('#block-8');
        }
    });



    $('.slider-1').slick({
        slidesToShow: 3,
        centerMode: true,
        infinite: true
    });
});