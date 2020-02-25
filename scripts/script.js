const $header = document.querySelector('header');
window.addEventListener('scroll',toggleHeader,false);

function toggleHeader(){
    if(window.pageYOffset > 0 && $header.classList('max-header')){
        $header.classList.remove('max-header');
        $header.classList.add('min-header');

    }else if(window.pageYOffset === 0 && $header.classList('min-header')){
        $header.classList.add('max-header');
        $header.classList.remove('min-header');
    }
  
}