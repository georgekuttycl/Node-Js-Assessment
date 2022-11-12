const prompt = require('prompt-sync')();
var player1 = prompt("Enter player 1 choice: ");
var player2 = prompt("Enter player 2 choice: ");
var player2 = "paper";

if (player1 == "stone" & player2 == "paper") {
    console.log("User 2 Wins")
}
else if (player1 == "stone" & player2 == "scissors") {
    console.log("User 1 Wins")
}
else if (player1 == "paper" & player2 == "stone") {
    console.log("User 1 Wins")
}
else if (player1 == "paper" & player2 == "scissors") {
    console.log("User 2 Wins")
}
else if (player1 == "scissors" & player2 == "paper") {
    console.log("User 1 Wins")
}
else if (player1 =="scissors" & player2 == "stone") {
    console.log("User 2 Wins")
}
else {
    console.log("No One Wins")
}