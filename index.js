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
  Image: 'images/snapshoot-portfolio.svg',
},
{
  name: 'Data Dashboard Healthcare ',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
  Image: 'images/snapshoot-portfolio.svg',
},
{
  name: 'Website Protfolio ',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
  Image: 'images/snapshoot-portfolio.svg',
},
{
  name: 'Profesional Art  Printing Data ',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
  Image: 'images/snapshoot-portfolio.svg',
},
{
  name: 'Data Dashboard Healthcare ',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
  Image: 'images/snapshoot-portfolio.svg',
},
{
  name: 'Website Protfolio 6',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
  Image: 'images/snapshoot-portfolio.svg',
}];
function openProject(event) {
  const { id } = event.target;
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
    id += 1;
  });
  projectPart.appendChild(cards);
}
function checkData(event) {
  event.preventDefault();
  const form = document.forms[0];
  const warningMessage = '*please fill out this part first';
  const msg1 = document.getElementById('msg-1');
  const msg2 = document.getElementById('msg-2');
  const msg = document.getElementById('msg');
  const name = document.getElementById('name').value;
  const mail = document.getElementById('email').value;
  // eslint-disable-next-line no-useless-escape
  const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let validate = true;
  msg.innerHTML = '';
  msg1.innerHTML = '';
  msg2.innerHTML = '';
  if (name === ('')) {
    msg1.innerHTML = warningMessage;
    validate = false;
  }
  if (mail === ('')) {
    msg2.innerHTML = warningMessage;
    validate = false;
  } else if (!regx.test(mail) || mail !== mail.toLowerCase()) {
    msg.innerHTML = '*please enter a correct email-address format';
    validate = false;
  }
  if (validate) {
    form.submit();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hamberger').addEventListener('click', displayContent);
  document.querySelector('.close').addEventListener('click', closeMenu);
  document.querySelector('.portfolio').addEventListener('click', portfolioSection);
  document.querySelector('.about').addEventListener('click', aboutSection);
  document.querySelector('.contact').addEventListener('click', contactSection);
  document.getElementById('submit-btn').addEventListener('click', checkData);
  displayProjects();
  const projectLinks = document.querySelectorAll('.link-project2');
  projectLinks.forEach((projectLink) => {
    projectLink.addEventListener('click', openProject);
  });
});
