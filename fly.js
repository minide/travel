let db = {
  travelList: [],
  regList:[]
}

let Travel = function travel(name, price){

  this.ID = db.travelList.length == 0 ? 1 :
  db.travelList[db.travelList.length - 1].ID + 1;

  this.Name = name;
  this.Price = price;

  this.getTotalPrice = function getTotalPrice(numOfReg){
      return numOfReg * this.Price
  }

}


Travel.getTravelsCount = function getTravelsCount(){
    return db.travelList.length;
}



Travel.buildHTML = function buildHTML(object){
  return  `<div class="travel-item" travel-id="${object.ID}">
        <div class="travel-id">${object.ID}</div>
        <div class="destination">${object.Name}</div>
        <div class="price">${object.Price}</div>
        </div>`;

}


db.travelList.push(new Travel("holand", 100))
db.travelList.push(new Travel("israel", 50))





let finel = document.getElementById('travel-list')
  for(let i = 0; i < db.travelList.length; i++){
    let x = db.travelList[i];
    let d = Travel.buildHTML(x);
    finel.innerHTML += d;

  }
