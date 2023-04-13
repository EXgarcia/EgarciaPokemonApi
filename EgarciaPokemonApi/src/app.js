//import { saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage } from './localStorage.js';




let searchButton = document.getElementById('searchButton');
let userInput = document.getElementById('userInput');
let namePoke = document.getElementById('namePoke');
let typePoke = document.getElementById('typePoke');
let abPoke = document.getElementById('abPoke');
let movePoke = document.getElementById('movePoke');
let imgPoke = document.getElementById('imgPoke');
let rndBtn = document.getElementById('rndBtn');
let imageOne = document.getElementById('imageOne');
let imageTwo = document.getElementById('imageTwo');
let locPoke = document.getElementById('locPoke');



let input;
let pokeInfo;
let pokeInfoLoc;
let pokeName;
let pokeLoc;
let pokedex = {};

searchButton.addEventListener("click", function() {
    GetPokeData(userInput.value)
    pokemonUpdate()
    

})

rndBtn.addEventListener('click', function(){
    GetPokeData(rndPoke(649))
    pokemonUpdate()

})



async function GetPokeData(userInput){
    
    const promise = await
    fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`);
    const data = await promise.json();

    pokeInfo = data;
    pokeName = data.name.toUpperCase();
    pokeType = data.types;
    pokeAb  = data.abilities;
    pokeMove = data.moves;
    //pokeImg = data.sprites.front_default;
    area = data.location_area_encounters;
    //pokeImg2 = data.sprites.front_shiny;

    namePoke.textContent = pokeName;
    imageOne.src = pokeInfo.sprites.other.dream_world.front_default
    imageTwo.src = pokeInfo.sprites.other.home.front_shiny

    GetPokeLocation(pokeInfo.location_area_encounters)
    //imgPoke.innerText = pokeImg;
    //typePoke.innerHTML = pokeType;
    //abPoke.textContent = pokeAb;
    //movePoke.textContent = pokeMove;


    console.log(pokeType)
    console.log(pokeInfo)
    console.log(pokeName)
    console.log(pokeAb)
    console.log(pokeMove)
    console.log(area)
    console.log(data)

    GetMoves(data.moves)
    GetAbilities(data.abilities)
    GetType(data.types)

    if(pokeInfo.id > 649)
    {
        alert("VIRUS!! VIRUS!! JkJK first 5 generations only.")
    }
    
    // pokedex[num] = {"img" : pokemonImg}

}

async function GetPokeLocation(url){
    const promise = await fetch(url)
    const data = await promise.json();
    pokeInfoLoc = data;
    locPoke.innerText = "Location: " + pokeInfoLoc[0].location_area.name
    if (pokeInfoLoc.length == 0){
        locPoke.innerText = "NA"
    }else{
        console.log(pokeInfoLoc[0].location_area.name); 
    }
}

GetPokeData(rndPoke(649));
function rndPoke(max) {
return Math.floor(Math.random() * max);
}


function GetAbilities(userInput){
    console.log(userInput.length)
    userInput.forEach(data => {
        console.log(data.ability.name)
        abPoke.innerHTML += 'ABILITY: ' + `${data.ability.name.toUpperCase() + ','} `;
        
    })
}

function GetMoves(userInput){
    console.log(userInput.length)
    userInput.forEach(data => {
        console.log(data.move.name)
        movePoke.innerHTML += 'MOVE: ' + `${data.move.name.toUpperCase() + ','} `;
    })
}

function GetType(userInput){
    console.log(userInput.length)
    userInput.forEach(data => {
        console.log(data.type.name)
        typePoke.innerHTML += 'TYPE: ' + `${data.type.name.toUpperCase() + ','} `;
    })
}

function pokemonUpdate()
{
    let typesDiv = document.getElementById("typePoke");
    while (typesDiv.firstChild)
    {
        typesDiv.firstChild.remove();
    }
    let typesDivTwo = document.getElementById("abPoke");
    while (typesDivTwo.firstChild)
    {
        typesDivTwo.firstChild.remove();
    }
    let typesDivThree = document.getElementById("movePoke");
    while (typesDivThree.firstChild)
    {
        typesDivThree.firstChild.remove();
    }
}


GetPokeData('bulbasaur') 




//  userInput = document.getElementById('userInput');
// let favBtn = document.getElementById('favBtn');
// let recBtn = document.getElementById('recBtn');
// let injectHere = document.getElementById('injectHere');

// favBtn.addEventListener('click', function(){
//     console.log(userInput.value);
//     saveToLocalStorageByName(userInput.value);

// })

// recBtn.addEventListener('click', function(){
    
//     let localStorageData = getLocalStorage();
//     console.log(localStorageData);
//     CreateElements();
// })

// function CreateElements(){
//     let favorites = getLocalStorage();

//     favorites.map(person =>{
//         let p = document.createElement('p');
//         p.textContent = person;

//         let deleteBtn = document.createElement('button');
//         deleteBtn.className = 'btn btn-danger';
//         deleteBtn.textContent = 'Delete';
//         deleteBtn.type = "button";
//         deleteBtn.addEventListener('click', function(){
//             removeFromLocalStorage(person);
//         })

//         injectHere.appendChild(p);
//         injectHere.appendChild(deleteBtn);
//     })
// }