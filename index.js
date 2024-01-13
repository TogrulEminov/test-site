// $('html, body').animate(
//   {
//     scrollTop: 0,
//     scrollLeft: 0,
//   },
//   'slow'
// );
// const productsSwiper = new Swiper('#products_swiper', {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },

//   navigation: {
//     nextEl: '#products_next',
//     prevEl: '#products_prev',
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//       navigation: false,
//     },
//     450: {
//       slidesPerView: 2,
//       navigation: true,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1024: {
//       slidesPerView: 4,
//     },
//   },
// });

// productsSwiper.init();
// // header
// const header = document.querySelector('#small_header');
// // header sticky
// const toggleClass = 'is-sticky';
// window.addEventListener('scroll', () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll > 150) {
//     header.classList.add(toggleClass);
//   } else {
//     header.classList.remove(toggleClass);
//   }
// });

// $(document).ready(function () {
//   $('#mobile_submenu_btn').click(function () {
//     $('.mobile_navbar_submenu').slideToggle('slow');
//     $('#mobile_submenu_btn i').toggleClass('active');
//   });
// });

// $(document).ready(function () {
//   $('#hamburger_icon').click(function () {
//     $(this).toggleClass('change');
//   });

//   $('#hamburger_icon').click(function () {
//     $('#mobile-navbar').slideToggle('slow');
//     $('body').toggleClass('no-scroll');
//   });
// });

// function checkWindowWidth() {
//   var windowWidth = $(window).width();
//   if (windowWidth > 1200) {
//     $('#hamburger-icon').removeClass('change');
//     $('#mobile-navbar').slideUp('slow');
//     $('body').removeClass('no-scroll');
//     // $('.overlay').removeClass('active');
//   }
// }

// $(window).on('load resize', function () {
//   checkWindowWidth();
// });

// var swiper = new Swiper('#hero_slider', {
//   loop: true,
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: '#hero_next',
//     prevEl: '#hero_prev',
//   },
// });







function updateButton({buttonEl, isDark}) {
    buttonEl.classList = isDark ? "header__themeToggle" : "header__themeToggle header__themeToggle--light";

    const newAriaLabel = isDark ? "Change to light theme" : "Change to dark theme";

    buttonEl.setAttribute("aria-label", newAriaLabel);
}

function calculateSettingAsThemeString({localStorageTheme, systemSettingDark}) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

function updateThemeOnHtmlEl({theme}) {
    document.querySelector("html").setAttribute("color-mode", theme);
}

const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({
    localStorageTheme,
    systemSettingDark
});

// update on page load
updateButton({
    buttonEl: button,
    isDark: currentThemeSetting === "dark"
});
updateThemeOnHtmlEl({
    theme: currentThemeSetting
});

button.addEventListener("click", ()=>{
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    updateButton({
        buttonEl: button,
        isDark: newTheme === "dark"
    });
    updateThemeOnHtmlEl({
        theme: newTheme
    });

    currentThemeSetting = newTheme;
}
);