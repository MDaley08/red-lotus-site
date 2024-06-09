const menuManager = (() => {
    const navMenu = document.querySelector('.dropdown');
    const hamburgerDiv = document.querySelector('.hamburger');

    hamburgerDiv.addEventListener('click', () => {
        hamburgerDiv.classList.toggle('hamburger-open');
        navMenu.classList.toggle('dropdown-open');
    });

})();

// const joinButton = ((link) => {
//     const button = document.getElementById('join-button');
//     const openDiscord = () => {
//         window.open(link, 'test')
//     }
//     button.addEventListener('click', openDiscord);
// })('test.com');


