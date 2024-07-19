const gamesList = document.getElementById('games-list');
// Add games list items
const games = [
  {
    name: 'TIC-TAC-TOE',
    image: 'tic-tac-toe image.png',
    link: '(link unavailable)'
  },
  {
    name: 'CHECKERS',
    image: 'checkers image.png',
    link: '(link unavailable)'
  },
  {
    name: 'SOS',
    image: 'sos image.png',
    link: '(link unavailable)'
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
    const whatsappUrl = 'https://wa.me/qr/XJH27RW34NRDF1>'
    window.open(whatsappUrl, '_blank');
  });
  
