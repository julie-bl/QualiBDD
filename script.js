// Index de l'onglet actif (0 pour le premier, 1 pour le deuxième, etc.)
let currentTab = 0; 

// Liste des IDs d'onglet de questions 
const tabIds = ['onglet1', 'onglet2', 'onglet3', 'onglet4', 'onglet5']; 

//Commentaires de chaque question 
const commentairesQuestions = {
  q1: {
    "1": "Il existe une publication définissant la base de données et/ou son protocole dans une revue à comité de lecture.",
    "0.5": "Il n'existe pas encore de publication définissant la base de données et/ou son protocole dans une revue à comité de lecture.",
    "0": "Il n'existe pas de publication définissant la base de données et/ou son protocole dans une revue à comité de lecture."
  },
  q1b: {
    "0.5":"Un document interne existe.",
    "0": "Aucun document accessible avec au minimum la population cible, les critères d'inclusion, les variables collectées, la modalité de collecte et le contrôle qualité n'est accessible.",
    "na": "Vous avez répondu Oui ou En cours à la réponse précédente.",
},
  q2: {
    "1": "La base de données est partageable avec d'autres utilisateurs que votre équipe.",
    "0": "La base de données n'est pas partageable, cela limite son impact.",
  },
  q3: {
    "1": "Il esxiste une procédure formalisée pour accéder à la base de données.",
    "0": "Il n'esxiste aucune procédure formalisée pour accéder à la base de données.",
  },
  q4: {
    "1": "Il existe une instance scientifique pour l'évaluation des projets portant sur la base de données.",
    "0": "Il n'existe aucune instance scientifique pour l'évaluation des projets portant sur la base de données.",
  },
  q5: {
    "1": "Une équipe est disponible pour accompagner l'utilisabilité des données.",
    "0": "Acune équipe n'est disponible pour accompagner l'utilisabilité des données.",
  },
  q6: {
    "1": "Il existe un dictionnaire des variables.",
    "0": "Il n'existe aucun dictionnaire des variables (au minimum leurs définitions, formats, et modes de collecte).",
  },
  q6b: {
    "1": "Les modifications au cours du temps des variables et de leurs codage (versioning des modifications) sont intégrées au dictionnaire.",
    "0": "Les modifications au cours du temps des variables et de leurs codage (versioning des modifications) ne sont pas intégrées au dictionnaire (ou réponse non à la question précédente).",
    "na": "Non applicable car il s'agit d'une étude transversale."
  },
  q7: {
    "1": "Il existe une formation du personnel de collecte.",
    "0": "Il n'existe aucune formation du personnel de collecte.",
    "na": "Non applicable pour cette question."
  },
  q8: {
    "1": "Il existe un protocole formalisé pour standardiser la collecte.",
    "0": "Il n'existe aucun protocole formalisé pour standardiser la collecte.",
  },
  q9: {
    "1": "Il existe des contrôles de cohérence à la collecte.",
    "0": "Il n'existe pas de contrôles de cohérence à la collecte.",
  },
  q10: {
    "1": "Il existe des audits de qualité internes.",
    "0": "Il n'existe pas d'audits de qualité internes.",
  },
  q11: {
    "1": "Il existe des audits de qualité externes.",
    "0": "Il n'existe pas d'audits de qualité externes.",
  },
  q12: {
    "1": "Des classifications standardisées sont utilisées.",
    "0": "Aucunes classifications standardisées ne sont utilisées (par exemple : CIM-10, questionnaires validés, etc.).",
    "na":"Non applicable pour cette question."
  },
  q13: {
    "1": "Les instruments de mesure sont régulièrement standardisés, calibrés, vérifiés.",
    "0": "Les instruments de mesure ne sont pas régulièrement standardisés, calibrés, vérifiés.",
    "na": "Non applicable pour cette question."
  },
  q14: {
    "1": "Pour les collections biologiques, il existe des consignes de traitement et de stockage des échantillons.",
    "0": "Pour les collections biologiques, il n'existe pas de consignes de traitement et de stockage des échantillons.",
    "na": "Non applicable pour cette question."
  },
  q15: {
    "1": "Pour l'imgagerie, il existe des consignes de réalisation des clichés.",
    "0": "Pour l'imgagerie, il n'existe aucunes consignes de réalisation des clichés.",
    "na": "Non applicable pour cette question."
  },
  q16: {
    "1": "Il existe un cahier des charges de data management décrivant le processus de mise en qualité des données.",
    "0": "Il n'existe aucun cahier des charges de data management décrivant le processus de mise en qualité des données.",
  },
  q17: {
    "1": "Les modifications apportées aux données après la collecte sont traçables.",
    "0": "Les modifications apportées aux données après la collecte ne sont pas traçables.",
  },
  q18: {
    "1": "Il est possible d'accéder à la fois aux données brutes et aux données travaillées.",
    "0": "Il est impossible d'accéder à la fois aux données brutes et aux données travaillées (par exemple : nettoyage, recodage, etc.).",
    "na": "Non applicable pour cette question."
  },
   q19: {
    "1": "Il existe des indicateurs de qualité régulièrement calculés à partir des données collectées.",
    "0": "Il n'y a pas d'indicateurs de qualité régulièrement calculés à partir des données collectées.",
  },
   q20: {
    "1": "La base de données est engagée dans un processus normatif.",
    "0.5": "La base de données est en cours d'engagement dans un processus normatif (par exemple : BCP, BPE, NF, ISO, etc.).",
    "0": "La base de données n'est pas engagée dans un processus normatif (par exemple : BCP, BPE, NF, ISO, etc.).",
  },
   q21: {
    "1": "Le régime juridique de la base de données déclarée à la CNIL est un entrepôt de données.",
    "0.75": "Le régime juridique de la base de données déclarée à la CNIL est en demande de changement de statut d'étude à celui d'entrepôt.",
    "0.5": "Le régime juridique de la base de données déclarée à la CNIL est une recherche, une étude ou une évaluation ponctuelle."
  },
   q22: {
    "1": "L'information à l'inclusion des sujets prévoit la réutilisation secondaire de leurs données.",
    "0": "L'information à l'inclusion des sujets prévoit la réutilisation secondaire de leurs données.",
  },
   q22b: {
    "1": "Les canaux d'information des patients sont fonctionnels.",
    "0": "Les canaux d'information des patients ne sont pas fonctionnels (ou réponse non à la question précédente).",
  },
   q23: {
    "1": "La base de données a fait l'objet d'une évaluation par un organisme indépendant.",
    "0": "La base de données n'a pas fait l'objet d'une évaluation par un organisme indépendant (par exemple : ANR, comité d'évaluation des registres, etc.).",
  },
   q24: {
    "1": "La liste des projets initiés à partir de la base est publiquement accessible.",
    "0": "La liste des projets initiés à partir de la base n'est pas publiquement accessible.",
  },
   q25: {
    "1": "La liste des publications scientifiques issues de la base avec les principaux résultats est publiquement accessible.",
    "0": "La liste des publications scientifiques issues de la base avec les principaux résultats n'est pas publiquement accessible.",
  },
   q26: {
    "1": "Il existe une communauté structurée d'utilisateurs de la base de données.",
    "0": "Il n'existe aucune communauté structurée d'utilisateurs de la base de données (par exemple : club utilisateurs, consortium).",
  }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Gestion de l'affichage des onglets et de l'état actif des boutons
function voirOnglet(id) {
  var onglets = document.getElementsByClassName('tab-content');
  var tabButtons = document.querySelectorAll('.tabs button'); // Sélectionne tous les boutons des onglets supérieurs

  // Cache tous les onglets et désactive tous les boutons d'onglet
  for (var i = 0; i < onglets.length; i++) {
    onglets[i].style.display = 'none';
    if (tabButtons[i]) { // S'assurer que le bouton existe 
        tabButtons[i].classList.remove('active');//Enlève le CSS "actif" d'un onglet désactivé
    }
  } 
  // Affiche l'onglet cliqué
  var actif = document.getElementById(id);
  actif.style.display = 'block';

  // Active le bouton correspondant à l'onglet affiché
  const tabIndex = tabIds.indexOf(id);
  if (tabIndex !== -1 && tabButtons[tabIndex]) {
      tabButtons[tabIndex].classList.add('active');
      currentTab = tabIndex; // Met à jour l'index de l'onglet courant
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Fonction pour afficher un onglet spécifique via son ID (utilisé pour les boutons du haut)
function voirOngletSpe(id) {
    //Cherche la position de l'id dans le tableau
    const index = tabIds.indexOf(id);if (index === -1) return;

    // Vérifie que tous les onglets précédents sont remplis
    for (let i = 0; i < index; i++) {
        const onglet = document.getElementById(tabIds[i]);
        if (!VerifRep(onglet)) {
            alert("Veuillez répondre à toutes les questions des onglets précédents avant d'accéder à celui-ci.");
            return;
        }
    }
    // Si tout est ok, affiche l'onglet demandé
    voirOnglet(id);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fonction pour vérifier si toutes les questions visibles d'un onglet sont répondues
function VerifRep(tabElement) {
    const radioGroups = {};
    // On ne sélectionne que les radios visibles
    const inputs = tabElement.querySelectorAll('input[type="radio"]');

    inputs.forEach(input => {
        // Vérifie si le radio est visible (ni lui ni un parent n'est en display:none)
        let el = input;
        let visible = true;
        while (el && el !== tabElement) {
          //window.getComputedStyle(el) récupère toutes les propriétés CSS calculées de l’élément el
            if (window.getComputedStyle(el).display === "none") {
                visible = false;
                break;
            }
            el = el.parentElement;
        }
        if (!visible) return; // On ignore les radios masqués

        const name = input.name;
        if (!radioGroups[name]) {
            radioGroups[name] = false;
        }
        if (input.checked) {
            radioGroups[name] = true;
        }
    });
    // Vérifie si tous les groupes de radio visibles ont au moins une réponse cochée
    for (const groupName in radioGroups) {
        if (!radioGroups[groupName]) {
            return false;
        }
    }
    return true;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Fonction pour passer à l'onglet suivant
function passerOnglet() {
  const currentTabId = tabIds[currentTab];
  const currentTabElement = document.getElementById(currentTabId);

  // Vérifiez si toutes les questions de l'onglet actuel sont répondues
  if (!VerifRep(currentTabElement)) {
      alert("Veuillez répondre à toutes les questions avant de passer à l'onglet suivant.");
      return; // Ne pas passer à l'onglet suivant si des questions sont en suspens
  }

  if (currentTab < tabIds.length - 1) { // Tant que ce n'est pas le dernier onglet de questions
    voirOnglet(tabIds[currentTab + 1]); // Passe à l'onglet suivant par son ID
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function precedentOnglet() {
  if (currentTab > 0) {
    voirOnglet(tabIds[currentTab - 1]);
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Initialise l'affichage au chargement de la page pour montrer le premier onglet
document.addEventListener('DOMContentLoaded', () => {
  voirOnglet(tabIds[0]); // Affiche le premier onglet (onglet1) au chargement de la page
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Gestion des quetsions "si oui" et "si non"
document.addEventListener('DOMContentLoaded', () => {
  voirOnglet(tabIds[0]);

  // Gestion q1b (choix " si non (...) ")
  const onglet1 = document.getElementById('onglet1');
  const q1Radios = onglet1.querySelectorAll('input[name="q1"]');
  const q1bContainer = document.getElementById('q1b-container');
  //Pour chaque bouton radio de la question 1 
  q1Radios.forEach(radio => {
    //Ajoute un événement qui se déclenche quand la valeur change
    radio.addEventListener('change', () => {
      if (radio.value === 'non') {
        q1bContainer.style.display = '';
      } else {
      q1bContainer.style.display = 'none';
      //Sélectionne tous les boutons radio de la sous-question 1b
      const q1bRadios = onglet1.querySelectorAll('input[name="q1b"]');
      q1bRadios.forEach(rb => {
        // Décocher q1b si caché et cocher "na"
        rb.checked = (rb.value === 'na');
      });
    }
    });
  });

  // Gestion q6b ( choix "si oui (...)" ") 
  const q6Radios = onglet1.querySelectorAll('input[name="q6"]');
  const q6bContainer = document.getElementById('q6b-container');
  q6Radios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.value === 'oui') {
      q6bContainer.style.display = '';
    } else {
      q6bContainer.style.display = 'none';
      // Coche "non" pour q6b
      const q6bRadios = onglet1.querySelectorAll('input[name="q6b"]');
      q6bRadios.forEach(rb => {
        rb.checked = (rb.value === 'non');
      });
    }
  });
});

  // Gestion q22b ( choix "si oui (...)" ") 
  const onglet4 = document.getElementById('onglet4');
  const q22Radios = onglet4.querySelectorAll('input[name="q22"]');
  const q22bContainer = document.getElementById('q22b-container');
 q22Radios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.value === 'oui') {
      q22bContainer.style.display = '';
    } else {
      q22bContainer.style.display = 'none';
      // Coche "non" pour q22b
      const q22bRadios = onglet4.querySelectorAll('input[name="q22b"]');
      q22bRadios.forEach(rb => {
        rb.checked = (rb.value === 'non');
      });
    }
  });
});
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Fonction qui attribue une image en fonction du score d'une question
function getImageForScore(score) {
  if (score === "1") return "Images/bien.png";
  if (score === "0.75" || score === "0.5") return "Images/moyen.png";
  if (score === "0") return "Images/mauvais.png";
  if (score === "na") return "Images/na.png";
  return "Images/vide.png";
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Fonction qui calcul le score global 
function calculerScore() {
    var inputs = document.getElementsByTagName('input'); // Récupère tous les éléments inputs du doc html
    var total = 0; // Nombre total de points
    var max = 28; // Nombre maximum de points applicable, initialisé à 0

    // Pour gérer les questions "na" et les groupes de radio, on récupère toutes les réponses cochées par groupe de question (par leur 'name')
    const checkedAnswers = {}; //ex: { 'q1': '1', 'q1b': '0.5', 'q2': 'na', ... }

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'radio' && inputs[i].checked) {
          //Enregistre dans l’objet checkedAnswers la valeur de l’attribut data-score pour ce groupe de questions (identifié par name)
          checkedAnswers[inputs[i].name] = inputs[i].getAttribute('data-score');
        }
    }

    // Parcours les réponses cochées pour calculer le total
    for (var questionName in checkedAnswers) {
        var scoreText = checkedAnswers[questionName];

        if (scoreText === "na" || scoreText === null) {
          max--;
            // Si la réponse est "na",cette question n'est PAS comptabilisée dans le 'max' total
        } else {
            var score = parseFloat(scoreText); // Passe la variable score en float
            if (!isNaN(score)) { // Si c'est un score numérique
                total += score; // Ajoute le score de la question au total
            }
        }
    }

    // Calcul le total de points en %
    let pourcentageGlobal;
    if (max === 0) { // Pour éviter la division par zéro si aucune question applicable n'a été répondue
        pourcentageGlobal = "Non applicable";
    } else {
        pourcentageGlobal = Math.round((total / max) * 100);
    }

     return pourcentageGlobal + "/100";
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Fonction qui calclule le détail des scores par catégorie 
function calculerdetail() {
    var onglets = document.getElementsByClassName('tab-content');
    var resultats = []; // Tableau de résultats

    // Boucle dans chaque onglet de questions
    for (var i = 0; i < tabIds.length; i++) { 
        var onglet = onglets[i]; // Utilise l'index direct car onglets est déjà filtré par tab-content
        var inputs = onglet.getElementsByTagName('input'); // Inputs de cet onglet
        
        var total = 0; // Score total pour cet onglet
        var max = parseInt(onglets[i].getAttribute('data_max'));//Récupère la valeur max de chaque onglet

        // Comme pour calculerScore, on récupère les réponses cochées uniques par groupe de question dans cet onglet
        const checkedAnswersOnglet = {};
        for (var j = 0; j < inputs.length; j++) {
            if (inputs[j].type === 'radio' && inputs[j].checked) {
                checkedAnswersOnglet[inputs[j].name] = inputs[j].getAttribute('data-score');
            }
        }

        // Calcule le 'total' et le 'max' applicable pour cet onglet
        for (var questionName in checkedAnswersOnglet) {
            var scoreText = checkedAnswersOnglet[questionName];

if (i === 0 && questionName === "q1b" && scoreText === "na") {
                continue; // On ignore q1b "na" sans modifier le max
            }

            if (scoreText === "na" || scoreText === null) {
              max--
                // Cette question n'est PAS comptabilisée dans le 'max' de cet onglet.
            } else {
                var score = parseFloat(scoreText);
                if (!isNaN(score)) {
                    total += score;
                   // Chaque question répondue avec un score numérique ajoute 1 au 'max' de l'onglet
                }
            }
        }
        
        let pourcentageOnglet;
        if (max === 0) { // Pour éviter la division par zéro si aucune question applicable n'a été répondue dans cet onglet
            pourcentageOnglet = "Non applicable";
        } else {
            pourcentageOnglet = Math.round((total / max) * 100);
        }
        
        // Ajout du titre et du score
        var titre = "";
        if (i === 0) titre = "Structuration pour l’ouverture à la recherche";
        else if (i === 1) titre = "Procédures de mise en qualité";
        else if (i === 2) titre = "Traçabilité du processus qualité";
        else if (i === 3) titre = "Normes et réglementations";
        else titre = "Évaluation externe, publications et animation";

        resultats.push("<strong>" + titre + "</strong>" + " : " + pourcentageOnglet + "/100<br><br><br>");
    }
    return resultats.join("");
  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Fonction qui affiche un point de couleur à coté du resultat 
function pointCouleur(score) {
    const n = parseFloat(score.replace('%', '').replace(',', '.'));
    if (isNaN(n)) return '#cccccc'; // gris si non numérique
    if (n <= 20 ) return '#f23311'; // rouge
    if (n <= 40 ) return '#ffa81c'; // orange
    if (n <= 60 ) return '#c9f70f'; // jaune
    if (n <= 80 ) return '#00d600'; // vert clair
    return '#0c9c0c'; // vert foncé
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Fonction qui affiche les résultats
function voirResultats() {

//Chevrons (flèches pour le détail des catégories)
const arrowChevronRight = `<svg class="detail-arrow" width="24" height="24" viewBox="0 0 24 24" style="vertical-align:middle;"><path d="M8 5l8 7-8 7" stroke="#280147" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const arrowChevronDown = `<svg class="detail-arrow" width="24" height="24" viewBox="0 0 24 24" style="vertical-align:middle; transform: rotate(90deg);"><path d="M8 5l8 7-8 7" stroke="#280147" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  
const currentTabId = tabIds[currentTab];
const currentTabElement = document.getElementById(currentTabId);



// Vérifie que tous les onglets sont remplis
for (let i = 0; i < tabIds.length; i++) {
    const onglet = document.getElementById(tabIds[i]);
    if (!VerifRep(onglet)) {
        alert("Veuillez répondre à toutes les questions avant de voir les résultats.");
        return;
    }
}

  // Calculer les scores 
  const scoreTotalText = calculerScore();
  document.getElementById('score-total').innerText = scoreTotalText;

  const scoreDot = document.getElementById('score-dot');
 //chercher un nombre suivi de / 100 dans la chaîne scoreTotalText
 //(\d+) capture un ou plusieurs chiffres (le score) 
 // \s* permet qu’il y ait des espaces autour du /
  const match = scoreTotalText.match(/(\d+)\s*\/\s*100/);
  if (scoreDot && match) {
      scoreDot.style.background = pointCouleur(match[1]);
  } else if (scoreDot) {
      scoreDot.style.background = '#cccccc';
  }

  //Création des commentaires basiques comme sur yuka
const scoreGlobalComment = document.getElementById('score-global-comment');
let commentaireYuka = "";
const matchScore = scoreTotalText.match(/(\d+)\s*\/\s*100/);
if (matchScore) {
    const score = parseInt(matchScore[1]);
    if (score <= 20) commentaireYuka = "Mauvais";
    else if (score <= 40) commentaireYuka = "Médiocre";
    else if (score <= 60) commentaireYuka = "Moyen";
    else if (score <= 80) commentaireYuka = "Bon";
    else commentaireYuka = "Excellent";
} else {
    commentaireYuka = "";
}
if (scoreGlobalComment) scoreGlobalComment.textContent = commentaireYuka;

// Génère la liste des catégories avec détail déroulant
const scoresOngletsHTML = calculerdetail();
//Découpe la chaîne scoresOngletsHTML et enlève tous les éléments qui sont vides ou ne contiennent que des espaces
const categoriesData = scoresOngletsHTML.split('<br><br><br>').filter(item => item.trim() !== '');

// Icones des catégories
const icons = [
  '<img src="Images/database_icon.png" alt="Structuration" class="categorie-icon-img">',
  '<img src="Images/quality_icon.png" alt="Qualité" class="categorie-icon-img">',
  '<img src="Images/magnifying_glass_icon.png" alt="Traçabilité" class="categorie-icon-img">',
  '<img src="Images/balance_icon.png" alt="Réglementations" class="categorie-icon-img">',
  '<img src="Images/group_discussion_icon.png" alt="Évaluation externe" class="categorie-icon-img">'
];

// On prépare deux tableaux : défauts et qualités
const defauts = [];
const qualites = [];

//Pour chaque élément de la liste
categoriesData.forEach((item, idx) => {
 // Sert à trouver le texte entre <strong> et </strong> dans une chaîne HTML
  const strongRegex = /<strong>(.*?)<\/strong>/;
 // Sert à trouver un nombre précédé de : et suivi de /100 
  const scoreRegex = /: (\d+)\/100/;
  const titleMatch = item.match(strongRegex);
  const scoreMatch = item.match(scoreRegex);
  //Si un titre a été trouvé, on le récupère et on enlève les espaces autour. Sinon, on met une chaîne vide
  let titre = titleMatch ? titleMatch[1].trim() : '';
  //Si un score a été trouvé, on le récupère et on enlève les espaces autour. Sinon, on met une chaîne vide
  let note = scoreMatch ? scoreMatch[1].trim() : '';
  let color = pointCouleur(note);

  // Détail des questions pour cette catégorie
  const onglet = document.getElementsByClassName('tab-content')[idx];
  //Sélectionne tous les éléments <p> à l’intérieur de l’onglet et convertit la liste retournée par querySelectorAll (qui n’est pas un vrai tableau) en un tableau JavaScript.
  const questions = Array.from(onglet.querySelectorAll('p')).map((p, qIdx) => {
    
    // Cherche les radios juste après le <p>
    const radios = [];
    let el = p.nextElementSibling;
    while (el && (el.tagName === 'LABEL' || el.tagName === 'BR' || (el.tagName === 'DIV' && el.classList.contains('radio-group')))) {
      if (el.tagName === 'LABEL') {
        radios.push(el.querySelector('input[type="radio"]'));
      } else if (el.tagName === 'DIV' && el.classList.contains('radio-group')) {
        el.querySelectorAll('input[type="radio"]').forEach(radio => radios.push(radio));
      }
      el = el.nextElementSibling;
    }
    //Si le tbaleau est vide, on quitte la fonction
    if (radios.length === 0) return '';
    //cherche dans le tableau de radios le premier élément qui existe (r) et qui est coché (r.checked)
    const checked = radios.find(r => r && r.checked);
    let pastille = '#cccccc', commentaire = '';
    let questionName = '';

  //Si le premier élément du tableau radios existe, alors on récupère son attribut name et on le stocke dans la variable questionName
  if (radios[0]) questionName = radios[0].name;

    if (checked) {
      const score = checked.getAttribute('data-score');
      //Vérifie que la question existe dans commentairesQuestions et qu’il y a bien un commentaire pour ce score précis
      if (commentairesQuestions[questionName] && commentairesQuestions[questionName][score] !== undefined) {
        //Récupère le commentaire correspondant à ce score pour cette question 
        commentaire = commentairesQuestions[questionName][score];

     //Si les commentaires ne sont pas trouvés, on utilises des commentaires de base 
      } else {
        if (score === "1") commentaire = "Critère rempli";
        else if (score === "0.75" || score === "0.5") commentaire = "Critère partiellement rempli";
        else if (score === "0") commentaire = "Critère non rempli";
        else if (score === "na") commentaire = "Non applicable";
        else commentaire = "Réponse non attendue";
      }
      //Couleur de la pastille
      if (score === "1") pastille = '#00d600';
      else if (score === "0.75" || score === "0.5") pastille = '#c9f70f';
      else if (score === "0") pastille = '#f23311';
      else if (score === "na") pastille = '#cccccc';
    } else {
      pastille = '#cccccc';
      commentaire = "Question non répondue ou ne nécessitant pas de réponse dans votre cas";
    }
  return `
  <div class="detail-question-row">
  <!--Affiche le commentaire associé à la réponse de la question-->
    <span class="detail-question-comment">${commentaire}</span>
  <!--Affiche une image correspondant au score de la réponse-->  
    <img src="${getImageForScore(checked ? checked.getAttribute('data-score') : null)}" 
         alt="pastille" 
         class="detail-question-dot" 
         style="width:23px;height:23px;display:inline-block;margin-left:10px;vertical-align:middle;">
  </div>
  <br>
`;
  }
).join('');

  // Jauge de score

  //Calcule le pourcentage à afficher sur la jauge, en s’assurant qu’il est entre 0 et 100
  const percent = Math.max(0, Math.min(100, parseInt(note) || 0));
  const bloc = `
  <!--Ligne cliquable pour ouvrir/fermer le détail de la catégorie-->
    <div class="categorie-score-row detail-toggle" data-idx="${idx}">
      <div class="categorie-score-header">
        ${arrowChevronRight}
        <span class="categorie-icon" style="margin-right:10px;">${icons[idx] || ""}</span>
        <span class="categorie-score-title">${titre}</span>
      </div>
      <div class="categorie-score-values">
        <span class="categorie-score-value">${note}/100</span>
        <span class="score-dot" style="background:${color};"></span>
      </div>
    </div>
    <div class="categorie-detail-content" style="display:none;">
      <br><br>
      <!--Affiche une jauge horizontale avec un indicateur positionné selon le score (left:calc(${percent}%);)-->
      <div class="jauge-bar-container">
        <div class="jauge-bar-bg"></div>
        <div class="jauge-bar-indicator" style="left:calc(${percent}%);"></div>
        <div style="display:flex; justify-content:space-between; width:100%; font-size:0.95em; color:#666; margin-top:0px;">
          <span>0</span>
          <span>100</span>
        </div>
      </div>
      <br><br>
      <!--Affiche la liste détaillée des questions de la catégorie-->
      <div class="detail-questions-list">${questions}</div>
    </div>
  `;

  // Classement dans défauts ou qualités
  if (parseInt(note) <= 50) {
    defauts.push({ note: parseInt(note), bloc });
  } else {
    qualites.push({ note: parseInt(note), bloc });
  }
});

// Trie du plus mauvais au meilleur dans chaque groupe
defauts.sort((a, b) => a.note - b.note);
qualites.sort((a, b) => a.note - b.note);

// Génération du HTML final
let categoriesHTML = '';
const scoreTotalInt = parseInt(scoreTotalText)

//Si le score est inférieur à 50, on affiche les défauts puis les qualités
if (scoreTotalInt <= 50 ){
if (defauts.length) {
  categoriesHTML += `<h3 >Défauts</h3>`;
  categoriesHTML += defauts.map(d => d.bloc).join('');
  //categoriesHTML += `<p id="vide"></p>`;
}
if (qualites.length) {
  categoriesHTML += `<h3><br>Qualités</h3>`;
  categoriesHTML += qualites.map(q => q.bloc).join('');
  categoriesHTML += `<br><br>`;

}
}

//Si le score est supérieur à 50, on affiche les qualités puis les défauts
else {
if (qualites.length) {
  categoriesHTML += `<h3>Qualités</h3>`;
  categoriesHTML += qualites.map(q => q.bloc).join('');
}
if (defauts.length) {
  categoriesHTML += `<h3 ><br>Défauts</h3>`;
  categoriesHTML += defauts.map(d => d.bloc).join('');
  categoriesHTML += `<br><br>`;
}
}

//Remplace tout le contenu HTML de l’élément HTML dont l’id est scores-categories par la valeur de la variable categoriesHTML
document.getElementById('scores-categories').innerHTML = categoriesHTML;

// Ajoute l'interactivité pour la flèche (chavron pour ouvrir et fermer le détail)
document.querySelectorAll('.detail-toggle').forEach((row, idx, arr) => {
  //Quand on clique sur la ligne row, la fonction s'exécute
  row.addEventListener('click', function() {
    //Récupère l’élément HTML juste après row dans le DOM (le bloc de détail à ouvrir/fermer)
    const detail = this.nextElementSibling;
    const arrow = this.querySelector('.detail-arrow');
    const modalContent = document.querySelector('#modal-resultats .modal-content');

    // Ferme tous les autres détails ouverts
    document.querySelectorAll('.categorie-detail-content').forEach((otherDetail, otherIdx) => {
      if (otherDetail !== detail) {
        otherDetail.style.display = 'none';
        const otherHeader = otherDetail.previousElementSibling;
        if (otherHeader) {
          otherHeader.classList.remove('no-border');
          const otherArrow = otherHeader.querySelector('.detail-arrow');
          if (otherArrow) {
            otherArrow.outerHTML = `<svg class="detail-arrow" width="24" height="24" viewBox="0 0 24 24" style="vertical-align:middle; transform: rotate(90deg);"><path d="M8 5l8 7-8 7" stroke="#280147" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
          }
        }
      }
    });

    // Ouvre ou ferme le détail cliqué
    if (detail.style.display === 'none') {
      detail.style.display = 'block';
      arrow.outerHTML = `<svg class="detail-arrow" width="24" height="24" viewBox="0 0 24 24" style="vertical-align:middle;"><path d="M8 5l8 7-8 7" stroke="#280147" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      this.classList.add('no-border');
      detail.classList.add('with-border');

      // Scroll automatique du bloc détaillé en haut de la modale
      if (modalContent) {
        //Récupère la position et la taille de l’élément cliqué (this) par rapport à la fenêtre
        const rect = this.getBoundingClientRect();
        //Récupère la position et la taille du conteneur de la modale
        const modalRect = modalContent.getBoundingClientRect();
        //Ajuste le défilement vertical (scrollTop) du contenu de la modale pour faire remonter l’élément cliqué en haut de la modale (avec un petit décalage de 8 pixels)
        modalContent.scrollTop += rect.top - modalRect.top - 8;
      }
    } else {
      detail.style.display = 'none';
      arrow.outerHTML = `<svg class="detail-arrow" width="24" height="24" viewBox="0 0 24 24" style="vertical-align:middle; transform: rotate(90deg);"><path d="M8 5l8 7-8 7" stroke="#280147" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      this.classList.remove('no-border');
      detail.classList.remove('with-border');
    }
  });
});

  // Affiche la modale
  document.getElementById('modal-resultats').style.display = 'flex';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fermerModalResultats() {
    document.getElementById('modal-resultats').style.display = 'none';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Fonction pour télécharger le PDF depuis la modale
function telechargerPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    const marginX = 15;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - 2 * marginX;
    let positionY = 20;

    const imageData = 'data:image/png;base64,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';

    // Titre + image
    doc.autoTable({
        startY: positionY,
        body: [[
            { content: 'Indice de qualité de la base de donnée', styles: { fontSize: 18, fontStyle: 'bold', textColor: [0, 0, 0] } },
            { content: '', styles: { cellWidth: contentWidth * 0.2, minCellHeight: 30 } }
        ]],
        didDrawCell: function (data) {
            if (data.column.index === 1 && data.cell.section === 'body') {
                doc.addImage(imageData, 'PNG', data.cell.x + (data.cell.width / 2) - 12.5, data.cell.y + (data.cell.height / 2) - 12.5, 25, 25);
            }
        },
        theme: 'grid',
        tableWidth: contentWidth,
        styles: { cellPadding: 0, halign: 'center', valign: 'middle', textColor: [0, 0, 0], lineColor: [0, 0, 0] },
        columnStyles: { 0: { cellWidth: contentWidth * 0.8 }, 1: { cellWidth: contentWidth * 0.2, halign: 'right' } },
        margin: { left: marginX, right: marginX }
    });
    positionY = doc.autoTable.previous.finalY + 15;

    // Texte informatif
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(12);
    const textQualite = "La qualité des données est essentielle pour la recherche et l’innovation en santé et incontournable pour leur partage. Sous l’impulsion du MESRI, un groupe de travail s’est mobilisé pour proposer un outil d’auto-évaluation pour les responsables de base de données en santé. L’objectif est d’identifier les points forts et faibles de la gestion de la qualité et du partage. Cet outil n’a pas vocation à interclasser des bases de données.";
    const splitTextQualite = doc.splitTextToSize(textQualite, contentWidth);
    doc.text(splitTextQualite, marginX, positionY);
    positionY += (splitTextQualite.length * 5) + 10;

    // Date
    doc.autoTable({
        startY: positionY,
        body: [['Date du calcul', new Date().toLocaleDateString('fr-FR')]],
        theme: 'grid',
        tableWidth: contentWidth,
        styles: { cellPadding: 2, halign: 'left', valign: 'middle', fontSize: 12, textColor: [0, 0, 0], lineColor: [0, 0, 0] },
        columnStyles: { 0: { cellWidth: contentWidth * 0.5 }, 1: { cellWidth: contentWidth * 0.5 } },
        margin: { left: marginX, right: marginX },
        didParseCell: function(data) {
            if (data.column.index === 0 && data.cell.section === 'body') {
                data.cell.styles.fillColor = [212, 212, 212];
            }
        }
    });
    positionY = doc.autoTable.previous.finalY + 20;

    // Détail des scores
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Détail des scores', marginX, positionY);
    positionY += 10;

// Récupération et formatage des scores
const scoresOngletsHTML = calculerdetail();
const categoriesData = scoresOngletsHTML.split('<br><br><br>').filter(item => item.trim() !== '');
const tableRows = categoriesData.map(item => {
    const title = (item.match(/<strong>(.*?)<\/strong>/) || [])[1] || 'N/A';
    const score = (item.match(/: (\d+)\s*\/\s*100/) || [])[1] || 'N/A';
    return [title, score + ' /100'];
});

// Score global
const globalScore = (document.getElementById('score-total').innerText.match(/(\d+)\s*\/\s*100/) || [])[1] || 'N/A';
const getScoreColor = score => {
    const n = parseFloat(score.replace('/100', '').replace(',', '.'));
    if (isNaN(n)) return [212, 212, 212];
    if (n <= 20 ) return [242, 51, 17];
    if (n <= 40 ) return [255, 168, 28];
    if (n <= 60 ) return [201, 247, 15];
    if (n <= 80 ) return [0, 214, 0];
    return [12, 156, 12];
};

// Ligne note globale
tableRows.push([
    { content: 'Note globale', styles: { fillColor: [212, 212, 212] } },
    { content: globalScore, styles: { fillColor: getScoreColor(globalScore), halign: 'center', fontStyle:'bold' } }
]);

//Tableau récapitulatif
doc.autoTable({
    startY: positionY,
    head: [['Catégorie', 'Note']],
    body: tableRows,
    theme: 'grid',
    tableWidth: contentWidth,
    styles: { font: 'Helvetica', fontSize: 11, cellPadding: 3, textColor: [0, 0, 0], lineColor: [0, 0, 0], lineWidth: 0.1,halign :'center' },
    headStyles: { fillColor: [212, 212, 212], textColor: [0, 0, 0], fontStyle: 'bold', fontSize: 12, lineColor: [0, 0, 0] },
    columnStyles: { 0: { cellWidth: contentWidth * 0.65 }, 1: { cellWidth: contentWidth * 0.35, halign: 'center' } },
    didParseCell: function(data) {
        if (data.column.index === 1 && data.cell.section === 'body') {
            data.cell.styles.halign = 'center';
        }
        if (data.column.index === 0 && data.cell.section === 'body') {
            data.cell.styles.fillColor = [230, 230, 230];
        }
        // Note globale : couleur grise sur la 1ère colonne
        if (
            data.row.index === data.table.body.length - 1 &&
            data.cell.section === 'body' &&
            data.column.index === 0
        ) {
            data.cell.styles.fillColor = [212, 212, 212];
        }
    }
});


// Ajoute une nouvelle page avant le détail des catégories
doc.addPage();

// Position Y courante sur la page
let currentY = 20; 
const pageHeight = doc.internal.pageSize.getHeight();

// Marge basse pour éviter de coller au bord
const minBottomMargin = 20; 

categoriesData.forEach((item, idx) => {
    // Récupère le titre de la catégorie
    const title = (item.match(/<strong>(.*?)<\/strong>/) || [])[1] || 'Catégorie';
    // Récupère l'élément onglet correspondant
    const onglet = document.getElementsByClassName('tab-content')[idx];
    // Récupère toutes les questions (balises <p>) de l'onglet
    const questions = Array.from(onglet.querySelectorAll('p'));
    // Prépare les lignes du tableau
    const detailRows = [];

    questions.forEach((p, qIdx) => {
        // Récupère les radios associés à la question
        const radios = [];
        let el = p.nextElementSibling;
        while (el && (el.tagName === 'LABEL' || el.tagName === 'BR' || (el.tagName === 'DIV' && el.classList.contains('radio-group')))) {
            if (el.tagName === 'LABEL') {
                radios.push(el.querySelector('input[type="radio"]'));
            } else if (el.tagName === 'DIV' && el.classList.contains('radio-group')) {
                el.querySelectorAll('input[type="radio"]').forEach(radio => radios.push(radio));
            }
            el = el.nextElementSibling;
        }
        if (radios.length === 0) return;

        const checked = radios.find(r => r && r.checked);
        let commentaire = '';
        let pastille = [204, 204, 204]; 
        let questionName = radios[0] ? radios[0].name : '';
        let score = checked ? checked.getAttribute('data-score') : null;
        let noteText = '';

        // Récupère le commentaire
        if (checked) {
            if (commentairesQuestions[questionName] && commentairesQuestions[questionName][score] !== undefined) {
                commentaire = commentairesQuestions[questionName][score];
            } else {
                if (score === "1") commentaire = "Critère rempli.";
                else if (score === "0.75" || score === "0.5") commentaire = "Critère partiellement rempli.";
                else if (score === "0") commentaire = "Critère non rempli.";
                else if (score === "na") commentaire = "Non applicable.";
                else commentaire = "Réponse inattendue.";
            }
            // Couleur de la pastille
            if (score === "1") pastille = [0, 214, 0];
            else if (score === "0.75" || score === "0.5") pastille = [201, 247, 15];
            else if (score === "0") pastille = [242, 51, 17];
            else if (score === "na") pastille = [204, 204, 204];
        } else {
            commentaire = "Question non répondue ou ne nécessitant pas de réponse dans votre cas";
        }

        // Affichage de la note
        if (checked) {
            if (score === "na") noteText = "N/A";
            else noteText = score + "/1";
        } else {
            noteText = "";
        }

        detailRows.push([
            commentaire,
            { content: noteText, styles: { fillColor: pastille, halign: 'center', fontStyle: 'bold' } }
        ]);
 });

    // Calcule la hauteur estimée du bloc (titre + tableau)
    // Titre = 10mm, tableau = (nb lignes + 1) * 7mm (environ), + 5mm espace
    const estimatedTableHeight = (detailRows.length + 1) * 7 + 10 + 5;

    // Si le bloc ne tient pas sur la page, on saute à la page suivante
    if (currentY + estimatedTableHeight > pageHeight - minBottomMargin) {
        doc.addPage();
        currentY = 20;
    }

// Ligne titre de la catégorie
doc.setFont('Helvetica', 'bold'); 
doc.setFontSize(16);
doc.setTextColor(0, 0, 0); 

// Centre le titre horizontalement 
const titleWidth = doc.getTextWidth(title);
const titleX = marginX + (contentWidth - titleWidth) / 2;
doc.text(title, titleX, currentY + 8);

// Saut de ligne sous le titre
currentY += 4; 


    // Tableau des détails (commentaire + couleur)
    doc.autoTable({
        startY: currentY + 12,
        head: [['Commentaire', 'Note']],
        body: detailRows,
        theme: 'grid',
        tableWidth: contentWidth,
        styles: { font: 'Helvetica', fontSize: 10, cellPadding: 3, textColor: [0, 0, 0], lineColor: [0, 0, 0], lineWidth: 0.1 },
        headStyles: { fillColor: [212, 212, 212], textColor: [0, 0, 0], fontStyle: 'bold', fontSize: 11 },
        columnStyles: {
            0: { cellWidth: contentWidth * 0.92 },
            1: { cellWidth: contentWidth * 0.08, halign: 'center' }
        },
        didParseCell: function(data) {
            if (data.column.index === 1 && data.cell.section === 'body') {
                data.cell.styles.halign = 'center';
            }
        }
    });

    // Met à jour la position Y pour le prochain bloc
    currentY = doc.autoTable.previous.finalY + 14;
});

// Numérotation des pages
const pageCount = doc.internal.getNumberOfPages();
for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(9);
    doc.setTextColor(54, 54, 54);
    doc.text(
        `Page ${i} / ${pageCount}`,
        doc.internal.pageSize.getWidth() - 25,
        doc.internal.pageSize.getHeight() - 8,
        { align: 'right' }
    );
}

    //Enregistrement du PDF
    doc.save('rapport_scores_qualite.pdf');
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FOnctions qui ouvrent et fermetn le popup

function ouvrirPopup(id) {
  document.getElementById(id).style.display = 'flex';
}
function fermerPopup(id) {
  document.getElementById(id).style.display = 'none';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Fermer le popup à l'intérieur du popup de résultat si clic en dehors du contenu
document.addEventListener('click', function(e) {
  document.querySelectorAll('.custom-popup').forEach(popup => {
    if (popup.style.display === 'flex' && !popup.querySelector('.custom-popup-content').contains(e.target) && !e.target.matches('button[onclick^="ouvrirPopup"]')) {
      popup.style.display = 'none';
    }
  });
});


// Fermer la popup de résultats quand on clic en dehors du contenu
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-resultats');
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        fermerModalResultats();
      }
    });
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Fonction qui ajuste la position du tooltype si elle dépasse d'un côté
function ajusterTooltipPosition(infoTooltip) {
  const tooltip = infoTooltip.querySelector('.tooltip-text');
  tooltip.style.transform = ''; // Reset

  const rect = tooltip.getBoundingClientRect();
  const padding = 8; // marge de sécurité

  // Si le tooltip dépasse à gauche
  if (rect.left < padding) {
    tooltip.style.transform = 'translateX(-8%)';
  } else {
    tooltip.style.transform = 'translateX(-100%)'; // aligné à gauche par défaut
  }
}


document.querySelectorAll('.info-tooltip').forEach(el => {
  el.addEventListener('mouseenter' , () => ajusterTooltipPosition(el));
  el.addEventListener('focusin', () => ajusterTooltipPosition(el));
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Gestion des tooltips info
document.querySelectorAll('.info-icon').forEach(icon => {
  icon.addEventListener('click', function(e) {
    const tooltip = this.nextElementSibling;
    const isVisible = tooltip.style.visibility === 'visible';
    // Ferme tous les tooltips
    document.querySelectorAll('.tooltip-text').forEach(t => {
      t.style.visibility = '';
      t.style.opacity = '';
      t.style.pointerEvents = '';
    });
    // Toggle l'affichage du tooltip courant
    if (!isVisible) {
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = '1';
      tooltip.style.pointerEvents = 'auto';
    }
    e.stopPropagation();
  });
});

// Ferme le tooltip si on clique ailleurs (desktop & mobile)
['click', 'touchstart'].forEach(evt =>
  document.addEventListener(evt, function(e) {
    if (!e.target.classList.contains('info-icon')) {
      document.querySelectorAll('.tooltip-text').forEach(t => {
        t.style.visibility = '';
        t.style.opacity = '';
        t.style.pointerEvents = '';
      });
    }
  })
);
