// oui j'ai fait une array à 100 items :p
// je veux pas me casser la tete à faire des for etc.
const xps = [500,625,871,1240,1732,2350,3093,3964,4964,6093,7354,8748,10275,11938,13737,15675,17752,19969,22329,24832,27480,30275,33218,36310,39553,42949,46498,50203,54065,58086,62267,66609,71116,75787,80625,90807,96155,101677,107374,113247,119300,125533,131948,138548,145333,152306,159469,166824,174372,182116,190057,198198,206540,215085,223836,232794,241962,251342,260935,270745,280772,291020,301490,312185,323107,334258,345641,357257,369109,381201,393533,406108,418929,431998,445318,458891,472720,486808,501156,515767,530645,561209,576901,592870,609119,625650,642467,659571,676967,694657,712643,730930,749519,768414,787618,807135,826966,847116];

function calc() {
	
	// obtenir le niveau actuel + niveau demandé
	let goal = document.getElementById("levelGoal").value;
	let current = document.getElementById("level").value;

	// au cas où
	if(current >= goal) return error(1);
	if(current < 1 || current > 100 || goal < 1 || goal > 100) return error(2);

	// xp actuel et xp requis
	// -1 car les niveaux commencent à 1 et les indexs à 0
	let currentXP = xps[current-1];
	let goalXP = xps[goal-1];

	let min = 10;
	let max = 30;

	let requiredXP = goalXP-currentXP;

	let minMSG = requiredXP/max; // les chanceux :p
	let maxMSG = requiredXP/min;

	// affichage data
	document.getElementById("currentXP").innerHTML = currentXP;
	document.getElementById("requiredXP").innerHTML = goalXP;
	document.getElementById("missingXP").innerHTML = requiredXP;
	document.getElementById("minMSG").innerHTML = minMSG.toFixed(0);
	document.getElementById("maxMSG").innerHTML = maxMSG.toFixed(0);

	resultat(true)

}

function error(id) {

	resultat(false);

	// ici les erreurs
	let message = document.getElementById("resultat");
	if(id === 1) return message.innerHTML = `Erreur 1: Vous avez déjà atteint votre objectif.`;
	if(id === 2) return message.innerHTML = `Erreur 2: Assurez-vous que les deux valeurs soient comprises entre 1 et 100.`

}

function resultat(affiche) {
	let table = document.getElementById("tabler");
	if(affiche === false) return table.style.display = "none";
	if(affiche === true) return table.style.display = "inline";
}
