const select_ville = document.querySelector("#selec_ville");
const bout_entrer = document.querySelector("#entrer");
const liste_v_corresp = document.querySelector("#ville_corresp");
const v_corresp = document.querySelector("#ville_corresp>li");
const menu = document.querySelector("#menu");
const menu_liste = document.querySelector("#menu_liste");
const type = document.querySelector("#type");
const lab = document.querySelector("#placeh");

//zone de texte avec autocomplétion
select_ville.addEventListener('input',async ()=>{
    const ville = select_ville.value.trim();
    if(ville.length < 2){
        liste_v_corresp.innerHTML = ' ';
        return;
    }

    if(ville.length >= 2){
        const res = await fetch(`https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(ville)}&fields=nom&limit=30`);
        const result = await res.json();
        liste_v_corresp.innerHTML = ' ';

        if(result.length == 0){
            const erreur = document.createElement("li");
                erreur.textContent = "Aucune ville de  trouvée";
                liste_v_corresp.appendChild(erreur);
                return;
        }

        result.forEach(element => {
            const obj_liste = document.createElement("li");
            obj_liste.value = element.nom;
            obj_liste.textContent = element.nom;
            obj_liste.addEventListener('click',()=>{
                select_ville.value = obj_liste.textContent.trim();
                liste_v_corresp.innerHTML = ' ';
            })
            liste_v_corresp.appendChild(obj_liste);
        });
        return;
    }
})

//bouton entrer pour la recherche
bout_entrer.addEventListener("click",async (event)=>{

    event.preventDefault();
    const nom = select_ville.value;

    const load = new Image(200,200);
    load.src = "img/load.gif";

    select_ville.value = ' ';
    liste_v_corresp.innerHTML = ' ';
    document.querySelector("form").style.display = "none";

    document.querySelector("main").appendChild(load);

    type_affichage(nom,load);
});


menu.addEventListener("click",()=>{
    menu.classList.remove("menu_normal", "menu_tourne");
    if(menu_liste.style.display == "flex"){
        menu.classList.add("menu_normal");
        menu_liste.style.display = "none";
        document.querySelector("header").style.height = "10vh";
        document.querySelector("main").style.height = "90vh";
        return;
    }
    document.querySelector("header").style.height = "16vh";
    document.querySelector("main").style.height = "84vh";
    menu_liste.style.display = "flex";
    menu.classList.add("menu_tourne");
})


async function get_lat(ville) {
    const info = await fetch(`https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(ville)}&fields=centre&limit=1`);
    const resultat = await info.json();
    if(resultat.length === 0) return "error 0";
    return resultat[0].centre.coordinates[1];
}

async function get_long(ville) {
    const info = await fetch(`https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(ville)}&fields=centre&limit=1`);
    const resultat = await info.json();
    if(resultat.length === 0) return "error 0";
    return resultat[0].centre.coordinates[0];
}

async function get_infos(ville, type) {
    const lat = await get_lat(ville);
    const long = await get_long(ville);
    if(type == 1){
        const infos = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Europe/Paris`);
        const final_datas = await infos.json();
    }else{
        const infos = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m_max,temperature_2m_min,weathercode&timezone=Europe/Paris`);
        const final_datas = await infos.json();
    }
    return final_datas;
}

async function type_affichage(ville,load) {
    const my_infos = await get_infos(ville);
    console.log(my_infos);

    //affichage des infos météos de la semaine pour la ville selectionnée grave au json renvoyé par l'api

    const timezone = my_infos.timezone_abbreviation;

    const titre = document.createElement("div");
    const title = document.createElement("h1");
    const tab = document.createElement("table");
    title.textContent = ville +"("+timezone+") " + " ces prochains jours:";
    title.classList.add('titre_ville');

    titre.appendChild(title);
    titre.classList.add("title_infos");

    document.querySelector("main").removeChild(load);
    
    document.querySelector('main').appendChild(titre);

    const informations = document.createElement("div");
    for(let index = 0;index <=6;index++){
        const jour = document.createElement("div");
        const div_date = document.createElement("div");

        const date = my_infos.daily.time[index];
        const temp_max = my_infos.daily.temperature_2m_max[index];
        const temp_min = my_infos.daily.temperature_2m_min[index];
        const weathercode = my_infos.daily.weathercode[index];
        const emoji = new Image(100,100);
        emoji.style.width = "100%";
        emoji.style.marginTop = "10"

        if(weathercode == 0) emoji.src = "img/soleil.png";
        if(weathercode>0 && weathercode<45) emoji.src = "img/soleil_pet_nuage.png";
        if(weathercode>=45 & weathercode <=48) emoji.src = "img/brouillard.png";
        if(weathercode >=51 && weathercode<=55) emoji.src = "img/pluie.png";
        if(weathercode == 56 | weathercode == 57) emoji.src = "img/pluie_neige.png";
        if(weathercode>=61 && weathercode <=65) emoji.src = "img/pluie.png";
        if(weathercode ==66 | weathercode == 67) emoji.src = "img/pluie_neige.png";
        if(weathercode >=66 && weathercode <= 76) emoji.src = "img/pluie_neige.png";
        if(weathercode == 77) emoji.src = "img/flocon.png";
        if(weathercode >= 80 && weathercode <= 82) emoji.src = "img/parap.png";
        if(weathercode ==85 | weathercode == 86) emoji.src = "img/pluie_neige.png";
        if(weathercode == 95) emoji.src = "img/eclair.png";
        if(weathercode>95) emoji.src = "img/pluie_eclair.png";

        const laDate = new Date(""+date);
        const options = {
            weekday: "long",
            month: "long",
            day: "numeric"
        }
        const theDate = document.createElement("h2");
        theDate.textContent = laDate.toLocaleDateString("fr-FR",options);

        theDate.style.fontSize = "large";
        const theMaxTemp =document.createElement("p");
        theMaxTemp.textContent = "Temp. max : "+temp_max+"°C";
        const theMinTemp = document.createElement("p"); 
        theMinTemp.textContent = "Temp. min : "+temp_min+"°C";

        
        div_date.appendChild(theDate);
        div_date.classList.add("jour_titre");
        jour.appendChild(div_date);
        jour.appendChild(theMaxTemp);
        jour.appendChild(theMinTemp);
        jour.appendChild(emoji);
        jour.classList.add("jour_normal");

        informations.appendChild(jour);
        informations.classList.add("semaine");
        jour.addEventListener("click",() => {
            const toutlesjours = document.querySelectorAll(".jour_normal, .jour_selec");
            toutlesjours.forEach(element => {
                element.classList.remove("jour_selec");
                element.classList.add("jour_normal");
            });
            jour.classList.remove("jour_normal");
            jour.classList.add("jour_selec");
        })
    }
    const joursemaine = document.querySelectorAll(".jour_normal");
    document.querySelector("main").appendChild(informations);
    document.querySelector("main").style.flexDirection = "column";
    document.querySelector("main").style.backgroundImage = "url('img/ciel2.png')";
    return;
}