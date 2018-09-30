//
import auricularM from '../../img/auricular.jpg';
import monitorM from '../../img/monitor.jpg';
import tecladoM from '../../img/teclado.jpg';
import mouseM from '../../img/mouse.png';
let pcLinkWatch = document.getElementsByClassName('pc-link__watch');
let imgModal = document.getElementById('modal-img');
let modalImg = document.getElementById('modal');
let iconResize = document.getElementsByClassName('icon-resize');
//Guardo las variables que contienen las imagenes importadas
//Imagenes insertadas al modal de servicios y fotos
let arrPc = [monitorM, tecladoM, mouseM, auricularM];
for (let i = 0; i < arrPc.length; i++) {
    const element = arrPc[i];
    pcLinkWatch[i].addEventListener('click', (e) => {
        imgModal.src = arrPc[i];
        //agrega la clase modal-show para que se muestre el modal
        modalImg.classList.add('modal-show');
    })
}

//delego el evento al padre de la imagen para que cierre el modal
let figureNone = document.getElementById('figure-modal')
modalImg.addEventListener('click', (e) => {
    if (e.target === figureNone) {
        modalImg.classList.remove('modal-show');
    }
});