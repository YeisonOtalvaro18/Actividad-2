const  toggleBtn = document.querySelector ('.toggleBtn');
const navlinks = document.querySelector   ('.navlinks');
toggleBtn.addEventListener('click',()=> {
    navlinks.classList.toggle('active');
});
