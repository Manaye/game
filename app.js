
var counter = 0;
var maxTries = 3;
var FavNumber = 13;
for(i=0;i<=4;i++){
    var tries = prompt('what is my fav number? choose between 0 & 20');
      counter += 1;
      if(counter> maxTries){
          alert('you have reached your maximum tries.');
          break;
      }
      if(tries == FavNumber){
          alert('you won!!!');
          break;
      } 
}
  
 var brandCounter = 0;
 var maxTriesBrand = 6;
 var favBrand = 'Gucci';
for(i=0;i<=7;i++){
    
    var tries= prompt('what is my brand?');
    brandCounter += 1;
      if(brandCounter> maxTriesBrand){
          alert('you have reached your maximum tries.');
          break;
      }
      if(tries == favBrand){
          alert('you won!!!');
          break;
      } 
}
  
 