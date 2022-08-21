document.getElementById('calculation').addEventListener('click',function(){
    const playerField=document.getElementById('per-player');
   const playerFieldString =playerField.value;
   const playercost =parseInt(playerFieldString);
   const fiveplayerCost = 5*playercost;

//    playercost....

const expensesField= document.getElementById('player-expense');
const expensesFieldValue =expensesField.innerText;
expensesField.innerText=fiveplayerCost;



// manager cost....



})

