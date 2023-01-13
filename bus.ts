function calculatePassengers(stops: number, abord: number, entered: number[], exited: number[]) {

  let passengers = abord;

  for (let i = 0; i < stops; i++) {
      passengers += entered[i] - exited[i];
      if(passengers < 0){
        passengers = 0;
        console.log(`Arret ${i+1}:  0 passager dans le bus`);
      }else{
        console.log(`Arret ${i+1}:  ${passengers} passagers dans le bus`);
      }
  }

  return passengers;
}

const stops = 5;
const abord = 8;
const entered = [2,4,1,0,5];
const exited = [3,2,5,7,2];

const final_result = calculatePassengers(stops, abord, entered, exited);

if(final_result < 0){
    console.log(`Au finale, il n'y a plus de passager dans le bus`);
}else if(final_result == 1){
    console.log("Au finale, il ne reste qu'un seul passager dans le bus");
}else {
    console.log(`Au finale, il y a donc ${final_result} passagers dans le bus`);
}