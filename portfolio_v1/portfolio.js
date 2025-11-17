const insta = document.querySelector("#insta");
const facebook = document.querySelector("#facebook");
const aboutme = document.querySelector("#aboutme");
const projets = document.querySelector("#project");
const contact = document.querySelector("#Contact");
const liste_nav = document.querySelectorAll("#navbar>li");
const secondaire = document.querySelector("#secondaire");
const ab_me = document.querySelector("#abme_princip");
const ab_me_list = document.querySelectorAll("#ab_me_list>li");
const muaythai = document.querySelector("#muaythai");
const muscu = document.querySelector("#muscu");
const rando = document.querySelector("#rando");
const alldiv = document.querySelectorAll("div");
const ci_detail = document.querySelector("#detail_ci");

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


muaythai.addEventListener("click",()=>{
  ci_detail
  afficherDetail();
});

function cacherDiv() {
  div_proj_princ.style.display = "none";
  ab_me.style.display = "none";
}

function afficherDetail(){
  ci_detail.style.display = "block";
}