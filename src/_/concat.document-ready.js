var form_panel=$("[data-form-validation]");form_panel.validationEngine("attach",{promptPosition:"bottomLeft",scroll:!1});var file=$(".form__file-input");file.on("change",function(a){$(this).siblings(".form__file-name").html('<p><span class="is--name">'+$(this).val().replace(/.*(\/|\\)/,"")+'</span><span class="form__file-remove">Заменить</span></p>')});
$("img").addClass("img-responsive");

"use strict";$(function(){var s=$("[data-slick-slider]"),o=$("[data-slick-insta]"),i=$("[data-slick-catalog]"),e='<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>',l='<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';s.slick({slidesToShow:5,slidesToScroll:1,arrows:!1,dots:!1,infinite:!0,variableWidth:!0,prevArrow:e,nextArrow:l,responsive:[{breakpoint:1200,settings:{variableWidth:!1,slidesToShow:3,slidesToScroll:3}},{breakpoint:992,settings:{variableWidth:!1,slidesToShow:2,slidesToScroll:2}},{breakpoint:767,settings:{variableWidth:!1,slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]}),o.slick({slidesToShow:5,slidesToScroll:1,arrows:!1,dots:!1,infinite:!0,variableWidth:!0,prevArrow:e,nextArrow:l,autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:766,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]}),i.slick({slidesToShow:4,slidesToScroll:1,arrows:!1,dots:!1,infinite:!0,prevArrow:e,nextArrow:l,autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:766,settings:{variableWidth:!0,slidesToShow:2,slidesToScroll:1}}]})});