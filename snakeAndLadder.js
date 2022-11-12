var r = require('readline-sync')
var player1 = 0
var player2 = 0
while (true) {
    var n = r.question('Press A for player1 and B for player2 :')
    if (n == 'A') {
        var d = Math.floor(Math.random() * 6)
        d = d + 1
        player1 = player1 + d
        if (player1 < 6) {
            player1 = 0
        }
        else if (player1 == 9 || player1 == 15 || player1 == 20 || player1 == 35 || player1 == 45 || player1 == 55 || player1 == 63 || player1 == 70 || player1 == 76) {
            player1 = player1 + 20
        }
        else if (player1 == 96 || player1 == 89 || player1 == 84 || player1 == 79 || player1 == 68 || player1 == 52 || player1 == 49 || player1 == 31 || player1 == 24 || player1 == 17) {
            player1 = player1 - 20
        }
        else if (player1 > 100) {
            player1 = player1 - d
        }
        else { }
        console.log('player1 :' + player1);
    }
    if (n == 'B') {
        var d = Math.floor(Math.random() * 6)
        d = d + 1
        player2 = player2 + d
        if (player2 < 6) {
            player2 = 0
        }
        else if (player2 == 9 || player2 == 15 || player2 == 20 || player2 == 35 || player2 == 45 || player2 == 55 || player2 == 63 || player2 == 70 || player2 == 76) {
            player2 = player2 + 20
        }
        else if (player1 == 96 || player1 == 89 || player1 == 84 || player1 == 79 || player1 == 68 || player1 == 52 || player1 == 49 || player1 == 31 || player1 == 24 || player1 == 17) {
            player2 = player2 - 20
        }

        else if (player2 > 100) {
            player2 = player2 - d
        }
        else { }
        console.log('player2 :' + player2);

    }
    if (player1 == 100) {
        console.log('player1 wins');
        break
    }
    else if (player2 == 100) {
        console.log('player2 wins');
        break

    }


}