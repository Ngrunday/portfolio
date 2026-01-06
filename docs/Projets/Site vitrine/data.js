let data = [
	{
		name: 'Cable ethernet RJ45',
		description: '1,5m CAT 6',
		price: 12.65,
		picture: 'products/ethernet.jpg',
	},
	{
		name: 'Convertisseur USB RJ45',
		description: 'Fast Ethernet, USB 3',
		price: 19.95,
		picture: 'products/convertUSB3.jpg',
	},
	{
		name: 'Convertisseur USBC RJ45',
		description: 'USB-C to Ethernet',
		price: 25.48,
		picture: 'products/convertUSBC.jpg',
	},
	{
		name: 'Hub USB-C + Ethernet',
		description: 'USB-C vers 3xUSB3 + RJ45',
		price: 32.25,
		picture: 'products/hubUSBC.jpg',
	},
	{
		name: 'Carte PCI-e Ethernet Gigabit',
		description: 'Carte PCI Express RJ45 Gigabit',
		price: 29.99,
		picture: 'products/pcie-rj45.jpg',
	},
	{
		name: 'Cable RJ45 1m',
		description: 'Cpable mâle-mâle CAT7 - 1m',
		price: 7.52,
		picture: 'products/ethCAT7.jpg',
	}
];

	//AFFICHAGE AVEC DATA

	/*for(let i=0; i<= data.length -1; i++){

	let new_art = document.createElement("article");
	const div = document.createElement("div");
	const section = document.createElement("section");

	let new_img = document.createElement("img");
	let new_name = document.createElement("h4");
	let new_price = document.createElement("p");
	let new_desc = document.createElement("p");
	const button = document.createElement("button");
	button.textContent = "Ajouter a panier";

	new_desc.classList.add('description');
	new_price.classList.add('prix');

	new_name.textContent = data[i].name;
	new_img.src = "medias/images/"+data[i].picture;
	new_price.textContent = data[i].price+"€";
	new_desc.textContent = data[i].description;

	new_art.appendChild(new_img);
	section.appendChild(new_name);
	section.appendChild(new_desc);
	section.appendChild(new_price);
	div.appendChild(section);
	div.appendChild(button);
	new_art.appendChild(div);

	document.querySelector("#Articles").appendChild(new_art);
}*/


//récupération du json
async function get_info() {
	const rep = await fetch("https://iut.nathanael-spriet.fr/data.json");
	const json = await rep.json();
	return json;}


//on fait comme avec data
async function affichage(){
	modal();
	const json_tab = await get_info();
	const articles = document.querySelectorAll("#Articles article");
	articles.forEach((element) => {
		element.remove();
	});
	for(let j = 0; j<2;j++){
		for(let i=0; i<= json_tab.length -1; i++){

			const temp = document.querySelector("template").content;

			clone = temp.cloneNode(true);

			clone.querySelector(".description").classList.add('description');
			clone.querySelector(".prix").classList.add('.prix');

			clone.querySelector("h4").textContent = json_tab[i].name;
			clone.querySelector("img").src = "medias/images/"+json_tab[i].picture;
			clone.querySelector(".prix").textContent = json_tab[i].price+"€";
			clone.querySelector(".description").textContent = json_tab[i].description;
			clone.querySelector("button").textContent = "Ajouter au panier";

			document.querySelector("#Articles").appendChild(clone);

			/*let new_art = document.createElement("article");
			const div = document.createElement("div");
			const section = document.createElement("section");

			let new_img = document.createElement("img");
			let new_name = document.createElement("h4");
			let new_price = document.createElement("p");
			let new_desc = document.createElement("p");
			const button = document.createElement("button");
			button.textContent = "Ajouter a panier";
			new_art.appendChild(new_img);
			section.appendChild(new_name);
			section.appendChild(new_desc);
			section.appendChild(new_price);
			div.appendChild(section);
			div.appendChild(button);
			new_art.appendChild(div);

			document.querySelector("#Articles").appendChild(new_art);*/
		}
	}
}

affichage();


//modal d'attente (artciles grisés)
function modal(){
	for(let i = 0;i<12;i++){
		let new_art = document.createElement("article");
		const div = document.createElement("div");
		const section = document.createElement("section");

		let new_img = document.createElement("p");
		let new_name = document.createElement("p");
		let new_price = document.createElement("p");
		let new_desc = document.createElement("p");
		const button = document.createElement("button");

		new_desc.classList.add('desc');
		new_price.classList.add('pr');
		new_name.classList.add('tit');
		new_img.classList.add('image');
		button.classList.add('butt');
		section.classList.add("sec")
		

		new_art.appendChild(new_img);
		section.appendChild(new_name);
		section.appendChild(new_desc);
		section.appendChild(new_price);
		div.appendChild(section);
		div.appendChild(button);
		new_art.appendChild(div);

		document.querySelector("#Articles").appendChild(new_art);
	}
}


//pagination 
liste = document.querySelectorAll("nav>ul>li");
liste.forEach(element => {
	element.addEventListener("click",
		()=>{
		const page_actuelle = parseInt(document.querySelector(".b_selected").textContent);
		const num = element.textContent;
		if(num == "<"){
			if(page_actuelle === 1){
				alert("vous êtes déjà sur la première page");
				return;
			}
			window.location.href = "page" + (page_actuelle-1) + ".html";
			return;
		}
		if(num === ">"){
			if(page_actuelle === 16){
				alert("vous ne pouvez pas aller plus loin");
				return;
			}
			window.location.href = "page" + (page_actuelle+1) + ".html";
			return;
		}
		if(num === "...")
			return;
		window.location.href = "page" + num + ".html";
		return;
	})
})

//fonction pour cliquer sur les boutons et les changer de couleur

/*liste = document.querySelectorAll("nav>ul>li");
liste.forEach(element => {
	element.addEventListener("click",()=>{
		liste.forEach(el => {
			el.classList.remove("b_selected");
			el.classList.add("ele");
		});
		element.classList.add("b_selected");
	})
});*/
