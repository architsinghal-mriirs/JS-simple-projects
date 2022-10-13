//Selectors
const shoot = get("shoot");
const hp = get("playerHP");
const dmg = get("dmgShow");
const score = get("scoreShow");
const turn = get("playerTurn");
console.log(turn);
console.log(shoot);
console.log(dmg);
// Event Listeners

// Event on shoot button press
shoot.addEventListener("click", attack);

// functions
function get(element) {
  return document.getElementById(element);
}

function dmgCalculator() {
  let baseDmg = 1 + Math.floor(Math.random() * 10); // calculating base dmg. Dmg should not be 0.
  let randomizer = [0, 0, 0, 0, 1]; // 20% chance to critical dmg
  let randomIndex = Math.floor(Math.random() * randomizer.length);
  if (randomizer[randomIndex] == 0) {
    return baseDmg;
  }
  return baseDmg * 2;
}

function attack() {
  let hit = dmgCalculator();
  dmg.innerText = hit;
  hp.value -= hit;
}
