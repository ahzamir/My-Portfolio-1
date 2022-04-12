window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hamberger').addEventListener('click', displayContent);
    document.querySelector('.close').addEventListener('click', closeMenu);
});
function displayContent() {
    document.querySelector('main').style.display = 'none';
    document.querySelector('header').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.mobile-menu').style.display = 'block';

}
function closeMenu() {
    document.querySelector('main').style.display = 'block';
    document.querySelector('header').style.display = 'flex';
    document.querySelector('footer').style.display = 'block';
    document.querySelector('.mobile-menu').style.display = 'none';
}
