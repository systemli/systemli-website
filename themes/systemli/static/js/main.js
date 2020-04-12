(function () {
    // show and hide menu
    document.getElementById('button-menu-open').addEventListener('click', function () {
        document.getElementById('navbar').classList.replace('w-0', 'w-screen');
        document.getElementById('navbar').classList.replace('pl-0', 'pl-40');
        document.getElementById('navbar').classList.replace('hidden', 'flex');
    });
    document.getElementById('button-menu-close').addEventListener('click', function () {
        document.getElementById('navbar').classList.replace('w-screen', 'w-0');
        document.getElementById('navbar').classList.replace('pl-40', 'pl-0');
        document.getElementById('navbar').classList.replace('flex', 'hidden');
    });
    // show service description on hover
    Array.prototype.forEach.call(document.getElementsByClassName('service-link'), function (service) {
        service.addEventListener('mouseover', function (event) {
            var id = event.target.innerText;
            document.getElementById(id).style.display = 'flex';
        });
        service.addEventListener('mouseout', function (event) {
            var id = event.target.innerText;
            document.getElementById(id).style.display = 'none';
        });
    });
})();
