function calc() {
	
	// obtenir le niveau actuel + niveau demandé
	let goal = document.getElementById("levelGoal").value;
	let current = document.getElementById("level").value;

	// au cas où
	if(current >= goal) return error(1);
	if(current < 1 || current > 100 || goal < 1 || goal > 100) return error(2);

	// plus tard je ferais des for et tout mais là flemme les Array sont bien plus opti
	let xps = [500,600]

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
