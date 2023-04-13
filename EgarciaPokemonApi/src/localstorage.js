// function saveToLocalStorageByName(name){
   
//     let favorites = getLocalStorage();

  
//     favorites.push(name);

  
//     localStorage.setItem('Favorites', JSON.stringify(favorites));

// }

// function getLocalStorage(){
  
//     let localStorageData = localStorage.getItem('Favorites');

//     if(localStorageData == null){
//         return [];
//     }


//     return JSON.parse(localStorageData);
// }

// function removeFromLocalStorage(name){
//     let favorites = getLocalStorage();

//     let nameIndex = favorites.indexOf(name);


//     favorites.splice(nameIndex,1 );

//     localStorage.setItem('Favorites', JSON.stringify(favorites));
// }

// export { saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage }