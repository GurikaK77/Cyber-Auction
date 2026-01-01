// --- DATABASE (კითხვები: 100+) ---
const questions = [
    // --- ორიგინალი კითხვები ---
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
    { q: "რამდენი მეტრია თავისუფლების ქანდაკება (ჩირაღდნის ჩათვლით)?", a: 93 },
    { q: "მაქსიმუმ რამდენი წელი ცოცხლობს კუ?", a: 150 },
    { q: "რამდენი ღილაკია სტანდარტულ ფორტეპიანოზე?", a: 88 },
    { q: "რომელ წელს დაინგრა საბჭოთა კავშირი?", a: 1991 },
    { q: "რამდენი გრადუსია ადუღებული წყალი?", a: 100 },
    { q: "რამდენი სანტიმეტრია 1 ინჩი (დამრგვალებულად)?", a: 2.54 },
    { q: "რამდენი ქვეყანაა მსოფლიოში (გაეროს მიხედვით)?", a: 193 },
    { q: "რამდენი ფეხი აქვს ობობას?", a: 8 },
    { q: "რამდენი რგოლია ოლიმპიურ დროშაზე?", a: 5 },
    { q: "რამდენი წიგნია 'ჰარი პოტერის' ძირითად სერიაში?", a: 7 },
    { q: "რამდენი მოთამაშეა ფეხბურთის გუნდში (მოედანზე)?", a: 11 },
    { q: "რამდენი ნულია მილიონში?", a: 6 },
    { q: "რამდენი მხარე აქვს კუბს?", a: 6 },
    { q: "რამდენი გული აქვს რვაფეხას?", a: 3 },
    { q: "რამდენი ფერისგან შედგება ცისარტყელა?", a: 7 },
    { q: "რომელ წელს დაეშვა ადამიანი მთვარეზე (აპოლო 11)?", a: 1969 },
    { q: "რამდენი უჯრაა ჭადრაკის დაფაზე?", a: 64 },
    { q: "რომელ წელს დაარსდა 'Google'?", a: 1998 },
    { q: "რამდენი ძვალია ზვიგენის სხეულში?", a: 0 }, 
    { q: "რომელ წელს მოხდა დიდგორის ბრძოლა?", a: 1121 },
    { q: "რამდენი მეტრია ერთი საზღვაო მილი?", a: 1852 },
    { q: "რომელ წელს დაარსდა თბილისის სახელმწიფო უნივერსიტეტი?", a: 1918 },
    { q: "რამდენი სიმები აქვს სტანდარტულ ვიოლინოს?", a: 4 },
    { q: "რომელ წელს დასრულდა მეორე მსოფლიო ომი?", a: 1945 },
    { q: "რამდენი შტატია ამერიკის შეერთებულ შტატებში?", a: 50 },
    { q: "რა სიმაღლეზეა მყინვარწვერი (ყაზბეგი) მეტრებში?", a: 5054 },
    { q: "რამდენი მეტრია მსოფლიოში ყველაზე მაღალი შენობა (ბურჯ ხალიფა)?", a: 828 },
    { q: "რამდენი კილომეტრია მდინარე ამაზონის სიგრძე (დაახლოებით)?", a: 6400 },
    { q: "რომელ წელს მოხდა ჩერნობილის კატასტროფა?", a: 1986 },
    { q: "რამდენი ელემენტია მენდელეევის პერიოდულ სისტემაში?", a: 118 },
    { q: "რამდენი მეტრია სიღრმეში მარიანას ღრმული (ყველაზე ღრმა ადგილი)?", a: 11034 },
    { q: "რამდენია სინათლის სიჩქარე კმ/წამში (დაახლოებით)?", a: 300000 },
    { q: "რომელ წელს შეიქმნა ბიტკოინი?", a: 2009 },
    { q: "რამდენი კვადრატული კილომეტრია საქართველოს ტერიტორია?", a: 69700 },
    { q: "რამდენი მეტრია ბიგ-ბენის კოშკის სიმაღლე?", a: 96 },
    { q: "რამდენი საფეხურია იმპაიერ სტეიტ ბილდინგში (სართულებზე ასასვლელად)?", a: 1576 },
    { q: "რამდენი გრადუსია მზის ზედაპირის ტემპერატურა (ცელსიუსით)?", a: 5505 },
    { q: "რომელ წელს დაიწყო საფრანგეთის რევოლუცია?", a: 1789 },
    { q: "რამდენი ხერხემალი (მალა) აქვს ჟირაფს კისერში?", a: 7 }, 
    { q: "რამდენი კილომეტრია დედამიწის ეკვატორის სიგრძე?", a: 40075 },
    { q: "რამდენი წამია ერთ საათში?", a: 3600 },
    { q: "რომელ წელს გამოვიდა ფილმი 'ნათლია' (The Godfather)?", a: 1972 },
    { q: "რამდენი მეტრია სიმაღლეში ხეოპსის პირამიდა (თავდაპირველად)?", a: 146 },
    { q: "რამდენი კუნთია ადამიანის სხეულში (დაახლოებით)?", a: 600 },
    { q: "რომელ წელს დაიბადა ვეფხისტყაოსნის ავტორი, შოთა რუსთაველი (სავარაუდოდ)?", a: 1172 },

    // --- ახალი დამატებული კითხვები ---
    { q: "რამდენი პლანეტაა მზის სისტემაში?", a: 8 },
    { q: "რომელ წელს მოხდა 11 სექტემბრის ტერაქტი აშშ-ში?", a: 2001 },
    { q: "რამდენი წელი გრძელდებოდა 'ასი წლის ომი' (რეალურად)?", a: 116 },
    { q: "რამდენი მილიარდი ადამიანი ცხოვრობს დედამიწაზე (2024 წლის მონაცემებით)?", a: 8 },
    { q: "რამდენი სანტიმეტრია კალათბურთის კალათის სიმაღლე იატაკიდან?", a: 305 },
    { q: "რომელ წელს გარდაიცვალა ელვის პრესლი?", a: 1977 },
    { q: "რამდენი გრამია ერთ კილოგრამში?", a: 1000 },
    { q: "რამდენი ხაზია აშშ-ის დროშაზე?", a: 13 },
    { q: "რომელ წელს გაუშვეს 'YouTube'?", a: 2005 },
    { q: "რამდენი სიმბოლოა Twitter-ის (X) თავდაპირველ ლიმიტში?", a: 140 },
    { q: "რამდენი პროცენტია წყალი ადამიანის ტვინში (დაახლოებით)?", a: 73 },
    { q: "რომელ წელს დაიბადა იესო ქრისტე (ისტორიული გათვლებით)?", a: 0 }, 
    { q: "რამდენი კლავიშია კომპიუტერის სტანდარტულ კლავიატურაზე?", a: 104 },
    { q: "რამდენი ოსკარი აქვს ფილმს 'ბეჭდების მბრძანებელი: მეფის დაბრუნება'?", a: 11 },
    { q: "რომელ წელს გამოვიდა 'Windows 95'?", a: 1995 },
    { q: "რამდენი მილილიტრია სტანდარტულ ქილა კოკა-კოლაში?", a: 330 },
    { q: "რამდენი წელია საჭირო სატურნის მიერ მზის გარშემო ერთი წრის დასარტყმელად?", a: 29 },
    { q: "რომელ წელს გაიმართა პირველი თანამედროვე ოლიმპიური თამაშები?", a: 1896 },
    { q: "რამდენი მეტრია სტანდარტული საცურაო აუზის სიგრძე (ოლიმპიური)?", a: 50 },
    { q: "რამდენი ფიგურა აქვს თითოეულ მოთამაშეს ჭადრაკში?", a: 16 },
    { q: "რომელ წელს დაიწყო სამოქალაქო ომი აშშ-ში?", a: 1861 },
    { q: "რამდენი სანტიმეტრია A4 ფორმატის ქაღალდის სიგრძე?", a: 29.7 },
    { q: "რამდენი ქვეყანაა ევროკავშირში (2024)?", a: 27 },
    { q: "რომელ წელს დაიბადა მაიკლ ჯექსონი?", a: 1958 },
    { q: "რამდენი გრადუსია აბსოლუტური ნული (ცელსიუსით)?", a: -273 },
    { q: "რამდენი ხანია ორსულობა სპილოებში (თვეებში)?", a: 22 },
    { q: "რამდენი ხერხემალი აქვს გველს (მაქსიმუმი)?", a: 400 }, 
    { q: "რომელ წელს დაარსდა 'Facebook'?", a: 2004 },
    { q: "რამდენი მეტრია საფეხბურთო კარის სიგანე?", a: 7.32 },
    { q: "რამდენი კილომეტრია დედამიწის რადიუსი?", a: 6371 },
    { q: "რომელ წელს გამოვიდა Playstation 1?", a: 1994 }
];

