
/* Programacion */ 
// const pug = require('../templates/index.pug');
//

const scss = require('../scss/style.scss');//se encuentra fuera de dist para separarlo del css 
require('../fonts/style/fontello.scss');
//const fonts = require('./fontawesome-all.js');


//slider games
//const slider = require('./slider.js');
const modal = require('./scripts/modal.js');
//menu responsive edgrid
const menu = require('./scripts/menu.js');
const menuSticky = require('./scripts/menuSticky.js');
const menuDestino = require('./scripts/menuDestino.js');
const juegos= require('./scripts/juegos.js');

let tagImg = document.getElementsByTagName('img');

for (let tagI = 0; tagI < tagImg.length; tagI++) {
   //console.log(tagImg[tagI].attributes.src.textContent = tagImg[tagI].attributes.src.textContent.slice(3));
   tagImg[tagI].attributes.src.textContent = tagImg[tagI].attributes.src.textContent.slice(3);
}

