var player1 = Math.floor((Math.random() * 6) + 1);
var player2 = Math.floor((Math.random() * 6) + 1);

document.write (player1);
document.write (player2);

    if (player1 > player2) {
        result = "Il giocatore1 ha vinto!";
    } else if (player1 == player2) {
        result = "Pareggio!";
    } else {
        result = "Il giocatore2 ha vinto!";
    }
document.write (result);
