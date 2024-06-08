const menuManager = (() => {
    const dropdownMenu = document.querySelector('.dropdown')
    const dropdownBtn = document.getElementById('menu-button');
    const closeBtn = document.getElementById('close-button');
    const smallWindowSize = 800;
    let menuOpen = false;

    dropdownBtn.addEventListener('click', () => {
        dropdownMenu.style.display = 'flex';
        dropdownBtn.style.display = 'none';
        closeBtn.style.display = 'block';
        menuOpen = true;
    });

    closeBtn.addEventListener('click', () => {
        closeBtn.style.display = 'none';
        dropdownBtn.style.display = 'block';
        dropdownMenu.style.display = 'none';
        menuOpen = false;
    });

    window.addEventListener("resize", () => {
        if(window.innerWidth > smallWindowSize){
            dropdownBtn.style.display = 'none';
            dropdownMenu.style.display = 'none';
            menuOpen = false;
        }
        else if(!menuOpen){
            dropdownBtn.style.display = 'block';
        }
    });

    window.addEventListener("load", () => {
        if(window.innerWidth <= smallWindowSize) dropdownBtn.style.display = 'block'
    });

})();

// const joinButton = ((link) => {
//     const button = document.getElementById('join-button');
//     const openDiscord = () => {
//         window.open(link, 'test')
//     }
//     button.addEventListener('click', openDiscord);
// })('test.com');


