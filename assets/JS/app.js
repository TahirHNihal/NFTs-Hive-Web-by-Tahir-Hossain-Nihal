

/**
 * Active Menu Algarithms
 */

 const active = window.location.pathname;
 const menuLinks = document.querySelectorAll(".sidebar-menu a")
  menuLinks.forEach(link => {
   if(link.href.includes(`${active}`)){
     link.classList.add('active');
   }
 });

 /** */
