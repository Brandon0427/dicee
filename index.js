var randomNumber = [];

for (var i=0; i<2; i++){
    randomNumber[i] = Math.floor(Math.random() * 6) + 1; //random number between dice 1-6
    var randomDiceImage = "images/dice" + randomNumber[i] + ".png"; //image name generator dice1.png - dice6.png
    
    var image = document.querySelectorAll("img")[i];
    image.setAttribute("src", randomDiceImage);
}

if (randomNumber[0]>randomNumber[1]){
    document.querySelector("h1").innerHTML = "Winner Player 1!";
}
else if (randomNumber[1]>randomNumber[0]){
    document.querySelector("h1").innerHTML = "Winner Player 2!";
}
else{
    document.querySelector("h1").innerHTML = "That's a Tie!";
}