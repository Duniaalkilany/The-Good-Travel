//constructor function 
let allTravels=[];


function Travel (name,place,transport,img){
this.name=name;
this.place=place;
this.transport=transport
this.img=`img/${this.place}.png`
allTravels.push(this);
}
let data = document.getElementById('data');
Travel.prototype.render1=function(){


    let image=document.createElement('img');
    data.appendChild(image);
    image.setAttribute('src',`img/${this.place}.png`);

    let nameData=document.createElement('h3');
    data.appendChild(nameData)
    nameData.textContent=allTravels.name;

    let placeData=document.createElement('h3');
    data.appendChild(placeData)
    placeData.textContent=allTravels.place;

    let transportData=document.createElement('h3');
    data.appendChild(transportData)
    transportData.textContent=allTravels.transport;
    
}


function render (){
for (let i = 0; i < allTravels.length; i++) {


    let image=document.createElement('img');
    data.appendChild(image);
    image.setAttribute('src',`img/${allTravels[i].place}.png`); 
  
    let nameData=document.createElement('h3');
    data.appendChild(nameData)
    nameData.textContent=allTravels[i].name;

    let placeData=document.createElement('h3');
    data.appendChild(placeData)
    placeData.textContent=allTravels[i].place;

    let transportData=document.createElement('h3');
    data.appendChild(transportData)
    transportData.textContent=allTravels[i].transport;
    
    
}

};






//event function 
let form = document.getElementById('myForm');
form.addEventListener('submit',handler);
function handler (event){
let name= event.target.name.value;
let place=event.target.place.value;
let transport=event.target.transport.value;

 let addNewTravel = new Travel (name,place,transport);
 saveToLocal();
 addNewTravel.render1();


}



//local storage 

function saveToLocal(){

    let stringifidallTravels=JSON.stringify(allTravels);
    localStorage.setItem('allTravelsstorage', stringifidallTravels)
}

function checkLocalStorage (){
if (localStorage.allTravelsstorage){
let recoverd =localStorage.getItem('allTravelsstorage');
let parse = JSON.parse(recoverd);

allTravels=parse;


}
render();

};

checkLocalStorage ();