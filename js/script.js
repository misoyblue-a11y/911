$('.click-item').on('click', function () {
  $('.click-item').removeClass('active');
  $('.click-li').removeClass('active');
  $(this).addClass('active');
});
$('.click-li').on('click',function(){
  $('.click-li').removeClass('active');
  $('.click-item').removeClass('active');
  $(this).addClass('active');
});

const toggleBtn = document.querySelector('.dropdown_button');
const menu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', () => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', expanded ? 'false' : 'true');

  if (menu.hasAttribute('hidden')) {
    menu.removeAttribute('hidden');
  } else {
    menu.setAttribute('hidden', '');
  }
});

$('.dropdown_button').on('click', function() {
    const menu = $(this).siblings('.dropdown_menu');
    
    if (menu.is(':hidden')) {  
        menu.show(); 
        $(this).addClass('add')           
    } else {
        menu.hide();   
         $(this).removeClass('add')           
    }
});


const langBtn = document.querySelector('.dropdown_langua'); 
const langMenu = document.querySelector('.dropdown_lang');   
langBtn.addEventListener('click', () => {
  const expanded = langBtn.getAttribute('aria-expanded') === 'true';
  langBtn.setAttribute('aria-expanded', expanded ? 'false' : 'true');

  if (langMenu.hasAttribute('hidden')) {
    langMenu.removeAttribute('hidden');
  } else {
    langMenu.setAttribute('hidden', '');
  }
});
$('.dropdown_langua').on('click', function() {
    const langMenu = $(this).siblings('.dropdown_lang');
    
    if (langMenu.is(':hidden')) {  
        langMenu.show(); 
        $(this).addClass('add')           
    } else {
        langMenu.hide();   
         $(this).removeClass('add')           
    }
});
