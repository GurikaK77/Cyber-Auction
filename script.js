// --- DATABASE (კითხვები) ---
const questions = [
    { q: "რამდენი მეტრია ეიფელის კოშკი?", a: 330 },
    { q: "რომელ წელს ჩაიძირა ტიტანიკი?", a: 1912 },
    { q: "რამდენი კილომეტრია მანძილი დედამიწასა და მთვარეს შორის (ათასებში)?", a: 384 },
    { q: "რამდენი ძვალია ადამიანის სხეულში?", a: 206 },
    { q: "რომელ წელს დაიწყო პირველი მსოფლიო ომი?", a: 1914 },
    { q: "რამდენი წუთია დღე-ღამეში?", a: 1440 },
    { q: "რა სიმაღლეზეა მთა ევერესტი (მეტრი)?", a: 8848 },
    { q: "რომელ წელს გამოვიდა პირველი აიფონი?", a: 2007 },
    { q: "რამდენი კბილი აქვს ზრდასრულ ადამიანს?", a: 32 },
    { q: "რამდენი დღეა ნაკიან წელიწადში?", a: 366 },
    { q: "რომელ წელს დაიბადა ილია ჭავჭავაძე?", a: 1837 },
    { q: "რამდენი მეტრია თავისუფლების ქანდაკება?", a: 93 },
    { q: "მაქსიმუმ რამდენი წელი ცოცხლობს კუ?", a: 150 },
    { q: "რამდენი ღილაკია სტანდარტულ ფორტეპიანოზე?", a: 88 },
    { q: "რომელ წელს დაინგრა საბჭოთა კავშირი?", a: 1991 },
    { q: "რამდენი გრადუსია ადუღებული წყალი?", a: 100 },
    { q: "რამდენი სანტიმეტრია 1 ინჩი (დამრგვალებულად)?", a: 2.54 },
    { q: "რამდენი ქვეყანაა მსოფლიოში (გაეროს მიხედვით)?", a: 193 }
];

// --- STATE ---
let players = []; // {name, money, currentGuess, currentBetAmount, currentBetTargetIndex}
let usedQuestions = [];
let currentQuestion = null;
let currentRound = 1;
let totalRounds = 5;
let currentPlayerIndex = 0;
let sortedGuesses = []; // [{playerIndex, value}, ...]

// --- INIT ---
window.onload = function() {
    createParticles();
    loadPlayers();
    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('readyScreen').style.display = 'flex';
    }, 1500);
};

// --- NAVIGATION ---
function showMainPage() {
    document.getElementById('readyScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'flex';
    showSection('setupSection');
}

function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    
    const logo = document.getElementById('logoArea');
    if(id === 'setupSection') logo.style.display = 'block';
    else logo.style.display = 'none';
}

// --- PLAYERS ---
function addPlayer() {
    const input = document.getElementById('playerName');
    const name = input.value.trim();
    if(name && !players.some(p => p.name === name)) {
        players.push({ name, money: 1000 }); // საწყისი თანხა 1000$
        input.value = '';
        updatePlayerList();
        savePlayers();
    }
}

