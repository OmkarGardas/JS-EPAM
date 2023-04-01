function rentalCarCost(d) {
  // Your solution here
  let costPerDay = 40;
  let totalCostRental = d * costPerDay;
  if(d >= 7){
    totalCostRental -= 50;
  }
  else if(d >= 3){
    totalCostRental -= 20;
  }
  return totalCostRental;
  
}
