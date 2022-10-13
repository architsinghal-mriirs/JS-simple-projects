function dmgCalculator() {
  let baseDmg = 1 + Math.floor(Math.random() * 10); // calculating base dmg. Dmg should not be 0.
  let randomizer = [0, 0, 0, 0, 1]; // 20% chance to critical dmg
  let randomIndex = Math.floor(Math.random() * randomizer.length);
  if (randomizer[randomIndex] == 0) {
    return baseDmg;
  }
  return baseDmg * 2;
}
let result = dmgCalculator();
console.log(result);
