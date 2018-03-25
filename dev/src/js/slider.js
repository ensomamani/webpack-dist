(() => {
    // variable slider del html
    let slide = document.getElementById('slider');

    class animationSlider {
        constructor(counter, increment) {
            this._counter = counter;
            this._increment = increment;
        }

        // getter y setter de counter
        set setCounter(counter) {
            this._counter = counter;
        }
        get getCounter() {
            return this._counter;
        }

        // getter y setter de increment
        set setIncrement(increment) {
            this._increment = increment
        }
        get getIncrement() {
            return this._increment;
        }

        //Métodos
        moveSlide() {
            setInterval(() => {
                this.setCounter = this.getCounter + this.getIncrement;
                if(this.getCounter === -1000) {
                    this.setCounter = 0;
                }
                slide.style.left = `${this.getCounter}px`;
            }, 3000)
        }

    }

    // /* Funcion para que el slider tenga animacion */
    // let counter = 0; 
    // let moveSlide = () => {
    //     counter += -250;
    //     slide.style.left = ` ${counter}px `;
    //     if (counter === -750) {
    //         counter = 250;
    //     }
        
    //     console.log(counter);
    // }
    // setInterval(moveSlide, 3000);

    // // indicamos cuanto tiempo tendrá la animación
    const animation = new animationSlider(0, -250);
    animation.moveSlide();
    
})();

