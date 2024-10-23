document.addEventListener('DOMContentLoaded', function () {
    var $window = window,
        $body = document.body,
        settings = {
            carousels: {
                speed: 4,
                fadeIn: true,
                fadeDelay: 250
            }
        };

    // Breakpoints simulation (Example implementation)
    function applyBreakpoints() {
        var width = $window.innerWidth;
        if (width >= 1281 && width <= 1680) {
            console.log('Wide breakpoint applied');
        } else if (width >= 961 && width <= 1280) {
            console.log('Normal breakpoint applied');
        } else if (width >= 841 && width <= 960) {
            console.log('Narrow breakpoint applied');
        } else if (width >= 737 && width <= 840) {
            console.log('Narrower breakpoint applied');
        } else if (width <= 736) {
            console.log('Mobile breakpoint applied');
        }
    }
    applyBreakpoints();
    window.addEventListener('resize', applyBreakpoints);

    // Play initial animations on page load
    window.addEventListener('load', function () {
        setTimeout(function () {
            $body.classList.remove('is-preload');
        }, 100);
    });

    // Dropdowns (Example implementation)
    function initDropdowns() {
        var navItems = document.querySelectorAll('#nav > ul > li');
        navItems.forEach(function (item) {
            item.addEventListener('mouseenter', function () {
                this.classList.add('fade');
            });
            item.addEventListener('mouseleave', function () {
                this.classList.remove('fade');
            });
        });
    }
    initDropdowns();

    // Scrolly (Example implementation)
    function initScrolly() {
        var scrollyElements = document.querySelectorAll('.scrolly');
        scrollyElements.forEach(function (element) {
            element.addEventListener('click', function (event) {
                event.preventDefault();
                var targetId = element.getAttribute('href');
                var target = document.querySelector(targetId);
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            });
        });
    }
    initScrolly();

    // Nav button
    var navButton = document.createElement('div');
    navButton.id = 'navButton';
    navButton.innerHTML = '<a href="#navPanel" class="toggle"></a>';
    $body.appendChild(navButton);

    // Panel
    var navPanel = document.createElement('div');
    navPanel.id = 'navPanel';
    navPanel.innerHTML = '<nav>' + document.querySelector('#nav').innerHTML + '</nav>';
    $body.appendChild(navPanel);

    function initPanel() {
        navButton.addEventListener('click', function () {
            $body.classList.toggle('navPanel-visible');
        });

        navPanel.addEventListener('click', function () {
            $body.classList.remove('navPanel-visible');
        });
    }
    initPanel();

    // Carousels
    function initCarousels() {
        var carousels = document.querySelectorAll('.carousel');
        carousels.forEach(function (carousel) {
            var forward = document.createElement('span');
            forward.classList.add('forward');
            var backward = document.createElement('span');
            backward.classList.add('backward');
            var reel = carousel.querySelector('.reel');
            var items = reel.querySelectorAll('article');
            var pos = 0;
            var itemWidth = items[0].offsetWidth;
            var reelWidth = reel.scrollWidth;

            if (settings.carousels.fadeIn) {
                items.forEach(function (item) {
                    item.classList.add('loading');
                });
                var fadeInterval = setInterval(function () {
                    var loadingItems = carousel.querySelectorAll('.loading');
                    if (loadingItems.length === 0) {
                        clearInterval(fadeInterval);
                    } else {
                        loadingItems[0].classList.remove('loading');
                    }
                }, settings.carousels.fadeDelay);
            }

            // Forward
            forward.addEventListener('mouseenter', function () {
                var interval = setInterval(function () {
                    pos -= settings.carousels.speed;
                    if (pos <= -reelWidth + $window.innerWidth) {
                        clearInterval(interval);
                        pos = -reelWidth + $window.innerWidth;
                    }
                    reel.style.transform = `translate(${pos}px, 0)`;
                }, 10);

                forward.addEventListener('mouseleave', function () {
                    clearInterval(interval);
                });
            });

            // Backward
            backward.addEventListener('mouseenter', function () {
                var interval = setInterval(function () {
                    pos += settings.carousels.speed;
                    if (pos >= 0) {
                        clearInterval(interval);
                        pos = 0;
                    }
                    reel.style.transform = `translate(${pos}px, 0)`;
                }, 10);

                backward.addEventListener('mouseleave', function () {
                    clearInterval(interval);
                });
            });

            carousel.appendChild(forward);
            carousel.appendChild(backward);

            window.addEventListener('resize', function () {
                reelWidth = reel.scrollWidth;
                itemWidth = items[0].offsetWidth;
            });
        });
    }
    initCarousels();
});

/* Função de Animação ao selecionar serviço */
function toggleVisibility(option) {
    var options = ['optionA', 'optionB', 'optionC', 'optionD', 'optionE'];
    options.forEach(function (opt) {
        var element = document.getElementById(opt);
        if (opt === option) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

/* Função para redirecionar para uma página */
function redirecionarParaPagina() {
    // Insira a URL da página para onde deseja redirecionar
    var novaPagina = "servicos.html";
    window.location.href = novaPagina;
}
