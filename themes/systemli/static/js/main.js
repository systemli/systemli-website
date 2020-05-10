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
})();
