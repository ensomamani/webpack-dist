let buttonGames = document.getElementById('button-game');
let bannerEnjoy = document.getElementById('banner-enjoy');
console.log(bannerEnjoy);
buttonGames.addEventListener('click', () => {
    let bannerOffset = bannerEnjoy.offsetTop - 60;
    window.scrollTo(0, bannerOffset);
});