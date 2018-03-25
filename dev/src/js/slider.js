(() => {
   
    let slide = document.getElementById('slider');

    /* Funcion para que el slider tenga animacion */
    let counter = 0; 
    let moveSlide = () => {
        counter += -250;
        slide.style.left = ` ${counter}px `;
        console.log(counter);
        if (counter === -750) {
            counter = 0
        }
    }
    
    setInterval( moveSlide, 5000);
})();

