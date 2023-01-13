function calculatePassengers(stops, abord, entered, exited) {
    var passengers = abord;
    for (var i = 0; i < stops; i++) {
        passengers += entered[i] - exited[i];
        if (passengers < 0) {
            passengers = 0;
            console.log("Arret ".concat(i + 1, ":  0 passager dans le bus"));
        }
        else {
            console.log("Arret ".concat(i + 1, ":  ").concat(passengers, " passagers dans le bus"));
        }
    }
    return passengers;
}
var stops = 5;
var abord = 8;
var entered = [2, 4, 1, 0, 5];
var exited = [3, 2, 5, 7, 2];
var final_result = calculatePassengers(stops, abord, entered, exited);
if (final_result < 0) {
    console.log("Au finale, il n'y a plus de passager dans le bus");
}
else if (final_result == 1) {
    console.log("Au finale, il ne reste qu'un seul passager dans le bus");
}
else {
    console.log("Au finale, il y a donc ".concat(final_result, " passagers dans le bus"));
}
