//sidebar button popup script
document.querySelector('.sidebar-button').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.nav').classList.toggle('nav-open');
    console.log('clicked');
});

document.querySelector('.close-nav').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.nav').classList.toggle('nav-open');
    console.log('clicked');
});