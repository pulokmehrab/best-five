 document.getElementById('mbappy').addEventListener('click',function(){
    // console.log("mabappy");

   
    const playername = document.getElementById('player-name1');
    const playerName = playername.innerText;
    playername.innerText =playerName;
     const playerList = document.getElementById('select-players');
    //  console.log(playerList);
    const li1 =document.createElement('li');
    li1.innerText =playerName;
    playerList.appendChild(li1);

 })

 document.getElementById('ronaldo').addEventListener('click',function(){
   
    const playername = document.getElementById('player-name2');
    const playerName = playername.innerText;
    playername.innerText =playerName;
     const playerList = document.getElementById('select-players');
    
    const li1 =document.createElement('li');
    li1.innerText =playerName;
    playerList.appendChild(li1);

 })
 document.getElementById('messi').addEventListener('click',function(){
   
    const playername = document.getElementById('player-name3');
    const playerName = playername.innerText;
    playername.innerText =playerName;
     const playerList = document.getElementById('select-players');
    
    const li1 =document.createElement('li');
    li1.innerText =playerName;
    playerList.appendChild(li1);

 })
 document.getElementById('sala').addEventListener('click',function(){
   
    const playername = document.getElementById('player-name4');
    const playerName = playername.innerText;
    playername.innerText =playerName;
     const playerList = document.getElementById('select-players');
    
    const li1 =document.createElement('li');
    li1.innerText =playerName;
    playerList.appendChild(li1);

 })
 document.getElementById('romero').addEventListener('click',function(){
   
    const playername = document.getElementById('player-name5');
    const playerName = playername.innerText;
    playername.innerText =playerName;
     const playerList = document.getElementById('select-players');
    
    const li1 =document.createElement('li');
    li1.innerText =playerName;
    playerList.appendChild(li1);

 })
 document.getElementById('hulk').addEventListener('click',function(){
   
    const playername = document.getElementById('player-name6');
    const playerName = playername.innerText;
    playername.innerText =playerName;
     const playerList = document.getElementById('select-players');
    
    const li1 =document.createElement('li');
    li1.innerText =playerName;
    playerList.appendChild(li1);

 })














///////////////////////////////////////////////////////////////////////////////////////////////////////


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