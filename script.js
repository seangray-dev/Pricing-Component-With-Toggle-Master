const toggle = document.getElementById('toggle');
const package = document.getElementById('package'); 

toggle.addEventListener('change', on => {
    package.classList.toggle('show-monthly');
});