//Id de los enlaces del header
let conocenos = 'conocenos',
    servicios = 'servicios',
    fotos = 'fotos',
    encuentranos = 'encuentranos';
//id de las secciones a redireccionar
let meetUs = 'meet-us',
    ourPcs = 'our-pcs',
    galery = 'galery',
    findUs = 'find-us';

let menuArea = (id, idAreaMover) => {
    let el = document.getElementById(id);
    el.addEventListener('click', () => {
        let idArea = document.getElementById(idAreaMover);
        let areaScroll = idArea.offsetTop - 60;
        window.document.scrollingElement.scrollTop = areaScroll;
    })
}
menuArea(conocenos, meetUs);
menuArea(servicios, ourPcs);
menuArea(fotos, galery);
menuArea(encuentranos, findUs);


// console.log(window.document.scrollingElement.offsetTop);
//  let scrollServices = window.document.scrollingElement.scrollTop;
// console.log(scrollServices);
// window.addEventListener('scroll', e => {
//     console.log(e);
// })