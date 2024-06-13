const menuManager = (() => {
    const navbar = document.querySelector('nav');
    const dropdownMenu = document.querySelector('.dropdown');
    const hamburgerDiv = document.querySelector('.hamburger');

    hamburgerDiv.addEventListener('click', () => {
        hamburgerDiv.classList.toggle('hamburger-open');
        dropdownMenu.classList.toggle('dropdown-open');
    });

    let lastScrollVal = window.scrollY;
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        let currScrollVal = window.scrollY;
        if(currScrollVal  > lastScrollVal ){
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => navbar.classList.add('hideNav'), 70);
        }
        else{
            navbar.classList.remove('hideNav');
            clearTimeout(scrollTimeout);
        }
        lastScrollVal = currScrollVal;
    });

})();

// const joinButton = ((link) => {
//     const button = document.getElementById('join-button');
//     const openDiscord = () => {
//         window.open(link, 'test')
//     }
//     button.addEventListener('click', openDiscord);
// })('test.com');


