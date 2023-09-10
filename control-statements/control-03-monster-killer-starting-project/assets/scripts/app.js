const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 25;
const MONSTER_ATTACK_VALUE = 20;
const HEAL_VALUE = 15;

const MODE_ATTACT = 'ATTACK'
const STRONG_ATTACK = "STRONG_ATTACK"
const LOG_PLAYER_ATTACK = 'PLAYER_ATTACK'
const LOG_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK'
const LOG_MONSTOR_ATTACK = "MONSTER_ATTACK"
const LOG_PLAYER_HEAL = "PLAYER_HEAL"
const LOG_GAME_OVER = "GAME_OVER"


let maxLife = 100;
let currentMonsterHealth = maxLife;
let currentPlayerHealth = maxLife;
let hasBonusLife = true
let battleLog = []

adjustHealthBars(maxLife)

function writeToLog(event, value, monsterHealth, playerHealth){
  let logEntry;
  if(event == LOG_PLAYER_ATTACK){
    logEntry = {
      event: event,
      value: value,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    }
    battleLog.push(logEntry)
  }
}

function reset(){
  currentMonsterHealth = maxLife;
  currentPlayerHealth = maxLife;
  resetGame(maxLife)
}

function endRound(){
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
  currentMonsterHealth -= playerDamage

  if(currentPlayerHealth <= 0 && hasBonusLife){
    hasBonusLife = false
    removeBonusLife()
    currentPlayerHealth = initialPlayerHealth
    setPlayerHealth(initialPlayerHealth)
    alert("No more bonus lifes")
  }
  
  if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) alert('You won.')
  else if(currentPlayerHealth <=0  && currentMonsterHealth > 0 ) alert("You Lost")
  else if(currentMonsterHealth <= 0 && currentPlayerHealth <= 0) alert("Match Draw")

  if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0) reset()
}

function attackMonster(attack_mode){
  let maxDamage;
  if(attack_mode === MODE_ATTACT){maxDamage = ATTACK_VALUE}
  else if (attack_mode === STRONG_ATTACK){maxDamage = STRONG_ATTACK_VALUE}
  const damage = dealMonsterDamage(maxDamage)
  currentMonsterHealth -= damage;
  endRound()
}

function attackHandler(){ attackMonster(MODE_ATTACT) }

function strongAttackHandler(){ attackMonster(STRONG_ATTACK) }

function healHandler(){
  let healValue;
  if(currentPlayerHealth >= maxLife - HEAL_VALUE){
    alert("Not allowed ")
    healValue = maxLife - currentPlayerHealth
  }else{
    healValue = HEAL_VALUE
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue
  endRound()
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healHandler)