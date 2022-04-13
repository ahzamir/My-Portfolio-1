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
  name: 'Profesional Art  Printing Data ',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
  Image: "images/snapshoot-portfolio.svg",
  languages: []
},
{
  name: 'Data Dashboard Healthcare ',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
  Image: "images/snapshoot-portfolio.svg"
},
{
  name: 'Website Protfolio ',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
  Image: "images/snapshoot-portfolio.svg"
},
{
  name: 'Profesional Art  Printing Data ',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
  Image: "images/snapshoot-portfolio.svg"
},
{
  name: 'Data Dashboard Healthcare ',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
  Image: "images/snapshoot-portfolio.svg"
},
{
  name: 'Website Protfolio 6',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
  Image: "images/snapshoot-portfolio.svg"
}];
function openProject(event) {
  const id = event.target.id;
  const project = projects[id];
  document.getElementById('exampleModalLabel').innerHTML = project.name;
  document.getElementById('pro-description').innerHTML = project.description;
  document.getElementById('pro-img').src = project.Image;
}
function displayProjects() {
  const projectPart = document.getElementById('cards');
  const cards = document.createElement('div');
  cards.classList.add('cards-pro');
  let id = 0;
  projects.forEach((project) => {
    const card = `<div class="second-project project-back">
      <h2 class="project-heading">${project.name}</h2>
      <p class="description">${project.description}</p>
      <ul class="cards-project2">
        <li>html</li>
        <li>bootstrap</li>
        <li>Ruby</li>
      </ul>
    <a class="link-project2 link-project2-desktop" id=${id} type="button" data-toggle="modal" data-target="#exampleModal">
      <div class="see-project2" id=${id}>See Project</div>
    </a>
    </div>
    <a class="link-project2 link-project2-mobile" id=${id} type="button" data-toggle="modal" data-target="#exampleModal">
    <div class="see-project2 id=${id}">See Project</div>
    </a>
    `;
    cards.insertAdjacentHTML('beforeend', card);
    id++;
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
  const projectLinks = document.querySelectorAll('.link-project2');
  projectLinks.forEach((projectLink) => {
    projectLink.addEventListener('click', openProject);
  })
});
