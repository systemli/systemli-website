(function () {

    // show and hide menu
    document.getElementById('button-menu-open').addEventListener('click', function () {
        document.getElementById('navbar').classList.replace('hidden', 'flex');
    });
    document.getElementById('button-menu-close').addEventListener('click', function () {
        document.getElementById('navbar').classList.replace('flex', 'hidden');
    });

    // show service description on hover
    const serviceBarLinks = document.getElementsByClassName('service-bar-link');
    if (serviceBarLinks) {
        Array.prototype.forEach.call(serviceBarLinks, function (service) {
            service.addEventListener('mouseover', function (event) {
                const id = event.currentTarget.getElementsByClassName("service-title")[0].innerText;
                document.getElementById(id).style.display = 'flex';
            });
            service.addEventListener('mouseout', function (event) {
                const id = event.currentTarget.getElementsByClassName("service-title")[0].innerText;
                document.getElementById(id).style.display = 'none';
            });
        });
    }

    // hover effect on service tiles
    const serviceTiles = document.getElementsByClassName('service-tile');
    if (serviceTiles) {
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
