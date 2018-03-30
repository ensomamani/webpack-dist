import animationSlider from './clases/animationSlider.js';
(() => {
    // variable slider del html
    let slide = document.getElementById('slider');

    /* Instancia de animacion */ 
    let animation = new animationSlider(0, -250);
    animation.moveSlide(slide);
    animationSlider.hola();
})();

