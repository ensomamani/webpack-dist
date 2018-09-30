
let headerTop = document.getElementById('header'),
    headerOffset = headerTop.offsetTop,
    pcsTop = document.getElementById('modal'),
    pcOffset = pcsTop.offsetTop;
    console.log(pcOffset);
    
window.addEventListener('scroll', e => {
    let bodyScroll = e.target.scrollingElement.scrollTop;
    if (bodyScroll > headerOffset) {
        headerTop.classList.add('sticky');
        pcsTop.classList.add('sticky');
    } else {
        headerTop.classList.remove('sticky');
    }
});