// --- STATE ---
let players = []; 
let usedQuestions = [];
let currentQuestion = null;
let currentRound = 1;
let totalRounds = 5;
let turnOrderMode = 'random'; // 'random' or 'sequential'

// Sequences for the current round
let inputSequence = [];
let bettingSequence = [];
let turnStep = 0; // Tracks progress in sequence

let sortedGuesses = []; 

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
    
    window.scrollTo(0, 0);
}

// --- PLAYERS ---
function addPlayer() {
    const input = document.getElementById('playerName');
    const name = input.value.trim();
    if(name && !players.some(p => p.name === name)) {
        players.push({ name, money: 1000 }); 
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
        players.forEach(p => p.money = 1000); 
        updatePlayerList();
    }
}

// --- HELPER: Turn Sequence Generator ---
function generateTurnSequence() {
    let indices = players.map((_, i) => i);
    if (turnOrderMode === 'random') {
        // Fisher-Yates shuffle
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
    }
    return indices;
}

// --- GAME LOGIC ---
function startGame() {
    if(players.length < 2) { alert('მინიმუმ 2 მოთამაშე!'); return; }
    
    totalRounds = parseInt(document.getElementById('roundsCount').value);
    turnOrderMode = document.getElementById('turnOrderMode').value; // Get Setting
    
    currentRound = 1;
    usedQuestions = [];
    
    // Reset players for game
    players.forEach(p => p.money = 1000);
    
    startRound();
}

