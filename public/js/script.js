// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}


const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function(){
    // add untuk menambahkan sedangkan remove untuk menghapus, sedangkan toogle untuk melakukan keduanya, jika ada maka di hilagkan dan jika tidak ada maka ditambahkan
hamburger.classList.toggle('hamburger-active');
navMenu.classList.toggle('hidden');
})