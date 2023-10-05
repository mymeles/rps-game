const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Function to determine the game outcome
function gameLogic(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  }
  
  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    return `You win! ${userChoice} beats ${computerChoice}`;
  }
  
  return `You lose! ${computerChoice} beats ${userChoice}`;
}
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','index.html'));
  });  

app.get('/play', (req, res) => {
  const userChoice = req.query.choice;
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
  const result = gameLogic(userChoice, computerChoice);
  
  res.send({computerChoice, result});
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:80/');
});