function updatePlayerList() {
    const list = document.getElementById('playerList');
    list.innerHTML = '';
    players.forEach((p, i) => {
        list.innerHTML += `
            <div class="player-item">
                <span>${p.name}</span>
                <span style="color:var(--neon-gold)">${p.money} $</span>
                <button onclick="removePlayer(${i})" style="background:none;border:none;color:var(--neon-red);cursor:pointer;">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
    });
}

function removePlayer(i) { players.splice(i, 1); updatePlayerList(); savePlayers(); }
function savePlayers() { localStorage.setItem('auctionPlayers', JSON.stringify(players)); }
function loadPlayers() {
    const data = localStorage.getItem('auctionPlayers');
    if(data) {
        players = JSON.parse(data);
        // Reset game state but keep money? Or reset money? Let's reset money for new game.
        players.forEach(p => p.money = 1000); 
        updatePlayerList();
    }
}

// --- GAME LOGIC ---
function startGame() {
    if(players.length < 2) { alert('მინიმუმ 2 მოთამაშე!'); return; }
    
    totalRounds = parseInt(document.getElementById('roundsCount').value);
    currentRound = 1;
    usedQuestions = [];
    
    // Reset players for game
    players.forEach(p => p.money = 1000);
    
    startRound();
}

function startRound() {
    // Get unique question
    let q;
    do {
        q = questions[Math.floor(Math.random() * questions.length)];
    } while (usedQuestions.includes(q.q) && usedQuestions.length < questions.length);
    
    usedQuestions.push(q.q);
    currentQuestion = q;
    
    // Setup Input Phase
    currentPlayerIndex = 0;
    document.getElementById('currentRoundDisplay').textContent = `${currentRound} / ${totalRounds}`;
    document.getElementById('questionText').textContent = q.q;
    
    showInputPhase();
}

// 1. INPUT PHASE
function showInputPhase() {
    showSection('inputSection');
    const p = players[currentPlayerIndex];
    document.getElementById('inputPlayerName').textContent = p.name;
    document.getElementById('answerInput').value = '';
    document.getElementById('answerInput').focus();
}

function submitAnswer() {
    const val = parseFloat(document.getElementById('answerInput').value);
    if(isNaN(val)) return;
    
    players[currentPlayerIndex].currentGuess = val;
    currentPlayerIndex++;
    
    if(currentPlayerIndex >= players.length) {
        startBettingPhase();
    } else {
        showInputPhase();
    }
}

// 2. BETTING PHASE
function startBettingPhase() {
    // Sort answers ascending
    sortedGuesses = players.map((p, i) => ({ playerIndex: i, value: p.currentGuess }))
                           .sort((a, b) => a.value - b.value);
    
    currentPlayerIndex = 0;
    showBettingScreen();
}

function showBettingScreen() {
    showSection('bettingSection');
    const p = players[currentPlayerIndex];
    document.getElementById('bettingPlayerName').textContent = p.name;
    document.getElementById('bettingBalance').textContent = p.money;
    
    // Render Grid
    const grid = document.getElementById('answersGrid');
    grid.innerHTML = '';
    
    sortedGuesses.forEach((g, idx) => {
        const owner = players[g.playerIndex].name;
        grid.innerHTML += `
            <div class="answer-card" onclick="selectAnswerToBet(${idx}, this)">
                <div class="answer-val">${g.value}</div>
                <div class="answer-owner">${owner}</div>
            </div>
        `;
    });
    
    document.getElementById('betControls').style.display = 'none';
}

let selectedAnswerIdx = -1;

function selectAnswerToBet(gridIndex, cardEl) {
    // UI Update
    document.querySelectorAll('.answer-card').forEach(c => c.classList.remove('selected'));
    cardEl.classList.add('selected');
    
    selectedAnswerIdx = gridIndex;
    const guessObj = sortedGuesses[gridIndex];
    document.getElementById('selectedAnswerValue').textContent = guessObj.value;
    document.getElementById('betControls').style.display = 'block';
    
    // Reset input
    document.getElementById('customBet').value = '';
    validateBet();
}

function setBet(amount) {
    const p = players[currentPlayerIndex];
    let val = amount;
    if(amount === 'all') val = p.money;
    document.getElementById('customBet').value = val;
    validateBet();
}

function validateBet() {
    const p = players[currentPlayerIndex];
    const val = parseInt(document.getElementById('customBet').value);
    const btn = document.getElementById('placeBetBtn');
    
    if(!isNaN(val) && val > 0 && val <= p.money) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function placeBet() {
    const amount = parseInt(document.getElementById('customBet').value);
    const p = players[currentPlayerIndex];
    
    // Deduct money immediately (will be returned + profit if won)
    p.money -= amount;
    p.currentBetAmount = amount;
    p.currentBetTargetIndex = sortedGuesses[selectedAnswerIdx].playerIndex; // Who they bet on
    
    currentPlayerIndex++;
    if(currentPlayerIndex >= players.length) {
        calculateResults();
    } else {
        showBettingScreen();
    }
}

// 3. RESULTS
function calculateResults() {
    showSection('resultSection');
    const correct = currentQuestion.a;
    document.getElementById('correctAnswerDisplay').textContent = correct;
    
    // Find closest guess
    let closestDiff = Infinity;
    let winnerIndex = -1;
    
    players.forEach((p, i) => {
        const diff = Math.abs(p.currentGuess - correct);
        if(diff < closestDiff) {
            closestDiff = diff;
            winnerIndex = i;
        }
    });
    
    const winnerPlayer = players[winnerIndex];
    
    // Logic: 
    // 1. Player who guessed closest gets +500 Bonus
    // 2. Players who bet on the winner get Bet * 2 (Profit)
    
    let logs = [];
    
    // Award Guesser
    winnerPlayer.money += 500; 
    logs.push(`<span class="highlight-name">${winnerPlayer.name}</span>-მა ყველაზე ზუსტად გამოიცნო (+500$)`);
    
    // Payout Bets
    players.forEach(p => {
        if(p.currentBetTargetIndex === winnerIndex) {
            const winAmount = p.currentBetAmount * 2;
            p.money += winAmount; // Return stake + profit
            logs.push(`${p.name}-მა მოიგო ფსონი (+${winAmount - p.currentBetAmount}$)`);
        } else {
            // Lost bet (already deducted)
        }
    });
    
    document.getElementById('winnerAnnounce').innerHTML = logs.join('<br>');
    
    // Update Standings
    const list = document.getElementById('roundStandings');
    list.innerHTML = '';
    // Sort by money descending
    const sortedByMoney = [...players].sort((a,b) => b.money - a.money);
    
    sortedByMoney.forEach(p => {
        list.innerHTML += `
            <div class="standing-item">
                <span>${p.name}</span>
                <span style="color:var(--neon-gold)">${p.money} $</span>
            </div>
        `;
    });
}

function nextRound() {
    currentRound++;
    if(currentRound > totalRounds) {
        endGame();
    } else {
        startRound();
    }
}

function endGame() {
    showSection('gameOverSection');
    const sorted = [...players].sort((a,b) => b.money - a.money);
    const winner = sorted[0];
    
    document.getElementById('finalWinnerName').textContent = winner.name;
    document.getElementById('finalWinnerScore').textContent = `${winner.money} $`;
    
    if(navigator.vibrate) navigator.vibrate([200, 100, 200]);
}

function restartGame() {
    showSection('setupSection');
}

// --- PARTICLES ---
function createParticles() {
    const c = document.getElementById("particles");
    for(let i=0; i<20; i++) {
        let p = document.createElement("div");
        p.className = "particle";
        p.style.left = Math.random()*100 + "%";
        p.style.animationDuration = (3 + Math.random()*5) + "s";
        c.appendChild(p);
    }
}