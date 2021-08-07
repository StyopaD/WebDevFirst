
console.log("fuck you");
const myTOUCH = document.getElementById("touchMe")
    saber = document.getElementById("on-off");


    const hilt = document.querySelector('#hilt');
    const onofee = document.querySelector('#saber');
    const touchee = document.querySelector('#on-off');
    saber.onclick = () => {
        if(saber.checked){
            myTOUCH.style.display = "none";
        }else{
            myTOUCH.style.display = "block";
        }
    };

