function mudarTema() {
	document.body.classList.toggle("dark");
}

const botoesDiv = document.getElementById("botoes-projetos");
const frontDiv = document.getElementById("front-end");
const backDiv = document.getElementById("back-end");
const fullDiv = document.getElementById("fullstack");
const reactDiv = document.getElementById("react");
const voltarDiv = document.getElementById("voltar-div");

const btnFront = document.getElementById("front-button");
const btnBack = document.getElementById("back-button");
const btnFull = document.getElementById("fullstack-button");
const btnReact = document.getElementById("react-button");
const btnVoltar = document.getElementById("voltar-button");

botoesDiv.style.display = "block";
frontDiv.style.display = "none";
backDiv.style.display = "none";
fullDiv.style.display = "none";
reactDiv.style.display = "none";
voltarDiv.style.display = "none";

btnFront.onclick = function () {
	botoesDiv.style.display = "none";
	frontDiv.style.display = "block";
	backDiv.style.display = "none";
	fullDiv.style.display = "none";
	reactDiv.style.display = "none";
	voltarDiv.style.display = "block";
};

btnBack.onclick = function () {
	botoesDiv.style.display = "none";
	frontDiv.style.display = "none";
	backDiv.style.display = "block";
	fullDiv.style.display = "none";
	reactDiv.style.display = "none";
	voltarDiv.style.display = "block";
};

btnFull.onclick = function () {
	botoesDiv.style.display = "none";
	frontDiv.style.display = "none";
	backDiv.style.display = "none";
	fullDiv.style.display = "block";
	reactDiv.style.display = "none";
	voltarDiv.style.display = "block";
};

btnReact.onclick = function () {
	botoesDiv.style.display = "none";
	frontDiv.style.display = "none";
	backDiv.style.display = "none";
	fullDiv.style.display = "none";
	reactDiv.style.display = "block";
	voltarDiv.style.display = "block";
};

btnVoltar.onclick = function () {
	botoesDiv.style.display = "block";
	frontDiv.style.display = "none";
	backDiv.style.display = "none";
	fullDiv.style.display = "none";
	reactDiv.style.display = "none";
	voltarDiv.style.display = "none";
};