(function () {

    // show random sticker on homepage
    const sticker = document.querySelectorAll('.sticker');
    if (sticker.length > 0) {
        const randomSticker = sticker.item(Math.floor(Math.random() * sticker.length));
        randomSticker.src = randomSticker.dataset.src;
        randomSticker.classList.remove('hidden');
    }

    // show and hide mobile menu
    function openMobileMenu() {
        document.getElementById('navbar').style.transform = 'translateX(0px)';
        document.getElementById('mobile-menu-overlay').classList.remove('hidden');
    }
    function closeMobileMenu() {
        document.getElementById('navbar').style.transform = 'translateX(375px)';
        document.getElementById('mobile-menu-overlay').classList.add('hidden');
    }
    document.getElementById('button-menu-open').addEventListener('click', function () {
        openMobileMenu();
    });
    document.getElementById('button-menu-close').addEventListener('click', function () {
        closeMobileMenu();
    });
    document.getElementById('mobile-menu-overlay').addEventListener('click', function () {
        closeMobileMenu();
    });

    // show service description on hover
    const serviceBarLinks = document.getElementsByClassName('service-bar-link');
    if (serviceBarLinks.length > 0) {
        Array.prototype.forEach.call(serviceBarLinks, function (service) {
            service.addEventListener('mouseover', function (event) {
                const id = event.currentTarget.getElementsByClassName('service-title-container')[0].getElementsByClassName('service-title')[0].innerText;
                document.getElementById(id).style.display = 'flex';
            });
            service.addEventListener('mouseout', function (event) {
                const id = event.currentTarget.getElementsByClassName('service-title-container')[0].getElementsByClassName('service-title')[0].innerText;
                document.getElementById(id).style.display = 'none';
            });
        });

    }
    // hover effect on service tiles
    const serviceTiles = document.getElementsByClassName('service-tile');
    if (serviceTiles.length > 0) {
        Array.prototype.forEach.call(serviceTiles, function (tile) {
            tile.addEventListener('mouseover', function (event) {
                tile.getElementsByClassName('service-tile-upper')[0].classList.add('border-pink');
            });
            tile.addEventListener('mouseout', function (event) {
                tile.getElementsByClassName('service-tile-upper')[0].classList.remove('border-pink');
            });
        })
    }
})();
