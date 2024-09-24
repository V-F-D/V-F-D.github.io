// scripts.js
document.querySelectorAll('.marquee-row').forEach(row => {
    row.addEventListener('mouseover', () => {
        row.style.animationPlayState = 'paused';
    });
    row.addEventListener('mouseout', () => {
        row.style.animationPlayState = 'running';
    });
});
let open = false;

function menuOpen() {
    open = !open;
    document.getElementById('nav-links').style.display = open ? 'block' : 'none';
    document.getElementById('menu-icon').style.display = open ? 'none' : 'block';
    document.getElementById('close-icon').style.display = open ? 'block' : 'none';

    if (open) {
        document.querySelector('.navbar-links').style.display = 'block';
        document.querySelector('.navbar-cta').style.display = 'block';
    } else {
        document.querySelector('.navbar-links').style.display = 'none';
        document.querySelector('.navbar-cta').style.display = 'none';
    }
}

