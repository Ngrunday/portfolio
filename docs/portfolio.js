const insta = document.querySelector("#insta");
const facebook = document.querySelector("#facebook");
const aboutme = document.querySelector("#aboutme");
const projets = document.querySelector("#project");
const contact = document.querySelector("#contact_nav");
const liste_nav = document.querySelectorAll("#navbar>li");
const secondaire = document.querySelector("#secondaire");
const ab_me = document.querySelector("#abme_princip");
const ab_me_list = document.querySelectorAll("#ab_me_list>li");
const alldiv = document.querySelectorAll("div");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const langages = document.querySelector('#langages');
const item_langages = document.querySelectorAll('#langages .lan');
const item_log = document.querySelectorAll(".log");
const item_field = document.querySelectorAll(".hobby");
const bout_contact = document.querySelector("#bout_form");
const div_contact = document.querySelector("#contact");
const mode = document.querySelector("#mode");
const princ = document.querySelector("#principal");

mode.addEventListener("click",()=>{
  if (mode.src.includes('lune.png')) {
    mode.src = 'img/soleil.png';
    //mode clair
    document.body.style.background = "linear-gradient(180deg, #ebeaeb, #807f7f, #ebeaeb)";
    princ.style.background = "linear-gradient(180deg, #a00000 0%, #680000 100%)";
    secondaire.style.background = "linear-gradient(180deg, #a00000 0%, #680000 100%)";

    item_log.forEach(element => {
      element.classList.remove("sombre");
      element.classList.add("clair");
    });
    item_langages.forEach(element => {
      element.classList.remove("sombre");
      element.classList.add("clair");
    });
    item_field.forEach(element => {
      element.style.background = "linear-gradient(180deg, #a00000 0%, #680000 100%)";
    });
  } else {
    // sinon le mode sombre
    mode.src = 'img/lune.png';
    document.body.style.background = "linear-gradient(180deg, #3b3b3b, #807f7f, #363636)";
    princ.style.background = "linear-gradient(180deg, #310000 0%, #440000 100%)";
    secondaire.style.background = "linear-gradient(180deg, #310000 0%, #440000 100%)";
    //langages
    item_langages.forEach(element => {
      element.classList.remove("clair");
      element.classList.add("sombre");
    });

    item_log.forEach(element => {
      element.classList.remove("clair");
      element.classList.add("sombre");
    });
    item_field.forEach(element => {
      element.style.background = "linear-gradient(180deg, #310000 0%, #440000 100%)";
    });
  }
})

//Projets
  const div_proj_princ = document.createElement("div");
  div_proj_princ.id = "div_proj_princip";
  const proj_titre = document.createElement("h2");
  proj_titre.textContent = "Projets";
  const proj_princip = document.createElement("div");
  proj_princip.id = "div_projet";
  const div_projet = document.createElement("div");
  div_projet.id = "projet";
  const projet_img = new Image();
  projet_img.src = "img/sitemeteo.png"; 
  const date_proj = document.createElement("p");
  date_proj.textContent = "Juin 2025";
  date_proj.style.color = "grey";
  const proj_title = document.createElement("h3");
  proj_title.textContent = "Site Web de consultation météo";
  const proj_desc = document.createElement("p");
  proj_desc.textContent = "J'ai réalisé ce projet lors de l'été 2025 afin de m'entrainer et de ne pas perdre mes notions de web. Il est simple mais m'a permis de travailler mes requêtes API mais aussi un peu l'esthétique, me faisant travailler à la fois le backend et le frontend.";
  const a_suivre = document.createElement("h2");
  a_suivre.textContent = "C'est tout... Pour l'instant !";

  div_proj_princ.appendChild(proj_titre);

  div_projet.style.marginBottom = "5%"
  div_projet.appendChild(projet_img);
  div_projet.appendChild(date_proj);
  div_projet.appendChild(proj_title);
  div_projet.appendChild(proj_desc);

  div_projet.classList.add("projet");

  proj_princip.appendChild(div_projet);

  div_proj_princ.appendChild(proj_princip);
  div_proj_princ.appendChild(a_suivre);
  div_proj_princ.style.display = "none";

  secondaire.appendChild(div_proj_princ);


