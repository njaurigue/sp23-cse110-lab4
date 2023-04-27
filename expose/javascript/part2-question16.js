let statistics = {
    redcars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    raceCars: 2
};

for(const property in statistics){
    if(property.charAt(0) == 'r'){
        console.log(property);
    }else if(statistics[property] % 2 == 1){
        console.log(property);
    }
}