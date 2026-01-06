const menu = document.querySelector("#menu");
const menu_liste = document.querySelector("#menu_liste");

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

const map = L.map('map').setView([48.8566, 2.3522], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const apiKey = "0571e6bc676b4d6e8e066db468e5d8d4";

L.tileLayer(`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${apiKey}`, {
    attribution: '&copy; OpenWeatherMap',
    opacity: 0.5
}).addTo(map);