insta.addEventListener("click",()=>{
  window.location.href = "https://www.instagram.com/ngrunday/";
});

facebook.addEventListener("click",()=>{
    window.location.href = "https://www.facebook.com/profile.php?id=61560351142801";
  });

projets.addEventListener("click",()=>{
  liste_nav.forEach(element => {
    element.classList.remove('selected');
  });
  cacherDiv();
  projets.classList.add('selected');
  div_proj_princ.style.display  = "block";

});

contact.addEventListener("click",()=>{
  liste_nav.forEach(element => {
    element.classList.remove('selected');
  });
  cacherDiv();
  contact.classList.add('selected');
  div_contact.style.display  = "block";

});

aboutme.addEventListener("click",()=>{
  liste_nav.forEach(element => {
    element.classList.remove('selected');
  });
  cacherDiv();
  aboutme.classList.add('selected');
  ab_me.style.display = "block";

});

ab_me_list.forEach(element => {
  element.addEventListener("click",()=>{
    ab_me_list.forEach(e => {
      e.classList.remove('selected');
    });
    element.classList.add('selected');
  });
});

bout_contact.addEventListener("click",(Event)=>{
  Event.preventDefault();
  const nom_contact = encodeURIComponent(document.getElementById("nom_txt").value);
  const sujet_contact = encodeURIComponent(document.getElementById("sujet_txt").value);
  const message_contact = encodeURIComponent(document.getElementById("message_txt").value);
  window.location.href = `mailto:nolan.delepine.pro@gmail.com?subject=${sujet_contact}%0AÀ propos de: ${nom_contact}&body=Nom: ${nom_contact}%0AMessage:%0A${message_contact}`;
})

function updateCarousel() {
  const itemWidth = item_langages[0].offsetWidth + 10; // + gap
  const visibleItems = Math.floor(langages.parentElement.offsetWidth / item_langages[0].offsetWidth);
  const maxIndex = item_langages.length - visibleItems;
  index = Math.max(0, Math.min(index, maxIndex));
  langages.style.transform = `translateX(-${index * itemWidth}px)`;
}

let index = 0;

// Boutons pour slider
next.addEventListener('click', () => {
  index++;
  updateCarousel();
  console.log("next");
});

prev.addEventListener('click', () => {
  index--;
  updateCarousel();
  console.log("prev");
});

// Auto slide 2s
setInterval(() => {
  index++;
  const visibleItems = Math.floor(langages.parentElement.offsetWidth / item_langages[0].offsetWidth);
  const maxIndex = item_langages.length - visibleItems;
  if(index > maxIndex) index = 0;
  updateCarousel();
}, 2000);

// Adapter pour resize
window.addEventListener('resize', updateCarousel);

const links = document.querySelectorAll('#ab_me_list a');
const sections = [...links].map(link =>
  document.querySelector(link.getAttribute('href'))
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link =>
        link.parentElement.classList.remove('selected')
      );

      const activeLink = [...links].find(
        link => link.getAttribute('href') === `#${entry.target.id}`
      );

      if (activeLink) {
        activeLink.parentElement.classList.add('selected');
      }
    }
  });
}, {
  root: document.querySelector('#secondaire'),
  threshold: 0.6
});

sections.forEach(section => observer.observe(section));


function cacherDiv() {
  div_proj_princ.style.display = "none";
  ab_me.style.display = "none";
  div_contact.style.display = "none"
}

function afficherDetail(){
  ci_detail.style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {
  const map = L.map('map').setView([45.6333, 5.3667], 13);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  
  const apiKey = "0571e6bc676b4d6e8e066db468e5d8d4";
  
  L.tileLayer(`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${apiKey}`, {
    attribution: '&copy; OpenWeatherMap',
    opacity: 0.5
  }).addTo(map);
});