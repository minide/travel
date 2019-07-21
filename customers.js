
let Customer = function Customer(name, personalID, travelID, passengersCount){

  this.ID = db.regList.length == 0 ? 1 :
  db.regList[db.regList.length - 1].ID + 1;

  this.Name = name
  this.personalID = personalID
  this.travelID = travelID
  this.passengers = passengersCount

  this.buildHTML = function buildHTML(){

    let travel;
    for(let i = 0; i < db.travelList.length; i++){
      const t = db.travelList[i];
      if (t.ID == this.travelID) {
        travel = t
        break;
      }
    }

    let traveltotal = travel.getTotalPrice(this.passengers)


    return `<div id="pass-list" >
      <div class="travel-item item">
        <div class="passengerID">${this.ID}</div>
        <div class="passNmae">${this.Name}</div>
        <div class="personalID">${this.personalID}</div>
        <div class="travelID">${travel.Name}</div>
        <div class="passengers">${this.passengers}</div>
        <div class="totalprice">${traveltotal}</div>
      </div>
    </div>`
  }
}

Customer.addNewCustomer = function(c){
  db.regList.push(c)
  let y = c.buildHTML()
  final.innerHTML += y
}

db.regList.push(new Customer("miri", 145, 1, 10))
db.regList.push(new Customer("hershi", 123, 2, 3))

let final = document.getElementById('pass-list')
for ( let i = 0; i < db.regList.length; i++ ){
  let x = db.regList[i];
  let y = x.buildHTML()
  final.innerHTML += y
}
