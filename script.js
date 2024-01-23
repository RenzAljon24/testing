function showmenu() {
    const sidebar = document.getElementById('navbar');
    const openbar = document.getElementById('open');
    const closebar = document.getElementById('close');

    sidebar.classList.toggle('hidden');
    openbar.classList.toggle('hide');
    closebar.classList.toggle('hide');
}
/*toggle darkmode */
function tgdarkmode() {
    const body = document.getElementById('body');
    const sun = document.getElementById('sun' );
    const sunstar = document.getElementById('sunstar');
    const moon = document.getElementById('moon' );
    const moonstar = document.getElementById('moonstar');

    body.classList.toggle('dark');
    sun.classList.toggle('tgmoon');
    sunstar.classList.toggle('tgmoon')
    moon.classList.toggle('tgmoon');
    moonstar.classList.toggle('tgmoon')
}