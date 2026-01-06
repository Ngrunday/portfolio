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
const item_env = document.querySelectorAll('.env');
const item_field = document.querySelectorAll(".hobby");
const bout_contact = document.querySelector("#bout_form");
const div_contact = document.querySelector("#contact");
const mode = document.querySelector("#mode");
const princ = document.querySelector("#principal");
const div_proj = document.querySelector("#div_proj_princip");
const div_projet2 = document.querySelector("#div_projet");




//Projets 

const projects = [
  {
    img: "img/sitemeteo.png",
    date: "Juin 2025",
    title: "Site Web de consultation météo",
    desc: "J'ai réalisé ce projet lors de l'été 2025 afin de m'entrainer et d'affiner mes compétences en front end et surtout en back-end avec la gestion de requêtes API."
  },
  {
    img: "img/site_vitrine.png",
    date: "Janvier 2025",
    title: "Site vitrine",
    desc: "Site vitrine avec récupération de données API, travail réalisé à l'IUT de Valence dans le cadre d'un TP."
  }
];

const template_proj = document.querySelector('#project-template');

projects.forEach(p => {
  const clone = template_proj.content.cloneNode(true);

  clone.querySelector('img').src = p.img;
  clone.querySelector('img').alt = p.title;
  clone.querySelector('.date').textContent = p.date;
  clone.querySelector('.title').textContent = p.title;
  clone.querySelector('.desc').textContent = p.desc;

  div_projet2.appendChild(clone);
});

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
    item_env.forEach(element => {
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
    item_env.forEach(element => {
      element.classList.remove("clair");
      element.classList.add("sombre");
    });
  }
})




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
  div_proj.style.display  = "block";

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

const debian = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-original-wordmark.svg";
const ubuntu = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original-wordmark.svg";
const w10 = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg";
const w11 = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg";





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
  div_proj.style.display = "none";
  ab_me.style.display = "none";
  div_contact.style.display = "none"
}

//La map
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