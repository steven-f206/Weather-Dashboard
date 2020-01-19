// return date adjusted by extra days

let getDate = function(days){
    let someDate = new Date();
    let numberOfDaysToAdd = days ;
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
  
    let dd = someDate.getDate();
    let mm = someDate.getMonth() + 1;
    let y = someDate.getFullYear();
  
    return mm + '/'+ dd + '/'+ y;
  }
  
  //Wind Speed
  let mph = (speed) => {
    return parseFloat(speed * (3600/1609.344)).toFixed(2);
  } 
  
  //Searched cities
  let searchedCities = [];
  if( localStorage.getItem("citysearch")){
    searchedCities = JSON.parse(localStorage.getItem("citysearch"));
  }
  
  //LastSearched city
  let lastSearchedCity;
  
  
  // City Id seperated for a new call of city change
  const apiKey = "26fbb33b8a517b0acbc32b21c9e60038";