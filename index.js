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
const projects = [{
  name: 'Profesional Art',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
},
{
  name: 'Profesional Art',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
},
{
  name: 'Profesional Art',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
},
{
  name: 'Profesional Art',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
},
{
  name: 'Profesional Art',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
},
{
  name: 'Profesional Art',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
}];
function displayProjects() {
  const projectPart = document.getElementById('cards');
  const cards = document.createElement('div');
  cards.classList.add('cards-pro');
  projects.forEach(project => {
    const card = `<div class="second-project project-back">
      <h2 class="project-heading">${project.name}</h2>
      <p class="description">${project.description}</p>
      <ul class="cards-project2">
        <li>html</li>
        <li>bootstrap</li>
        <li>Ruby</li>
      </ul>
    <a class="link-project2 link-project2-desktop" href="#">
      <div class="see-project2">See Project</div>
    </a>
    </div>
    <a class="link-project2 link-project2-mobile" href="#">
    <div class="see-project2">See Project</div>
    </a>
    `;
    cards.insertAdjacentHTML("beforeend", card);
  });
  projectPart.appendChild(cards);
}
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hamberger').addEventListener('click', displayContent);
  document.querySelector('.close').addEventListener('click', closeMenu);
  document.querySelector('.portfolio').addEventListener('click', portfolioSection);
  document.querySelector('.about').addEventListener('click', aboutSection);
  document.querySelector('.contact').addEventListener('click', contactSection);
  displayProjects();
});
