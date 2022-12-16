// Кэширование dom-структуры 
// Сброс значений до нуля 

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");



// Основная функция, случайно выбирающая значение из массива choices  

function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}



// Функция конвертации регистра 

function convertCase(anythingIwant) {
	if (anythingIwant === "paper") return "Бумага";
	if (anythingIwant === "scissors") return "Ножницы";
	if (anythingIwant === "rock") return "Камень";
}  



/* Функция условия выигрыша: обрабатывает клик на один из вариантов, затем передаёт значение в качестве параметра */ 

function win(user, computer) {
	userScore++;
	
// console.log("user score is " + userScore + " " + user);

	userScore_span.innerHTML = userScore;
	const userName = " (ты)".fontsize(3).sup();
	const compName = " (я)".fontsize(3).sup();
	result_div.innerHTML = `<p>${convertCase(user)}${userName} бьёт ${convertCase(computer)}${compName}. Ты победил!</p>`;
	const roundStatus = document.getElementById(user);
	roundStatus.classList.add("winningStyles");
	setTimeout(() => roundStatus.classList.remove("winningStyles"), 300);
} 



/* Функция условия проигрыша: обрабатывает клик на один из вариантов, затем передаёт значение в качестве параметра */
 
function loses(user, computer) {
	computerScore++;

// console.log("computer score is " + computerScore + " " + computer);

	computerScore_span.innerHTML = computerScore;
	const userName = " (ты)".fontsize(3).sup();
	const compName = " (я)".fontsize(3).sup();
	result_div.innerHTML = `<p>${convertCase(computer)}${compName} бьёт ${convertCase(user)}${userName}. Ты проиграл!</p>`;
	const roundStatus = document.getElementById(user);
	roundStatus.classList.add("losingStyles");
	setTimeout(() => roundStatus.classList.remove("losingStyles"), 300);
} 



/* Функция условия ничьей: обрабатывает клик на один из вариантов, затем передаёт значение в качестве параметра */

function draw(user, computer) {
	const userName = " (ты)".fontsize(3).sup();
	const compName = " (я)".fontsize(3).sup();
	result_div.innerHTML = `<p>Ничья! Мы оба выбрали ${convertCase(user)}</p>`;
	
// "It was a draw! You both chose " + user + " " + computer; 

	const roundStatus = document.getElementById(user); 
	roundStatus.classList.add("drawStyles");
	setTimeout(() => roundStatus.classList.remove("drawStyles"), 300);
}
 


// Функции логики игры (камень бьёт ножницы, ножницы бьют бумагу, бумага бьёт камень)

function game(userChoice) { 

const computerChoice = getComputerChoice();

// console.log("Game function: user choice is = " + userChoice);
// console.log("Game function: computer choice is = " + computerChoice);

	switch (userChoice + computerChoice) {
	case 'paperrock':
	case 'rockscissors':
	case 'scissorspaper':
	win(userChoice, computerChoice);
 
// console.log("user wins");

	break;
	case 'rockpaper':
	case 'scissorsrock':
	case 'paperscissors':
	loses(userChoice, computerChoice);

// console.log("computer wins");

	break;
	case 'rockrock':
	case 'scissorsscissors':
	case 'paperpaper':
	draw(userChoice, computerChoice);
	console.log("draw"); 
	break;
	}
}

// Функция установки прослушки событий на html-элементы, передача значений элемента в функцию game (90 строка)

function main() {
	rock_div.addEventListener('click', () => game('rock'));
	paper_div.addEventListener('click', () => game('paper'));
	scissors_div.addEventListener('click', () => game('scissors'));
}

main();  