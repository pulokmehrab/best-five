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


document.getElementById('Total-calc').addEventListener('click',function(){

    const managerField =document.getElementById('manager');
    const managerFieldString =managerField.value;
    const managerCost=parseInt(managerFieldString);
    managerField.value=managerCost;
    // console.log(managerCost);
//    coach costing
    const coachField =document.getElementById('coach-cost');
    const coachFieldString =coachField.value;
    const coachCoast =parseInt(coachFieldString);
    coachField.value =coachCoast;
    
    const totalCoast =fiveplayerCost+managerCost+coachCoast;
    //    console.log(totalCoast);

     
          const totalCoastAmount= document.getElementById('final-amount');
          const totalCoastAmountField=totalCoastAmount.innerText;
          totalCoastAmount.innerText=totalCoast;
   
})







})