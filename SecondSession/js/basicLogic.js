const menu = document.getElementById("menu")
nav = document.getElementById("nav")
exit = document.getElementById("exit")
something = document.getElementById("Something")
server = document.getElementById("server");
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