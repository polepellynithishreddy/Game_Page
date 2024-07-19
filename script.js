const gamesList = document.getElementById('games-list');
// Add games list items
const games = [
  {
    name: 'TIC-TAC-TOE',
    image: 'tic-tac-toe image.png',
    link: 'https://polepellynithishreddy.github.io/TIC-TAC-TOE/'
  },
  {
    name: 'CHECKERS',
    image: 'checkers image.png',
    link: 'https://polepellynithishreddy.github.io/Checkers-Game/'
  },
  {
    name: 'SOS',
    image: 'sos image.png',
    link: 'https://polepellynithishreddy.github.io/SOS_GAME/'
  },
  {
    name: 'Snake_Game',
    image: '(blank).png',
    link: 'https://polepellynithishreddy.github.io/SNAKEGAME/'
    <h9>Under Construction</h9>
  },

  {
    name: 'Pin_Ball_Game',
    image: '(blank).png',
    link: 'https://polepellynithishreddy.github.io/pinballgame/'
    <h9>Under Construction</h9>
  },
  
];

games.forEach((game) => {
    const gameItem = document.createElement('li');
    gameItem.className = 'game-item';
    gameItem.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <h2>${game.name}</h2>
      <a href="${game.link}">Play Now</a>
    `;
    gamesList.appendChild(gameItem);
  });
  
  // Add event listener for help button
  const helpBtn = document.getElementById('help-btn');
  helpBtn.addEventListener('click', () => {
    const whatsappUrl = 'https://wa.me/917396844011'
    window.open(whatsappUrl, '_blank');
  });
  
