document.getElementById('navBroh').addEventListener('mouseleave', navCollapse);

function navCollapse(){
  console.log('Navbar collapse trigger');
  
  const navbarDisplay = document.getElementById('navbarSupportedContent');
  
  navbarDisplay.classList.remove('show');
}
