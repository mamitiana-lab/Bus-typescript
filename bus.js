function calculatePassengers(stops, abord, entered, exited) {
    var passengers = abord;
    for (var i = 0; i < stops; i++) {
        passengers += entered[i] - exited[i];
        if (passengers < 0) {
            passengers = 0;
            console.log("Arret ".concat(i + 1, ":  0 passager dans le bus \n"));
        }
        else {
            console.log("Arret ".concat(i + 1, ":  ").concat(passengers, " passagers dans le bus \n"));
        }
    }
    return passengers;
}
var stops = 6;
var abord = 8;
var entered = [2, 4, 1, 0, 5, 2];
var exited = [3, 2, 5, 7, 2, 0];
var somme = abord + entered.reduce(function (a, b) { return a + b; }, 0);
var final_result = calculatePassengers(stops, abord, entered, exited);
var recette = somme * 600;
if (final_result < 0) {
    console.log("Au finale, il n'y a plus de passager dans le bus \n");
}
else if (final_result == 1) {
    console.log("Au finale, il ne reste qu'un seul passager dans le bus \n");
}
else {
    console.log("Au finale, il y a donc ".concat(final_result, " passagers dans le bus \n"));
}
console.log("La somme des passagers qui sont entr\u00E9s dans le bus est: ".concat(somme, " \n"));
console.log("La recette du tour est: ".concat(recette, " Ar.\n"));
