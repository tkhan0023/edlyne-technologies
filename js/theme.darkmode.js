//Blueket Template Dark Mode
const chk = document.getElementById('blueket');
chk.addEventListener('click', () => {
  chk.checked?document.body.classList.remove("darkmode"):document.body.classList.add("darkmode");
  localStorage.setItem('lightModeStatus', chk.checked);
});
window.addEventListener('load', (event) => {
  if(localStorage.getItem('lightModeStatus')=="true"){
    document.body.classList.remove("darkmode"); 
    document.getElementById('blueket').checked = true;
  }
});
