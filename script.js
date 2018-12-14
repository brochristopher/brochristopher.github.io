let homeButton = document.getElementById('home-button');
let homepage = document.getElementById('homepage');
let projectsButton = document.getElementById('projects-button');
let projects = document.getElementById('projects');
let contactButton = document.getElementById('contact-button');
let contact = document.getElementById('contact');

homeButton.addEventListener('click', function(){
   projects.style.display = "none";
   contact.style.display = "none";
   homepage.style.display = "flex";
});

projectsButton.addEventListener('click', function(){
   homepage.style.display = "none";
   contact.style.display = "none";
   projects.style.display = "flex";
});

contactButton.addEventListener('click', function(){
   homepage.style.display = "none";
   projects.style.display = "none";
   contact.style.display = "flex";
});