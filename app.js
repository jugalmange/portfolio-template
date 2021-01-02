const ham_icon = document.querySelector('#nav-bar .nav-bar .nav-list .ham');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

ham_icon.addEventListener('click',()=>{
    nav_list.classList.toggle('open');
    ham_icon.classList.toggle('active');
});