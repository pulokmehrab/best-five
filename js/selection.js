function players(playerId) {
   const playername = document.getElementById(playerId);
   const playerName = playername.innerText;
   
   playername.innerText = playerName;
   const playerList = document.getElementById("select-players");
   //  console.log(playerList);
   
   const li1 = document.createElement("li");
   li1.innerText = playerName;
   if (playerList.childElementCount <= 4) {
   
     playerList.appendChild(li1);
     
     
   } else {
     alert("You can't add more");
   }
   
 }
 
 document.getElementById("mbappy").addEventListener("click", function () {
   // console.log("mabappy");
   players("player-name1");

   document.getElementById("mbappy").disabled = true;

 });
 
 document.getElementById("ronaldo").addEventListener("click", function () {
   players("player-name2");
   document.getElementById("ronaldo").disabled = true;
 });
 document.getElementById("messi").addEventListener("click", function () {
   players("player-name3");
   document.getElementById("messi").disabled = true;
 });
 document.getElementById("sala").addEventListener("click", function () {
   players("player-name4");
   document.getElementById("sala").disabled = true;
 });
 document.getElementById("romero").addEventListener("click", function () {
   players("player-name5");
   document.getElementById("romero").disabled = true;
 });
 document.getElementById("hulk").addEventListener("click", function () {
   players("player-name6");
   document.getElementById("hulk").disabled = true;
 });
 
 ///////////////////////////////////////////////////////////////////////////////////////////////////////
 
 document.getElementById("calculation").addEventListener("click", function () {
   const playerField = document.getElementById("per-player");
   const playerFieldString = playerField.value;
   const playerList = document.getElementById("select-players");
   let count =playerList.childElementCount;
   if (isNaN(playerFieldString)) {
     alert("Please provide Valid Numbers!");
   } else {
     const playercost = parseInt(playerFieldString);
     
     const fiveplayerCost =count*playercost;
 
     //    playercost....
 
     const expensesField = document.getElementById("player-expense");
     const expensesFieldValue = expensesField.innerText;
     expensesField.innerText = fiveplayerCost;
   }
 
   // manager cost....
 
   document.getElementById("Total-calc").addEventListener("click", function () {
      const managerField = document.getElementById("manager");
      const managerFieldString = managerField.value;

      if(isNaN(managerFieldString)){
         alert("Please provide Valid  Numbers!");
      }
     else{
      const managerCost = parseInt(managerFieldString);
      managerField.value = managerCost;
      // console.log(managerCost);
      //    coach costing
      const coachField = document.getElementById("coach-cost");
      const coachFieldString = coachField.value;

      if(isNaN(coachFieldString)){
         alert("Please provide Valid  Numbers!");
      }
      else{
         const coachCoast = parseInt(coachFieldString);
      coachField.value = coachCoast;
      const playerExpense = document.getElementById("player-expense");
      const fiveplayerCost = parseInt(playerExpense.innerText);
      const totalCoast = fiveplayerCost + managerCost + coachCoast;
      //    console.log(totalCoast);
  
      const totalCoastAmount = document.getElementById("final-amount");
      const totalCoastAmountField = totalCoastAmount.innerText;
      totalCoastAmount.innerText = totalCoast;

      }
      
     }
    })
     
 });