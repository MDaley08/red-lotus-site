const sidebarManager = (() => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarBtn = document.getElementById('sidebar-button');
    const closeBtn = document.getElementById('close-button');
    const smallWindowSize = 950;
    sidebarBtn.addEventListener('click', () => {
        sidebar.style.display = 'flex'

    });

    closeBtn.addEventListener('click', () => {
        sidebar.style.display = 'none'
    });

    window.addEventListener("resize", () => {
        if(window.innerWidth > smallWindowSize){
            sidebar.style.display = 'none';
        }
        
    });
})();

const joinButton = ((link) => {
    const button = document.getElementById('join-button');
    const openDiscord = () => {
        window.open(link, 'test')
    }
    button.addEventListener('click', openDiscord);
})('test.com');


