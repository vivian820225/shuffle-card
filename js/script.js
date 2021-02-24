import Deck from './shuffle.js';

const container = document.querySelector('.container');
const button = document.querySelector('.button');
let cards;


function getCards() {
  const deck = new Deck();
  deck.shuffle();
  cards = deck.cards;
}

function renderCards(cards) { 
  cards.forEach(card => {
    container.appendChild(card.getHTML());
  });
}

getCards();
renderCards(cards);

button.addEventListener('click', function (e) {
  // console.log(e.target);
  container.innerHTML = '';
  
  getCards();
  renderCards(cards);
});