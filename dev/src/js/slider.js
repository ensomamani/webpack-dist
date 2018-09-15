

(() => {
    // variable slider del html
    let slide = document.getElementById('slider');

    // variables de next y prev
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    /* Instancia de animacion */ 
    let counter = 0;
    let setCounter = () => {
        let number = -180;
        counter += number;
        if (counter === -720) {
            counter = 0;  
        }  
        console.log(counter);
        return counter; 
    }
    if(setCounter() == -360) {
        console.log('llego')
    }
    let interval = () => {
        setCounter();
        slide.style.left = `${counter}px`;
        
    };
    let timeInterval = setInterval(interval ,3000);

    let stopAnimation = () => {
        clearInterval(timeInterval)
        //console.log('estoy dentro de slide');
    } 
    let startAnimation = () => {
        timeInterval = setInterval(interval ,3000);
        //console.log('estoy fuera de slide');
    }

    let prevButton = () => {
        if (counter === -180) {
            counter = 0;
            slide.style.left = `${counter}px`;
            console.log('hizo click');
        } else if (counter === -360) {
            counter = -180;
            slide.style.left = `${counter}px`;
            console.log('hizo click 2');
        } else if (counter === -540) {
            counter = -360;
            slide.style.left = `${counter}px`;
            console.log('hizo click 3');
        }
    }
    let nextButton = () => {
        interval();       
    }
    slide.addEventListener('mouseover', stopAnimation);
    slide.addEventListener('mouseout', startAnimation);

    prev.addEventListener('click', prevButton);
    prev.addEventListener('mouseover', stopAnimation);
    prev.addEventListener('mouseout', startAnimation);

    next.addEventListener('click', nextButton);
    next.addEventListener('mouseover', stopAnimation);
    next.addEventListener('mouserout', startAnimation);
})();

