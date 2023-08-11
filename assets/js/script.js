/*
Autor: Jorge Marcelo
Data de Criação: 11/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 

/*Pegando elementos HTML pelo DOM*/
let contagem = new Date("jan 1, 2050 00:00").getTime();
let dias = document.getElementById("dia");
let horas = document.getElementById("hora");
let minutos = document.getElementById("minuto");
let segundos = document.getElementById("segundo");

/*unção que vai pegar a data atual*/ 
let intervalo = setInterval(function() {
let atual = new Date().getTime();
/*Calculo data selecionada - data atual*/
let subtracao = contagem - atual;

/*Convertendo dias, horas , munutos e segundos
para milesimos de segundos*/
dias = Math.floor(subtracao / (1000 * 60 * 60 * 24));
horas = Math.floor((subtracao % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
minutos = Math.floor((subtracao % (1000 * 60 * 60)) / (1000 * 60));
segundos = Math.floor((subtracao % (1000 * 60)) / 1000);


document.getElementById("dia").textContent = `${dias} dias `;
document.getElementById("hora").textContent = `${horas} horas `;
document.getElementById("minuto").textContent = `${minutos} minutos `;
document.getElementById("segundo").textContent = `${segundos} segundos `;

});

/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})