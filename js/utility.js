function calculate(){
    const playerField = document.getElementById('per-player');
    const playerFieldString =playerField.value;
    const playercost =parseInt(playerFieldString);
    playerField.value =playercost;

}