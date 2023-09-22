let wins = 0;
let losses = 0;
let ties = 0;

async function game(choice) {
  const response = await fetch(`/play?choice=${choice}`);
  const data = await response.json();
  
  if (data.result.includes('win')) {
    wins++;
  } else if (data.result.includes('lose')) {
    losses++;
  } else {
    ties++;
  }

  const score = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
  document.getElementById("result").innerText = `Computer chose ${data.computerChoice}. ${data.result} \n${score}`;
}