function startRound() {
    // Get unique question
    let q;
    let attempts = 0;
    do {
        q = questions[Math.floor(Math.random() * questions.length)];
        attempts++;
        if (attempts > 200) { usedQuestions = []; } 
    } while (usedQuestions.includes(q.q));
    
    usedQuestions.push(q.q);
    currentQuestion = q;
    
    // Setup Sequences
    inputSequence = generateTurnSequence();
    turnStep = 0;

    document.getElementById('currentRoundDisplay').textContent = `${currentRound} / ${totalRounds}`;
    document.getElementById('questionText').textContent = q.q;
    
    showInputPhase();
}

// 1. INPUT PHASE
function showInputPhase() {
    showSection('inputSection');
    
    // Identify current player based on sequence
    const currentPlayerIndex = inputSequence[turnStep];
    const p = players[currentPlayerIndex];
    
    document.getElementById('inputPlayerName').textContent = p.name;
    document.getElementById('answerInput').value = '';
    // No autofocus to prevent keyboard popping up unexpectedly
}

function submitAnswer() {
    const val = parseFloat(document.getElementById('answerInput').value);
    if(isNaN(val)) return;
    
    // Identify current player based on sequence
    const currentPlayerIndex = inputSequence[turnStep];
    players[currentPlayerIndex].currentGuess = val;
    
    turnStep++;
    
    if(turnStep >= players.length) {
        startBettingPhase();
    } else {
        showInputPhase();
    }
}

// 2. BETTING PHASE
function startBettingPhase() {
    // 1. Sort guesses for Display Grid (Value Ascending)
    sortedGuesses = players.map((p, i) => ({ playerIndex: i, value: p.currentGuess }))
                           .sort((a, b) => a.value - b.value);
    
    // 2. Generate Sequence for Betting Turns
    bettingSequence = generateTurnSequence();
    turnStep = 0;

    showBettingScreen();
}

function showBettingScreen() {
    showSection('bettingSection');
    
    // Identify current player based on sequence
    const currentPlayerIndex = bettingSequence[turnStep];
    const p = players[currentPlayerIndex];

    document.getElementById('bettingPlayerName').textContent = p.name;
    document.getElementById('bettingBalance').textContent = p.money;
    
    // Render Grid (Display Order matches Value, not Turn Order)
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

let selectedGridIndex = -1;

function selectAnswerToBet(gridIndex, cardEl) {
    // UI Update
    document.querySelectorAll('.answer-card').forEach(c => c.classList.remove('selected'));
    cardEl.classList.add('selected');
    
    selectedGridIndex = gridIndex;
    const guessObj = sortedGuesses[gridIndex];
    document.getElementById('selectedAnswerValue').textContent = guessObj.value;
    document.getElementById('betControls').style.display = 'block';
    
    // Reset input
    document.getElementById('customBet').value = '';
    validateBet();
}

function setBet(amount) {
    const currentPlayerIndex = bettingSequence[turnStep];
    const p = players[currentPlayerIndex];
    
    let val = amount;
    if(amount === 'all') val = p.money;
    document.getElementById('customBet').value = val;
    validateBet();
}

function validateBet() {
    const currentPlayerIndex = bettingSequence[turnStep];
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
    
    const currentPlayerIndex = bettingSequence[turnStep];
    const p = players[currentPlayerIndex];
    
    // Deduct money immediately
    p.money -= amount;
    p.currentBetAmount = amount;
    // We bet on the player who owns the answer at sortedGuesses[selectedGridIndex]
    p.currentBetTargetIndex = sortedGuesses[selectedGridIndex].playerIndex; 
    
    turnStep++;
    if(turnStep >= players.length) {
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
    
    let logs = [];
    
    // Award Guesser
    winnerPlayer.money += 500; 
    logs.push(`<span class="highlight-name">${winnerPlayer.name}</span>-მა ყველაზე ზუსტად გამოიცნო (+500$)`);
    
    // Payout Bets
    players.forEach(p => {
        if(p.currentBetTargetIndex === winnerIndex) {
            const winAmount = p.currentBetAmount * 2;
            p.money += winAmount; 
            logs.push(`${p.name}-მა მოიგო ფსონი (+${winAmount - p.currentBetAmount}$)`);
        }
    });
    
    document.getElementById('winnerAnnounce').innerHTML = logs.join('<br>');
    
    // Update Standings
    const list = document.getElementById('roundStandings');
    list.innerHTML = '';
    // Sort by money descending for scoreboard
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
