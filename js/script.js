import Deck from './shuffle.js';

const container = document.querySelector('.container');
const button = document.querySelector('.button');
let cards;
let isDown = false;
let startX;
let scrollLeft;


function getCards() {
  const deck = new Deck();
  deck.shuffle();
  cards = deck.cards;
}

function toggleCard(e) {
  this.classList.toggle('transform');
}

function renderCards(cards) { 
  cards.forEach(card => {
    container.appendChild(card.getHTML());
  });
  const cardBodys = document.querySelectorAll('.card');
  cardBodys.forEach(cardBody => cardBody.addEventListener('click', toggleCard))
}

getCards();
renderCards(cards);

button.addEventListener('click', function (e) {
  container.innerHTML = '';
  
  getCards();
  renderCards(cards);
});


container.addEventListener('mousedown', (e) => {
  isDown = true;
  container.classList.add('active');
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDown = false;
  container.classList.remove('active');
});

container.addEventListener('mouseup', () => {
  isDown = false;
  container.classList.remove('active');
});

container.addEventListener('mousemove', (e) => {
  if(!isDown) return;

  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const distance = (x - startX);
  container.scrollLeft = scrollLeft - distance;
});
