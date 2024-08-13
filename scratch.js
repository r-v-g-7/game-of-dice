function rollDice() {

    var RandomNumber1 = Math.floor((Math.random() * 6) + 1)
    var RandomDice1 = "dice" + RandomNumber1 + ".png"
    var RandomDiceImage1 = "./images/" + RandomDice1
    // This was for Player 1 



    document.querySelectorAll("img")[0].setAttribute("src", RandomDiceImage1)
    // This was Common between both just for creating Random Dice Images at each time webpage Reloads.




    var RandomNumber2 = Math.floor((Math.random() * 6) + 1)
    var RandomDice2 = "dice" + RandomNumber2 + ".png"
    var RandomDiceImage2 = "./images/" + RandomDice2
    // This was for player 2



    document.querySelectorAll("img")[1].setAttribute("src", RandomDiceImage2)



    if (RandomNumber1 > RandomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!🚩"
    } else if (RandomNumber1 === RandomNumber2) {
        document.querySelector("h1").innerHTML = "It's a DRAW"
    } else if (RandomNumber1 < RandomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
    }
}















