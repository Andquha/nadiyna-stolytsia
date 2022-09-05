$(document).ready(function() {
    $('.slider_slider').slick({
        adaptiveHeight: true,
        slidesToShow: 1,
        slidestoScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 5000,
        centerMode: true,
        dots: true,
        focusOnSelect: true,
        swipe: true,
        nextArrow: '.main_advantage_box_content_slider_arrows_right',
        prevArrow: '.main_advantage_box_content_slider_arrows_left',
        asNavFor: '.slider_text',
        responsive: [{
            breakpoint: 500,
            settings: {
                dots: false,
            }
        }]
    });
    $('.slider_text').slick({
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        fade: true,
        asNavFor: '.slider_slider',
    });
});



const form = $('#form');

form.submit(function(event) {
    event.preventDefault();
    let Form = $(this);
    let errors = formValidate(Form);
    let error = errors[0];
    let mail = errors[1];
    console.log(errors);
    if (error === 0) {
        if (mail === 0) {
            Form.addClass('sending');
            $('body').addClass('active');
            $.ajax({
                type: Form.attr('method'),
                url: Form.attr('action'),
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData: false,

                success: function(e) {
                    $('input').val('');
                    $('textarea').val('');
                    alert('Спасибо! Письмо отправленно')
                    Form.removeClass('sending');
                    Form.removeClass('active');
                    document.body.classList.remove("active");
                }
            })
        } else {
            alert('В поле "Your E-mail" обезательно нужны "@" и "."')
        }
    } else {
        alert('Заполните все обезательные поля')
    };
});

//Проверяем заполнена ли форма
function formValidate(form) {
    let mail = 0;
    let error = 0;
    let formReq = this.$('._req');

    for (let i = 0; i < formReq.length; i++) {
        const input = formReq[i];
        formRemoveError(input);
        if (input.classList.contains('_email')) {
            if (emailTest(input)) {
                console.log(emailTest(input));
                formAddError(input);
                mail++;
            }
        } else if (input.getAttribute('type') === "checkbox" && input.checked === false) {
            formAddError(input);
            error++;
        } else {
            if (input.value === '') {
                formAddError(input);
                error++;
            }
        }
    }
    return [error, mail];
}
//Ставим ошибки
function formAddError(item) {
    item.parentElement.classList.add('error');
    item.classList.add('error');
}
//Cнимаем ошибки
function formRemoveError(item) {
    item.parentElement.classList.remove('error');
    item.classList.remove('error');
}
//Проверка почты
function emailTest(item) {
    console.log(item.value)
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(item.value);
}

// Кнопка меню
let button = $('.header_menu_button_img');

button.on('click', function(e) {
    e.preventDefault();
    if (button.hasClass('active')) {
        close();
    } else {
        open();
    }
});

function close() {
    button.removeClass('active');
    $('body').removeClass('active');
    $('.wrapper').removeClass('active');
    $('.header_menu_list').removeClass('active');
};

function open() {
    button.addClass('active');
    $('body').addClass('active');
    $('.wrapper').addClass('active');
    $('.header_menu_list').addClass('active');
};


// Кнопка випадающего списка
let arrow = $('.header_menu_item.list_hide');

arrow.on('click', function(e) {
    e.preventDefault();
    if (arrow.hasClass('active')) {
        closemenu();
    } else {
        openmenu();
    }
});

function closemenu() {
    arrow.removeClass('active');
    $('.header_menu_list_hide').removeClass('active');
};

function openmenu() {
    arrow.addClass('active');
    $('.header_menu_list_hide').addClass('active');
};




// Скролл на кнопках 
$('a[href^="#"]').on("click", function() {
    let href = $(this).attr("href");

    close();

    $(".wrapper").animate({
        scrollTop: $(href).offset().top - 30
    }, {
        duration: 370, // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });
    return false;
});

$(function() {
    $arrow = $('.main_container_arrow');
    $window = $(window);
    $h = 600;
    $window.scroll(function() {
        if ($window.scrollTop() > $h) {
            $arrow.addClass('fixed');
        } else {
            $arrow.removeClass('fixed');
        }
    });
});

$('.main_container_arrow').on('click', function() {
    $("html, body").animate({
        scrollTop: $('html').offset().top
    }, {
        duration: 370, // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });
})


const animItems = document.querySelectorAll('._anim-items');
const wrapper = document.querySelector('.wrapper')

if (animItems.length > 0) {
    wrapper.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffSet = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add('_animated');
                animItem.classList.add('_no-hide');
            } else {
                if(!animItem.classList.contains('_no-hide')){
                    animItem.classList.remove('_animated');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    setTimeout(() =>{
        animOnScroll();
    }, 300);
}


document.querySelector('.dropdown_button').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.dropdown_list').classList.toggle('active');
    document.querySelector('.dropdown_list').focus();
});

document.querySelectorAll('.dropdown_item').forEach(function(listItem){
    listItem.addEventListener('click', function(){
        document.querySelector('.dropdown_button').innerText = this.innerText;
        document.querySelector('.dropdown_list').focus();
        document.querySelector('.dropdown_list').classList.remove('active');
        document.getElementById('dropdown-input').value = this.dataset.value;
    });
});

document.addEventListener('click', function(e){
    if(e.target !== document.querySelector('.dropdown_button')){
        document.querySelector('.dropdown_list').classList.remove('active');
    }
});