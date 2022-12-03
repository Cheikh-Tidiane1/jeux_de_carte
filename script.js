// tableau des cartes d'images
var cartes = [
  { source: 'images/angular.png' },
  { source: 'images/csharp.png' },
  { source: 'images/css.png' },
  { source: 'images/html.png' },
  { source: 'images/java.png' },
  { source: 'images/js.png' },
  { source: 'images/lc.png' },
  { source: 'images/lcplus.png' },
  { source: 'images/mysql.png' },
  { source: 'images/ordi.png' },
  { source: 'images/php.png' },
  { source: 'images/sql.png' },
];


var img;
var tabImages = [];
var clic = 30;
var essai = document.getElementById('Essai');

const load_body = () => {

  // Récuperation de la division d'id jeu
  var jeu = document.getElementById('jeu');
  essai.innerText = " Nombre d'essai :" + clic;
  for (let j = 1; j <= 2; j++) {
    melangeCarte(cartes);

    // Création d'une division de class row
    var div_row = document.createElement('div');
    div_row.setAttribute('class', 'row');
    for (let i = 0; i < cartes.length; i++) {
      idImage = "" + j + i;
      // Création d'une division de 2 colonnes
      var div_carte = document.createElement('div');
      div_carte.setAttribute('class', 'col-2 blue-gradient mb-2 rounded');
      div_carte.style.border = "3px solid darkgrey";
      div_carte.setAttribute("onclick", "clic_carte(" + idImage + ")")
      // Création de l'image de la carte
      var image = document.createElement('img');
      image.src = cartes[i].source;
      image.style.height = '200px';
      image.style.width = '100%';
      image.style.visibility = 'hidden';
      image.setAttribute("id", idImage);
      // Ajout de l'image dans la carte
      div_carte.appendChild(image);
      // Ajout de la carte sur la ligne
      div_row.appendChild(div_carte);
    }



    jeu.appendChild(div_row);
  }

}

init = 0;
var win = cartes.length;
// lorsqu'on clic sur une carte
const clic_carte = id => {
  clic--;
  essai.innerText = " Nombre d'essai :" + clic;
  if (init == 0) {
    img = document.getElementById(id);
    img.style.visibility = 'visible';
    tabImages.push(img);
    if (tabImages.length == 2) {
      init += 1;
      if (tabImages[0].src !== tabImages[1].src) {
        setTimeout("tabImages[0].style.visibility = 'hidden' ;  tabImages[1].style.visibility = 'hidden' ;", 200);
      } else {
        win--;
      }
    } else {
      init = 0
    }
  } else {
    init = 0;
    tabImages = [];
    img = document.getElementById(id);
    img.style.visibility = 'visible';
    tabImages.push(img);
  }
  gameOver();
  lost();
}

const gameOver = () => {
  if (win == 0) {
    alert("Bravo vous avez reussi !!!");
    document.getElementById('rejouer').removeAttribute("hidden");
    document.getElementById('Essai').setAttribute('hidden', 'hidden');
    // pauseTime();

  }
}
const lost = () => {
  if (clic == 0) {
    alert(" oups vous avez perdue !!!");
    window.location.reload();
  }
}


const melangeCarte = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  // methode shuffleArray
}


const startingMinutes = 5;
var time = startingMinutes * 60;
const countdownEl = document.getElementById('timer');
setInterval(updateCountdown, 1000);
function updateCountdown() {

  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  countdownEl.innerHTML = `Temps: ${minutes}:${seconds}`
  time--;
  if (minutes == 0) {
    alert(" Fin du temps vous avez perdue");
    window.location.reload();

  }

  if (win == 0) {
    clearInterval(time);
  }

}

//---------------Compte a rebours
// const startingMinutes = 10 ;
// let time = startingMinutes * 60 ;
// const countdownEl = document.getElementById ('timer') ;
// setInterval(updateCountdown, 1000) ;
// function updateCountdown (){
//     const minutes = Math.floor(time/60) ;
//     let seconds = time % 60 ;
//     seconds = seconds < 10 ? '0' + seconds : seconds ;
//     countdownEl.innerHTML = `Temps: ${minutes}:${seconds}`
//     time-- ;
//   }