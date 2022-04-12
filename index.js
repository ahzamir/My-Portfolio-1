window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hamberger').addEventListener('click', displayContent);
  document.querySelector('.close').addEventListener('click', closeMenu);
  document.querySelector('.portfolio').addEventListener('click', portfolioSection);
  document.querySelector('.about').addEventListener('click', aboutSection);
  document.querySelector('.contact').addEventListener('click', contactSection);
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
function portfolioSection() {
  closeMenu();
  window.location = `${window.location.pathname}#portfolio`;
}
function aboutSection() {
  closeMenu();
  window.location = `${window.location.pathname}#about`;
}
function contactSection() {
  closeMenu();
  window.location = `${window.location.pathname}#contact`;
}
