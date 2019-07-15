let db = {
  travelList: []
}

let Travel = function travel(name, price){

  this.ID = db.travelList.length == 0 ? 1 :
  db.travelList[db.travelList.length - 1].ID + 1;

  this.Name = name;
  this.Price = price;

}

db.travelList.push(new Travel("holand", 100))
db.travelList.push(new Travel("israel", 50))

let buildHTML = function buildHTML(object){
  return  `
        <div class="travel-items travel-id=${object.ID}">
        <div class="destination">${object.Name}</div>
        <div class="price">${object.Price}</div>
        </div>
   `

}



let finel = function puthtml(d){
  for(let i = 0; i < db.travelList.length; i++){
    let x = db.travelList[i];
    let d = buildHTML(x);

  }
}
console.log(final);
