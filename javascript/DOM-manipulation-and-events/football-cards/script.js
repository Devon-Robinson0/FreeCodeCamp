const footballTeam = {
  team: 'YASS',
  year: 2020,
  headCoach: 'Dan dan man',
  players: [
    { name: 'Daniel', 
    position: 'midfielder', 
    isCaptain: false }, 
    { name: 'Sam', 
    position: 'forward', 
    isCaptain: true },
    { name: 'Finn', 
    position: 'defender', 
    isCaptain: false },
    { name: 'Zuru', 
    position: 'goalkeeper', 
    isCaptain: false },
  ]
}

const headCoach = document.getElementById('head-coach');
const team = document.getElementById('team');
const year = document.getElementById('year');

headCoach.textContent = footballTeam.headCoach;
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;

const playerCards = document.getElementById('player-cards');

function updateCards(value) {
  playerCards.innerHTML = '';

  for (let player of footballTeam.players) {
    if (player.position !== value && value !== 'all') { continue }

    const newDiv = document.createElement('div');
    newDiv.classList.add('player-card');

    let playerName = document.createElement('h2');
    const position = document.createElement('p');

    if (player.isCaptain) {
      playerName.textContent = '(Captain) ';
    }

    playerName.textContent += player.name;
    position.textContent = 'Position: ' + player.position;

    newDiv.appendChild(playerName);
    newDiv.appendChild(position);
    playerCards.appendChild(newDiv);
  }
}

updateCards('all');

const dropDown = document.getElementById('players');

dropDown.addEventListener('change', (value) => {
  for (let player of footballTeam.players) {
    if (player.position !== value.target.value) {
      updateCards(value.target.value);
    }
  }
})