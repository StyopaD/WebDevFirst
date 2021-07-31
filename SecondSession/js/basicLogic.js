var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
var exit = document.getElementById("exit");
var something = document.getElementById("Something");
var server = document.getElementById("server");

menu.addEventListener('click', function(e){
    nav.style.display = "flex";
    e.preventDefault();
});

exit.addEventListener('click', function(e){
    nav.style.display ="none";
    e.preventDefault();
});

something.addEventListener('click', function(e){
    server.style.width="100%";
})