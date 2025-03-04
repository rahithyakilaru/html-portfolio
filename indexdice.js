    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var diceNumber1 = "dice"+ randomNumber1 + ".png";
    var diceNumber2 = "dice"+ randomNumber2 +".png"
    document.querySelector("img").setAttribute("src","images/"+diceNumber1);
    document.querySelectorAll("img")[1].setAttribute("src","images/"+diceNumber2);

    if (randomNumber1> randomNumber2) {
        document.firstElementChild.lastElementChild.querySelector("h1").innerHTML="🚩Player 1 Wins";
    } else if (randomNumber1< randomNumber2){
        document.firstElementChild.lastElementChild.querySelector("h1").innerHTML="Player 2 Wins🚩";
    } else{
        document.querySelector("h1").innerHTML="Draw";
    }
